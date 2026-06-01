import { InputHTMLAttributes } from "react";

function Input({
  placeholder,
  label,
  ...props
}: {
  placeholder?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor="">{label}</label>}
      <input
        {...props}
        type="text"
        placeholder={placeholder}
        className="w-full bg-[var(--primary)] px-4 py-2 rounded-md"
      />
    </div>
  );
}

export default Input;
