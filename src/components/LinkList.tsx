"use client";

import { useEffect, useState } from "react";

type LinkItem = { id: string; title: string; url: string };

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data && setCounts(data))
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.url}
            onClick={() => handleClick(link.id)}
            {...(link.url.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="relative block rounded-2xl border border-white/50 bg-white/40 px-5 py-4 text-center font-medium shadow-[0_8px_32px_rgba(120,70,40,0.08)] backdrop-blur-xl transition duration-200 hover:-translate-y-0.5 hover:bg-white/60 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            {link.title}
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal text-foreground/50">
              {counts[link.id] ?? 0}회
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
