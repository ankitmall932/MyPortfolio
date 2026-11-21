import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-wrap relative isolate flex min-h-[55vh] items-center justify-center overflow-hidden rounded-4xl border border-white/10 bg-[#191816] px-6 py-16 text-center sm:px-10">
      <div className="absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full border border-[#a3b47a]/15 shadow-[0_0_0_2rem_rgba(163,180,122,.025),0_0_0_4rem_rgba(163,180,122,.02)]" /><div className="absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-[#a49bbd]/10 blur-3xl" />
      <div className="max-w-xl"><span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#a3b47a]/10 text-[#a3b47a]"><Compass size={30} /></span><p className="mt-7 font-mono text-xs font-bold uppercase tracking-[.2em] text-[#a3b47a]">Wrong turn</p><h1 className="mt-3 text-[clamp(5rem,16vw,10rem)] font-extrabold leading-none -tracking-widest">404<span className="text-[#d47c60]">.</span></h1><h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">This page wandered off.</h2><p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/55 sm:text-base">The link may be old, or the page may have moved. Let&apos;s get you back to something good.</p><Link href="/" className="button-primary mt-8">Back to home <ArrowUpRight size={17} /></Link></div>
    </section>
  );
}
