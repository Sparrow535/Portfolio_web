import Link from "next/link";

// "# featured-projects" style heading with optional "View all ~~>" link
export function SectionHeading({ title, href, linkLabel }: { title: string; href?: string; linkLabel?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <h2 className="text-[26px] font-medium text-white sm:text-[32px]">
        <span className="text-primary">#</span>{title}
      </h2>
      {href && (
        <Link href={href} className="hidden text-sm text-gray transition-colors hover:text-white sm:block">
          {linkLabel ?? "View all ~~>"}
        </Link>
      )}
    </div>
  );
}
