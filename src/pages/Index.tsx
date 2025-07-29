import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Sidebar } from "@/components/Sidebar";
import { ModuleCard } from "@/components/ModuleCard";
import { StatsCard } from "@/components/StatsCard";
import { HSNMasterForm } from "@/components/forms/HSNMasterForm";
import { CurrencyForm } from "@/components/forms/CurrencyForm";
import { CompanyProfileForm } from "@/components/forms/CompanyProfileForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  FileText,
  Factory,
  TrendingUp,
  Users,
  DollarSign,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const handleFormSelect = (formType: string) => {
    setActiveForm(formType);
  };

  const handleCloseForm = () => {
    setActiveForm(null);
  };

  const modules = [
    {
      title: "Pending Performa Invoice",
      description: "Review and process pending invoices",
      icon: FileText,
      variant: "warning" as const,
      count: 5,
      status: "pending" as const
    },
    {
      title: "Approved Performa Invoice", 
      description: "View approved invoice documents",
      icon: CheckCircle,
      variant: "success" as const,
      count: 12,
      status: "completed" as const
    },
    {
      title: "Production Order Status",
      description: "Monitor production pipeline",
      icon: Factory,
      variant: "primary" as const,
      count: 8,
      status: "active" as const
    },
    {
      title: "Production Order",
      description: "Create and manage production orders",
      icon: Package,
      variant: "default" as const,
      count: 15
    },
    {
      title: "Purchase Order",
      description: "Handle procurement processes",
      icon: DollarSign,
      variant: "default" as const,
      count: 7
    },
    {
      title: "Pending Packing List",
      description: "Complete packing documentation",
      icon: Package,
      variant: "warning" as const,
      count: 3,
      status: "pending" as const
    },
    {
      title: "This Month's Commercial Invoice",
      description: "Current month billing overview",
      icon: BarChart3,
      variant: "primary" as const,
      count: 24
    },
    {
      title: "Personal Reminder",
      description: "Your personal task reminders",
      icon: Clock,
      variant: "default" as const,
      count: 2
    }
  ];

  const stats = [
    {
      title: "Total YTD Sales",
      value: "₹0",
      description: "(In Crore)",
      icon: TrendingUp,
      variant: "success" as const,
      change: "+0%",
      changeType: "neutral" as const
    },
    {
      title: "Active Orders",
      value: "23",
      description: "Currently processing",
      icon: Package,
      variant: "primary" as const,
      change: "+12%",
      changeType: "positive" as const
    },
    {
      title: "Pending Approvals",
      value: "8",
      description: "Require attention",
      icon: AlertCircle,
      variant: "warning" as const,
      change: "-5%",
      changeType: "negative" as const
    },
    {
      title: "Total Customers",
      value: "156",
      description: "Registered clients",
      icon: Users,
      variant: "default" as const,
      change: "+3%",
      changeType: "positive" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="flex">
        <Sidebar onFormSelect={handleFormSelect} />
        
        <main className="flex-1 p-8 space-y-8 animate-fade-in">
          {/* Stats Overview */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Dashboard Overview</h2>
                <p className="text-muted-foreground">Monitor your business performance</p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Entry
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.title} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <StatsCard {...stat} />
                </div>
              ))}
            </div>
          </section>

          {/* Business Modules */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Business Modules</h2>
                <p className="text-muted-foreground">Access your core business functions</p>
              </div>
              <Button variant="outline" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {modules.map((module, index) => (
                <div key={module.title} className="animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <ModuleCard
                    {...module}
                    onClick={() => console.log(`Opening ${module.title}`)}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <Card className="p-6 bg-gradient-hero text-white border-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
                  <p className="text-white/80">Streamline your daily workflow</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm">
                    Generate Report
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Export Data
                  </Button>
                </div>
              </div>
            </Card>
          </section>

          {/* Footer Info */}
          <section className="pt-8 border-t border-border">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <span>© 2022 SBS India</span>
                <Badge variant="outline">Help: 097751 15568</Badge>
              </div>
              <div className="flex items-center gap-2">
                <span>Arya Suys</span>
                <span>•</span>
                <span>Help</span>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Modal Forms */}
      {activeForm === "HSN Master" && (
        <HSNMasterForm onClose={handleCloseForm} />
      )}
      {activeForm === "Currency" && (
        <CurrencyForm onClose={handleCloseForm} />
      )}
      {(activeForm === "Company Profile" || activeForm === "Company Profile Register") && (
        <CompanyProfileForm onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default Index;
