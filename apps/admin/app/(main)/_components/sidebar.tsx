import { Button } from "@/components/ui/button";
import { sidebardata } from "@/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col bg-white text-black px-5 py-5 w-56 h-screen">
      <h1 className="mb-10 text-xl font-semibold">Admin Panel</h1>
      <div className="flex flex-1 flex-col gap-5">
        {sidebardata.map(({ title, icon: Icon, link }, _id) => (
          <Link href={link} key={_id} className="flex gap-2 font-semibold">
            <Icon />
            {title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-end w-full">
        <Link href="/sign-in">
          <Button className="flex items-center gap-2 w-full">Log In</Button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
