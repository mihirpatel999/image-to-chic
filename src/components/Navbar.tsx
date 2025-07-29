import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Settings, 
  Wrench, 
  Calendar,
  LogOut,
  Phone,
  Package,
  DollarSign,
  FileText,
  User,
  Factory,
  MapPin,
  CreditCard,
  Banknote
} from "lucide-react";

interface NavItem {
  title: string;
  icon: React.ComponentType<any>;
  items?: { title: string; href?: string; onClick?: () => void }[];
}

const navigationItems: NavItem[] = [
  {
    title: "Company",
    icon: Building2,
  },
  {
    title: "Masters",
    icon: Users,
    items: [
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
    items: [
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
    items: [
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
    items: [
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
    icon: Calendar,
  },
  {
    title: "Exit",
    icon: LogOut,
  },
  {
    title: "Contact Us",
    icon: Phone,
  }
];

interface NavbarProps {
  onFormSelect: (formType: string) => void;
}

export const Navbar = ({ onFormSelect }: NavbarProps) => {
  return (
    <div className="w-full bg-gradient-to-r from-primary to-primary-glow border-b border-border/50 shadow-elegant">
      <NavigationMenu className="max-w-full">
        <NavigationMenuList className="flex-wrap gap-1 p-4">
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.items ? (
                <>
                  <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:bg-white/10 hover:text-white border-white/20">
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card border border-border rounded-lg shadow-soft">
                      {item.items.map((subItem) => (
                        <NavigationMenuLink
                          key={subItem.title}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          )}
                          onClick={() => {
                            if (subItem.title === "HSN Master" || subItem.title === "Currency") {
                              onFormSelect(subItem.title);
                            }
                          }}
                        >
                          <div className="text-sm font-medium leading-none">{subItem.title}</div>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </>
              ) : (
                <Button 
                  variant="ghost" 
                  className="bg-transparent text-primary-foreground hover:bg-white/10 hover:text-white border-white/20"
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.title}
                </Button>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};