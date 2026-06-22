import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { events, news } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events & News — MTP Distribution",
};

export default function EventsNewsPage() {
  const upcoming = events.filter((e) => e.type === "upcoming");

  return (
    <PageShell>
      <InnerHero
        eyebrow="Events & News"
        title="Meet us, train with us, stay current"
        intro="Exhibitions, certification workshops, webinars and channel updates that keep our partners ahead of the technology curve."
        crumbs={[{ label: "Home", href: "/" }, { label: "Events & News" }]}
      />

      {/* Upcoming events */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHead
              label="Upcoming events"
              title="Where to meet the MTP team"
              intro="Live demos, hands-on training and partner sessions across the region."
            />
            <Reveal>
              <a href="/contact" className="btn btn-ghost shrink-0">
                Register interest <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {upcoming.map((e, i) => (
              <Reveal key={e.title} delay={i} className="h-full">
                <a
                  href={`/events/${slugify(e.title)}`}
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

      {/* Latest news */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHead
              label="Latest news"
              title="What's new at MTP"
              intro="Portfolio expansions, channel programmes and the brands we are adding to the stack."
            />
          </div>

          <div className="mt-12 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i}>
                <a
                  href={`/news/${slugify(n.title)}`}
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

      <CtaBand />
    </PageShell>
  );
}
