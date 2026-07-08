import ContactForm from "../ContactForm/ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-backColor py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Sol */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            

            <h2 className="mt-3 text-4xl font-bold text-text1">
              Bize Mesaj Gönderin
            </h2>

            <p className="mt-4 text-lg text-text2">
              Formu doldurun, uzman ekibimiz size en kısa sürede dönüş yapsın.
            </p>

            <div className="mt-8">
              <ContactForm variant="contact" />
            </div>
          </div>

         

          {/* Sağ */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps?q=Ankara&output=embed"
              className="h-full min-h-[650px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bilgi Kartı */}
            <div className="absolute right-6 top-6 max-w-sm rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-accent">
                OFİSİMİZ
              </span>

              <h3 className="mt-2 text-2xl font-bold text-text1">
                Meka Sigorta
              </h3>

              <p className="mt-4 leading-7 text-text2">
                Mustafa Kemal Mahallesi
                <br />
                Çankaya / Ankara
              </p>

              <a
                href="tel:+903120000000"
                className="mt-5 block font-semibold text-text1 hover:text-accent"
              >
                📞 0312 000 00 00
              </a>

              <a
                href="mailto:info@mekasigorta.com"
                className="mt-2 block text-text2 hover:text-accent"
              >
                ✉ info@mekasigorta.com
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-white transition hover:scale-105"
              >
                Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
