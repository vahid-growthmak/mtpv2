import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { industries } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            label="Industries"
            title="Built for the region's most security-intensive sectors"
            intro="From oil & gas to government, healthcare and data centres — our solutions are specified, deployed and trusted across eleven verticals."
          />
          <Reveal>
            <a href="/industries" className="btn btn-ghost shrink-0">
              All industries <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i % 4}>
              <a
                href={`/industries/${ind.slug}`}
                className="group flex items-center gap-3 rounded-full border border-line bg-white py-3 pl-5 pr-4 text-[15px] text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
              >
                {ind.name}
                <ArrowUpRight className="h-4 w-4 text-ink-muted transition group-hover:text-white" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
