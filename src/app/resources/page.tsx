import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero, CtaBand } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { resources } from "@/data/content";
import { Download } from "@/components/icons";

export const metadata: Metadata = {
  title: "Resources — MTP Distribution",
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Resources"
        title="Datasheets, guides & downloads"
        intro="Line cards, sizing guides and reference architectures that turn specifications into project wins — everything your team needs to design, quote and deliver."
        crumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      {/* Downloads grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={i % 3} className="h-full">
                <a
                  href="/contact"
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_50px_-24px_rgba(30,106,255,0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-[11.5px] font-medium uppercase tracking-wide text-accent-ink">
                      {r.type}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-alt text-ink transition-colors group-hover:bg-accent group-hover:text-white">
                      <Download className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-6 text-[18px] font-medium text-ink">{r.title}</h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-muted">{r.desc}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="text-[12.5px] font-medium uppercase tracking-wide text-accent">
                      {r.solution}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-muted transition-colors group-hover:text-accent">
                      Download
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-[14px] text-ink-muted">
              Downloads route through a quick enquiry so our engineers can send the right version and answer any project questions.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Need something not listed here?"
        intro="Ask our engineers for a custom line card, datasheet or a reference design built around your project."
        primary={{ label: "Request a resource", href: "/contact" }}
        secondary={{ label: "Explore Solutions", href: "/solutions" }}
      />
    </PageShell>
  );
}
