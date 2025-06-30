import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  Search,
  Heart,
  MessageCircle,
  User,
  Settings,
  Plus,
  MapPin,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, collapsed = false, ...props }, ref) => {
    const location = useLocation();

    const navItems = [
      { icon: Home, label: "Home", href: "/" },
      { icon: Search, label: "Browse", href: "/browse" },
      { icon: Heart, label: "Matches", href: "/matches" },
      { icon: MessageCircle, label: "Messages", href: "/messages" },
      { icon: MapPin, label: "Near You", href: "/nearby" },
    ];

    const bottomItems = [
      { icon: User, label: "Profile", href: "/profile" },
      { icon: Settings, label: "Settings", href: "/settings" },
    ];

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full flex-col bg-sidebar border-r border-sidebar-border",
          collapsed ? "w-16" : "w-64",
          className,
        )}
        {...props}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            {!collapsed && (
              <span className="font-bold text-xl text-sidebar-foreground">
                Roomify
              </span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={
                  location.pathname === item.href ? "secondary" : "ghost"
                }
                className={cn(
                  "w-full justify-start gap-3 text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
                  location.pathname === item.href &&
                    "bg-sidebar-accent text-sidebar-accent-foreground",
                  collapsed && "px-3",
                )}
                asChild
              >
                <Link to={item.href}>
                  <item.icon className="w-5 h-5" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </Button>
            ))}
          </div>

          {/* Create Listing Button */}
          <div className="mt-6 pt-6 border-t border-sidebar-border">
            <Button
              className={cn(
                "w-full gap-3 bg-primary text-primary-foreground hover:bg-primary/90",
                collapsed && "px-3",
              )}
              asChild
            >
              <Link to="/create-listing">
                <Plus className="w-5 h-5" />
                {!collapsed && <span>Create Listing</span>}
              </Link>
            </Button>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-auto pt-6 space-y-1">
            {bottomItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
                  collapsed && "px-3",
                )}
                asChild
              >
                <Link to={item.href}>
                  <item.icon className="w-5 h-5" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    );
  },
);

Sidebar.displayName = "Sidebar";

export { Sidebar };
