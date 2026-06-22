import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { industries, solutions, clientLogos } from "@/data/site";
import { industryInfo } from "@/data/content";
import { ArrowUpRight, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  return {
    title: industry
      ? `${industry.name} — Industries — MTP Distribution`
      : "Industries — MTP Distribution",
  };
}

// Map a free-text "need" to the most relevant solution line.
function solutionsForNeed(need: string) {
  const n = need.toLowerCase();
  return solutions.filter((s) => {
    const hay = `${s.title} ${s.short} ${s.desc}`.toLowerCase();
    if (n.includes("cctv") || n.includes("surveillance") || n.includes("camera"))
      return s.slug === "cctv-video-surveillance";
    if (n.includes("anpr") || n.includes("lpr"))
      return s.slug === "cctv-video-surveillance";
    if (n.includes("loss prevention") || n.includes("people counting"))
      return s.slug === "cctv-video-surveillance";
    if (n.includes("access") || n.includes("intrusion") || n.includes("face") || n.includes("safeguard"))
      return s.slug === "access-control-intrusion";
    if (n.includes("fire") || n.includes("life-safety") || n.includes("life safety") || n.includes("gas detection"))
      return s.slug === "fire-alarm-systems";
    if (n.includes("pa") || n.includes("pava") || n.includes("background music") || n.includes("paging"))
      return s.slug === "public-address-conference";
    if (n.includes("storage") || n.includes("network") || n.includes("server"))
      return s.slug === "networking-server-storage";
    if (n.includes("psim") || n.includes("control room") || n.includes("command") || n.includes("video wall") || n.includes("ibms") || n.includes("monitoring"))
      return s.slug === "ibms-psim-control-room";
    if (n.includes("power") || n.includes("ups"))
      return s.slug === "power-solutions";
    return hay.includes(n);
  });
}

// Match an industry's anchor string to known client logos.
function anchorLogos(anchors: string) {
  const a = anchors.toLowerCase();
  return clientLogos.filter((c) => {
    const name = c.name.toLowerCase();
    if (a.includes("pdo") && name.includes("petroleum development")) return true;
    if (a.includes("moh") && name.includes("ministry of health")) return true;
    return (
      a.includes(name) ||
      name.split(" ").every((w) => w.length > 3 && a.includes(w))
    );
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  const info = industryInfo[slug];
  if (!industry || !info) notFound();

  // Unique set of relevant solution lines across all needs.
  const relevant = solutions.filter((s) =>
    info.needs.some((need) => solutionsForNeed(need).some((m) => m.slug === s.slug))
  );
  const logos = anchorLogos(info.anchors);

  return (
    <PageShell>
      <InnerHero
        eyebrow="Industry"
        title={industry.name}
        intro={info.desc}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
      />

      {/* What this sector needs */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">What this sector needs</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              The requirements that define a {industry.name.toLowerCase()} deployment
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {info.needs.map((need, i) => (
              <Reveal key={need} delay={i % 2} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent/30">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 4.5 4.5L19 7" />
                    </svg>
                  </span>
                  <span className="text-[15.5px] font-medium text-ink">{need}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How MTP helps — needs mapped to solution lines */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">How MTP helps</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              Each requirement maps to a solution line we design and supply
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {info.needs.map((need, i) => {
              const matches = solutionsForNeed(need);
              const primary = matches[0];
              return (
                <Reveal key={need} delay={i % 2} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                    <div className="flex items-center gap-2 text-[12.5px] font-medium uppercase tracking-wide text-ink-muted">
                      <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
                      Requirement
                    </div>
                    <h3 className="mt-3 text-[18px] font-medium text-ink">{need}</h3>
                    {primary && (
                      <a
                        href={`/solutions/${primary.slug}`}
                        className="group mt-5 flex items-center justify-between border-t border-line pt-4 text-[14px] text-ink transition-colors hover:text-accent"
                      >
                        <span>
                          <span className="text-ink-muted">Solution line · </span>
                          <span className="font-medium">{primary.title}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
                      </a>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reference anchors */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Reference anchors</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              Trusted on {industry.name.toLowerCase()} projects
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 max-w-2xl text-balance text-[15.5px] leading-relaxed text-ink-muted">
              {info.anchors === "Target vertical"
                ? "A priority vertical for MTP — our portfolio and references across adjacent sectors directly de-risk new deployments here."
                : `Reference deployments that de-risk every new project: ${info.anchors}.`}
            </p>
          </Reveal>

          {logos.length > 0 && (
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:grid-cols-4">
              {logos.map((c, i) => (
                <Reveal key={c.file} delay={i % 4}>
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
          )}
        </div>
      </section>

      {/* Related solutions */}
      <section className="bg-ink py-20 text-white md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow text-white before:bg-accent">Related solutions</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] sm:text-[40px] md:text-[46px]">
              The solution lines behind this sector
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relevant.map((s, i) => (
              <Reveal key={s.slug} delay={i % 3} className="h-full">
                <a
                  href={`/solutions/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium uppercase tracking-wide text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:text-white" />
                  </div>
                  <h3 className="mt-4 text-[18px] font-medium">{s.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-white/65">{s.short}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
