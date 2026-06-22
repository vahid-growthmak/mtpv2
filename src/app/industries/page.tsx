import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { industries, solutions } from "@/data/site";
import { industryInfo } from "@/data/content";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Industries — MTP Distribution",
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Industries"
        title="Built for the region's most security-intensive sectors"
        intro="From oil & gas to government, healthcare and data centres — our solutions are specified, deployed and trusted across the verticals where security and life-safety are non-negotiable."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      {/* Industries grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const info = industryInfo[ind.slug];
              return (
                <Reveal key={ind.slug} delay={i % 3} className="h-full">
                  <a
                    href={`/industries/${ind.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[19px] font-medium text-ink">{ind.name}</h3>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition group-hover:text-accent" />
                    </div>
                    {info && (
                      <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-muted">
                        {info.desc}
                      </p>
                    )}
                    {info && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {info.needs.map((need) => (
                          <span
                            key={need}
                            className="rounded-full bg-surface-alt px-3 py-1 text-[12px] font-medium text-ink-muted transition-colors group-hover:bg-accent-soft group-hover:text-accent"
                          >
                            {need}
                          </span>
                        ))}
                      </div>
                    )}
                    {info?.anchors && (
                      <div className="mt-5 border-t border-line pt-4 text-[12.5px] font-medium uppercase tracking-wide text-accent">
                        {info.anchors}
                      </div>
                    )}
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verticals → solution lines — dark band */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">One stack, every vertical</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[46px]">
              Every sector draws on the same seven solution lines
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-2xl text-balance text-[15.5px] leading-relaxed text-white/65">
              Whatever the vertical, the requirement maps back to the same end-to-end portfolio — designed, supplied and integrated from a single source.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={i % 3} className="h-full">
                <a
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-white" />
                  </div>
                  <h3 className="mt-4 text-[18px] font-medium">{s.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{s.short}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
