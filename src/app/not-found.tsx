import Link from "next/link";
import { Home, FileQuestion, Mail } from "lucide-react";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "404 - Sayfa Bulunamadı | Meka Sigorta",
    description:
      "Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya bizimle iletişime geçebilirsiniz.",
    robots: {
      index: false,
      follow: false,
    },
  };
export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-180px)] items-center justify-center overflow-hidden bg-backColor px-4">

      {/* Arka plan 404 */}
      <div className=" pointer-events-none absolute select-none text-[180px] font-extrabold text-slate-200/30 md:text-[320px]">
        404
      </div>

      <div className="relative z-10 max-w-2xl text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">

          <FileQuestion className="h-12 w-12 text-accent" />

        </div>

        <h1 className="mt-8 text-4xl font-bold text-text1 md:text-5xl">
          Aradığınız Sayfa Bulunamadı
        </h1>

        <p className="mt-6 text-lg leading-8 text-text2">
          Ulaşmaya çalıştığınız sayfa taşınmış, kaldırılmış veya
          hiç oluşturulmamış olabilir.
        </p>

        <p className="mt-2 text-text2">
          Ana sayfaya dönebilir veya bizimle iletişime geçebilirsiniz.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            <Home size={20} />
            Ana Sayfaya Dön
          </Link>

          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-text1 transition hover:border-accent hover:text-accent"
          >
            <Mail size={20} />
            İletişime Geç
          </Link>

        </div>
        <p className="mt-8 text-xl text-emerald-600">
            Yardım mı gerekiyor? Whatsapp üzerinden bize ulaşabilirsiniz...
        </p>
        

      </div>

    </section>
  );
}