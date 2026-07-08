"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function FloatingWhatsapp() {
  const [showBubble, setShowBubble] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);
  const phone = "905305280882";

  const message =
    "Merhaba, web siteniz üzerinden size ulaşıyorum. Sigorta teklifi almak istiyorum.";

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex items-end gap-3"
      onMouseEnter={() => setShowBubble(true)}
      onMouseLeave={() => setShowBubble(false)}
    >
      {/* Konuşma Balonu */}
      {showBubble && (
        <div className="hidden animate-fade-in rounded-2xl bg-white px-5 py-3 shadow-xl md:block">
          <p className="text-sm font-semibold text-text1">
            Yardıma mı ihtiyacınız var?
          </p>

          <p className="mt-1 text-xs text-text2">
            WhatsApp üzerinden bize yazabilirsiniz.
          </p>
        </div>
      )}

      {/* Buton */}
      <div className="relative">
        {/* Ripple */}
        <span className="absolute inset-0 animate-whatsapp-ring rounded-full bg-[#25D366]/30"></span>

        {/* Buton */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geç"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp size={34} />
        </a>
      </div>
    </div>
  );
}
