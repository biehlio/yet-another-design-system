import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div className="flex flex-col p-8 text-neutral-700">page for {slug}</div>
  );
}
