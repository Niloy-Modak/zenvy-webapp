import HomeButton from "@/components/auth-layout/HomeButton";
import SecondaryButton from "@/components/shared/ui/SecondaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen">
      {/* Banner Section - Right Side (Botanical Image) */}
      <div className="hidden sm:w-3/10 md:w-2/5 lg:w-1/2 sm:flex justify-center items-center bg-gray-100 relative overflow-hidden">
        <Image
          src="/authLayout/auth_cover.png"
          alt="Authentication Cover"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay - Respects rounded border */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(0deg, rgb(16,16,16) -19.5%, rgba(16,16,16,0) 100%)",
          }}
        />
      </div>

      {/* Form Section - Left Side */}
      <div className="w-full sm:w-7/10 md:w-3/5 lg:w-1/2 min-h-screen flex flex-col bg-white">
        {/* Navbar - Fixed at Top */}
        <nav className="grid grid-cols-3 items-center gap-4 px-4 md:px-10 py-4 border-b border-primary/10 sticky top-0 z-40">
          {/* Logo & Title */}
          <Link href="/" className="flex items-center min-w-30">
            <Image
              src="/main_logo.png"
              alt="SHOP.CO Logo"
              width={160}
              height={22}
              className="w-auto h-5 md:h-6 object-contain"
              priority
            />
          </Link>

          {/* Center Spacer */}
          <div />

          {/* Back to Home Button */}
          <div className="text-right">
            <Link href="/">
              <HomeButton />
            </Link>
          </div>
        </nav>

        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex justify-center pt-8  pb-8 px-4 md:px-8">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
