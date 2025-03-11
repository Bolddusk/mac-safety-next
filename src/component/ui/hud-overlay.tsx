interface HUDOverlayProps {
  children: React.ReactNode;
  className?: string;
}

export function HUDOverlay({ children, className = "" }: HUDOverlayProps) {
  return (
    <div
      className={`relative p-6 border border-white/20 rounded-md bg-black/40 backdrop-blur-sm font-mono tracking-wide ${className}`}
      style={{
        textShadow: "0 0 10px rgba(255,255,255,0.2)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}
