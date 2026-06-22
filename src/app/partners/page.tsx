import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { Faq } from "@/components/site/Faq";
import { PartnerForm } from "@/components/site/PartnerForm";
import { partnerPerks, partnerSteps, generalFaqs } from "@/data/content";

export const metadata: Metadata = {
  title: "Become a Partner — MTP Distribution",
};

const partnerTypes = [
  {
    title: "System integrators",
    desc: "Win and deliver multi-system security and life-safety projects with one source and engineering pre-sales.",
  },
  {
    title: "ELV / security contractors",
    desc: "CCTV, access, fire, PA and power on a single consolidated invoice, sized and specified for the job.",
  },
  {
    title: "IT & storage resellers",
    desc: "Add surveillance-grade SAN/HCI storage, industrial switching and critical power to your portfolio.",
  },
  {
    title: "Consultants",
    desc: "Get vendor-neutral reference architectures and help writing compliant, future-proof specifications.",
  },
];

export default function PartnersPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Become a Partner"
        title="A distribution partner that helps you win and deliver"
        intro="One multi-brand source, project pricing, engineering pre-sales and access to premium AI lines — built to help integrators and resellers win bids, not just supply boxes."
        crumbs={[{ label: "Home", href: "/" }, { label: "Partners" }]}
      />

      {/* Perks grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Why partner with MTP"
            title="The support behind every winning bid"
            intro="Everything you need to design, win and deliver multi-vendor projects — from one engineering-led distributor."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partnerPerks.map((p, i) => (
              <Reveal key={p.title} delay={i % 3} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-[19px] font-medium text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process — dark band */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">How it works</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[46px]">
              From application to first project win — in four steps
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {partnerSteps.map((s, i) => (
              <Reveal key={s.n} delay={i} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent/40">
                  <span className="text-[28px] font-medium tracking-tight text-accent">{s.n}</span>
                  <h3 className="mt-4 text-[19px] font-medium">{s.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who we partner with */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Who we partner with"
            title="Built for the channel"
            intro="If you design, supply or install security, safety, IT or power systems, there's a place for you in the programme."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {partnerTypes.map((t, i) => (
              <Reveal key={t.title} delay={i % 2} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                  <h3 className="text-[19px] font-medium text-ink">{t.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="eyebrow">Apply to join</span>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="display max-w-md text-balance text-[30px] leading-[1.08] text-ink sm:text-[38px]">
                  Become an MTP partner
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="max-w-md text-[15.5px] leading-relaxed text-ink-muted">
                  Send us a few details and our channel team will confirm fit, assign a tier and set you up with pricing, certification and deal registration.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <ul className="mt-2 flex flex-col gap-3 text-[14.5px] text-ink-muted">
                  {[
                    "Protected project pricing & deal registration",
                    "Engineering pre-sales and BoM design",
                    "Vendor certification for your engineers",
                    "Regional stock across UAE & Oman",
                  ].map((l) => (
                    <li key={l} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {l}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={1}>
              <PartnerForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Questions"
            title="Partner programme FAQ"
            align="center"
          />
          <div className="mt-12">
            <Faq items={generalFaqs} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
