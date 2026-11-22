import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary"; external?: boolean };

// Figma "Button": 16px / 8px padding, 1px border. Hover state = tinted fill.
export function Button({ href, children, variant = "primary", external }: Props) {
  const color = variant === "primary" ? "border-primary hover:bg-primary/20" : "border-gray hover:bg-gray/20";
  const cls = `inline-block border px-4 py-2 font-medium text-white transition-colors ${color}`;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}
