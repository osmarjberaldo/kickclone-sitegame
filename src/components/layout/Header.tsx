
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Menu, X, Bell, MessageSquare, Gift, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300",
        isScrolled ? "header-blur py-2" : "bg-transparent"
      )}
    >
      <div className="stream-container">
        <div className="flex items-center justify-between gap-4">
          {/* Logo and Primary Nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-streamPurple to-streamPurple-light bg-clip-text text-transparent">
                Kick<span className="text-streamGreen">Clone</span>
              </span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/browse" className="text-streamGray hover:text-white animated-underline font-medium">
                Browse
              </Link>
              <Link to="/following" className="text-streamGray hover:text-white animated-underline font-medium">
                Following
              </Link>
              <Link to="/categories" className="text-streamGray hover:text-white animated-underline font-medium">
                Categories
              </Link>
            </nav>
          </div>

          {/* Search */}
          <div className={cn(
            "hidden md:flex relative items-center transition-all duration-300 ease-in-out",
            searchFocused ? "flex-1 max-w-md" : "w-56"
          )}>
            <Input
              type="text"
              placeholder="Search streamers, games..."
              className="bg-streamBlack-lighter border-streamBlack-lighter pl-9 focus:border-streamPurple focus:ring-streamPurple"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-streamGray-darker h-4 w-4" />
          </div>

          {/* Secondary Nav and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="text-streamGray hover:text-white">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-streamGray hover:text-white">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-streamGray hover:text-white">
                <Gift className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-streamGray hover:text-white">
                <Crown className="h-5 w-5" />
              </Button>
            </div>

            <div className="hidden md:block">
              <Link to="/login">
                <Button variant="outline" className="bg-transparent border-streamPurple text-white hover:bg-streamPurple hover:text-white">
                  Log In
                </Button>
              </Link>
            </div>

            <div className="hidden md:block ml-2">
              <Link to="/signup">
                <Button className="bg-streamPurple hover:bg-streamPurple-light text-white">
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost" 
              size="icon" 
              className="md:hidden text-streamGray hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
