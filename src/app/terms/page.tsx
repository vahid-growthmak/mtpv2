import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service — MTP Distribution",
};

const sections: { h: string; p: string[] }[] = [
  {
    h: "Acceptance of terms",
    p: [
      `By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site. These terms apply to all visitors, including prospective and existing partners of ${company.legal}.`,
    ],
  },
  {
    h: "Use of the website",
    p: [
      "This website is provided for general information about our products, solutions and partner programme. You agree to use it only for lawful purposes and not to interfere with its operation, security or availability.",
      "Product information, pricing and availability are indicative and may change without notice. Nothing on this site constitutes a binding offer; orders and partnerships are subject to separate written agreements.",
    ],
  },
  {
    h: "Acceptable use",
    p: [
      "You must not attempt to gain unauthorised access to the site or related systems, transmit malicious code, scrape content at scale, or use the site in any way that could damage, disable or impair it or infringe the rights of others.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      "All content on this website — including text, graphics, logos and layout — is owned by or licensed to us and is protected by intellectual-property laws. Vendor brands, trademarks and product names remain the property of their respective owners and are used for identification only.",
      "You may not reproduce, distribute or create derivative works from our content without our prior written permission.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "The website is provided “as is” without warranties of any kind. To the fullest extent permitted by law, we are not liable for any indirect, incidental or consequential loss arising from your use of, or inability to use, this website or any information on it.",
    ],
  },
  {
    h: "Third-party links",
    p: [
      "Our site may link to third-party websites and resources. We do not control and are not responsible for the content, products or practices of those sites, and links do not imply endorsement.",
    ],
  },
  {
    h: "Governing law",
    p: [
      "These terms are governed by the laws of the United Arab Emirates, and any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.",
    ],
  },
  {
    h: "Contact",
    p: [
      `For questions about these terms, contact ${company.legal} at ${company.email}. We may revise these terms from time to time; continued use of the site constitutes acceptance of the current version.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Legal"
        title="Terms of Service"
        intro="The terms that govern your use of the MTP Distribution website."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-[15px] text-ink-muted">Last updated: June 2026</p>
            </Reveal>
            <div className="mt-10 flex flex-col gap-12">
              {sections.map((s, i) => (
                <Reveal key={s.h} delay={i % 3}>
                  <div>
                    <h2 className="text-[22px] font-medium text-ink">{s.h}</h2>
                    <div className="mt-4 flex flex-col gap-4">
                      {s.p.map((para, j) => (
                        <p key={j} className="text-[16px] leading-relaxed text-ink-muted">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
