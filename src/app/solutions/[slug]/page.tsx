import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { SectionHead } from "@/components/site/SectionHead";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/site/Faq";
import { solutions, brands } from "@/data/site";
import { solutionDetail, generalFaqs } from "@/data/content";
import { solutionIcons, ArrowRight, ArrowUpRight } from "@/components/icons";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  return {
    title: solution ? `${solution.title} — MTP Distribution` : "Solution — MTP Distribution",
  };
}

// 3-4 most relevant FAQs for a solution detail page.
const solutionFaqs = generalFaqs.filter((_, i) => i !== 1).slice(0, 4);

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  const detail = solutionDetail[slug];

  if (!solution || !detail) notFound();

  const Icon = solutionIcons[slug as keyof typeof solutionIcons];

  // Brands referenced in this line — match brand names against the solution's brand string.
  const lineBrands = brands.filter((b) => solution.brands.includes(b.name));
  const brandTags = solution.brands.split("·").map((b) => b.trim());
  const otherSolutions = solutions.filter((s) => s.slug !== slug);

  return (
    <PageShell>
      <InnerHero
        eyebrow="Solution"
        title={solution.title}
        intro={solution.short}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions", href: "/solutions" },
          { label: solution.title },
        ]}
      />

      {/* Overview */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-white">
                  {Icon && <Icon className="h-7 w-7" />}
                </span>
              </Reveal>
              <Reveal delay={1}>
                <span className="eyebrow mt-7 block">Overview</span>
              </Reveal>
              <Reveal delay={1}>
                <div className="mt-5 flex flex-wrap gap-2">
                  {brandTags.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-line bg-surface-alt px-3.5 py-1.5 text-[12.5px] font-medium text-ink"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={1}>
              <p className="text-balance text-[20px] leading-relaxed text-ink sm:text-[23px]">
                {detail.overview}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key capabilities */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="Key capabilities"
            title="What this solution line covers"
          />
          <ul className="mt-12 grid grid-cols-1 gap-x-12 gap-y-1 md:grid-cols-2">
            {detail.capabilities.map((cap, i) => (
              <Reveal as="li" key={cap} delay={i % 3}>
                <div className="flex items-start gap-4 border-b border-line py-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <p className="text-[15.5px] leading-relaxed text-ink">{cap}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What we supply */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="What we supply"
            title="Components in this line"
            intro="The building blocks MTP stocks and designs into your bill of materials."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detail.components.map((c, i) => (
              <Reveal key={c} delay={i % 3} className="h-full">
                <div className="flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-alt text-[13px] font-medium text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] font-medium text-ink">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & integration */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow text-white before:bg-accent">Architecture &amp; integration</span>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="display mt-4 text-balance text-[28px] leading-[1.1] sm:text-[36px]">
                  How it fits the wider system
                </h2>
              </Reveal>
            </div>
            <Reveal delay={1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
                <p className="text-[17px] leading-relaxed text-white/80 md:text-[18px]">
                  {detail.integrations}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Typical deployments */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <SectionHead
              label="Typical deployments"
              title="Where this line is deployed"
            />
            <Reveal delay={1}>
              <p className="text-balance text-[18px] leading-relaxed text-ink-muted">
                {detail.deployments}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brands in this line */}
      {lineBrands.length > 0 && (
        <section className="bg-surface-alt py-20 md:py-28">
          <div className="shell">
            <SectionHead
              label="Brands in this line"
              title="The vendors behind this solution"
            />
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {lineBrands.map((b, i) => (
                <Reveal key={b.name} delay={i % 4} className="h-full">
                  <div className="flex h-28 items-center justify-center rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.25)]">
                    <Image
                      src={`/mtp/brands/${b.file}`}
                      alt={b.name}
                      width={140}
                      height={56}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="FAQ"
            title="Common questions"
            align="center"
          />
          <div className="mt-12">
            <Faq items={solutionFaqs} />
          </div>
        </div>
      </section>

      {/* Explore other solutions */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <SectionHead
            label="More solutions"
            title="Explore other solution lines"
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherSolutions.map((s, i) => {
              const OtherIcon = solutionIcons[s.slug as keyof typeof solutionIcons];
              return (
                <Reveal key={s.slug} delay={i % 3} className="h-full">
                  <a
                    href={`/solutions/${s.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-alt text-ink transition-colors group-hover:bg-accent group-hover:text-white">
                      {OtherIcon && <OtherIcon className="h-5 w-5" />}
                    </span>
                    <span className="flex-1 text-[15px] font-medium text-ink">{s.title}</span>
                    <ArrowUpRight className="h-5 w-5 text-ink-muted transition group-hover:text-accent" />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        primary={{ label: "Request a Quote", href: "/contact" }}
      />
    </PageShell>
  );
}
