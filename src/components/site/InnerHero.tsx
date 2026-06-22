import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";

type Crumb = { label: string; href?: string };

export function InnerHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-accent pt-[88px] text-white">
      {/* faint network arcs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background:radial-gradient(closest-side,transparent_62%,rgba(255,255,255,0.6)_63%,transparent_64%),radial-gradient(closest-side,transparent_72%,rgba(255,255,255,0.4)_73%,transparent_74%)] [background-position:50%_140%,50%_150%] [background-repeat:no-repeat] [background-size:120%_120%,150%_150%]"
      />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[680px] -translate-x-1/2 rounded-full bg-white/15 blur-[120px]" />

      <div className="shell relative py-20 text-center md:py-28">
        {crumbs.length > 0 && (
          <Reveal>
            <nav className="mb-6 flex items-center justify-center gap-1.5 text-[13px] text-white/70">
              {crumbs.map((c, i) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  {c.href ? (
                    <a href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-white">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span className="text-white/40">/</span>}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        {eyebrow && (
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[12.5px] font-medium uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={1}>
          <h1 className="display mx-auto max-w-4xl text-balance text-[34px] leading-[1.05] sm:text-[52px] md:text-[64px]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={2}>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-[16px] leading-relaxed text-white/80 md:text-[17px]">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to design your next project?",
  intro = "Talk to our engineers about a multi-vendor solution — or join the partner programme for project pricing and pre-sales support.",
  primary = { label: "Become a Partner", href: "/partners" },
  secondary = { label: "Contact Us", href: "/contact" },
}: {
  title?: string;
  intro?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-7 py-14 text-center text-white md:px-16 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-[120px]" />
            <div className="relative">
              <h2 className="display mx-auto max-w-2xl text-balance text-[28px] leading-tight sm:text-[38px]">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/65">
                {intro}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={primary.href} className="btn btn-accent">
                  {primary.label} <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={secondary.href} className="btn border border-white/25 bg-transparent text-white hover:bg-white/10">
                  {secondary.label}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
