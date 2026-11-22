"use client";

import { useEffect, useState } from "react";
import { social } from "./Icons";
import { site } from "@/data/site";

export function SocialSidebar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollableHeight > 0 ? Math.min(1, window.scrollY / scrollableHeight) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const percentage = Math.min(100, Math.max(0, Math.round(progress * 100)));
  const iconColor = progress === 1 ? "text-primary" : "text-gray hover:text-white";
  const items = [
    { Icon: social.github, href: site.github, label: "GitHub" },
    { Icon: social.linkedin, href: site.linkedin, label: "LinkedIn" },
    { Icon: social.x, href: site.x, label: "X" },
  ];
  return (
    <aside className="fixed left-4 top-0 z-20 hidden flex-col items-center xl:flex">
      <div
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        className="relative h-[191px] w-6"
      >
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gray/30">
          <span
            className="absolute inset-0 origin-top bg-primary transition-transform duration-100"
            style={{ transform: `scaleY(${percentage / 100})` }}
          />
        </span>
      </div>
      <ul className="mt-2 flex flex-col gap-[11px]">
        {items.map(({ Icon, href, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={`block transition-colors ${iconColor}`}>
              <Icon size={24} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
