import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Thank you — MTP Distribution",
};

const next = [
  { label: "Explore Solutions", href: "/solutions" },
  { label: "View Brands", href: "/brands" },
];

export default function ThankYouPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-accent pt-[88px] text-white">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[680px] -translate-x-1/2 rounded-full bg-white/15 blur-[120px]" />
        <div className="shell relative flex flex-col items-center py-24 text-center md:py-32">
          <Reveal>
            <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-accent">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 13 4 4L19 7" />
              </svg>
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-7 max-w-2xl text-balance text-[34px] leading-[1.05] sm:text-[52px]">
              Thank you — we'll be in touch
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-xl text-balance text-[16px] leading-relaxed text-white/80 md:text-[17px]">
              Your message has reached our team. We typically respond within two business days with next steps, datasheets or a solution design.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {next.map((n) => (
                <a key={n.href} href={n.href} className="btn bg-white text-ink hover:bg-ink hover:text-white">
                  {n.label} <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
              <a href="/" className="btn border border-white/30 bg-transparent text-white hover:bg-white/10">
                Return home
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
