import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section>
      <Navbar />
      <section className="min-h-[calc(100vh-522px)] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</section>
      <Footer/>
    </section>
  );
};

export default MainLayout;
