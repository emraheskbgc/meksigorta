import ContactForm from "@/components/ContactForm/ContactForm";

export default function Home() {
    return (
      
      <section className="bg-backColor py-20">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="rounded-3xl bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                  <h2 className="mt-3 text-4xl font-bold text-text1">
                    Hızlı Teklif Alın
                  </h2>

                  <p className="mt-4 text-lg text-text2">
                    Formu doldurun, uzman ekibimiz en kısa sürede sizinle
                    iletişime geçsin.
                  </p>
                </div>

                <ContactForm variant="offer" />
              </div>
            </div>
          </section>
        
    
    );
  }