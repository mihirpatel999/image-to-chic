import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { 
  Bell, 
  Search, 
  User, 
  LogOut, 
  Settings,
  Calendar,
  Database
} from "lucide-react";

export const DashboardHeader = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="border-b border-border bg-card/50 backdrop-blur-sm shadow-soft">
      <div className="flex items-center justify-between p-6">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Business Dashboard
            </h1>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{currentDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm text-success font-medium">Connected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Section - Status Info */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg">
            <Database className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              FY 2024-25
            </span>
          </div>
          <Badge variant="outline" className="text-xs">
            Version 2.0 Beta
          </Badge>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <Button variant="outline" size="sm" className="hidden lg:flex gap-2">
            <Search className="h-4 w-4" />
            Search
          </Button>

          {/* Notifications */}
          <div className="relative">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                AD
              </AvatarFallback>
            </Avatar>
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-foreground">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@sbsindia.com</p>
            </div>
          </div>

          {/* Settings */}
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};