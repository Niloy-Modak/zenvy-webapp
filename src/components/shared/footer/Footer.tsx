// components/shared/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Features", href: "/features" },
        { label: "Works", href: "/works" },
        { label: "Career", href: "/career" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Customer Support", href: "/support" },
        { label: "Delivery Details", href: "/delivery" },
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "FAQ",
      links: [
        { label: "Account", href: "/account" },
        { label: "Manage Deliveries", href: "/manage-deliveries" },
        { label: "Orders", href: "/orders" },
        { label: "Payments", href: "/payments" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Free eBooks", href: "/ebooks" },
        { label: "Development Tutorial", href: "/tutorials" },
        { label: "How to - Blog", href: "/blog" },
        { label: "Youtube Playlist", href: "/youtube" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#F0F0F0] text-[#606060] pt-14 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-14 pb-12 border-b border-black/10">
          {/* Brand Column */}
          <div className="flex flex-col gap-5 max-w-100 lg:max-w-65">
            <Link
              href="/"
              className="text-3xl sm:text-[34px] font-bold tracking-tighter text-black"
            >
              SHOP.CO
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 font-normal">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>

            {/* Inline SVG Social Media Icons */}
            <div className="flex items-center gap-3 mt-1">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white text-black border border-black/5 flex items-center justify-center transition-colors hover:bg-black hover:text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center transition-colors hover:bg-white hover:text-black hover:border hover:border-black/5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white text-black border border-black/5 flex items-center justify-center transition-colors hover:bg-black hover:text-white"
              >
                <svg
                  className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-white text-black border border-black/5 flex items-center justify-center transition-colors hover:bg-black hover:text-white"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 w-full lg:max-w-200">
            {footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-4 sm:gap-6">
                <h4 className="text-sm sm:text-[15px] font-bold text-black tracking-[0.2em] uppercase">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-3 sm:gap-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm sm:text-base font-normal text-gray-500 hover:text-black transition-colors whitespace-nowrap"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-sm text-gray-400 font-normal">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
