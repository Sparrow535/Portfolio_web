import { Logo } from "./Logo";
import { social } from "./Icons";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gray pb-8 pt-8">
      <div className="container-content flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-[9px] font-medium text-white">
                <Logo size={16} /> {site.shortName}
              </span>
              <a href={`mailto:${site.email}`} className="text-gray transition-colors hover:text-white">{site.email}</a>
            </div>
            <p className="text-white">AI, data and web developer</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-medium text-white">Connect</p>
            <div className="flex items-center gap-[11px]">
              {[
                { Icon: social.github, href: site.github, label: "GitHub" },
                { Icon: social.linkedin, href: site.linkedin, label: "LinkedIn" },
                { Icon: social.x, href: site.x, label: "X" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-gray transition-colors hover:text-white">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
