"use server";

import { getComponents, getDesignTokens } from "@/lib/notion";
import { DesignToken, Component } from "@/lib/types";
import { SidebarLink } from "@/components/ui/sidebar";

export default async function SidebarLinkGroup({ title }: { title: string }) {
  let links: DesignToken[] | Component[];

  switch (title) {
    case "Design Tokens":
      links = await getDesignTokens();
      break;
    case "Components":
      links = await getComponents();
      break;
    default:
      links = [];
      break;
  }

  return (
    <div className="flex flex-col">
      <p className="mb-2 font-semibold text-neutral-700">{title}</p>
      {links.map((link, idx) => (
        <SidebarLink
          key={idx}
          link={{
            href: link.href,
            label: link.name,
          }}
        />
      ))}
    </div>
  );
}
