"use client";

import React, { useState } from "react";
import DashNavbar from "../shared/dashboardNavbar/DashNavbar";
import SideBar from "../shared/sidebar/SideBar";

interface DashboardLayoutClientProps {
  children: React.ReactNode;
}

const DashboardLayoutClient: React.FC<DashboardLayoutClientProps> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Fixed Navbar */}
      <DashNavbar 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        sidebarOpen={sidebarOpen}
      />

      {/* Flex Container: Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden pt-16">
        {/* Sidebar - Fixed width 256px (w-64) */}
        <SideBar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content - Takes remaining space */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden md:ml-64">
          {/* Content Wrapper with Padding */}
          <div className="w-full p-6 sm:p-8 lg:p-10">
            {children}
          </div>
        </main>

        {/* Mobile Overlay - Optimized */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 lg:hidden z-30 transition-opacity duration-200"
            onClick={() => setSidebarOpen(false)}
            style={{ willChange: "opacity" }}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardLayoutClient;