import { InputHTMLAttributes } from "react";

interface ContactInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function ContactInput({
  label,
  id,
  required,
  ...props
}: ContactInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-text1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        id={id}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          text-text1
          placeholder:text-text3
          outline-none
          transition
          focus:border-accent
          focus:ring-2
          focus:ring-accent/20
        "
        {...props}
      />
    </div>
  );
}