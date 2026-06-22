import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { projects } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

export function Projects() {
  return (
    <section id="projects" className="bg-surface-alt py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            label="Case Studies"
            title="Proof at the scale that matters"
            intro="Blue-chip deployments delivered through our partners — the references that de-risk MTP for every new project."
          />
          <Reveal>
            <a href="/projects" className="btn btn-ghost shrink-0">
              View all projects <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
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
  );
}
