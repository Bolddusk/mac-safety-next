/**
 * Security utilities for input sanitization and safe handling.
 * Used across API routes and email templates to prevent XSS and injection.
 */

/** Max length for generic text fields in forms/API */
export const MAX_TEXT_LENGTH = 2000;
/** Max length for short fields (name, subject, etc.) */
export const MAX_SHORT_LENGTH = 200;
/** Max length for email HTML body */
export const MAX_HTML_BODY_LENGTH = 200_000;

/**
 * Escape HTML special characters to prevent XSS when interpolating user input into HTML.
 * Use this for every user-supplied string that is inserted into email templates or HTML.
 */
export function escapeHtml(str: string): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Strip script tags and common event handlers from HTML string.
 * Use for HTML bodies (e.g. email template) when full sanitization is not available.
 * This is a defense-in-depth measure; prefer escaping at the source when possible.
 */
export function stripDangerousHtml(html: string): string {
  if (typeof html !== "string") return "";
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, "")
    .replace(/\s*on\w+\s*=\s*[^\s>]*/gi, "");
}

/**
 * Safely parse JSON body from request. Returns null on invalid JSON or non-object.
 */
export async function safeParseJson<T = unknown>(request: Request): Promise<T | null> {
  try {
    const text = await request.text();
    if (!text || text.length > 100_000) return null; // reject huge bodies
    const parsed = JSON.parse(text) as T;
    return typeof parsed === "object" && parsed !== null ? parsed : null;
  } catch {
    return null;
  }
}

/** Simple in-memory rate limiter. For production at scale, use Redis/Upstash. */
const rateLimitStore = new Map<
  string,
  { count: number; resetAt: number }
>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // per window per IP

/**
 * Get client IP from request (works behind proxies).
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

/**
 * Check rate limit. Returns true if request is allowed, false if rate limited.
 */
export function checkRateLimit(request: Request): boolean {
  const ip = getClientIp(request);
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (now >= entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return false;
  entry.count += 1;
  return true;
}
