import Image from "next/image";
import { brands } from "@/data/site";

// Marquee trust band of represented vendor logos (Cybery's post-hero logo band).
export function BrandStrip() {
  const row = [...brands, ...brands];
  return (
    <section className="border-y border-line bg-surface-alt py-9">
      <div className="shell">
        <p className="text-center text-[12.5px] font-medium uppercase tracking-wide text-ink-muted">
          30+ global manufacturers, distributed and supported across the Gulf
        </p>
      </div>
      <div className="mask-fade-x mt-7 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14">
          {row.map((b, i) => (
            <div key={`${b.file}-${i}`} className="relative h-8 w-[120px] shrink-0 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <Image
                src={`/mtp/brands/${b.file}`}
                alt={b.name}
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
