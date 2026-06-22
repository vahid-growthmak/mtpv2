import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/site/Faq";
import { whyMtp, stats } from "@/data/site";
import { generalFaqs } from "@/data/content";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Why MTP — MTP Distribution",
};

const comparison = [
  {
    point: "Pre-sales engineering",
    mtp: "We design the multi-vendor BoM, size storage and power, and produce reference architectures before you bid.",
    box: "Sells from a price list. You size the system and carry the risk.",
  },
  {
    point: "Integration",
    mtp: "Cross-system design across CCTV, access, fire, PA, IBMS/PSIM and power — engineered to work together.",
    box: "Single-line boxes. Integration is your problem to solve on site.",
  },
  {
    point: "Specification support",
    mtp: "We help write brands into consultant specs and back your tender and BoQ submissions.",
    box: "No spec influence — you compete on lowest price alone.",
  },
  {
    point: "Training & certification",
    mtp: "Vendor certification that keeps your engineers current, tender-eligible and warranty-qualified.",
    box: "No enablement. Certification is on you.",
  },
  {
    point: "After-sales",
    mtp: "Warranty, RMA handling and on-site preventive maintenance — notably for industrial and DC power.",
    box: "Ships and forgets. Support stops at delivery.",
  },
];

export default function WhyMtpPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Why MTP"
        title="Value-added means we engineer, not just ship boxes"
        intro="Against broadline distributors we win on security specialisation and integration engineering — de-risking your design and sizing so commissioning goes right the first time."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Why MTP" },
        ]}
      />

      {/* Value-added services — dark numbered grid */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="shell relative">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">Value-added services</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[46px]">
              Six ways we add value on top of the box
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-2xl text-balance text-[15.5px] leading-relaxed text-white/65">
              From the first design conversation to after-sales service, every
              stage is engineered to help our partners win and deliver.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {whyMtp.map((v, i) => (
              <Reveal key={v.title} delay={i % 3}>
                <div className="group h-full bg-ink p-7 transition-colors hover:bg-white/[0.04]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-[15px] font-medium text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-[17px] font-medium">{v.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MTP vs box-movers comparison */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">The difference</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              MTP vs the box-movers
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-2xl text-balance text-[15.5px] leading-relaxed text-ink-muted">
              A broadline distributor sells you a price. A value-added
              distributor sells you a working, de-risked system.
            </p>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-2xl border border-line">
            {/* header row */}
            <div className="hidden grid-cols-[1.1fr_1.4fr_1.4fr] bg-surface-alt text-[12.5px] font-medium uppercase tracking-wide text-ink-muted md:grid">
              <div className="px-6 py-4">Capability</div>
              <div className="border-l border-line px-6 py-4 text-accent">MTP — Value-Added</div>
              <div className="border-l border-line px-6 py-4">Box-mover</div>
            </div>
            {comparison.map((row, i) => (
              <Reveal key={row.point}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1.4fr] ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <div className="bg-surface-alt px-6 py-5 text-[15px] font-medium text-ink md:bg-white">
                    {row.point}
                  </div>
                  <div className="border-line px-6 py-5 text-[14px] leading-relaxed text-ink md:border-l">
                    <span className="mb-1 block text-[11.5px] font-medium uppercase tracking-wide text-accent md:hidden">
                      MTP
                    </span>
                    {row.mtp}
                  </div>
                  <div className="border-t border-line px-6 py-5 text-[14px] leading-relaxed text-ink-muted md:border-l md:border-t-0">
                    <span className="mb-1 block text-[11.5px] font-medium uppercase tracking-wide text-ink-muted md:hidden">
                      Box-mover
                    </span>
                    {row.box}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof / stats band */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">Proven at scale</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[46px]">
              The numbers behind the engineering
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-5 py-8 text-center md:text-left">
                <div className="display text-3xl text-white md:text-4xl">{s.value}</div>
                <div className="mt-1.5 text-[12.5px] leading-snug text-white/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal className="text-center">
            <span className="eyebrow justify-center">FAQ</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mx-auto mt-4 max-w-3xl text-balance text-center text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              Questions partners ask us
            </h2>
          </Reveal>
          <div className="mt-12">
            <Faq items={generalFaqs} />
          </div>
          <Reveal className="mt-10 text-center">
            <a href="/partners" className="btn btn-ghost">
              See the partner programme <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Engineer your next project with us"
        intro="Bring us your opportunity — our engineers will design the BoM, size storage and power, and back your bid with pre-sales support."
        primary={{ label: "Become a Partner", href: "/partners" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </PageShell>
  );
}
