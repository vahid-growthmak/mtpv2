import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { news } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";
import { slugify } from "@/lib/utils";

export function generateStaticParams() {
  return news.map((n) => ({ slug: slugify(n.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => slugify(n.title) === slug);
  return {
    title: item
      ? `${item.title} — News — MTP Distribution`
      : "News — MTP Distribution",
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = news.find((n) => slugify(n.title) === slug);
  if (!item) notFound();

  const related = news.filter((n) => slugify(n.title) !== slug);

  const paragraphs = [
    "As a value-added distributor, MTP's role is to move up the technology stack with our partners — not just to ship boxes, but to bring the lines that help integrators win and deliver more ambitious projects.",
    "That means curating brands across CCTV and video analytics, access control and AI face recognition, fire and life-safety, public address, networking and surveillance-grade storage, PSIM and control-room technology, and critical power. Each addition is chosen because it strengthens the end-to-end solution our partners can put in front of consultants and end-users.",
    "For our system integrators and resellers, the practical impact is simpler bills of materials, engineering pre-sales support and a single regional source for multi-vendor designs — with certification and after-sales backing behind every deployment.",
    "Talk to our team if you would like a line card, datasheets or a solution design built around this update.",
  ];

  return (
    <PageShell>
      <InnerHero
        eyebrow={item.tag}
        title={item.title}
        intro={item.date}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Events & News", href: "/events-news" },
          { label: item.title },
        ]}
      />

      {/* Article */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <article className="mx-auto max-w-3xl">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent-soft px-3 py-1 text-[11.5px] font-medium uppercase tracking-wide text-accent-ink">
                  {item.tag}
                </span>
                <span className="text-[12.5px] text-ink-muted">{item.date}</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-7 text-[19px] leading-relaxed text-ink">{item.desc}</p>
            </Reveal>
            <div className="mt-6 flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={(i % 3) + 1}>
                  <p className="text-[16px] leading-relaxed text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Related news */}
      {related.length > 0 && (
        <section className="bg-surface-alt py-20 md:py-28">
          <div className="shell">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <span className="eyebrow">Related news</span>
              </Reveal>
              <Reveal>
                <a href="/events-news" className="btn btn-ghost shrink-0">
                  All insights <ArrowUpRight className="h-4 w-4" />
                </a>
              </Reveal>
            </div>

            <div className="mt-12 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
              {related.map((n, i) => (
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
      )}

      <CtaBand />
    </PageShell>
  );
}
