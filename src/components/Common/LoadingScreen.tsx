"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-backColor
        transition-all duration-700
        ${
          hide
            ? "pointer-events-none opacity-0"
            : "opacity-100"
        }
      `}
    >
      <div className="flex flex-col items-center">

        {/* Logo */}

        <Image
          src="/assets/images/logotest.png"
          alt="Meka Sigorta"
          width={200}
          height={200}
          priority
        />

        {/* Başlık */}

        <h1 className="mt-5 text-3xl font-bold text-text1">
          MEKA SİGORTA
        </h1>

        {/* Slogan */}

        <p className="mt-3 text-text2">
           Sigortanın Güvenli Adresi
        </p>

        {/* Noktalar */}

        <div className="mt-8 flex gap-3">

          <span className="loading-dot"></span>
          <span className="loading-dot"></span>
          <span className="loading-dot"></span>

        </div>

      </div>
    </div>
  );
}