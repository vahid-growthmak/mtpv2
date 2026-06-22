import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BrandStrip } from "@/components/site/BrandStrip";
import { Solutions } from "@/components/site/Solutions";
import { Brands } from "@/components/site/Brands";
import { WhyMtp } from "@/components/site/WhyMtp";
import { Industries } from "@/components/site/Industries";
import { Projects } from "@/components/site/Projects";
import { Clients } from "@/components/site/Clients";
import { Events } from "@/components/site/Events";
import { PartnerCta } from "@/components/site/PartnerCta";
import { News } from "@/components/site/News";
import { Footer } from "@/components/site/Footer";
import { WhatsappFab } from "@/components/site/WhatsappFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 3. Hero  +  4. Trust / Stats bar */}
        <Hero />
        {/* trust band — vendor logos */}
        <BrandStrip />
        {/* 5. Solutions overview */}
        <Solutions />
        {/* 6. Brands showcase */}
        <Brands />
        {/* 7. Why MTP / Value-added */}
        <WhyMtp />
        {/* 8. Industries served */}
        <Industries />
        {/* 9. Featured projects / case studies */}
        <Projects />
        {/* 10. Clients / references logos */}
        <Clients />
        {/* 11. Events & activities highlight */}
        <Events />
        {/* 12. Partner CTA band */}
        <PartnerCta />
        {/* 13. News / insights teaser */}
        <News />
      </main>
      {/* 14. Newsletter  +  15. Footer */}
      <Footer />
      <WhatsappFab />
    </>
  );
}
