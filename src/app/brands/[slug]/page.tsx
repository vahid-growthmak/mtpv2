import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import { brands, solutions } from "@/data/site";
import { brandInfo } from "@/data/content";

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

// Best-effort map from a brand's solution line to matching solution slugs.
const lineToSolutions: Record<string, string[]> = {
  "Access · Intrusion · PA · Fire": [
    "access-control-intrusion",
    "fire-alarm-systems",
    "public-address-conference",
  ],
  "CCTV & VMS": ["cctv-video-surveillance"],
  "CCTV · Network · Storage": [
    "cctv-video-surveillance",
    "networking-server-storage",
  ],
  CCTV: ["cctv-video-surveillance"],
  VMS: ["cctv-video-surveillance"],
  Storage: ["networking-server-storage"],
  "Cabling & Networking": ["networking-server-storage"],
  "Access Control": ["access-control-intrusion"],
  "AI Face Recognition": ["access-control-intrusion"],
  PSIM: ["ibms-psim-control-room"],
  "Control Room": ["ibms-psim-control-room"],
  "Video Wall": ["ibms-psim-control-room"],
  Power: ["power-solutions"],
};

export function generateStaticParams() {
  return brands.map((b) => ({ slug: slugify(b.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => slugify(b.name) === slug);
  if (!brand) return { title: "Brand — MTP Distribution" };
  const info = brandInfo[brand.name];
  return {
    title: `${brand.name} — MTP Distribution`,
    description: info?.makes,
  };
}

const valueCards = (name: string) => [
  {
    title: "Regional stock & logistics",
    desc: `${name} availability from our Dubai import/re-export hub and Oman presence — consolidated on a single invoice across 30+ brands.`,
  },
  {
    title: "Engineering pre-sales",
    desc: `Our engineers size, specify and design ${name} into your bill of materials and reference architecture before you bid.`,
  },
  {
    title: "Integration with other lines",
    desc: `We tie ${name} into CCTV, access, fire, PA, PSIM and power so partners deliver true end-to-end systems.`,
  },
  {
    title: "Warranty & RMA support",
    desc: `Vendor-backed warranty, RMA handling and after-sales service keep your projects and engineers covered.`,
  },
];

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((b) => slugify(b.name) === slug);
  if (!brand) notFound();

  const info = brandInfo[brand.name];
  const relatedSlugs = info ? lineToSolutions[info.line] ?? [] : [];
  const related = solutions.filter((s) => relatedSlugs.includes(s.slug));
  const others = brands.filter((b) => b.name !== brand.name).slice(0, 8);

  return (
    <PageShell>
      <InnerHero
        eyebrow={info?.line}
        title={brand.name}
        intro={info?.makes}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />

      {/* Intro — logo card + details */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-line bg-surface-alt p-12">
                <span className="relative h-16 w-full">
                  <Image
                    src={`/mtp/brands/${brand.file}`}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="420px"
                    className="object-contain"
                  />
                </span>
              </div>
            </Reveal>

            <div>
              <SectionHead
                label="The Brand"
                title={`${brand.name} at a glance`}
              />

              <Reveal delay={2}>
                <dl className="mt-8 divide-y divide-line border-y border-line">
                  <div className="flex gap-6 py-4">
                    <dt className="w-32 shrink-0 text-[13px] font-medium uppercase tracking-wide text-ink-muted">
                      Origin
                    </dt>
                    <dd className="text-[15px] text-ink">{info?.origin}</dd>
                  </div>
                  <div className="flex gap-6 py-4">
                    <dt className="w-32 shrink-0 text-[13px] font-medium uppercase tracking-wide text-ink-muted">
                      What they make
                    </dt>
                    <dd className="text-[15px] text-ink">{info?.makes}</dd>
                  </div>
                  <div className="flex gap-6 py-4">
                    <dt className="w-32 shrink-0 text-[13px] font-medium uppercase tracking-wide text-ink-muted">
                      Solution line
                    </dt>
                    <dd className="text-[15px] text-ink">{info?.line}</dd>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={3}>
                <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-muted">
                  MTP distributes {brand.name} across the UAE and Oman with
                  engineering-led pre-sales — designing it into multi-vendor
                  bills of materials, supporting consultant specs and tenders,
                  and backing every project with regional stock, warranty and
                  after-sales service.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why buy from MTP */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Why MTP"
            title={`Why buy ${brand.name} from MTP`}
            intro="More than a box-mover — we design, integrate and support every brand we carry."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueCards(brand.name).map((c, i) => (
              <Reveal key={c.title} delay={i}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1">
                  <h3 className="text-[16px] font-medium text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related solutions */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Related Solutions"
            title="Where this brand fits"
            intro={`${brand.name} powers the lines below — explore how MTP integrates it into complete systems.`}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.length > 0 ? (
              related.map((s, i) => (
                <Reveal key={s.slug} delay={i}>
                  <a
                    href={`/solutions/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-ink"
                  >
                    <h3 className="text-[17px] font-medium text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                      {s.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
                      View solution{" "}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <a
                  href="/solutions"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-ink"
                >
                  <h3 className="text-[17px] font-medium text-ink">
                    Explore our solutions
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                    See the full range of MTP solution lines and how this brand
                    fits into an end-to-end system.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
                    All solutions{" "}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Other brands */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <SectionHead
            align="center"
            label="The Portfolio"
            title="Other brands we carry"
          />

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {others.map((b, i) => (
              <Reveal key={b.file} delay={i % 4}>
                <a
                  href={`/brands/${slugify(b.name)}`}
                  className="group flex aspect-[4/3] items-center justify-center bg-white p-6 transition-colors hover:bg-accent-soft"
                  title={b.name}
                >
                  <span className="relative h-9 w-full opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0">
                    <Image
                      src={`/mtp/brands/${b.file}`}
                      alt={`${b.name} logo`}
                      fill
                      sizes="160px"
                      className="object-contain"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-9 flex justify-center">
            <a href="/brands" className="btn btn-primary">
              View all brands <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={`Request a quote for ${brand.name}`}
        intro="Tell us your project and our engineers will scope, price and support a complete multi-vendor solution."
        primary={{ label: "Request a Quote", href: "/contact" }}
        secondary={{ label: "Become a Partner", href: "/partners" }}
      />
    </PageShell>
  );
}
