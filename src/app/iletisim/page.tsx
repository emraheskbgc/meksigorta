import type { Metadata } from "next";

import ContactHero from "@/components/ContactPage/ContactHero";
import ContactInfoCards from "@/components/ContactPage/ContactInfoCards";
import ContactSection from "@/components/ContactPage/ContactSection";
import WorkingHours from "@/components/ContactPage/WorkingHours";

export const metadata: Metadata = {
  title: "İletişim | Meka Sigorta",
  description:
    "Meka Sigorta iletişim bilgileri. Ankara'da kasko, trafik, sağlık, konut ve diğer sigorta ihtiyaçlarınız için bizimle iletişime geçebilirsiniz.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoCards/>
      <ContactSection/>
      <WorkingHours/>
      
      
    </>
  );
}