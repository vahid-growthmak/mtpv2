import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { stats, clientLogos } from "@/data/site";
import { aboutValues } from "@/data/content";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us — MTP Distribution",
};

const vadModel = [
  {
    n: "01",
    title: "OEM / Vendor",
    desc: "30+ global manufacturers — Bosch, Milesight, Infortrend and more — build the products and appoint MTP to carry them in the region.",
  },
  {
    n: "02",
    title: "MTP Distribution",
    desc: "We stock, engineer and certify: pre-sales design, BoM sizing, training and after-sales — the value added on top of the box.",
  },
  {
    n: "03",
    title: "System Integrator",
    desc: "Our certified integrators and resellers design, install and commission the solution on the ground for the customer.",
  },
  {
    n: "04",
    title: "End-User",
    desc: "Governments, energy operators, hospitals and enterprises run the deployed system — backed end-to-end by the channel above.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="About Us"
        title="The Gulf's engineering-led security distributor"
        intro="A Dubai-headquartered value-added distributor connecting 30+ global brands to the integrators who secure the region's most critical sites."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Company story */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="eyebrow">Who we are</span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="display mt-4 max-w-xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[44px]">
                A young, dynamic distributor led by market veterans and engineers
              </h2>
            </Reveal>
          </div>
          <div className="space-y-5 text-[15.5px] leading-relaxed text-ink-muted">
            <Reveal delay={1}>
              <p>
                MTP Distribution is a Dubai-headquartered value-added
                distributor (VAD) of security, life-safety and infrastructure
                technology. In around five years we have grown to represent 30+
                global brands across 12 business regions, with more than 100
                projects delivered for some of the region&rsquo;s most
                demanding operators.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p>
                We are young and dynamic, but the team behind us is not. MTP is
                led by veterans who have spent decades in the regional security
                market, working alongside the engineers who design and size the
                systems our partners deliver. That combination is the whole
                point of a value-added distributor — we do not just move boxes,
                we engineer the solution around them.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p>
                Operating on a two-tier channel model — OEM to MTP to integrator
                to end-user — we sit between the world&rsquo;s manufacturers and
                the system integrators who build the region. We stock the
                portfolio, design the multi-vendor system, certify the
                engineers and stand behind the project long after delivery.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-surface-alt py-16 md:py-20">
        <div className="shell">
          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white px-5 py-8 text-center md:text-left">
                  <div className="display text-3xl text-ink md:text-4xl">{s.value}</div>
                  <div className="mt-1.5 text-[12.5px] leading-snug text-ink-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Mission & Vision</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              Why we exist, and where we&rsquo;re headed
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Reveal delay={1} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-alt p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                  Mission
                </span>
                <p className="mt-4 text-[20px] leading-snug text-ink md:text-[22px]">
                  &ldquo;Contribution to partners through the introduction of
                  innovative products and provision of quality services.&rdquo;
                </p>
              </div>
            </Reveal>
            <Reveal delay={2} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-alt p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                  Vision
                </span>
                <p className="mt-4 text-[20px] leading-snug text-ink md:text-[22px]">
                  &ldquo;To be one of the renowned Value-Added distribution
                  houses in the global market.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How VAD works — 4-tier model */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">The channel</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[46px]">
              How value-added distribution works
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-2xl text-balance text-[15.5px] leading-relaxed text-white/65">
              A two-tier model where every layer adds value — from the
              manufacturer&rsquo;s technology to the engineering and support we
              wrap around it, to the integrator who delivers it on site.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vadModel.map((step, i) => (
              <Reveal key={step.n} delay={i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent/40">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-[18px] font-medium">{step.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">What we stand for</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              The values that shape every project
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutValues.map((v, i) => (
              <Reveal key={v.title} delay={i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[18px] font-medium text-ink">{v.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients logo wall */}
      <section className="bg-surface-alt py-16 md:py-20">
        <div className="shell">
          <Reveal className="text-center">
            <p className="text-[12.5px] font-medium uppercase tracking-wide text-ink-muted">
              Trusted on projects for
            </p>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:grid-cols-5">
            {clientLogos.map((c, i) => (
              <Reveal key={c.file} delay={i % 5}>
                <div className="flex aspect-[3/2] items-center justify-center bg-white p-5">
                  <span className="relative h-12 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
                    <Image
                      src={`/mtp/clients/${c.file}`}
                      alt={`${c.name} logo`}
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <a href="/projects" className="btn btn-ghost">
              See our projects <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
