
import React, { useState } from 'react';
import { Search, Bell, Menu, User, ChevronDown, Plus, Moon, Sun, X } from 'lucide-react';
import Button from '../ui/Button';

interface NavbarProps {
  onToggleSidebar: () => void;
  onOpenMobileMenu: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, onOpenMobileMenu, isDarkMode, toggleTheme }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 h-16 bg-white border-b border-slate-200 px-4 md:px-6 flex items-center justify-between z-40">
      <div className="flex items-center gap-2 md:gap-6">
        {/* Mobile Hamburger */}
        <button 
          onClick={onOpenMobileMenu}
          className="p-2 text-slate-400 hover:text-slate-600 transition-colors md:hidden"
        >
          <Menu size={22} />
        </button>

        {/* Desktop Sidebar Toggle */}
        <button 
          onClick={onToggleSidebar}
          className="p-2 text-slate-400 hover:text-slate-600 transition-colors hidden md:block"
        >
          <Menu size={20} />
        </button>

        {/* Breadcrumbs - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
          <a href="/" className="text-indigo-600 hover:underline font-medium">Home</a>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-700">Dashboard</span>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-4">
        {/* Search - Icon only on mobile, bar on desktop */}
        <div className="relative">
          <div className="hidden lg:block relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-64 pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
          
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
          >
            <Search size={20} />
          </button>

          {/* Mobile Overlay Search */}
          {isSearchOpen && (
            <div className="fixed inset-0 bg-white z-[60] p-4 lg:hidden flex items-center gap-4">
              <div className="relative flex-1">
                <input 
                  autoFocus
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-10 pr-4 py-3 bg-slate-100 border-none rounded-lg text-base focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
              <button onClick={() => setIsSearchOpen(false)} className="p-2 text-slate-500">
                <X size={24} />
              </button>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 md:gap-2">
          <div className="relative">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold border-2 border-white">
                3
              </span>
            </button>
          </div>
          
          <button className="hidden sm:block p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Plus size={20} />
          </button>
        </div>

        {/* User Profile */}
        <div className="relative ml-1">
          <button 
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center gap-2 p-1 pl-1 md:pl-2 hover:bg-slate-100 rounded-full transition-colors border border-transparent hover:border-slate-200"
          >
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs uppercase shadow-inner border-2 border-white/20">
              SJ
            </div>
            <span className="hidden md:block text-sm font-semibold text-slate-700">Sarah Johnson</span>
            <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="md:hidden px-4 py-2 border-b border-slate-100 mb-1">
                <p className="text-sm font-bold text-slate-800">Sarah Johnson</p>
                <p className="text-xs text-slate-500">sarah@university.edu</p>
              </div>
              <a href="#profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">My Profile</a>
              <a href="#settings" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Settings</a>
              <div className="border-t border-slate-100 my-1"></div>
              <a href="#logout" className="block px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-medium">Sign Out</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
