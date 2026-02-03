/**
 * Zod schemas for API request validation.
 * Enforces types, lengths, and required fields to prevent injection and abuse.
 */

import { z } from "zod";
import { MAX_SHORT_LENGTH, MAX_TEXT_LENGTH, MAX_HTML_BODY_LENGTH } from "./security";

/** Download PDF / contact info (name, company, phone) */
export const downloadSchema = z.object({
  name: z.string().min(2, "Name too short").max(MAX_SHORT_LENGTH),
  company: z.string().min(2, "Company too short").max(MAX_SHORT_LENGTH),
  phone: z.string().min(10, "Phone too short").max(50),
});

/** Message / contact form (service request, industries, etc.) — all forms that POST to /api/message */
export const messageSchema = z.object({
  serviceName: z.string().min(1).max(MAX_SHORT_LENGTH),
  name: z.string().min(1).max(MAX_SHORT_LENGTH).optional(),
  firstName: z.string().max(MAX_SHORT_LENGTH).optional(),
  lastName: z.string().max(MAX_SHORT_LENGTH).optional(),
  company: z.string().min(1).max(MAX_SHORT_LENGTH).optional(),
  industry: z.string().max(MAX_SHORT_LENGTH).optional(),
  service: z.string().max(MAX_SHORT_LENGTH).optional(),
  country: z.string().max(MAX_SHORT_LENGTH).optional(),
  email: z.string().email().max(254).optional(),
  phone: z.string().max(50).optional(),
  message: z.string().max(MAX_TEXT_LENGTH).optional(),
  date: z.string().max(50).optional(),
  time: z.string().max(20).optional(),
  requestType: z.string().max(50).optional(),
  platform: z.string().max(50).optional(),
  type: z.string().max(50).optional(),
});

/** ForgeWorks application drawer payload */
export const forgeworkSchema = z.object({
  fullName: z.string().min(1).max(MAX_SHORT_LENGTH),
  jobTitle: z.string().max(MAX_SHORT_LENGTH).optional(),
  companyName: z.string().min(1).max(MAX_SHORT_LENGTH),
  workEmail: z.string().email().max(254),
  companyWebsite: z.string().max(500).optional(),
  industry: z.string().max(MAX_SHORT_LENGTH).optional(),
  headcount: z.string().max(100).optional(),
  friction: z.string().max(MAX_TEXT_LENGTH).optional(),
  problem: z.string().max(MAX_TEXT_LENGTH).optional(),
  consequences: z.string().max(MAX_TEXT_LENGTH).optional(),
  collectsData: z.string().max(100).optional(),
  dataTypes: z.array(z.string().max(100)).max(20).optional(),
  existingSystems: z.string().max(MAX_TEXT_LENGTH).optional(),
  openToMAC: z.string().max(100).optional(),
  timeline: z.string().max(200).optional(),
  decisionMaking: z.string().max(MAX_TEXT_LENGTH).optional(),
  successDefinition: z.string().max(MAX_TEXT_LENGTH).optional(),
  fitReason: z.string().max(MAX_TEXT_LENGTH).optional(),
  referralSource: z.string().max(200).optional(),
  termsAccepted: z.boolean().optional(),
});

/** Send email (subject + HTML template + plain text) — used by gmptp-beta, fieldkit */
export const sendSchema = z.object({
  subject: z.string().min(1).max(MAX_SHORT_LENGTH),
  template: z.string().min(1).max(MAX_HTML_BODY_LENGTH),
  text: z.string().min(1).max(5000),
});

export type DownloadInput = z.infer<typeof downloadSchema>;
export type MessageInput = z.infer<typeof messageSchema>;
export type ForgeworkInput = z.infer<typeof forgeworkSchema>;
export type SendInput = z.infer<typeof sendSchema>;
