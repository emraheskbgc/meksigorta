interface FeatureItem {
    title: string;
    description: string;
    icon: string;
  }
  
  const features: FeatureItem[] = [
    {
      title: "Müşteri Odaklılık",
      description: "Sizin ihtiyacınız bizim önceliğimizdir. Size en uygun poliçeyi bulana kadar çalışırız.",
      icon: "🤝",
    },
    {
      title: "7/24 Kesintisiz Destek",
      description: "Hasar anında veya bilgi almak istediğinizde bize günün her saati ulaşabilirsiniz.",
      icon: "📞",
    },
    {
      title: "En İyi Fiyat Garantisi",
      description: "Önde gelen sigorta şirketlerinin tekliflerini karşılaştırır, bütçenize en uygun olanı sunarız.",
      icon: "💎",
    },
  ];
  
  export default function AboutFeatures() {
    return (
      <section className="bg-secondary py-16 sm:py-24">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bizi Farklı Kılan Değerlerimiz
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Meka Sigorta olarak sadece bir poliçe satmıyoruz; zor anlarınızda yanınızda olacağımızın sözünü veriyoruz.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }