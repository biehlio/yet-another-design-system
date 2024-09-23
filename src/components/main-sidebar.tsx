import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import Link from "next/link";
import { useParams } from "next/navigation";
import SidebarLinkGroup from "./sidebar-link-group";

export default async function MainSidebar() {
  return (
    <Sidebar animate={false}>
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
          <SidebarLinkGroup title="Design Tokens" />
          <SidebarLinkGroup title="Components" />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
