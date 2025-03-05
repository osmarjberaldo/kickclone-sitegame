
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Bell, MessageSquare, Gift, Crown, Home, Compass, Gamepad2, Heart, Settings, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 transform transition-all duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full",
        "pt-16 bg-streamBlack-light backdrop-blur-md"
      )}
    >
      <div className="stream-container p-4">
        {/* Search Input */}
        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Search streamers, games..."
            className="bg-streamBlack-lighter border-streamBlack-lighter pl-9 focus:border-streamPurple focus:ring-streamPurple w-full"
            autoFocus
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-streamGray-darker h-4 w-4" />
        </div>

        {/* Mobile Navigation Links */}
        <nav className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs uppercase text-streamGray-darker font-semibold">Browse</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/browse" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <Compass className="h-5 w-5" />
                  <span>Browse</span>
                </Link>
              </li>
              <li>
                <Link to="/categories" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <Gamepad2 className="h-5 w-5" />
                  <span>Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/following" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <Heart className="h-5 w-5" />
                  <span>Following</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase text-streamGray-darker font-semibold">Notifications</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/notifications" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <Bell className="h-5 w-5" />
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link to="/messages" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link to="/gifts" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <Gift className="h-5 w-5" />
                  <span>Gifts</span>
                </Link>
              </li>
              <li>
                <Link to="/subscriptions" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <Crown className="h-5 w-5" />
                  <span>Subscriptions</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase text-streamGray-darker font-semibold">More</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/settings" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link to="/help" onClick={onClose} className="flex items-center text-streamGray hover:text-white gap-3 py-2">
                  <HelpCircle className="h-5 w-5" />
                  <span>Help</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Auth Buttons */}
        <div className="mt-8 flex flex-col space-y-3">
          <Link to="/login" onClick={onClose}>
            <Button variant="outline" className="w-full bg-transparent border-streamPurple text-white hover:bg-streamPurple hover:text-white">
              Log In
            </Button>
          </Link>
          <Link to="/signup" onClick={onClose}>
            <Button className="w-full bg-streamPurple hover:bg-streamPurple-light text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
