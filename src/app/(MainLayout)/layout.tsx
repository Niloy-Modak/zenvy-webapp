import Navbar from "@/components/shared/Navbar";
import React from "react";


const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <section>
    <Navbar/>
    {children}
    </section>;
};

export default MainLayout;
