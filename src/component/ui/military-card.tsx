import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface MilitaryCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  glowColor?: "success" | "warning" | "error";
}

export function MilitaryCard({
  title,
  children,
  icon,
  className = "",
  glowColor = "success",
}: MilitaryCardProps) {
  const glowStyles = {
    success:
      "shadow-[0_0_15px_rgba(235,162,0,0.3)] hover:shadow-[0_0_20px_rgba(235,162,0,0.5)]",
    warning:
      "shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]",
    error:
      "shadow-[0_0_15px_rgba(255,77,77,0.3)] hover:shadow-[0_0_20px_rgba(255,77,77,0.4)]",
  };

  return (
    <div className={`group ${className} transition duration-200 scale-[0.9] hover:scale-[1]`}>
      <Card
        className={`bg-black/60 border-white/20 backdrop-blur-sm transition-all ${glowStyles[glowColor]}`}
      >
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-[#eba200]">
            {icon && <span className="text-[#eba200]">{icon}</span>}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-gray-300">{children}</div>
        </CardContent>
      </Card>
    </div>
  );
}
