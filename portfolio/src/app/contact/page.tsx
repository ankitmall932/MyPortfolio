import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Ankit Mall",
  description: "Contact Ankit Mall for freelance React and Next.js development, MERN Stack web applications, e-commerce and SaaS MVP projects.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="section-wrap">
      <header className="relative isolate mb-8 overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-[#25281f] via-[#1c1b18] to-[#29201d] p-7 sm:p-10 lg:p-14">
        <div className="absolute -right-20 -top-32 -z-10 h-80 w-80 rounded-full border border-[#a3b47a]/20 shadow-[0_0_0_2rem_rgba(163,180,122,.025),0_0_0_4rem_rgba(163,180,122,.02)]" />
        <div className="absolute bottom-0 right-[22%] -z-10 h-32 w-32 rounded-full bg-[#d47c60]/10 blur-3xl" />
        <div className="relative max-w-3xl"><p className="eyebrow mb-6 flex items-center gap-2">Contact</p><h1 className="text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[.9] tracking-[-.08em]">Have an idea?<br /><span className="font-serif font-medium italic text-[#a3b47a]">Let&apos;s make it real.</span></h1><p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">Tell me what you&apos;re working on, what you&apos;re dreaming up, or where you could use a creative hand. I&apos;d love to hear about it.</p></div>
        <div className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-[#a3b47a]/25 bg-[#a3b47a]/10 px-4 py-2 text-xs font-semibold text-[#dce7c7]"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a3b47a] opacity-50" /><span className="relative h-2 w-2 rounded-full bg-[#a3b47a]" /></span>Open to select projects</div>
      </header>
      <ContactForm />
    </div>
  );
}
