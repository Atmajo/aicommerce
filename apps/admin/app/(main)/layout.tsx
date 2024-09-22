import React from "react";
import Sidebar from "./_components/sidebar";

const Mainlayout = ({ children }: MainlayoutProps) => {
  return (
    <main className="flex gap-10">
      <Sidebar />
      {children}
    </main>
  );
};

export default Mainlayout;
