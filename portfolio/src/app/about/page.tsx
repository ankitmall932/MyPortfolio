import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Code2, Palette, Sparkles } from "lucide-react";

export const metadata = {
  title: "About Ankit Mall",
  description: "About Ankit Mall, a MERN Stack and Next.js full-stack developer in Gorakhpur building responsive, useful and memorable web experiences.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="section-wrap">
      <section className="grid items-end gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <div className="eyebrow mb-7 flex items-center gap-2"><span className="h-2 w-2 bg-[#a3b47a]" /> About Ankit</div>
          <h1 className="display max-w-4xl font-extrabold">Code with clarity. <span className="accent">Design with feeling.</span></h1>
          <p className="muted mt-8 max-w-2xl text-lg leading-8">I am Ankit Mall, a full-stack MERN and Next.js developer and creative editor who likes working where technology meets visual storytelling. I build useful web experiences, then give them the polish and personality that makes them memorable.</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#756f69]"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#a3b47a]" /> Gorakhpur, India</span><span>Available for select projects</span></div>
        </div>
        <div className="surface relative isolate min-h-72 overflow-hidden p-7 sm:p-9">
          <Image src="/ankit-mall.jpeg" alt="Ankit Mall full-stack MERN and Next.js developer in Gorakhpur, India" fill sizes="(max-width: 1024px) 100vw, 38vw" className="-z-20 object-cover object-center opacity-20 grayscale" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#171615]/95 via-[#171615]/80 to-[#a3b47a]/30" />
          <div className="absolute -right-10 -top-14 -z-10 h-48 w-48 rounded-full border border-white/15" />
          <Sparkles className="mb-20 text-[#a3b47a]" size={24} />
          <p className="eyebrow mb-4">My point of view</p><p className="max-w-sm text-2xl font-bold leading-tight text-[#f4f0e8] sm:text-3xl">Good work should feel simple to use and hard to forget.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mb-8 flex items-end justify-between gap-5"><div><p className="eyebrow mb-3">What I bring</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Two disciplines, one workflow.</h2></div><span className="hidden text-right text-sm text-[#756f69] sm:block">01 — 02</span></div>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="group rounded-3xl border border-white/10 bg-[#1d1b19] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#a3b47a]/60 sm:p-9"><div className="mb-14 flex items-start justify-between"><Code2 className="text-[#a3b47a]" size={30} /><span className="font-mono text-xs text-[#756f69]">01 / BUILD</span></div><h3 className="text-2xl font-bold">Web development</h3><p className="muted mt-4 max-w-md leading-7">Responsive interfaces and reliable full-stack foundations, shaped around real users and clean, maintainable code.</p><div className="mt-8 flex flex-wrap gap-2">{["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "REST APIs"].map(item => <span key={item} className="rounded-full border border-white/10 px-3 py-2 text-xs text-[#a9a29a]">{item}</span>)}</div></article>
          <article className="group rounded-3xl border border-[#a49bbd]/30 bg-[#a49bbd] p-7 text-[#17110e] transition duration-300 hover:-translate-y-1 sm:p-9"><div className="mb-14 flex items-start justify-between"><Palette size={30} /><span className="font-mono text-xs opacity-60">02 / SHAPE</span></div><h3 className="text-2xl font-bold">Visual design & editing</h3><p className="mt-4 max-w-md leading-7 text-[#39304f]">Graphic design and video editing that turn an idea into a clear visual language, from the first frame to the final export.</p><div className="mt-8 flex flex-wrap gap-2">{["Posters", "Brand visuals", "Short-form video", "Motion edits"].map(item => <span key={item} className="rounded-full border border-[#17110e]/20 px-3 py-2 text-xs">{item}</span>)}</div></article>
        </div>
      </section>
      <section className="border-y border-white/10 py-14">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow mb-3">How I work</p><h2 className="text-3xl font-bold tracking-tight">From rough idea to real output.</h2></div>
          <div className="grid gap-7 sm:grid-cols-3">
            <div><span className="font-mono text-sm text-[#a3b47a]">01</span><h3 className="mt-4 font-bold">Listen</h3><p className="muted mt-2 text-sm leading-6">Start with the goal, audience, and the feeling the work should create.</p></div>
            <div><span className="font-mono text-sm text-[#a3b47a]">02</span><h3 className="mt-4 font-bold">Make</h3><p className="muted mt-2 text-sm leading-6">Explore the structure, visuals, and details until the direction feels right.</p></div>
            <div><span className="font-mono text-sm text-[#a3b47a]">03</span><h3 className="mt-4 font-bold">Refine</h3><p className="muted mt-2 text-sm leading-6">Test the experience, sharpen the finish, and ship something dependable.</p></div>
          </div>
        </div>
      </section>
      <section className="grid gap-8 py-16 sm:grid-cols-3"><div><p className="text-4xl font-extrabold text-[#f4f0e8]">04+</p><p className="mt-2 text-sm text-[#756f69]">Full-stack projects</p></div><div><p className="text-4xl font-extrabold text-[#f4f0e8]">02</p><p className="mt-2 text-sm text-[#756f69]">Creative disciplines</p></div><div><p className="text-4xl font-extrabold text-[#f4f0e8]">∞</p><p className="mt-2 text-sm text-[#756f69]">Curiosity to keep learning</p></div></section>
      <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-8"><p className="flex items-center gap-2 text-sm text-[#a9a29a]"><Check size={16} className="text-[#a49bbd]" /> Thoughtful work, built to last.</p><Link href="/contact" className="button-primary">Let&apos;s build together <ArrowUpRight size={17} /></Link></div>
    </div>
  );
}
