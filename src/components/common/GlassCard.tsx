
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  intensity?: "light" | "medium" | "heavy";
  hoverEffect?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, intensity = "medium", hoverEffect = false, ...props }, ref) => {
    const baseStyles = "rounded-xl border relative overflow-hidden transition-all duration-300";
    
    const intensityStyles = {
      light: "bg-white/30 backdrop-blur-sm border-white/20 shadow-sm",
      medium: "bg-white/40 backdrop-blur-md border-white/30 shadow-md",
      heavy: "bg-white/50 backdrop-blur-lg border-white/40 shadow-lg",
    };
    
    const hoverStyles = hoverEffect ? "hover:shadow-xl hover:scale-[1.01] hover:bg-white/60" : "";
    
    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          intensityStyles[intensity],
          hoverStyles,
          className
        )}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
