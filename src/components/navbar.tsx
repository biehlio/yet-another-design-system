import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="container sticky top-0 z-10 hidden md:block">
      <div className="flex h-16 w-full items-center justify-between bg-background px-4 py-4">
        <div className="flex items-center gap-4">
          <Link className="text-sm font-semibold" href="/">
            <p className="text-xl font-bold leading-tight">
              yet-another
              <br />
              <span className="text-xs font-medium uppercase tracking-tighter opacity-75">
                design system
              </span>
            </p>
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
