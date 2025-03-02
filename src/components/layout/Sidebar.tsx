
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart2, 
  Calendar, 
  ChevronLeft, 
  Columns, 
  FileText, 
  Home, 
  Layers, 
  List, 
  Settings, 
  Users 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const mainNav: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: Layers,
  },
  {
    title: 'Board',
    href: '/board',
    icon: Columns,
  },
  {
    title: 'Tasks',
    href: '/tasks',
    icon: List,
  },
  {
    title: 'Calendar',
    href: '/calendar',
    icon: Calendar,
  },
  {
    title: 'Documents',
    href: '/documents',
    icon: FileText,
  },
];

const secondaryNav: NavItem[] = [
  {
    title: 'Team',
    href: '/team',
    icon: Users,
  },
  {
    title: 'Reports',
    href: '/reports',
    icon: BarChart2,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-sidebar transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="flex h-14 items-center border-b px-3 py-4 justify-between">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gradient">Trackezy</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn(
            "h-7 w-7 rounded-full",
            collapsed && "mx-auto"
          )}
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform",
              collapsed && "rotate-180"
            )}
          />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "nav-link group",
                item.href === location.pathname && "nav-link-active",
                collapsed && "justify-center px-0"
              )}
            >
              <item.icon className="h-4 w-4" />
              {!collapsed && <span>{item.title}</span>}
              {collapsed && (
                <span className="sr-only">{item.title}</span>
              )}
            </Link>
          ))}
        </nav>
        <div className="my-2 px-3">
          <div
            className={cn(
              "h-px w-full bg-border",
              collapsed && "mx-auto w-8"
            )}
          />
        </div>
        <nav className="grid gap-1 px-2">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "nav-link group",
                item.href === location.pathname && "nav-link-active",
                collapsed && "justify-center px-0"
              )}
            >
              <item.icon className="h-4 w-4" />
              {!collapsed && <span>{item.title}</span>}
              {collapsed && (
                <span className="sr-only">{item.title}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
