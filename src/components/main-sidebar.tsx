"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconColorSwatch,
  IconHandFinger,
  IconTypography,
} from "@tabler/icons-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function MainSidebar() {
  const params = useParams();

  const pageLinks = [
    {
      label: "Color",
      href: "/color",
      icon: (
        <IconColorSwatch className="h-5 w-5 flex-shrink-0 text-neutral-700" />
      ),
    },
    {
      label: "Tyography",
      href: "/typography",
      icon: (
        <IconTypography className="h-5 w-5 flex-shrink-0 text-neutral-700" />
      ),
    },
  ];
  const componentLinks = [
    {
      label: "Button",
      href: "/button",
      icon: (
        <IconHandFinger className="h-5 w-5 flex-shrink-0 text-neutral-700" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="justify-between">
        <div className="flex flex-1 flex-col space-y-6 overflow-y-auto overflow-x-hidden">
          <Link className="text-sm font-semibold text-neutral-700" href="/">
            <p className="text-2xl font-bold">
              yet-another
              <br />
              <span className="text-sm font-medium uppercase">
                design system
              </span>
            </p>
          </Link>
          <div className="flex flex-col gap-2">
            <p>Base</p>
            {pageLinks.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                active={params.slug === link.href.replace("/", "")}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p>Components</p>
            {componentLinks.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                active={params.slug === link.href.replace("/", "")}
              />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
