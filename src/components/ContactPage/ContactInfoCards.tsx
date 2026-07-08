import {
    Phone,
    Mail,
    MapPin,
  } from "lucide-react";
  
  export default function ContactInfoCards() {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4">
  
          <div className="grid gap-8 md:grid-cols-3">
  
            {/* Telefon */}
  
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
  
                <Phone className="text-accent" size={30} />
  
              </div>
  
              <h2 className="mt-6 text-2xl font-bold text-text1">
                Telefon
              </h2>
  
              <a
                href="tel:+903120000000"
                className="mt-3 block text-lg text-text2 hover:text-accent"
              >
                0312 000 00 00
              </a>
  
            </div>
  
            {/* Mail */}
  
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
  
                <Mail className="text-accent" size={30} />
  
              </div>
  
              <h2 className="mt-6 text-2xl font-bold text-text1">
                E-Posta
              </h2>
  
              <a
                href="mailto:info@mekasigorta.com"
                className="mt-3 block text-lg text-text2 hover:text-accent"
              >
                info@mekasigorta.com
              </a>
  
            </div>
  
            {/* Adres */}
  
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
  
                <MapPin className="text-accent" size={30} />
  
              </div>
  
              <h2 className="mt-6 text-2xl font-bold text-text1">
                Adres
              </h2>
  
              <p className="mt-3 text-lg leading-8 text-text2">
                Mustafa Kemal Mahallesi
                <br />
                Çankaya / Ankara
              </p>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }