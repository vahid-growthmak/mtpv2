import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { solutions } from "@/data/site";
import { solutionIcons, ArrowUpRight } from "@/components/icons";

export function Solutions() {
  return (
    <section id="solutions" className="bg-white py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            label="Our Solutions"
            title="Seven end-to-end solution lines, one source"
            intro="From a single detector to a full command-and-control room — design, supply and support every discipline without juggling fifteen vendors."
          />
          <Reveal>
            <a href="/solutions" className="btn btn-ghost shrink-0">
              View all solutions <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
