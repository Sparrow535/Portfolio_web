"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { nav, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href));

  return (
    <header className="relative z-30">
      <div className="container-content flex h-[61px] items-center justify-between pt-0 lg:pt-8">
        <Link href="/" className="flex items-center gap-[9px] font-medium text-white" onClick={() => setOpen(false)}>
          <Logo size={16} />
          {site.shortName}
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors hover:text-white ${isActive(item.href) ? "text-white" : "text-gray"}`}
            >
              <span className="text-primary">#</span>{item.label}
            </Link>
          ))}
          <a href={site.cvMailto} className="text-gray transition-colors hover:text-white">Request CV</a>
        </nav>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="p-2 text-gray lg:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="absolute left-0 right-0 top-[61px] border-y border-gray bg-bg px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block text-white">
                  <span className="text-primary">#</span>{item.label}
                </Link>
              </li>
            ))}
            <li><a href={site.cvMailto} className="text-gray">Request CV</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
