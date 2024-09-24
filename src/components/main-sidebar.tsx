import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import SidebarLinkGroup from "./sidebar-link-group";

export default async function MainSidebar() {
  return (
    <Sidebar animate={false}>
      <SidebarBody className="justify-between">
        <div className="flex flex-1 flex-col space-y-6 overflow-y-auto overflow-x-hidden">
          <SidebarLinkGroup title="Design Tokens" />
          <SidebarLinkGroup title="Components" />
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
