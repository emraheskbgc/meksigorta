import { PhoneCall } from "lucide-react";

export default function PhoneWaves() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center">
      {/* En dış halka */}
      <div className="phone-ring-1 absolute h-80 w-80 md:h-120 md:w-120 rounded-full border-[3px] border-accent/80 border-dashed"></div>

      {/* Orta halka */}
      <div className=" phone-ring-2 absolute h-60 w-60 md:h-90 md:w-90 rounded-full border-[3px] border-accent/60 border-dashed"></div>

      {/* İç halka */}
      <div className="phone-ring-3 absolute  h-40 w-40 md:h-60 md:w-60 rounded-full border-[3px] border-accent/40 border-dashed"></div>

      {/* Telefon */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="phone-icon flex h-16 w-16 md:h-24 md:w-24 items-center justify-center rounded-full bg-accent text-white shadow-2xl">
          <a href="tel:+905305280882">
            <PhoneCall size={28} />
          </a>
        </div>

        <p className="mt-2 md:mt-6  text-xs md:text-sm font-semibold uppercase tracking-[3px] text-text2">
          Hemen Arayın
        </p>

        <a
          href="tel:+905305280882"
          className="mt-2 md:text-md text-xs  font-bold text-text1 transition-colors hover:text-accent"
        >
          0530 528 08 82
        </a>
      </div>
    </div>
  );
}
