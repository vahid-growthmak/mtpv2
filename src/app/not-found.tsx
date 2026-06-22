import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found — MTP Distribution",
};

const links = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Brands", href: "/brands" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-accent pt-[88px] text-white">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[680px] -translate-x-1/2 rounded-full bg-white/15 blur-[120px]" />
        <div className="shell relative flex flex-col items-center py-24 text-center md:py-32">
          <Reveal>
            <span className="display text-[88px] leading-none sm:text-[120px]">404</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 max-w-2xl text-balance text-[30px] leading-[1.08] sm:text-[44px]">
              Page not found
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-5 max-w-md text-balance text-[16px] leading-relaxed text-white/80">
              The page you're looking for has moved or never existed. Try one of these instead.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href="/" className="btn bg-white text-ink hover:bg-ink hover:text-white">
                Back to home <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="/contact" className="btn border border-white/30 bg-transparent text-white hover:bg-white/10">
                Contact us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {links.map((l, i) => (
              <Reveal key={l.href} delay={i % 4} className="h-full">
                <a
                  href={l.href}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]"
                >
                  <span className="text-[16px] font-medium text-ink">{l.label}</span>
                  <ArrowUpRight className="h-5 w-5 text-ink-muted transition group-hover:text-accent" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
