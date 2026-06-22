import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { projects, solutions } from "@/data/site";
import { projectDetail } from "@/data/content";
import { ArrowUpRight, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.client} — Case Studies — MTP Distribution`
      : "Case Studies — MTP Distribution",
  };
}

// Map a solution tag token (e.g. "CCTV", "Face Recognition") to a solution line.
function solutionForTag(tag: string) {
  const t = tag.toLowerCase();
  if (t.includes("cctv") || t.includes("surveillance") || t.includes("anpr") || t.includes("face"))
    return solutions.find((s) => s.slug === "cctv-video-surveillance");
  if (t.includes("access"))
    return solutions.find((s) => s.slug === "access-control-intrusion");
  if (t.includes("fire"))
    return solutions.find((s) => s.slug === "fire-alarm-systems");
  if (t.includes("pa") || t.includes("pava"))
    return solutions.find((s) => s.slug === "public-address-conference");
  if (t.includes("network") || t.includes("storage") || t.includes("server"))
    return solutions.find((s) => s.slug === "networking-server-storage");
  if (t.includes("psim") || t.includes("control") || t.includes("command") || t.includes("ibms"))
    return solutions.find((s) => s.slug === "ibms-psim-control-room");
  if (t.includes("power") || t.includes("ups"))
    return solutions.find((s) => s.slug === "power-solutions");
  return undefined;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail = projectDetail[slug];
  const tags = project.solution.split("·").map((t) => t.trim()).filter(Boolean);
  const more = projects.filter((p) => p.slug !== slug);

  // Fallback facts when no projectDetail entry exists.
  const facts =
    detail?.facts ?? [
      { k: "Vertical", v: project.vertical },
      { k: "Lines", v: project.solution },
    ];

  return (
    <PageShell>
      <InnerHero
        eyebrow={project.vertical}
        title={project.client}
        intro={project.blurb}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.client },
        ]}
      />

      {/* Facts row */}
      <section className="bg-white py-12 md:py-16">
        <div className="shell">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {facts.map((f, i) => (
              <Reveal key={f.k} delay={i % 3}>
                <div className="flex h-full flex-col gap-2 bg-white p-7">
                  <span className="text-[12.5px] font-medium uppercase tracking-wide text-ink-muted">
                    {f.k}
                  </span>
                  <span className="text-[16px] font-medium text-ink">{f.v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logo card + narrative */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal>
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-ink">
                <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(120%_120%_at_20%_0%,rgba(30,106,255,0.55),transparent_60%)]" />
                <div className="relative grid h-28 w-52 place-items-center rounded-xl bg-white p-5">
                  <Image
                    src={`/mtp/clients/${project.slug}.jpg`}
                    alt={`${project.client} logo`}
                    width={180}
                    height={84}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11.5px] font-medium uppercase tracking-wide text-white backdrop-blur">
                  {project.vertical}
                </span>
              </div>
            </Reveal>

            <div className="flex flex-col gap-10">
              <Reveal>
                <div>
                  <span className="eyebrow">The challenge</span>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                    {detail?.challenge ?? project.blurb}
                  </p>
                </div>
              </Reveal>
              {detail && (
                <Reveal delay={1}>
                  <div>
                    <span className="eyebrow">Our approach</span>
                    <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                      {detail.approach}
                    </p>
                  </div>
                </Reveal>
              )}
              {detail && (
                <Reveal delay={2}>
                  <div>
                    <span className="eyebrow">The outcome</span>
                    <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
                      {detail.outcome}
                    </p>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions used */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Solutions used</span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-4 max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]">
              The solution lines behind this deployment
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tags.map((tag, i) => {
              const s = solutionForTag(tag);
              const inner = (
                <div className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]">
                  <div>
                    <span className="text-[12.5px] font-medium uppercase tracking-wide text-accent">
                      {tag}
                    </span>
                    {s && (
                      <p className="mt-1 text-[15px] font-medium text-ink">{s.title}</p>
                    )}
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-ink-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
              );
              return (
                <Reveal key={tag} delay={i % 3} className="h-full">
                  {s ? (
                    <a href={`/solutions/${s.slug}`} className="block h-full">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="eyebrow">More projects</span>
            </Reveal>
            <Reveal>
              <a href="/projects" className="btn btn-ghost shrink-0">
                View all projects <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i % 3} className="h-full">
                <a
                  href={`/projects/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(2,2,2,0.3)]"
                >
                  <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden bg-ink">
                    <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(120%_120%_at_20%_0%,rgba(30,106,255,0.55),transparent_60%)]" />
                    <div className="relative grid h-20 w-40 place-items-center rounded-xl bg-white p-4">
                      <Image
                        src={`/mtp/clients/${p.slug}.jpg`}
                        alt={`${p.client} logo`}
                        width={140}
                        height={64}
                        className="max-h-12 w-auto object-contain"
                      />
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur">
                      {p.vertical}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[18px] font-medium text-ink">{p.client}</h3>
                    <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-muted">{p.blurb}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                      <span className="text-[12px] font-medium uppercase tracking-wide text-accent">{p.solution}</span>
                      <ArrowUpRight className="h-5 w-5 text-ink-muted transition group-hover:text-accent" />
                    </div>
                  </div>
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
