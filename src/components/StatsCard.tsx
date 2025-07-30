import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
  variant?: "default" | "success" | "warning" | "primary";
}

export const StatsCard = ({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
  description,
  variant = "default"
}: StatsCardProps) => {
  const changeColors = {
    positive: "text-success bg-success/10",
    negative: "text-destructive bg-destructive/10", 
    neutral: "text-muted-foreground bg-muted"
  };

  const variants = {
    default: "border-border",
    success: "border-success/20 bg-gradient-to-br from-success/5 to-success/10",
    warning: "border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10",
    primary: "border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10"
  };

  const iconVariants = {
    default: "text-primary bg-primary/10",
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
    primary: "text-primary bg-primary/10"
  };

  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:shadow-medium cursor-default",
      variants[variant]
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-3 rounded-xl",
              iconVariants[variant]
            )}>
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {title}
              </p>
              <p className="text-2xl font-bold text-foreground">
                {value}
              </p>
            </div>
          </div>
          
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {change && (
          <Badge className={cn(
            "text-xs font-medium",
            changeColors[changeType]
          )}>
            {change}
          </Badge>
        )}
      </div>
    </Card>
  );
};