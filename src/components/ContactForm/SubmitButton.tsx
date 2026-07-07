import { ButtonHTMLAttributes } from "react";

interface SubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function SubmitButton({
  loading = false,
  children,
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        w-full
        rounded-xl
        bg-accent
        px-6
        py-4
        text-white
        font-semibold
        transition-all
        duration-300
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
      {...props}
    >
      {loading ? "Gönderiliyor..." : children}
    </button>
  );
}