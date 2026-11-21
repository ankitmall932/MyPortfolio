import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import type { Metadata } from "next";

interface PageProps
{
  params: Promise<{ slug: string; }>;
}

export function generateStaticParams () { return projects.map( ( { slug } ) => ( { slug } ) ); }
export async function generateMetadata ( { params }: PageProps ): Promise<Metadata>
{
  const { slug } = await params;
  const project = projects.find( item => item.slug === slug );
  if ( !project ) return { title: "Project Not Found" };
  return { title: `${ project.title } Project`, description: project.description, alternates: { canonical: `/projects/${ project.slug }` }, openGraph: { title: `${ project.title } | Ankit Mall`, description: project.description, images: [ { url: project.image, alt: project.alt } ] } };
}

export default async function ProjectDetailPage ( { params }: PageProps )
{
  const { slug } = await params;
  const project = projects.find( item => item.slug === slug );
  if ( !project ) notFound();
  return (
    <div className="section-wrap">
      <article className="overflow-hidden rounded-4xl border border-white/10 bg-[#1a1917]">
        <div className="relative aspect-16/8 overflow-hidden bg-[#11100f]"><Image src={ project.image } alt={ project.alt } fill priority sizes="(max-width: 1160px) 100vw, 1160px" className="object-contain" /></div>
        <div className="p-7 sm:p-10"><p className="eyebrow">{ project.type }</p><h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{ project.title }</h1><p className="muted mt-5 max-w-2xl text-lg leading-8">{ project.description }</p><div className="mt-6 flex flex-wrap gap-2">{ project.tags.map( tag => <span key={ tag } className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/65">{ tag }</span> ) }</div><div className="mt-8 flex gap-4"><a href={ project.live } target="_blank" rel="noreferrer" className="button-primary">View live project <ArrowUpRight size={ 17 } /></a><Link href="/projects" className="button-ghost">All projects</Link></div></div>
      </article>
    </div>
  );
}
