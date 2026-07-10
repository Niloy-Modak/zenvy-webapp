"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Grid,
  CreditCard,
  Settings,
  User,
  LogOut,
  Eye,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const SideBar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuSections: MenuSection[] = [
    {
      items: [
        {
          id: "dashboard",
          label: "Dashboard",
          href: "/dashboard",
          icon: <Home className="w-5 h-5" />,
        },
        {
          id: "products",
          label: "Products",
          href: "/dashboard/products",
          icon: <Grid className="w-5 h-5" />,
        },
        {
          id: "orders",
          label: "Orders",
          href: "/dashboard/orders",
          icon: <CreditCard className="w-5 h-5" />,
          badge: "3",
        },
        {
          id: "analytics",
          label: "Analytics",
          href: "/dashboard/analytics",
          icon: <Eye className="w-5 h-5" />,
        },
      ],
    },
    {
      title: "ACCOUNT PAGES",
      items: [
        {
          id: "profile",
          label: "Profile",
          href: "/dashboard/profile",
          icon: <User className="w-5 h-5" />,
        },
        {
          id: "settings",
          label: "Settings",
          href: "/dashboard/settings",
          icon: <Settings className="w-5 h-5" />,
        },
        {
          id: "logout",
          label: "Sign Out",
          href: "/api/auth/signout",
          icon: <LogOut className="w-5 h-5" />,
        },
      ],
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Sidebar - Desktop (no animation, always visible on md+) */}
      <aside
        className="
          hidden md:flex md:flex-col
          fixed left-0 top-16 bottom-0
          w-64 bg-white/95 backdrop-blur-xl
          border-r border-emerald-100/40
          z-40
          overflow-y-auto
        "
      >
        <div className="flex-1 px-4 py-8 space-y-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.title && (
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pl-2">
                  {section.title}
                </h3>
              )}

              <nav className="space-y-1">
                {section.items.map((item) => (
                  <Link key={item.id} href={item.href}>
                    <div
                      className={`
                        relative flex items-center gap-3 px-4 py-3 rounded-lg
                        cursor-pointer transition-all duration-150
                        ${
                          isActive(item.href)
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }
                      `}
                    >
                      {/* Active Indicator - No Animation */}
                      {isActive(item.href) && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-600 rounded-r-full" />
                      )}

                      {/* Icon */}
                      <div
                        className={`
                          shrink-0 p-2 rounded-lg transition-colors duration-150
                          ${
                            isActive(item.href)
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                          }
                        `}
                      >
                        {item.icon}
                      </div>

                      {/* Label */}
                      <span className="flex-1 text-sm font-medium">
                        {item.label}
                      </span>

                      {/* Badge */}
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto px-6 py-8 border-t border-emerald-100/40 bg-gradient-to-t from-emerald-50/30 to-transparent">
          <p className="text-xs text-slate-500 text-center">
            Zenvy Dashboard v1.0
          </p>
        </div>
      </aside>

      {/* Sidebar - Mobile (optimized slide animation) */}
      <aside
        className={`
          lg:hidden
          fixed inset-0 top-16 left-0 bottom-0
          w-64 bg-white/95 backdrop-blur-xl
          border-r border-emerald-100/40
          z-40
          overflow-y-auto
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ willChange: "transform" }}
      >
        <div className="flex-1 px-4 py-8 space-y-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.title && (
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pl-2">
                  {section.title}
                </h3>
              )}

              <nav className="space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={onClose}
                  >
                    <div
                      className={`
                        relative flex items-center gap-3 px-4 py-3 rounded-lg
                        cursor-pointer transition-all duration-150
                        ${
                          isActive(item.href)
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        }
                      `}
                    >
                      {/* Active Indicator */}
                      {isActive(item.href) && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-emerald-600 rounded-r-full" />
                      )}

                      {/* Icon */}
                      <div
                        className={`
                          shrink-0 p-2 rounded-lg transition-colors duration-150
                          ${
                            isActive(item.href)
                              ? "bg-emerald-100 text-emerald-600"
                              : "bg-slate-100 text-slate-500"
                          }
                        `}
                      >
                        {item.icon}
                      </div>

                      {/* Label */}
                      <span className="flex-1 text-sm font-medium">
                        {item.label}
                      </span>

                      {/* Badge */}
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto px-6 py-8 border-t border-emerald-100/40 bg-gradient-to-t from-emerald-50/30 to-transparent">
          <p className="text-xs text-slate-500 text-center">
            Zenvy Dashboard v1.0
          </p>
        </div>
      </aside>
    </>
  );
};

export default SideBar;