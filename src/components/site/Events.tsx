import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { events } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

export function Events() {
  return (
    <section id="events" className="bg-white py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            label="Events & Activities"
            title="Meet us, train with us, stay current"
            intro="Exhibitions, certification workshops and webinars that keep our partners ahead of the technology curve."
          />
          <Reveal>
            <a href="/events-news" className="btn btn-ghost shrink-0">
              All events & news <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i} className="h-full">
              <a
                href="/events-news"
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-26px_rgba(2,2,2,0.3)]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-[11.5px] font-medium uppercase tracking-wide text-accent-ink">
                    {e.tag}
                  </span>
                  <span className="text-[12.5px] font-medium text-ink-muted">{e.date}</span>
                  {e.type === "upcoming" && (
                    <span className="ml-auto flex items-center gap-1.5 text-[11.5px] font-medium uppercase text-ink">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent/60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                      </span>
                      Upcoming
                    </span>
                  )}
                </div>
                <h3 className="mt-6 text-[18px] font-medium text-ink">{e.title}</h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-muted">{e.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent">
                  Register interest <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
