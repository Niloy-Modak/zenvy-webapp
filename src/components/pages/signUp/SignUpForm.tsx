"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
// import GoogleButton from "@/components/shared/ui/auth/GoogleButton";
import SocialSection from "@/components/shared/ui/auth/SocialSection";
// import GoogleButton from "@/components/shared/ui/auth/GoogleButton";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Create Account
        </h2>
        <p className="text-gray-600 text-sm">Join us and start your journey</p>
      </div>

      {/* Premium Glass Container */}
      <form className="flex flex-col gap-5 p-7 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-2xl relative overflow-hidden group">
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-primary/5 pointer-events-none rounded-3xl" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none 
        group-hover:bg-primary/10 transition-all duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Name Input */}
          <div className="flex flex-col gap-3 mb-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-900 tracking-tight"
            >
              Full Name
            </label>
            <div
              className={`relative group/input transition-all duration-300 ${
                focused === "name" ? "scale-[1.01]" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/20 to-primary/10 opacity-0 group-focus-within/input:opacity-100 transition-all duration-300 blur-lg pointer-events-none" />
              <input
                type="text"
                id="name"
                placeholder="Sarah Anderson"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className="relative w-full px-5 py-3.5 text-sm bg-white/70 border border-white/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/60 focus:bg-white focus:border-primary/40 placeholder:text-gray-400 placeholder:font-normal transition-all duration-300 backdrop-blur-md shadow-sm focus:shadow-lg focus:shadow-primary/20 text-gray-900 font-medium"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-3 mb-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-900 tracking-tight"
            >
              Email Address
            </label>
            <div
              className={`relative group/input transition-all duration-300 ${
                focused === "email" ? "scale-[1.01]" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/20 to-primary/10 opacity-0 group-focus-within/input:opacity-100 transition-all duration-300 blur-lg pointer-events-none" />
              <input
                type="email"
                id="email"
                placeholder="sarah@example.com"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className="relative w-full px-5 py-3.5 text-sm bg-white/70 border border-white/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/60 focus:bg-white focus:border-primary/40 placeholder:text-gray-400 placeholder:font-normal transition-all duration-300 backdrop-blur-md shadow-sm focus:shadow-lg focus:shadow-primary/20 text-gray-900 font-medium"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-3 mb-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-900 tracking-tight"
            >
              Password
            </label>
            <div
              className={`relative group/input transition-all duration-300 ${
                focused === "password" ? "scale-[1.01]" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/20 to-primary/10 opacity-0 group-focus-within/input:opacity-100 transition-all duration-300 blur-lg pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
                className="relative w-full px-5 py-3.5 pr-12 text-sm bg-white/70 border border-white/90 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/60 focus:bg-white focus:border-primary/40 placeholder:text-gray-400 placeholder:font-normal transition-all duration-300 backdrop-blur-md shadow-sm focus:shadow-lg focus:shadow-primary/20 text-gray-900 font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors duration-200 p-1.5 hover:bg-white/50 rounded-lg"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 pt-2 px-1 mb-3">
            <input
              type="checkbox"
              id="terms"
              className="w-5 h-5 mt-0.5 accent-primary rounded-lg cursor-pointer border border-primary/40 transition-all duration-300"
            />
            <label
              htmlFor="terms"
              className="text-xs text-gray-700 leading-relaxed font-medium"
            >
              I agree to the{" "}
              <a
                href="#"
                className="font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
              >
                terms of service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
              >
                privacy policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer py-3.5 mt-4 text-white font-semibold bg-linear-to-br from-primary via-primary to-primary/90 rounded-full hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-white/50 transition-all duration-300 active:scale-95 border border-primary/50 relative overflow-hidden group/btn"
          >
            <div className="absolute inset-0 bg-linear-to-r from-white/20 via-white/0 to-white/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            <span className="relative">Create Account</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/50" />
            <span className="text-xs text-gray-600 font-medium">or continue with</span>
            <div className="flex-1 h-px bg-white/50" />
          </div>

          {/* Social Sign-In Section */}
       
          <SocialSection/>
        </div>
      </form>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-8 font-medium">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}