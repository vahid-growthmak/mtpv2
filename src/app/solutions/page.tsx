import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { solutions } from "@/data/site";
import { solutionIcons, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Solutions — MTP Distribution",
};

const valueProps = [
  {
    title: "One bill of materials",
    desc: "A single, multi-vendor BoM across every discipline — quoted and invoiced from one source instead of fifteen.",
  },
  {
    title: "Storage & power sized for you",
    desc: "Our engineers size surveillance-grade storage and critical power to your real load profile, not a guess.",
  },
  {
    title: "Cross-system integration",
    desc: "CCTV, access, fire, PA, IBMS/PSIM and power designed to work together — true end-to-end, de-risked before you bid.",
  },
];

export default function SolutionsPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Our Solutions"
        title="Seven end-to-end solution lines, one source"
        intro="Be a single multi-vendor source for every security and life-safety discipline — instead of juggling fifteen vendors, design, supply and support each line from one place."
        crumbs={[{ label: "Home", href: "/" }, { label: "Solutions" }]}
      />

      {/* Solutions grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => {
              const Icon = solutionIcons[s.slug as keyof typeof solutionIcons];
              return (
                <Reveal key={s.slug} delay={i % 3} className="h-full">
                  <a
                    href={`/solutions/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-surface-alt text-ink transition-colors group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-ink-muted transition group-hover:text-accent" />
                    </div>
                    <h3 className="mt-6 text-[19px] font-medium text-ink">{s.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">{s.desc}</p>
                    <div className="mt-5 border-t border-line pt-4 text-[12.5px] font-medium uppercase tracking-wide text-accent">
                      {s.brands}
                    </div>
                  </a>
                </Reveal>
              );
            })}

            {/* CTA tile to balance the 7+1 grid */}
            <Reveal delay={1} className="h-full">
              <a
                href="/contact"
                className="group flex h-full flex-col justify-between rounded-2xl bg-ink p-7 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
              >
                <ArrowUpRight className="h-6 w-6 text-white/70 transition group-hover:text-white" />
                <div>
                  <h3 className="text-[19px] font-medium">Need a multi-system design?</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                    Our engineers size storage and power and design the integration. Request a quote.
                  </p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why one source — dark band */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">Why one source</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[46px]">
              Stop juggling fifteen vendors. Design the whole system from one place.
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent/40">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[19px] font-medium">{v.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
