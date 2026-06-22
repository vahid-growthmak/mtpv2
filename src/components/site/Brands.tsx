import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/site/SectionHead";
import { brands } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

export function Brands() {
  return (
    <section id="brands" className="bg-surface-alt py-20 md:py-28">
      <div className="shell">
        <SectionHead
          align="center"
          label="Our Brands"
          title="A portfolio the box-movers can't match"
          intro="Anchored by Bosch and complemented by best-in-class AI, storage, control-room and power vendors — each with a dedicated page, datasheets and project support."
        />

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b, i) => (
            <Reveal key={b.file} delay={i % 6}>
              <a
                href={`/brands/${b.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group flex aspect-[4/3] items-center justify-center bg-white p-6 transition-colors hover:bg-accent-soft"
                title={b.name}
              >
                <span className="relative h-9 w-full opacity-75 grayscale transition group-hover:opacity-100 group-hover:grayscale-0">
                  <Image
                    src={`/mtp/brands/${b.file}`}
                    alt={`${b.name} logo`}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-9 flex justify-center">
          <a href="/brands" className="btn btn-primary">
            Explore all brands <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
