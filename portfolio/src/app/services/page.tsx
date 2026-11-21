import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Web Development Services",
  description: "Custom web application development, MERN Stack freelance services, SEO-optimized Next.js websites and SaaS MVP development by Ankit Mall in Gorakhpur.",
  alternates: { canonical: "/services" },
};

const services = [
  ["Custom Web Application Development", "Responsive React and Next.js applications designed around practical business workflows."],
  ["MERN Stack Development", "Full-stack Node.js, Express.js and MongoDB applications with secure authentication and reliable APIs."],
  ["SEO-Optimized Next.js Websites", "Fast, crawlable Next.js websites built with semantic structure and technical SEO best practices."],
  ["E-commerce & SaaS MVP Developer", "Focused storefront and product MVP experiences for validating and launching ideas."],
];

export default function ServicesPage() {
  return (
    <div className="section-wrap">
      <header className="mb-12 rounded-4xl bg-[#89956f] p-7 text-[#171713] sm:p-12 lg:p-16"><p className="text-xs font-bold uppercase tracking-[.2em] text-black/55">Gorakhpur · India · Remote</p><h1 className="mt-8 max-w-4xl text-[clamp(4rem,9vw,7.5rem)] font-extrabold leading-[.82] tracking-[-.09em]">Web work,<br /><span className="font-serif font-medium italic text-[#d47c60]">made useful.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-black/65">Ankit Mall provides freelance React and Next.js development, MERN Stack services, frontend and backend development, and custom web application development.</p></header>
      <section className="grid gap-5 md:grid-cols-2">{services.map(([title,description]) => <article key={title} className="rounded-3xl border border-white/10 bg-[#1d1b19] p-7 sm:p-9"><h2 className="text-2xl font-bold">{title}</h2><p className="muted mt-4 leading-7">{description}</p></article>)}</section>
      <div className="mt-10 flex justify-end"><Link href="/contact" className="button-primary">Discuss a project <ArrowUpRight size={17} /></Link></div>
    </div>
  );
}
