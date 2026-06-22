import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { clientLogos } from "@/data/site";

export function Clients() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="shell">
        <Reveal className="text-center">
          <p className="text-[12.5px] font-medium uppercase tracking-wide text-ink-muted">
            Trusted on projects for
          </p>
        </Reveal>
        <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:grid-cols-5">
          {clientLogos.map((c, i) => (
            <Reveal key={c.file} delay={i % 5}>
              <div className="flex aspect-[3/2] items-center justify-center bg-white p-5">
                <span className="relative h-12 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
                  <Image
                    src={`/mtp/clients/${c.file}`}
                    alt={`${c.name} logo`}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
