"use client";

import { useMemo, useState } from "react";
import { Search, ArrowUpRight } from "@/components/icons";

type Entry = { label: string; category: string; href: string };

export function SearchClient({ index }: { index: Entry[] }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!q) return index;
    return index.filter(
      (e) =>
        e.label.toLowerCase().includes(q) ||
        e.category.toLowerCase().includes(q)
    );
  }, [q, index]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative">
        <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          placeholder="Search solutions, brands, industries…"
          aria-label="Search the site"
          className="h-14 w-full rounded-full border border-line bg-white pl-14 pr-5 text-[16px] text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-accent"
        />
      </div>

      <p className="mt-4 text-center text-[13px] text-ink-muted">
        {results.length} {results.length === 1 ? "result" : "results"}
        {q ? ` for “${query}”` : ""}
      </p>

      <div className="mt-8 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
        {results.length === 0 ? (
          <div className="p-7 text-center text-[15px] text-ink-muted">
            No matches. Try a broader term, or{" "}
            <a href="/contact" className="font-medium text-accent">
              contact our team
            </a>
            .
          </div>
        ) : (
          results.map((e) => (
            <a
              key={`${e.category}-${e.href}`}
              href={e.href}
              className="group flex items-center justify-between gap-6 p-6 transition-colors hover:bg-surface-alt"
            >
              <div>
                <span className="text-[11.5px] font-medium uppercase tracking-wide text-accent">
                  {e.category}
                </span>
                <p className="mt-0.5 text-[16px] font-medium text-ink transition-colors group-hover:text-accent">
                  {e.label}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition group-hover:text-accent" />
            </a>
          ))
        )}
      </div>
    </div>
  );
}
