import { CheckCircle2 } from "lucide-react";
import PhoneWaves from "./PhoneWaves";

export default function HomeSection4() {
  return (
    <section className="bg-backColor py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Sol Taraf */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[3px] text-accent">
              BİZE ULAŞIN
            </span>

            <h2 className="mt-4 text-5xl font-bold leading-tight text-text1">
              Sigorta Danışmanlarımız
              <br />
              Bir Telefon Kadar Yakın
            </h2>

            <p className="mt-6 text-lg leading-8 text-text2">
              Kasko, trafik, sağlık, konut ve diğer tüm sigorta
              ihtiyaçlarınız için uzman ekibimiz size en uygun
              teklifleri hazırlamaya hazır.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent" />
                <span className="text-amber-600">Ücretsiz Danışmanlık</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent" />
                <span className="text-amber-600">Hızlı Teklif Hazırlama</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent" />
                <span className="text-amber-600">Aynı Gün Geri Dönüş</span>
              </div>
            </div>
          </div>

          {/* Sağ Taraf */}
          <div className="flex justify-center">
            <PhoneWaves />
        
          </div>

        </div>
      </div>
    </section>
  );
}