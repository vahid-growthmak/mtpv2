"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { company, nav, solutions } from "@/data/site";
import { Phone, Menu, Close, ArrowUpRight } from "@/components/icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Primary nav */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-line bg-white/85 backdrop-blur-xl"
            : "border-transparent bg-white"
        )}
      >
        <div className="shell flex h-[68px] items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/mtp/mtp-logo.png"
              alt="MTP Distribution"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.href} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center rounded-full px-3.5 py-2 text-[14.5px] text-ink-soft transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
                {item.label === "Solutions" && (
                  <div className="invisible absolute left-0 top-full w-[460px] translate-y-2 rounded-2xl border border-line bg-white p-2.5 opacity-0 shadow-[0_24px_60px_-20px_rgba(2,2,2,0.25)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="grid grid-cols-1 gap-0.5">
                      {solutions.map((s) => (
                        <a
                          key={s.slug}
                          href={`/solutions/${s.slug}`}
                          className="flex items-center justify-between rounded-xl px-3.5 py-2.5 transition-colors hover:bg-surface-alt"
                        >
                          <div>
                            <div className="text-[14px] font-medium text-ink">{s.title}</div>
                            <div className="text-[12.5px] text-ink-muted">{s.short}</div>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-ink-muted" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a href="/contact" className="btn btn-ghost hidden h-11 px-5 text-[14px] sm:inline-flex">
              Contact Us
            </a>
            <a href="/partners" className="btn btn-accent hidden h-11 px-5 text-[14px] md:inline-flex">
              Become a Partner
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white p-6">
            <div className="flex items-center justify-between">
              <Image src="/mtp/mtp-logo.png" alt="MTP" width={110} height={36} className="h-8 w-auto object-contain" />
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-line">
                <Close className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-line py-3.5 text-lg text-ink">
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a href="/partners" className="btn btn-accent w-full">Become a Partner</a>
              <a href="/contact" className="btn btn-ghost w-full">Contact Us</a>
              <div className="mt-2 flex flex-col gap-1 text-sm text-ink-muted">
                <a href={`tel:${company.uaePhone}`}>UAE {company.uaePhone}</a>
                <a href={`tel:${company.omanPhone}`}>Oman {company.omanPhone}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
