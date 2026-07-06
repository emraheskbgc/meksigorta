export default function AboutHero() {
    return (
      <section className="bg-primary py-16 sm:py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-white tracking-wider uppercase">Biz Kimiz?</span>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
                Meka Sigorta: Güvenin ve Huzurun Adresi
              </h1>
              <p className="mt-6 text-lg leading-8 text-">
                Kurulduğumuz günden bu yana, müşterilerimizin geleceğini güvence altına almak ve hayatın getireceği risklere karşı finansal koruma sağlamak için çalışıyoruz. Sektördeki köklü deneyimimizle, ihtiyacınıza en uygun sigorta çözümlerini tek bir çatı altında sunuyoruz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-semibold text-slate-900 text-lg">Misyonumuz</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Müşteri odaklı hizmet anlayışımızla, riskleri en doğru şekilde analiz ederek hızlı, şeffaf ve güvenilir sigorta çözümleri üretmek.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-semibold text-slate-900 text-lg">Vizyonumuz</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Teknolojinin ve yeniliklerin öncüsü olarak, Türkiye'de sigorta denildiğinde akla ilk gelen, en güvenilir ve dijitalleşmiş acente olmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }