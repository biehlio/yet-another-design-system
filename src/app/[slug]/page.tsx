import { Button } from "@/components/ui/button";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div className="flex flex-col p-8">
      <p>page for {slug}</p>
      <section className="py-8">
        <Button>Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button className="w-fit" variant="ghost">
          Ghost
        </Button>
        <Button className="w-fit" variant="destructive">
          Destructive
        </Button>
      </section>
    </div>
  );
}
