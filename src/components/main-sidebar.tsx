"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { IconHandFinger } from "@tabler/icons-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function MainSidebar() {
  const params = useParams();
  const links = [
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
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Link className="p-2 text-sm font-semibold text-neutral-700" href="/">
            <p>Biehl Design System</p>
          </Link>
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
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
