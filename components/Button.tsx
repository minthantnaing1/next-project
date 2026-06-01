import Image, { StaticImageData } from "next/image";

function Button({
  image,
  children,
  variant = "normal",
  ...props
}: {
  image?: string | StaticImageData;
  children: React.ReactNode;
  variant?: "normal" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`${image ? "flex items-center" : ""} w-full gap-2 px-4 py-2 ${variant === "outline" ? "border-2 border-[var(--main)]" : "bg-[var(--main)]"} rounded-lg`}
    >
      {image && <Image src={image} alt="Google" width={30} height={30} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
