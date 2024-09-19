import React from "react";
import Navbar from "../_components/navbar";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
