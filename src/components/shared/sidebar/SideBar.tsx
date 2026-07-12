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
  PackagePlus,
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
          id: "add-product",
          label: "Add Product",
          href: "/dashboard/add-product",
          icon: <PackagePlus className="w-5 h-5" />,
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
      {/* Sidebar - Desktop + Medium */}
      <aside
        className="
          hidden md:flex md:flex-col
          fixed left-0 top-16 bottom-0
          w-64 bg-white/95 backdrop-blur-xl
          border-r border-primary/10
          z-40
          overflow-y-auto
        "
      >
        <div className="flex-1 px-4 space-y-8">
          {menuSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {section.title && (
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pl-2">
                  {section.title}
                </h3>
              )}

              <nav className="">
                {section.items.map((item) => (
                  <Link key={item.id} href={item.href}>
                    <div
                      className={`
                                 group relative flex items-center gap-3 px-4 py-3 my-3 rounded-lg
                                 cursor-pointer transition-all duration-150
                            ${
                              isActive(item.href)
                                ? "bg-primary/70 text-white"
                                : "text-slate-600 hover:text-primary/70 hover:bg-primary/10"
                            }
                              `}
                    >
                      {isActive(item.href) && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-background rounded-r-full" />
                      )}

                      {/* Icon */}
                      <div
                        className={`shrink-0 p-2 rounded-lg transition-colors duration-150
                                ${
                                  isActive(item.href)
                                    ? "bg-background text-primary/70"
                                    : "bg-slate-200 text-gray-500 group-hover:bg-primary/50 group-hover:text-white"
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
      </aside>

      {/* Sidebar - Mobile (optimized slide animation) */}
      <aside
        className={`
          md:hidden
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
                  <Link key={item.id} href={item.href} onClick={onClose}>
                    <div
                      className={`
                                 group relative flex items-center gap-3 px-4 py-3 my-3 rounded-lg
                                 cursor-pointer transition-all duration-150
                            ${
                              isActive(item.href)
                                ? "bg-primary/70 text-white"
                                : "text-slate-600 hover:text-primary/70 hover:bg-primary/10"
                            }
                              `}
                    >
                      {isActive(item.href) && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-background rounded-r-full" />
                      )}

                      {/* Icon */}
                      <div
                        className={`shrink-0 p-2 rounded-lg transition-colors duration-150
                                ${
                                  isActive(item.href)
                                    ? "bg-background text-primary/70"
                                    : "bg-slate-200 text-gray-500 group-hover:bg-primary/50 group-hover:text-white"
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
      </aside>
    </>
  );
};

export default SideBar;
