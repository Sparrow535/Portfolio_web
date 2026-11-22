import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudyView } from "@/components/CaseStudyView";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return { title: cs ? `${cs.title} — Case study` : "Case study" };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();
  return <CaseStudyView cs={cs} />;
}
