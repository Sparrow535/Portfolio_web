import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

// Figma "Home project" / "Featured project" card — 504px wide, 1px gray border, 125px image slot
export function ProjectCard({ project, imageHeight = 125 }: { project: Project; imageHeight?: number }) {
  return (
    <article className="box flex flex-col overflow-hidden">
      <div className="relative w-full bg-gray/10" style={{ height: imageHeight }}>
        <Image src={project.image} alt={`${project.title} preview`} fill sizes="(min-width:1024px) 504px, 100vw" className="object-contain object-top" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-[15px]">
        <p className="text-xs font-medium text-primary">{project.tag}</p>
        <h3 className="text-[22px] font-medium leading-tight text-white">{project.title}</h3>
        <p className="min-h-[52px] text-sm text-gray">{project.summary}</p>
        <p className="mt-2 text-xs text-white">{project.stack}</p>
        <div className="mt-auto flex items-center justify-between pt-4 text-sm">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="link-accent">GitHub ↗</a>
          ) : <span />}
          <Link href={`/projects/${project.slug}`} className="link-accent">Case study →</Link>
          {project.website ? (
            <a href={project.website} target="_blank" rel="noreferrer" className="link-accent">Website ↗</a>
          ) : <span />}
        </div>
      </div>
    </article>
  );
}
