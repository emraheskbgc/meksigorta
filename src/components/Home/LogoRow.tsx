import Image from "next/image";

interface Logo {
  name: string;
  image: string;
}

interface LogoRowProps {
  logos: Logo[];
  reverse?: boolean;
}

export default function LogoRow({
  logos,
  reverse = false,
}: LogoRowProps) {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-6 ${
          reverse ? "animate-logo-right" : "animate-logo-left"
        }`}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-28 w-56 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={logo.image}
              alt={logo.name}
              width={150}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}