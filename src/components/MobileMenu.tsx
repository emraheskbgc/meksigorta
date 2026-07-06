"use client"; // Etkileşim olduğu için istemci bileşeni yapıyoruz

import { useState } from "react";
import Link from "next/link";
import { NavItem } from "@/types";

interface MobileMenuProps {
  items: NavItem[];
}

export default function  MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex md:hidden items-center">
      {/* HAMBURGER / KAPATMA BUTONU */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        // nopointer-events-none sınıfını SVG'ye vererek tıklamanın doğrudan butona geçmesini sağlıyoruz
        className="text-slate-600 hover:text-blue-600 p-3 focus:outline-none z-50 cursor-pointer select-none touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Menüyü Aç/Kapat"
      >
        {isOpen ? (
          <svg
            className="h-7 w-7 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-7 w-7 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* AÇILAN PANEL */}
      {isOpen && (
        <div className="fixed inset-x-0 top-20 bg-white border-t border-slate-100 px-4 pt-4 pb-8 space-y-4 shadow-xl z-50 h-[50vh] flex flex-col justify-start">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-6 border-t border-slate-100 mt-auto">
            <Link
              href="/teklif-al"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-600 text-white px-5 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900"
            >
              Hızlı Teklif Al 
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
