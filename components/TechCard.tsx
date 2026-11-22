import { techIcons } from "./Icons";
import type { Tech } from "@/data/technologies";

// Figma "Technology / …" card — 244px wide, title + divider + lines + brand icons
export function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className="box flex flex-col">
      <h3 className="px-[14px] py-[15px] text-xl font-medium text-white">{tech.title}</h3>
      <hr className="border-gray" />
      <ul className="flex-1 space-y-0.5 px-[14px] py-4 text-gray">
        {tech.lines.map((l) => <li key={l}>{l}</li>)}
      </ul>
      <div className="flex gap-7 px-[17px] pb-4 text-gray">
        {tech.icons.map((name) => {
          const Icon = techIcons[name];
          return Icon ? <Icon key={name} size={24} aria-label={name} /> : null;
        })}
      </div>
    </div>
  );
}
