import Image from "next/image";

// Export the "R.R — Outline badge" from Figma (node 2071:2702) to /public/images/logo-outline.svg
export function Logo({ size = 16 }: { size?: number }) {
  return <Image src="/images/logo-outline.svg" alt="R.R logo" width={size} height={size} priority />;
}
