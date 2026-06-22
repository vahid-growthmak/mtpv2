import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/data/site";
import { Phone, Chat, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — MTP Distribution",
};

const offices = [
  {
    city: "Dubai, UAE",
    role: "Headquarters",
    address: "Al Mozna Building, Office 315, Al Nahda St, Al Qusais 1, Dubai",
    phone: company.uaePhone,
    map: "Al Qusais Dubai",
  },
  {
    city: "Muscat, Oman",
    role: "Oman Office",
    address: "Way No. 4924, Block 149, Ruwi, Muscat",
    phone: company.omanPhone,
    map: "Ruwi Muscat",
  },
];

const quickLinks = [
  { label: "Become a Partner", href: "/partners" },
  { label: "Explore Solutions", href: "/solutions" },
  { label: "View Brands", href: "/brands" },
  { label: "Careers", href: "/careers" },
];

export default function ContactPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Contact"
        title="Let's talk"
        intro="Tell us about your project, opportunity or brand — and we'll route your enquiry to the right desk in the UAE or Oman."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Form + details */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left — form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Right — contact details */}
          <Reveal delay={1}>
            <div className="space-y-4">
              {/* Direct contacts */}
              <div className="rounded-2xl border border-line bg-surface-alt p-7">
                <h3 className="text-[17px] font-medium text-ink">Talk to us directly</h3>
                <div className="mt-5 space-y-4">
                  <a
                    href={`tel:${company.uaePhone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-[15px] text-ink transition-colors hover:text-accent"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-accent">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[12px] uppercase tracking-wide text-ink-muted">
                        UAE
                      </span>
                      {company.uaePhone}
                    </span>
                  </a>
                  <a
                    href={`tel:${company.omanPhone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-[15px] text-ink transition-colors hover:text-accent"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-accent">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[12px] uppercase tracking-wide text-ink-muted">
                        Oman
                      </span>
                      {company.omanPhone}
                    </span>
                  </a>
                  <a
                    href={company.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[15px] text-ink transition-colors hover:text-accent"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-accent">
                      <Chat className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[12px] uppercase tracking-wide text-ink-muted">
                        WhatsApp
                      </span>
                      Chat with us
                    </span>
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 text-[15px] text-ink transition-colors hover:text-accent"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-accent">
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-[12px] uppercase tracking-wide text-ink-muted">
                        Email
                      </span>
                      {company.email}
                    </span>
                  </a>
                </div>
              </div>

              {/* Office address cards */}
              {offices.map((o) => (
                <div key={o.city} className="rounded-2xl border border-line bg-white p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[17px] font-medium text-ink">{o.city}</h3>
                    <span className="text-[12px] font-medium uppercase tracking-wide text-accent">
                      {o.role}
                    </span>
                  </div>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                    {o.address}
                  </p>
                  <p className="mt-3 text-[14.5px] text-ink">{o.phone}</p>
                </div>
              ))}

              {/* Quick links */}
              <div className="rounded-2xl border border-line bg-surface-alt p-7">
                <h3 className="text-[17px] font-medium text-ink">Quick links</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[13.5px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Office maps */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Visit us</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              Two offices across the Gulf
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i}>
                <div className="overflow-hidden rounded-2xl border border-line bg-white">
                  <iframe
                    title={`Map of ${o.city}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(o.map)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0"
                  />
                  <div className="p-7">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[18px] font-medium text-ink">{o.city}</h3>
                      <span className="text-[12px] font-medium uppercase tracking-wide text-accent">
                        {o.role}
                      </span>
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
                      {o.address}
                    </p>
                    <p className="mt-3 text-[14.5px] text-ink">{o.phone}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
