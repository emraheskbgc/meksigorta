import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

// GOOGLE SEO İÇİN KRİTİK ALAN: Metadata
export const metadata: Metadata = {
  title: "Meka Sigorta | Güvenin Adresi - Kasko, Sağlık ve Trafik Sigortası",
  description: "Meka Sigorta ile geleceğinizi güvence altına alın. En uygun kasko, trafik, sağlık ve konut sigortası teklifleri için hemen bizimle iletişime geçin.",
  keywords: ["meka sigorta", "sigorta şirketi ankara", "en uygun kasko", "trafik sigortası", "özel sağlık sigortası"],
  openGraph: {
    title: "Meka Sigorta | Güvenin Adresi",
    description: "En uygun sigorta teklifleri Meka Sigorta'da.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} font-sans antialiased  min-h-screen  flex flex-col`}>
        {/* Navbar burada sabit */}
        <Navbar />
        
        {/* Sadece bu 'main' içerisindeki children (sayfalar) dinamik olarak değişecek */}
        <main className="flex-grow  ">
          {children}
        </main>
        
        {/* Footer burada sabit */}
        <Footer/>
      </body>
    </html>
  );
}