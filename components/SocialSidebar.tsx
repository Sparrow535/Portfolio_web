import { social } from "./Icons";
import { site } from "@/data/site";

// Vertical line + icons pinned to the left edge (desktop only)
export function SocialSidebar() {
  const items = [
    { Icon: social.github, href: site.github, label: "GitHub" },
    { Icon: social.linkedin, href: site.linkedin, label: "LinkedIn" },
    { Icon: social.x, href: site.x, label: "X" },
  ];
  return (
    <aside className="fixed left-4 top-0 z-20 hidden flex-col items-center xl:flex">
      <span className="h-[191px] w-px bg-gray" />
      <ul className="mt-2 flex flex-col gap-[11px]">
        {items.map(({ Icon, href, label }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="block text-gray transition-colors hover:text-white">
              <Icon size={24} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
