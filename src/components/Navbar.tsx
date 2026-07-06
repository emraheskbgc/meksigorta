import Link from 'next/link';
import { NavItem } from '@/types';
import MobileMenu from './MobileMenu'; // Yeni bileşeni içe aktarıyoruz

const navItems: NavItem[] = [
  { label: 'Anasayfa', href: '/home' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Sigorta Ürünleri', href: '/urunler' },
  { label: 'Teklif Al', href: '/teklif-al' },
  { label: 'İletişim', href: '/iletisim' },
];

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight">
          MEKA<span className="text-blue-600">SİGORTA</span>
        </Link>

        {/* MASAÜSTÜ NAVİGASYON */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MASAÜSTÜ BUTON */}
        <div className="hidden md:flex items-center">
          <Link
            href="/teklif-al"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
          >
            Hızlı Teklif Al
          </Link>
        </div>

        {/* MOBİL MENÜ BİLEŞENİ (Yeni temiz yapı) */}
        {/* navItems dizisini prop olarak gönderiyoruz */}
        <MobileMenu items={navItems} />

      </div>
    </header>
  );
}