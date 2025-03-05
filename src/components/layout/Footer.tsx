
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Twitch, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-blur pt-12 pb-8">
      <div className="stream-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-streamPurple to-streamPurple-light bg-clip-text text-transparent">
                Kick<span className="text-streamGreen">Clone</span>
              </span>
            </Link>
            <p className="text-streamGray-dark text-sm max-w-xs">
              The ultimate streaming platform for creators and viewers, built with amazing technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-streamGray hover:text-streamPurple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-streamGray hover:text-streamPurple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-streamGray hover:text-streamPurple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-streamGray hover:text-streamPurple transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-streamGray hover:text-streamPurple transition-colors">
                <Twitch size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-streamGray hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/creators" className="text-streamGray hover:text-white transition-colors text-sm">
                  For Creators
                </Link>
              </li>
              <li>
                <Link to="/developers" className="text-streamGray hover:text-white transition-colors text-sm">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-streamGray hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-streamGray hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-streamGray hover:text-white transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-streamGray hover:text-white transition-colors text-sm">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-streamGray hover:text-white transition-colors text-sm">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-streamGray hover:text-white transition-colors text-sm">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-streamGray hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-streamGray hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-streamGray hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-streamGray hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/copyright" className="text-streamGray hover:text-white transition-colors text-sm">
                  Copyright Policy
                </Link>
              </li>
              <li>
                <Link to="/affiliates" className="text-streamGray hover:text-white transition-colors text-sm">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-streamBlack-lighter pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-streamGray-dark text-sm">
              &copy; {new Date().getFullYear()} KickClone. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-streamGray-dark text-xs">Built with ❤️ by Lovable</span>
              <a href="https://github.com" className="text-streamGray hover:text-streamPurple transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
