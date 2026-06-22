import { Reveal } from "@/components/Reveal";
import { whyMtp } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

export function WhyMtp() {
  return (
    <section id="why-mtp" className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">Why MTP</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[44px]">
              Value-added means we <span className="text-accent">engineer</span>, not just ship boxes
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/60">
              Against broadline distributors we win on security specialisation and integration engineering. We de-risk your design and sizing so commissioning goes right the first time.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <a href="/why-mtp" className="btn btn-accent mt-8">
              See our value-added services <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {whyMtp.map((v, i) => (
            <Reveal key={v.title} delay={i % 2}>
              <div className="group h-full bg-ink p-7 transition-colors hover:bg-white/[0.04]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-[15px] font-medium text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-[17px] font-medium">{v.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
