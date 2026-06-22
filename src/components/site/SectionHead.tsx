import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHead({
  label,
  title,
  intro,
  align = "left",
  className,
}: {
  label: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal>
        <span className="eyebrow">{label}</span>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={cn(
            "display max-w-3xl text-balance text-[30px] leading-[1.08] text-ink sm:text-[40px] md:text-[46px]",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p
            className={cn(
              "max-w-2xl text-balance text-[15.5px] leading-relaxed text-ink-muted",
              align === "center" && "mx-auto"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
