
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, GraduationCap, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SIDEBAR_MENU } from '../../constants';

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, mobileOpen, onCloseMobile, currentPath, onNavigate }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Dashboard']);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    if (window.innerWidth < 768) {
      onCloseMobile();
    }
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 },
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseMobile}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[45] md:hidden"
          />
        )}
      </AnimatePresence>

      <aside 
        className={`fixed left-0 top-0 h-full glass-sidebar text-slate-300 z-50 transition-all duration-300 ease-in-out border-r border-slate-700/50 shadow-2xl 
          ${collapsed ? 'md:w-20' : 'md:w-64'} 
          ${mobileOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-700/30">
          <div className="flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20"
            >
              <GraduationCap size={20} className="text-white" />
            </motion.div>
            {(!collapsed || mobileOpen) && (
              <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="font-bold text-xl tracking-tight text-white"
              >
                Kiaalap <span className="text-xs text-indigo-400 font-normal ml-1">v1.2</span>
              </motion.span>
            )}
          </div>
          {mobileOpen && (
            <button onClick={onCloseMobile} className="md:hidden p-1 hover:bg-white/10 rounded-md text-slate-400">
              <X size={20} />
            </button>
          )}
        </div>

        {/* Menu Sections */}
        <div className="mt-4 pb-10 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
          {SIDEBAR_MENU.map((section) => (
            <div key={section.category} className="mb-6">
              {(!collapsed || mobileOpen) && (
                <h4 className="px-6 py-2 text-[10px] font-bold text-slate-500 tracking-widest uppercase opacity-70">
                  {section.category}
                </h4>
              )}
              <ul className="space-y-1 px-3">
                {section.items.map((item) => {
                  const isExpanded = expandedItems.includes(item.label);
                  const hasSubItems = item.subItems && item.subItems.length > 0;
                  const isActiveMain = currentPath === item.path || (hasSubItems && item.subItems?.some(s => s.path === currentPath));

                  return (
                    <li key={item.label} className="group">
                      <motion.button
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (hasSubItems && (!collapsed || mobileOpen)) {
                            toggleExpand(item.label);
                          } else {
                            handleLinkClick(item.path);
                          }
                        }}
                        className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 relative glow-on-hover ${
                          isActiveMain && (!collapsed || mobileOpen) ? 'text-white bg-white/5' : 'hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {isActiveMain && (!collapsed || mobileOpen) && (
                          <motion.div 
                            layoutId="active-bg"
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-500 rounded-r-full"
                          />
                        )}
                        
                        <item.icon size={18} className={`${isActiveMain ? 'text-indigo-400' : 'text-slate-400 group-hover:text-indigo-400'}`} />
                        
                        {(!collapsed || mobileOpen) && (
                          <div className="flex flex-1 items-center justify-between ml-3 overflow-hidden">
                            <span className={`text-sm font-medium whitespace-nowrap ${isActiveMain ? 'text-white' : 'text-slate-400'}`}>{item.label}</span>
                            {hasSubItems && (
                              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                                <ChevronDown size={14} className="text-slate-500" />
                              </motion.div>
                            )}
                          </div>
                        )}

                        {collapsed && !mobileOpen && (
                          <div className="absolute left-full ml-4 px-3 py-1 bg-slate-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-[100] shadow-xl border border-slate-700">
                            {item.label}
                          </div>
                        )}
                      </motion.button>

                      {/* Sub Menu Items */}
                      <AnimatePresence>
                        {(!collapsed || mobileOpen) && hasSubItems && isExpanded && (
                          <motion.ul 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-black/20 mt-1 rounded-lg overflow-hidden ml-4"
                          >
                            {item.subItems?.map((sub) => {
                              const isSubActive = currentPath === sub.path;
                              return (
                                <li key={sub.label}>
                                  <button 
                                    onClick={() => handleLinkClick(sub.path)}
                                    className={`w-full text-left py-2 pl-10 pr-4 text-xs transition-colors border-l-2 ${
                                      isSubActive 
                                        ? 'text-indigo-400 border-indigo-500 bg-indigo-500/5' 
                                        : 'text-slate-400 border-transparent hover:text-white hover:border-slate-600'
                                    }`}
                                  >
                                    {sub.label}
                                  </button>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
