import { TextareaHTMLAttributes } from "react";

interface ContactTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function ContactTextarea({
  label,
  id,
  required,
  rows = 5,
  ...props
}: ContactTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-text1"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <textarea
        id={id}
        rows={rows}
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
          resize-none
          focus:border-accent
          focus:ring-2
          focus:ring-accent/20
        "
        {...props}
      />
    </div>
  );
}