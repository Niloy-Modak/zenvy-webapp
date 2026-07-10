"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, X, Bell, User } from "lucide-react";

interface DashNavbarProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

const DashNavbar: React.FC<DashNavbarProps> = ({ onMenuClick, sidebarOpen }) => {
  return (
    <motion.nav
      className="
        fixed top-0 left-0 right-0 z-40
        bg-white/85 backdrop-blur-xl
        border-b border-emerald-100/50
        shadow-sm
      "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Left Section - Logo & Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Menu Toggle - Mobile */}
            <motion.button
              onClick={onMenuClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                lg:hidden p-2 rounded-lg
                text-slate-600 hover:text-emerald-600
                hover:bg-slate-100/50 transition-colors
              "
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>

            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className="
                  w-8 h-8 rounded-lg
                  bg-gradient-to-br from-emerald-500 to-emerald-600
                  flex items-center justify-center
                  shadow-md
                "
              >
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-slate-900">Zenvy</h1>
                <p className="text-xs text-slate-500">Dashboard</p>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Notifications & Profile */}
          <div className="flex items-center gap-3 lg:gap-6">
            
            {/* Notification Bell */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative p-2 rounded-lg
                text-slate-600 hover:text-slate-900
                hover:bg-slate-100/50 transition-colors
              "
            >
              <Bell className="w-5 h-5" />
              <motion.span
                className="
                  absolute top-1 right-1 w-2 h-2
                  bg-red-500 rounded-full
                "
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-slate-200" />

            {/* Profile Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2 px-3 py-2 rounded-lg
                text-slate-600 hover:text-slate-900
                hover:bg-slate-100/50 transition-colors
              "
            >
              <div
                className="
                  w-8 h-8 rounded-full
                  bg-gradient-to-br from-emerald-400 to-emerald-600
                  flex items-center justify-center
                "
              >
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:inline text-sm font-medium">
                Account
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom border glow effect */}
      <motion.div
        className="
          absolute bottom-0 left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent
        "
      />
    </motion.nav>
  );
};

export default DashNavbar;