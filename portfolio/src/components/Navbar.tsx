"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [["Home", "/"], ["About", "/about"], ["Skills", "/skills"], ["Work", "/projects"]];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  useEffect(() => setMounted(true), []);
  const active = (path: string) => pathname === path;
  const linkClass = (path: string) => `nav-option relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${active(path) ? "nav-selected" : ""}`;

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav aria-label="Main navigation" className="mx-auto grid w-full max-w-310 grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-full border border-white/10 bg-[#151412]/90 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">
          <Link href="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#a3b47a] text-xs font-black text-[#171713] transition group-hover:rotate-6">AM</span>
            <span className="text-sm font-extrabold tracking-tight">Ankit Mall<span className="text-[#a3b47a]">.</span></span>
          </Link>
          <div className="nav-link-box hidden items-center justify-center gap-1 rounded-full border border-white/10 bg-white/[.035] p-1 backdrop-blur-md sm:flex">
            {links.map(([label, path]) => <Link key={path} href={path} className={linkClass(path)}>{label}</Link>)}
          </div>
          <div className="hidden justify-end items-center gap-2 sm:flex">
            {mounted && (
              <button type="button" aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[#a3b47a] transition hover:border-[#a3b47a] hover:bg-white/10">
                {resolvedTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            )}
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#d47c60] px-4 py-2.5 text-sm font-bold text-[#171713] transition hover:bg-[#a3b47a]">Let&apos;s talk <ArrowUpRight size={15} /></Link>
          </div>
          <div className="flex justify-end gap-2 sm:hidden">
            {mounted && (
              <button type="button" aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-[#a3b47a] transition hover:bg-white/10">
                {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button type="button" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-[#a3b47a] transition hover:bg-white/10">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#11100f]/95 px-5 pb-8 pt-24 backdrop-blur-xl sm:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-lg flex-col gap-2">
            {links.map(([label, path], index) => (
              <Link key={path} href={path} onClick={() => setIsOpen(false)} className={`flex items-center justify-between border-b border-white/10 py-4 text-4xl font-extrabold tracking-tight transition ${active(path) ? "text-[#a3b47a]" : "text-white hover:text-[#a3b47a]"}`}>
                <span>{label}</span><span className="font-mono text-sm text-white/30">0{index + 1}</span>
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-5 flex items-center justify-between rounded-2xl bg-[#a3b47a] p-5 text-lg font-extrabold text-[#171713]">Let&apos;s talk <ArrowUpRight /></Link>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-white/35">Gorakhpur, India · Available for good ideas</p>
          </nav>
        </div>
      )}
    </>
  );
}
