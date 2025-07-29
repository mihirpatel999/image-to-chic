import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description?: string;
  status?: "active" | "pending" | "completed";
  icon: LucideIcon;
  onClick?: () => void;
  variant?: "default" | "success" | "warning" | "primary";
  count?: number;
  className?: string;
}

export const ModuleCard = ({
  title,
  description,
  status,
  icon: Icon,
  onClick,
  variant = "default",
  count,
  className
}: ModuleCardProps) => {
  const variants = {
    default: "border-border hover:border-primary/30 bg-card",
    success: "border-success/20 bg-gradient-to-br from-success/5 to-success/10 hover:border-success/40",
    warning: "border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10 hover:border-warning/40", 
    primary: "border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:border-primary/40"
  };

  const iconVariants = {
    default: "text-primary",
    success: "text-success",
    warning: "text-warning",
    primary: "text-primary"
  };

  const statusColors = {
    active: "bg-success text-success-foreground",
    pending: "bg-warning text-warning-foreground", 
    completed: "bg-primary text-primary-foreground"
  };

  return (
    <Card 
      className={cn(
        "relative overflow-hidden transition-all duration-300 cursor-pointer group",
        "hover:shadow-medium hover:scale-[1.02] active:scale-[0.98]",
        variants[variant],
        className
      )}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-3 rounded-xl transition-colors duration-300",
              "group-hover:bg-background/60 border border-border/50",
              iconVariants[variant]
            )}>
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-muted-foreground mt-1">
                  {description}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            {count !== undefined && (
              <Badge variant="secondary" className="text-sm font-medium">
                {count}
              </Badge>
            )}
            {status && (
              <Badge className={cn("text-xs", statusColors[status])}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
};