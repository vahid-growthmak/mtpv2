import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { news } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

export function News() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHead label="Latest News" title="What's new at MTP" />
          <Reveal>
            <a href="/events-news" className="btn btn-ghost shrink-0">
              All insights <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
          {news.map((n, i) => (
            <Reveal key={n.title} delay={i}>
              <a
                href="/events-news"
                className="group flex flex-col gap-3 p-7 transition-colors hover:bg-surface-alt md:flex-row md:items-center md:gap-8"
              >
                <div className="flex shrink-0 items-center gap-3 md:w-48">
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-[11.5px] font-medium uppercase tracking-wide text-accent-ink">
                    {n.tag}
                  </span>
                  <span className="text-[12.5px] text-ink-muted">{n.date}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] font-medium text-ink transition-colors group-hover:text-accent">{n.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{n.desc}</p>
                </div>
                <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-ink-muted transition group-hover:text-accent md:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
