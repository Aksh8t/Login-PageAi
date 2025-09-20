import { Shield } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 36
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} bg-gradient-primary rounded-xl flex items-center justify-center shadow-primary`}>
        <Shield size={iconSizes[size]} className="text-primary-foreground" />
      </div>
      <div className="text-left">
        <h1 className="font-poppins font-bold text-foreground text-xl lg:text-2xl">
          Adceleration
        </h1>
        {size !== "sm" && (
          <p className="text-muted-foreground text-sm font-inter">
            Performance-driven advertising technology
          </p>
        )}
      </div>
    </div>
  );
};