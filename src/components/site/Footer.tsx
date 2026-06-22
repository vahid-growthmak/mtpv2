import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { company, nav, solutions } from "@/data/site";
import { ArrowRight, Phone, Chat } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="shell grid gap-8 py-14 md:grid-cols-2 md:items-center md:py-16">
          <Reveal>
            <h2 className="display max-w-md text-balance text-[26px] leading-tight sm:text-[32px]">
              Get new brands, datasheets and project wins in your inbox
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <form className="flex w-full flex-col gap-3 sm:flex-row md:justify-end">
              <input
                type="email"
                required
                placeholder="Your work email"
                aria-label="Your work email"
                className="h-13 min-h-[52px] w-full rounded-full border border-white/15 bg-white/5 px-5 text-[15px] text-white placeholder:text-white/40 outline-none transition focus:border-accent sm:max-w-xs"
              />
              <button type="submit" className="btn btn-accent shrink-0">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Main footer */}
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <div className="inline-flex rounded-xl bg-white px-3 py-2.5">
            <Image src="/mtp/mtp-logo.png" alt="MTP Distribution" width={120} height={40} className="h-9 w-auto object-contain" />
          </div>
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/55">
            {company.tagline}. A Dubai-headquartered Value-Added Distributor of security, safety, IT, AI and power technology across UAE & Oman.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-[14px]">
            <a href={`tel:${company.uaePhone}`} className="flex items-center gap-2 text-white/70 hover:text-white">
              <Phone className="h-4 w-4 text-accent" /> UAE {company.uaePhone}
            </a>
            <a href={`tel:${company.omanPhone}`} className="flex items-center gap-2 text-white/70 hover:text-white">
              <Phone className="h-4 w-4 text-accent" /> Oman {company.omanPhone}
            </a>
            <a href={company.whatsapp} className="flex items-center gap-2 text-white/70 hover:text-white">
              <Chat className="h-4 w-4 text-accent" /> WhatsApp chat
            </a>
          </div>
        </div>

        <FooterCol
          title="Solutions"
          links={solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` }))}
        />

        <FooterCol
          title="Company"
          links={[
            ...nav.filter((n) => n.label !== "Solutions").map((n) => ({ label: n.label, href: n.href })),
            { label: "Why MTP", href: "/why-mtp" },
            { label: "Partners", href: "/partners" },
            { label: "Careers", href: "/careers" },
          ]}
        />

        <div>
          <h3 className="text-[13px] font-medium uppercase tracking-wide text-white/40">Offices</h3>
          <div className="mt-5 space-y-5 text-[13.5px] leading-relaxed text-white/60">
            <p>
              <span className="font-medium text-white">Dubai, UAE</span>
              <br />
              Al Mozna Building, Office 315, Al Nahda St, Al Qusais 1
            </p>
            <p>
              <span className="font-medium text-white">Muscat, Oman</span>
              <br />
              Way No. 4924, Block 149, Ruwi, Muscat
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} {company.legal}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-[13px] font-medium uppercase tracking-wide text-white/40">{title}</h3>
      <ul className="mt-5 space-y-3 text-[14px]">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-white/60 transition-colors hover:text-white">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
