"use server";

import { getComponents, getDesignTokens } from "@/lib/notion";
import { DesignToken, Component } from "@/lib/types";
import { SidebarLink } from "@/components/ui/sidebar";
import Icon from "@/components/icon";

export default async function SidebarLinkGroup({
  title,
  slug,
}: {
  title: string;
  slug?: string;
}) {
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

  console.log(slug);

  return (
    <div className="flex flex-col gap-2">
      <p>{title}</p>
      {links.map((link, idx) => (
        <SidebarLink
          key={idx}
          link={{
            href: link.href,
            label: link.name,
            icon: <Icon name={link.name} />,
          }}
        />
      ))}
    </div>
  );
}
