import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { InnerHero } from "@/components/site/InnerHero";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy — MTP Distribution",
};

const sections: { h: string; p: string[] }[] = [
  {
    h: "Information we collect",
    p: [
      "We collect information you provide directly — such as your name, company, work email, phone number and any details submitted through our contact, partner-application or resource-download forms.",
      "We also collect limited technical information automatically when you visit our website, including IP address, browser type, device information and pages viewed, gathered through cookies and similar technologies.",
    ],
  },
  {
    h: "How we use your information",
    p: [
      "We use your information to respond to enquiries, assess partnership applications, provide datasheets and quotations, deliver requested resources, and keep you informed about products and services relevant to your business.",
      "As a business-to-business value-added distributor, we process this data on the basis of our legitimate interest in serving system integrators, resellers and consultants, and on your consent where required.",
    ],
  },
  {
    h: "Cookies",
    p: [
      "Our website uses essential cookies to function and optional analytics cookies to understand how the site is used. You can control or disable cookies through your browser settings; some features may not work correctly without them.",
    ],
  },
  {
    h: "Third parties",
    p: [
      "We may share your information with trusted service providers who help us operate our website, communications and CRM, and with vendor partners where necessary to fulfil your request. We do not sell your personal data.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "You may request access to, correction of, or deletion of your personal data, and you may object to or restrict certain processing. To exercise these rights, contact us using the details below and we will respond within a reasonable timeframe.",
    ],
  },
  {
    h: "Data retention & security",
    p: [
      "We keep personal data only for as long as needed for the purposes described above or as required by law, and we apply appropriate technical and organisational measures to protect it against loss, misuse and unauthorised access.",
    ],
  },
  {
    h: "Contact us about privacy",
    p: [
      `If you have any questions about this policy or how we handle your data, contact ${company.legal} at ${company.email}. This policy may be updated from time to time; the latest version will always be available on this page.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <InnerHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How MTP Distribution collects, uses and protects your information."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
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
