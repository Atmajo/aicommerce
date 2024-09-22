import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import {
  Brain,
  EllipsisVertical,
  AudioWaveform as AI,
  ShoppingBasket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cartVal, navdata } from "@/data";
import { Button } from "@/components/ui/button";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className={cn(poppins.className, "")}>
      <nav className="hidden md:flex px-10 py-5 justify-between items-center">
        <div className="flex gap-5">
          {navdata.map((item, index) => (
            <Link href={item.url} key={index} className="hover:underline underline-offset-8">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-6">
          <Button
            className="text-4xl font-bold"
            variant={"custom1"}
            size={"icon"}
          >
            ♡
          </Button>
          <Link href="/cart">
            <Button className="relative" variant={"custom1"} size={"icon"}>
              <ShoppingBasket size={32} />
              <p className="flex justify-center items-center rounded-full bg-black absolute text-white px-2 -top-2 left-4">
                {cartVal}
              </p>
            </Button>
          </Link>
          <Button variant={"custom1"} size={"icon"}>
            <AI size={28} />
          </Button>
        </div>
      </nav>

      <nav className="md:hidden flex justify-between items-center">
        <Link href="/" className="flex items-center gap-1 px-5 py-5">
          <Brain size={32} />
          <h1 className="flex flex-col font-bold">
            <span>AI</span>
            <span>Commerce</span>
          </h1>
        </Link>
        <Sheet>
          <SheetTrigger>
            <EllipsisVertical size={32} />
          </SheetTrigger>
          <SheetContent className="bg-[#fbf8f3]">
            <div className="flex flex-col">
              {navdata.map((item, index) => (
                <Link href={item.url} key={index} className="px-5 py-5">
                  {item.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
