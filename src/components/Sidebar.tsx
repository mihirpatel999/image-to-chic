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
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  icon: React.ComponentType<any>;
  badge?: string;
  subItems?: { title: string; href?: string }[];
}

const menuItems: MenuItem[] = [
  {
    title: "HSN Master",
    icon: Package,
    subItems: [
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
    title: "Masters",
    icon: Users,
    badge: "12",
    subItems: [
      { title: "Performa Invoice" },
      { title: "Production Order" },
      { title: "Packing List" },
      { title: "Commercial Invoice" },
      { title: "Post Shipment" }
    ]
  },
  {
    title: "Sales",
    icon: TrendingUp,
    subItems: [
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
    icon: BarChart3,
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
  }
];

export const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <Card className="w-80 h-full bg-card border-r shadow-soft">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <Factory className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-xl text-foreground">SBS India</h2>
            <p className="text-sm text-muted-foreground">Business Management</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-2 max-h-[calc(100vh-120px)] overflow-y-auto">
        {menuItems.map((item) => {
          const isExpanded = expandedItems.includes(item.title);
          const Icon = item.icon;
          
          return (
            <div key={item.title} className="space-y-1">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start h-12 px-4 text-left",
                  "hover:bg-primary/10 hover:text-primary transition-all duration-200",
                  isExpanded && "bg-primary/5 text-primary"
                )}
                onClick={() => toggleExpanded(item.title)}
              >
                <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
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
              </Button>
              
              {isExpanded && item.subItems && (
                <div className="ml-6 space-y-1 animate-slide-up">
                  {item.subItems.map((subItem) => (
                    <Button
                      key={subItem.title}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start h-9 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-muted-foreground/30 mr-3 flex-shrink-0" />
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