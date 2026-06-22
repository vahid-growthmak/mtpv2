import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { brands } from "@/data/site";
import { brandInfo } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Brands — MTP Distribution",
  description:
    "30+ global security, AI, storage, control-room and power vendors — anchored by Bosch — each with a dedicated page, datasheets and engineering support.",
};

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export default function BrandsPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Our Brands"
        title="A portfolio the box-movers can't match"
        intro="More than 30 vendors anchored by Bosch and complemented by best-in-class AI, storage, control-room and power lines — each with a dedicated page, datasheets and project support."
        crumbs={[{ label: "Home", href: "/" }, { label: "Brands" }]}
      />

      {/* Logo grid — all brands */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <SectionHead
            align="center"
            label="The Line Card"
            title="Every brand we represent"
            intro="One consolidated source across seven solution lines. Tap a brand for origin, what they make and how MTP distributes and supports it regionally."
          />

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((b, i) => (
              <Reveal key={b.file} delay={i % 4}>
                <a
                  href={`/brands/${slugify(b.name)}`}
                  className="group flex aspect-[4/3] flex-col items-center justify-center gap-4 bg-white p-6 text-center transition-colors hover:bg-accent-soft"
                  title={b.name}
                >
                  <span className="relative h-10 w-full opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0">
                    <Image
                      src={`/mtp/brands/${b.file}`}
                      alt={`${b.name} logo`}
                      fill
                      sizes="220px"
                      className="object-contain"
                    />
                  </span>
                  <span className="flex flex-col items-center gap-0.5">
                    <span className="text-[14px] font-medium text-ink">
                      {b.name}
                    </span>
                    <span className="text-[12px] text-ink-muted">
                      {brandInfo[b.name]?.line}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark band — request a vendor */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <Reveal>
                <span className="eyebrow text-white before:bg-accent">
                  Portfolio
                </span>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="display mt-5 max-w-2xl text-balance text-[28px] leading-[1.08] sm:text-[38px]">
                  Can&apos;t find a brand? We add vendors as the market moves.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/65">
                  Our line card grows with consultant specs and integrator
                  demand. If you need a vendor we don&apos;t list yet, tell us —
                  we evaluate and onboard brands that strengthen our seven
                  solution lines.
                </p>
              </Reveal>
            </div>
            <Reveal delay={2} className="flex md:justify-end">
              <a href="/contact" className="btn btn-accent">
                Request a brand <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
