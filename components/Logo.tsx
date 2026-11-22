import Image from "next/image";

export function Logo({
  size = 16,
  variant = "original",
}: {
  size?: number;
  variant?: "original" | "light";
}) {
  const src =
    variant === "light"
      ? "/images/logo-outline-light.svg"
      : "/images/logo-outline.svg";
  return <Image src={src} alt="R.R logo" width={size} height={size} priority />;
}
