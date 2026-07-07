import { SelectHTMLAttributes } from "react";

interface Option {
  value: string;
  label: string;
}

interface ContactSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
}

export default function ContactSelect({
  label,
  id,
  required,
  options,
  ...props
}: ContactSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-text1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <select
        id={id}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          px-4
          py-3
          text-text1
          outline-none
          transition
          focus:border-accent
          focus:ring-2
          focus:ring-accent/20
        "
        {...props}
      >
        <option value="">Lütfen seçiniz</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}