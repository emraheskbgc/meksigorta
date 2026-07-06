import { Metadata } from "next";
import AboutFeatures from "@/components/About/AboutFeatures";
import AboutHero from "@/components/About/AboutHero";
// GOOGLE SEO AYARI: Bu sayfaya özel başlık ve açıklama
export const metadata: Metadata = {
  title: "Hakkımızda | Meka Sigorta",
  description:
    "Meka Sigorta olarak misyonumuz, vizyonumuz ve değerlerimizle tanışın. Geleceğinizi güvence altına alan profesyonel sigortacılık çözümleri.",
  keywords: [
    "meka sigorta hakkında",
    "güvenilir sigorta acentesi",
    "sigortacılık değerleri",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* SOLID: Sayfa sadece bileşenleri birleştiren bir orkestra şefi görevinde */}

      

      <AboutHero />
      <AboutFeatures />
      
    </>
  );
}
