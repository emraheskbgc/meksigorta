import { InputHTMLAttributes } from "react";

interface ContactCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function ContactCheckbox({
  label,
  id,
  required,
  ...props
}: ContactCheckboxProps) {
  return (
    <div className="flex items-start gap-3">
      <input
        id={id}
        type="checkbox"
        required={required}
        className="
          mt-1
          h-5
          w-5
          rounded
          border-slate-300
          text-accent
          focus:ring-2
          focus:ring-accent/20
        "
        {...props}
      />

      <label
        htmlFor={id}
        className="text-sm leading-6 text-text2 cursor-pointer"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
    </div>
  );
}