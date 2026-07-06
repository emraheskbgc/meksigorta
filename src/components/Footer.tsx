import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-white font-bold text-lg">MEKA SİGORTA</span>
          <p className="text-sm mt-1 text-slate-500">Güvenin Adresi</p>
        </div>
        <div className="text-sm">
          &copy; {currentYear} Meka Sigorta. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}