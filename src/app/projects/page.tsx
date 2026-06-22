import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { projects, clientLogos } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects — MTP Distribution",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Case Studies"
        title="Proof at the scale that matters"
        intro="Blue-chip deployments delivered through our partners — the references across energy, government and healthcare that de-risk MTP for every new project."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      {/* Projects grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i % 2} className="h-full">
                <a
                  href={`/projects/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(2,2,2,0.3)]"
                >
                  <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden bg-ink">
                    <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(120%_120%_at_20%_0%,rgba(30,106,255,0.55),transparent_60%)]" />
                    <div className="relative grid h-24 w-44 place-items-center rounded-xl bg-white p-4">
                      <Image
                        src={`/mtp/clients/${p.slug}.jpg`}
                        alt={`${p.client} logo`}
                        width={150}
                        height={70}
                        className="max-h-14 w-auto object-contain"
                      />
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[11.5px] font-medium uppercase tracking-wide text-white backdrop-blur">
                      {p.vertical}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-[20px] font-medium text-ink">{p.client}</h3>
                    <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-muted">{p.blurb}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                      <span className="text-[12.5px] font-medium uppercase tracking-wide text-accent">{p.solution}</span>
                      <ArrowUpRight className="h-5 w-5 text-ink-muted transition group-hover:text-accent" />
                    </div>
                  </div>
                </a>
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
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
