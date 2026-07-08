import {
    Clock3,
    BadgeCheck,
    ShieldCheck,
    Headset,
  } from "lucide-react";
  
  export default function WorkingHours() {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4">
  
          <div className="grid gap-10 lg:grid-cols-2">
  
            {/* Çalışma Saatleri */}
  
            <div className="rounded-3xl border border-slate-200 bg-secondary/90 p-8">
  
              <div className="flex items-center gap-3">
  
                <Clock3 className="text-accent" size={28} />
  
                <h2 className="text-3xl font-bold text-text1">
                  Çalışma Saatleri
                </h2>
  
              </div>
  
              <div className="mt-8 space-y-5 text-text1 font-bold text-md">
  
                <div className="flex justify-between border-b pb-4">
  
                  <span>Pazartesi - Cuma</span>
  
                  <span className="font-semibold">
                    09:00 - 18:00
                  </span>
  
                </div>
  
                <div className="flex justify-between border-b pb-4">
  
                  <span>Cumartesi</span>
  
                  <span className="font-semibold">
                    09:00 - 13:00
                  </span>
  
                </div>
  
                <div className="flex justify-between">
  
                  <span>Pazar</span>
  
                  <span className="font-semibold text-red-500">
                    Kapalı
                  </span>
  
                </div>
  
              </div>
  
            </div>
  
            {/* Destek */}
  
            <div className="rounded-3xl bg-primary p-8 text-white">
  
              <h2 className="text-3xl font-bold">
                Her Zaman Yanınızdayız
              </h2>
  
              <p className="mt-4 leading-8 text-white/80">
                Mesai saatleri dışında da teklif taleplerinizi
                web sitemiz üzerinden iletebilir, acil durumlarda
                uzaktan destek hizmetimizden yararlanabilirsiniz.
              </p>
  
              <div className="mt-10 space-y-6">
  
                <div className="flex items-center gap-4">
  
                  <Headset className="text-secondary" />
  
                  <div>
  
                    <p className="font-semibold">
                      7/24 Uzaktan Destek
                    </p>
  
                    <p className="text-sm text-white/70">
                      Talep ve bilgi desteği
                    </p>
  
                  </div>
  
                </div>
  
                <div className="flex items-center gap-4">
  
                  <BadgeCheck className="text-secondary" />
  
                  <div>
  
                    <p className="font-semibold">
                      Aynı Gün Teklif
                    </p>
  
                    <p className="text-sm text-white/70">
                      En uygun poliçe seçenekleri
                    </p>
  
                  </div>
  
                </div>
  
                <div className="flex items-center gap-4">
  
                  <ShieldCheck className="text-secondary" />
  
                  <div>
  
                    <p className="font-semibold">
                      Güvenilir Danışmanlık
                    </p>
  
                    <p className="text-sm text-white/70">
                      Uzman sigorta danışmanlarımız
                    </p>
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }