import { InputHTMLAttributes } from "react";

function Input({
  placeholder,
  label,
  text,
  ...props
}: {
  placeholder?: string;
  label?: string;
  text?: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor="" className="font-bold">
          {label}
        </label>
      )}
      <input
        {...props}
        type="text"
        placeholder={placeholder}
        className="w-full bg-(--primary) px-4 py-2 rounded-md"
      />
      {text && <p className="text-xs text-gray-400 my-1">{text}</p>}
    </div>
  );
}

export default Input;
