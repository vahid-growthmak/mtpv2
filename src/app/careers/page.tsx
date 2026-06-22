import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { careers } from "@/data/content";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Careers — MTP Distribution",
};

const perks = [
  {
    title: "Engineering-led culture",
    desc: "Work on real multi-vendor systems with engineers who design and size them — not a sales floor reading datasheets.",
  },
  {
    title: "Region-defining projects",
    desc: "Touch the security backbone behind energy, government, healthcare and transport across the UAE, Oman and the wider Gulf.",
  },
  {
    title: "Vendor certification",
    desc: "Get certified across 30+ global brands — from Bosch to AI face recognition and PSIM — and keep growing your stack.",
  },
  {
    title: "Room to grow",
    desc: "A young, fast-moving distributor where ownership is rewarded and your scope expands as quickly as you do.",
  },
];

const culture = [
  {
    title: "We solve, not sell",
    desc: "The best answer is the one that works on site — we recommend what fits, not what is easiest to ship.",
  },
  {
    title: "Partners come first",
    desc: "Our success is measured by whether our integrators win and deliver. That mindset shapes every role here.",
  },
  {
    title: "Stay technical",
    desc: "We invest in training and certification because deep product knowledge is how we add value.",
  },
];

export default function CareersPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Careers"
        title="Build the region's security backbone with us"
        intro="Join a young, engineering-led distributor and help integrators secure the Gulf's most critical sites — from oil & gas to government and healthcare."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Careers" },
        ]}
      />

      {/* Why work here */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Why work here</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              Real engineering, real projects, real growth
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[18px] font-medium text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Open roles</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              Where we&rsquo;re hiring right now
            </h2>
          </Reveal>

          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
            {/* header row */}
            <div className="hidden grid-cols-[1.6fr_1fr_1fr_0.8fr_auto] gap-4 border-b border-line bg-surface-alt px-6 py-4 text-[12.5px] font-medium uppercase tracking-wide text-ink-muted md:grid">
              <div>Role</div>
              <div>Team</div>
              <div>Location</div>
              <div>Type</div>
              <div className="text-right">Apply</div>
            </div>
            {careers.map((role, i) => (
              <Reveal key={role.role}>
                <div
                  className={`grid grid-cols-1 items-center gap-2 px-6 py-5 transition-colors hover:bg-surface-alt md:grid-cols-[1.6fr_1fr_1fr_0.8fr_auto] md:gap-4 ${
                    i > 0 ? "border-t border-line" : ""
                  }`}
                >
                  <div className="text-[16.5px] font-medium text-ink">{role.role}</div>
                  <div className="text-[14px] text-ink-muted">
                    <span className="mr-2 text-[11.5px] font-medium uppercase tracking-wide text-accent md:hidden">
                      Team
                    </span>
                    {role.team}
                  </div>
                  <div className="text-[14px] text-ink-muted">
                    <span className="mr-2 text-[11.5px] font-medium uppercase tracking-wide text-accent md:hidden">
                      Location
                    </span>
                    {role.location}
                  </div>
                  <div className="text-[14px] text-ink-muted">
                    <span className="mr-2 text-[11.5px] font-medium uppercase tracking-wide text-accent md:hidden">
                      Type
                    </span>
                    {role.type}
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent transition-colors hover:text-accent-ink"
                    >
                      Apply <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="text-[14px] text-ink-muted">
              Don&rsquo;t see your role?{" "}
              <a href="/contact" className="font-medium text-accent hover:text-accent-ink">
                Send us your CV
              </a>{" "}
              — we&rsquo;re always glad to meet strong engineers and sales talent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Culture / values */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">How we work</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[46px]">
              The culture you&rsquo;d be joining
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {culture.map((c, i) => (
              <Reveal key={c.title} delay={i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent/40">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[18px] font-medium">{c.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Don't see your role?"
        intro="We're always glad to meet strong engineers and sales talent. Send us your CV and tell us where you'd add value."
        primary={{ label: "Send us your CV", href: "/contact" }}
        secondary={{ label: "About MTP", href: "/about" }}
      />
    </PageShell>
  );
}
