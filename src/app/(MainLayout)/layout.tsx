import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <section>
      <Navbar />
      <section>{children}</section>
    </section>
  );
};

export default MainLayout;
