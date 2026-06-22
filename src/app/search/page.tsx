import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero } from "@/components/site/InnerHero";
import { SearchClient } from "@/components/site/SearchClient";
import { solutions, brands, industries } from "@/data/site";

export const metadata: Metadata = {
  title: "Search — MTP Distribution",
};

const index = [
  ...solutions.map((s) => ({
    label: s.title,
    category: "Solution",
    href: `/solutions/${s.slug}`,
  })),
  ...brands.map((b) => ({
    label: b.name,
    category: "Brand",
    href: "/brands",
  })),
  ...industries.map((i) => ({
    label: i.name,
    category: "Industry",
    href: `/industries/${i.slug}`,
  })),
];

export default function SearchPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Search"
        title="Search"
        intro="Find a solution line, brand or industry across the MTP portfolio."
        crumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <SearchClient index={index} />
        </div>
      </section>
    </PageShell>
  );
}
