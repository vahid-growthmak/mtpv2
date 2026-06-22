"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { NetworkBackground } from "@/components/NetworkBackground";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { stats } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

// Headline split into words for the Cybery-style blur-in reveal.
const headlineWords: { t: string; accent?: boolean }[] = [
  { t: "The" },
  { t: "Gulf’s" },
  { t: "trusted" },
  { t: "security", accent: true },
  { t: "&", accent: true },
  { t: "infrastructure", accent: true },
  { t: "distributor" },
];

const headlineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.18 } },
};

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-white pt-[88px]">
      {/* network mesh backdrop */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(120%_80%_at_50%_30%,#000_55%,transparent_100%)]">
        <NetworkBackground />
      </div>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="shell relative pb-20 pt-14 text-center md:pb-28 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-1.5 text-[12.5px] font-medium uppercase tracking-wide text-ink-soft backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Value-Added Distributor · UAE & Oman
        </motion.div>

        <motion.h1
          variants={headlineContainer}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="display mx-auto mt-7 max-w-5xl text-[40px] leading-[1.04] text-ink sm:text-[58px] md:text-[78px]"
        >
          {headlineWords.map((w, i) => (
            <motion.span
              key={`${w.t}-${i}`}
              variants={wordVariant}
              className={`mr-[0.26em] inline-block ${w.accent ? "text-accent" : ""}`}
            >
              {w.t}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.14 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-[16px] leading-relaxed text-ink-muted md:text-[18px]"
        >
          30+ global brands across seven solution lines — fire, CCTV, access
          control, AI, networking, control rooms and power — stocked, engineered
          and supported for the integrators who build the region.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="/solutions" className="btn btn-primary">
            Explore Solutions <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/partners" className="btn btn-ghost">
            Become a Partner <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.28 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-5 py-6">
              <div className="display text-3xl text-ink md:text-4xl">{s.value}</div>
              <div className="mt-1.5 text-[12.5px] leading-snug text-ink-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
