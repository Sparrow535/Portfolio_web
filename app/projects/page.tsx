import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata = { title: "Projects — Rohan Rai" };

export default function ProjectsPage() {
  return (
    <>
      <section className="container-content pt-10 lg:pt-16">
        <h1 className="text-[32px] font-medium text-white"><span className="text-primary">/</span>projects</h1>
        <p className="mt-2">AI, data and web projects</p>
      </section>

      <section className="container-content mt-16">
        <SectionHeading title="featured-projects" />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} imageHeight={160} />)}
        </div>
      </section>
    </>
  );
}
