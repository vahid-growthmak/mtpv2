import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { events } from "@/data/site";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { slugify } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((e) => ({ slug: slugify(e.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = events.find((e) => slugify(e.title) === slug);
  return {
    title: event
      ? `${event.title} — Events — MTP Distribution`
      : "Events — MTP Distribution",
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((e) => slugify(e.title) === slug);
  if (!event) notFound();

  const others = events.filter((e) => slugify(e.title) !== slug);

  const facts = [
    { k: "Date", v: event.date },
    { k: "Format", v: event.tag },
    { k: "Status", v: event.type === "upcoming" ? "Upcoming" : "Past" },
  ];

  const paragraphs = [
    event.desc,
    `This ${event.tag.toLowerCase()} is built for our system integrators and resellers — a chance to see how MTP's multi-vendor portfolio comes together across CCTV, access control, fire and life-safety, public address, networking, PSIM and critical power. Expect practical, project-focused content rather than marketing.`,
    "Our pre-sales engineers will be on hand to talk through bill-of-materials design, storage and power sizing, and cross-system integration — the parts of a bid that decide whether a project is won and delivered cleanly. Register your interest and we will share joining details, agenda and any certification requirements ahead of time.",
  ];

  return (
    <PageShell>
      <InnerHero
        eyebrow={event.tag}
        title={event.title}
        intro={event.desc}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Events & News", href: "/events-news" },
          { label: event.title },
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

      {/* Details + register panel */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="eyebrow">What to expect</span>
              </Reveal>
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={i % 3}>
                  <p className="max-w-2xl text-[16px] leading-relaxed text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={1}>
              <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-white md:p-10">
                <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-[120px]" />
                <div className="relative">
                  <h3 className="display text-[24px] leading-tight sm:text-[28px]">
                    Register your interest
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                    Tell us you would like to attend and we will send joining details, the agenda and any certification requirements.
                  </p>
                  <a href="/contact" className="btn btn-accent mt-7 w-full">
                    Register interest <ArrowRight className="h-4 w-4" />
                  </a>
                  <p className="mt-4 text-[13px] text-white/55">
                    Open to MTP partners and prospective integrators across UAE & Oman.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other events */}
      {others.length > 0 && (
        <section className="bg-white py-20 md:py-28">
          <div className="shell">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <span className="eyebrow">Other events</span>
              </Reveal>
              <Reveal>
                <a href="/events-news" className="btn btn-ghost shrink-0">
                  All events & news <ArrowUpRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-1">
              {others.map((e, i) => (
                <Reveal key={e.title} delay={i}>
                  <a
                    href={`/events/${slugify(e.title)}`}
                    className="group flex flex-col gap-3 p-7 transition-colors hover:bg-surface-alt md:flex-row md:items-center md:gap-8"
                  >
                    <div className="flex shrink-0 items-center gap-3 md:w-48">
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-[11.5px] font-medium uppercase tracking-wide text-accent-ink">
                        {e.tag}
                      </span>
                      <span className="text-[12.5px] text-ink-muted">{e.date}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-medium text-ink transition-colors group-hover:text-accent">{e.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{e.desc}</p>
                    </div>
                    <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-ink-muted transition group-hover:text-accent md:block" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </PageShell>
  );
}
