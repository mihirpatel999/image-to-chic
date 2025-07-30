import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  User, 
  DollarSign, 
  FileText, 
  Package, 
  Users, 
  Factory, 
  TrendingUp,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Building2,
  Wrench,
  Calendar,
  LogOut,
  Phone,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  icon: React.ComponentType<any>;
  badge?: string;
  subItems?: { title: string; href?: string; onClick?: () => void }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Company",
    icon: Building2,
    subItems: [
      { title: "Company Profile" },
      { title: "Company Profile Register" }
    ]
  },
  {
    title: "Masters",
    icon: Users,
    subItems: [
      { title: "HSN Master" },
      { title: "Currency" },
      { title: "EPCG License" },
      { title: "Exchange Rate" },
      { title: "CIF / C&F Head" },
      { title: "Country" },
      { title: "Sales Man" },
      { title: "Customer / Consignee" },
      { title: "Bank Details" },
      { title: "Factory Details" },
      { title: "Product" },
      { title: "Pallet / Port / Setting" }
    ]
  },
  {
    title: "Sales",
    icon: TrendingUp,
    subItems: [
      { title: "Performa Invoice" },
      { title: "Production Order" },
      { title: "Packing List" },
      { title: "Commercial Invoice" },
      { title: "Post Shipment" },
      { title: "Sales Form" },
      { title: "Sales Sub Form" },
      { title: "Apply Tax" },
      { title: "Apply Sales Form to Branch" },
      { title: "Apply Excise" },
      { title: "Apply GST" },
      { title: "Purchase Tax" },
      { title: "Reporting" },
      { title: "SalesInvoiceFields" },
      { title: "Other" }
    ]
  },
  {
    title: "Settings",
    icon: Settings,
    subItems: [
      { title: "Change Current Date" },
      { title: "Settings" },
      { title: "Role" },
      { title: "Role Privilege Settings" },
      { title: "User Creation" },
      { title: "Change Password" },
      { title: "New Financial Year" },
      { title: "Change Financial Year" },
      { title: "Barcode Settings" },
      { title: "Barcode Printing" }
    ]
  },
  {
    title: "Utilities",
    icon: Wrench,
    subItems: [
      { title: "Admin Report" },
      { title: "Update Salesman" },
      { title: "Company Setting" },
      { title: "Suffix Prefix Settings" },
      { title: "Change Product Tax" },
      { title: "Dotmatrix Print Designer" },
      { title: "Rebuild Index" },
      { title: "Document Series" }
    ]
  },
  {
    title: "Financial Year",
    icon: Calendar
  },
  {
    title: "Exit",
    icon: LogOut
  },
  {
    title: "Contact Us",
    icon: Phone
  }
];

interface SidebarProps {
  onFormSelect: (formType: string) => void;
}

export const Sidebar = ({ onFormSelect }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Card className={cn(
      "h-full bg-card border-r shadow-soft transition-all duration-300 ease-in-out",
      isCollapsed ? "w-16" : "w-80"
    )}>
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className={cn("flex items-center gap-3 transition-all duration-300", isCollapsed && "justify-center")}>
            <div className="p-2 bg-gradient-primary rounded-lg shadow-md">
              <Factory className="h-6 w-6 text-white" />
            </div>
            {!isCollapsed && (
              <div className="animate-fade-in">
                <h2 className="font-bold text-xl text-foreground">SBS India</h2>
                <p className="text-sm text-muted-foreground">Business Management</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleCollapsed}
            className="h-9 w-9 p-0 hover:bg-primary/10 transition-colors"
          >
            {isCollapsed ? (
              <Menu className="h-5 w-5 text-primary" />
            ) : (
              <X className="h-5 w-5 text-primary" />
            )}
          </Button>
        </div>
      </div>

      <div className="p-3 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isExpanded = expandedItems.includes(item.title);
          const Icon = item.icon;
          
          return (
            <div key={item.title} className="space-y-1">
              <Button
                variant="ghost"
                className={cn(
                  "w-full h-11 px-3 text-left transition-all duration-200 rounded-lg",
                  "hover:bg-primary/10 hover:text-primary hover:shadow-sm",
                  isExpanded && "bg-primary/5 text-primary shadow-sm",
                  isCollapsed ? "justify-center px-2" : "justify-start"
                )}
                onClick={() => item.subItems ? toggleExpanded(item.title) : undefined}
              >
                <Icon className={cn("h-5 w-5 flex-shrink-0", !isCollapsed && "mr-3")} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 font-medium">{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="mr-2 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                    {item.subItems && (
                      isExpanded ? (
                        <ChevronDown className="h-4 w-4 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                      )
                    )}
                  </>
                )}
              </Button>
              
              {!isCollapsed && isExpanded && item.subItems && (
                <div className="ml-6 space-y-1 animate-fade-in">
                  {item.subItems.map((subItem) => (
                    <Button
                      key={subItem.title}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start h-9 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-200 rounded-md group"
                      onClick={() => {
                        if (subItem.title === "HSN Master" || subItem.title === "Currency" || 
                            subItem.title === "Company Profile" || subItem.title === "Company Profile Register") {
                          onFormSelect(subItem.title);
                        }
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary/40 mr-3 flex-shrink-0 group-hover:bg-primary transition-colors" />
                      {subItem.title}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};