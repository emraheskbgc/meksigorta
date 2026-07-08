import Image from "next/image";
import ContactForm from "../ContactForm/ContactForm";
import { ShieldCheck, BadgePercent, Clock3, Handshake } from "lucide-react";

export default function HomeSection2() {
  return (
    <section className="bg-backColor py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  ">
          {/*SOL TARAFA KOYULCAK GÖRSEL */}
          <div className="relative  flex flex-col  h-full">
            <div className="mb-6 mt-2 md:mt-12 text-center">
              <h2 className="text-4xl font-bold text-text1 leading-tight">
                Hayatınızı
                <span className="block text-accent">Güvence Altına Alın</span>
              </h2>
            </div>
            <div>
              <Image
                src="/assets/images/homesection2.png"
                alt="MEKA SİGORTA"
                width={1000}
                height={1000}
                className="w-full h-auto rounded-3xl object-cover"
              />

            </div>
            <p className="text-xl font-bold text-center mt-5  text-text1 ">
                Tüm Sigorta Ürünlerinde
                <span className="ml-1 text-accent">En Uygun </span>
                Fiyat Fırsatı
              </p>
            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-md">
                <ShieldCheck className="h-10 w-10 text-accent" />

                <div>
                  <h3 className="font-semibold text-text1">Güvenilir Hizmet</h3>

                  <p className="text-sm text-text2">
                    Uzman danışmanlık desteği
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-md">
                <BadgePercent className="h-10 w-10 text-accent" />

                <div>
                  <h3 className="font-semibold text-text1">En Uygun Teklif</h3>

                  <p className="text-sm text-text2">
                    Birden fazla şirket karşılaştırması
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-md">
                <Clock3 className="h-10 w-10 text-accent" />

                <div>
                  <h3 className="font-semibold text-text1">Hızlı Dönüş</h3>

                  <p className="text-sm text-text2">Aynı gün teklif imkanı</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-md">
                <Handshake className="h-10 w-10 text-accent" />

                <div>
                  <h3 className="font-semibold text-text1">
                    Müşteri Memnuniyeti
                  </h3>

                  <p className="text-sm text-text2">Her zaman yanınızdayız</p>
                </div>
              </div>
            </div>
          </div>
          {/*Sağ tarafa koyulcak iletişim formu */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
