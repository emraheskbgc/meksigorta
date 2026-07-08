import LogoRow from "./LogoRow";

import { logos } from "@/constants/insuranceCompanies";

export default function HomeSection3() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">
            Anlaşmalı Sigorta Şirketleri
          </span>

          <h2 className="mt-3 text-4xl font-bold text-text1">
            Türkiye'nin Güvenilir Sigorta Şirketleriyle Çalışıyoruz
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-text2">
            Birçok sigorta şirketinin tekliflerini karşılaştırıyor, size en
            uygun poliçeyi en avantajlı fiyatlarla sunuyoruz.
          </p>
        </div>
        <div className="mt-14">
          <div className="mt-16 space-y-6 relative overflow-hidden">
            {/* Sol fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-white to-transparent" />

            {/* Sağ fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-white to-transparent" />
            <LogoRow logos={logos} />

            <LogoRow logos={logos} reverse />

            <LogoRow logos={logos} />
          </div>
        </div>
      </div>
    </section>
  );
}
