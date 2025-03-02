
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Plus, Search, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
        <div className="flex flex-1 items-center gap-2">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-semibold text-lg transition-all hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 19V5" />
              <path d="M5 12h14" />
            </svg>
            <span className="hidden sm:inline-block text-gradient font-bold">Trackezy</span>
          </Link>
          
          <div className="relative max-w-md w-full hidden md:flex items-center">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search projects and tasks..."
              className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="h-9 w-9 rounded-full p-0">
            <Search className="h-5 w-5 sm:hidden" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Button size="sm" variant="ghost" className="h-9 w-9 rounded-full p-0 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
            <span className="sr-only">Notifications</span>
          </Button>
          
          <Button size="sm" variant="ghost" className="h-9 w-9 rounded-full p-0">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex items-center gap-1 rounded-full"
          >
            <Plus className="h-4 w-4" />
            <span>New</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 rounded-full p-0 overflow-hidden flex items-center justify-center"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">Profile</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
