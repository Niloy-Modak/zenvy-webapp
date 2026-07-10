import DashboardLayoutClient from "@/components/dashboard/Dashboardlayoutclient";
import React from "react";
// import DashboardLayoutClient from "./dashboardLayoutClient";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

/**
 * Server-side Dashboard Layout Wrapper
 * Manages the overall dashboard structure and wraps client components
 */
const DashboardLayout = ({
  children,
}: Readonly<DashboardLayoutProps>) => {
  return (
    <DashboardLayoutClient>
      {children}
    </DashboardLayoutClient>
  );
};

export default DashboardLayout;