function Input({
  placeholder,
  label,
}: {
  placeholder?: string;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor="">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-[var(--primary)] px-4 py-2 rounded-md"
      />
    </div>
  );
}

export default Input;
