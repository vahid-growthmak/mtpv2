import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";

export function PartnerCta() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-accent px-7 py-14 text-center text-white md:px-16 md:py-20">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-ink/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[12.5px] font-medium uppercase tracking-wide">
                For system integrators & resellers
              </span>
              <h2 className="display mx-auto mt-6 max-w-3xl text-balance text-[32px] leading-[1.06] sm:text-[44px] md:text-[52px]">
                A distribution partner that helps you win and deliver
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-balance text-[16px] leading-relaxed text-white/80">
                One multi-brand source, project pricing, engineering pre-sales and access to premium AI lines that help you win bids — not just supply boxes.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a href="/partners" className="btn bg-white text-ink hover:bg-ink hover:text-white">
                  Become a Partner <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/contact" className="btn border border-white/30 bg-transparent text-white hover:bg-white/10">
                  Talk to our team
                </a>
              </div>
              <p className="mt-5 text-[13px] text-white/70">
                Deal registration · certification · pre-sales SLAs · regional stock
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
