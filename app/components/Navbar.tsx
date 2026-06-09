"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e1e1e] bg-black/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — user will drop their own image here */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#7D39EB] rounded-sm flex items-center justify-center">
            <span className="text-white font-black text-sm">BF</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">BrandForge</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#how" className="text-[#555] hover:text-white text-sm transition-colors">How it works</Link>
          <Link href="#pricing" className="text-[#555] hover:text-white text-sm transition-colors">Pricing</Link>
          <Link href="/app" className="bg-[#C6FF33] text-black text-sm font-bold px-5 py-2 hover:bg-[#d4ff66] transition-colors">
            Try for free →
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}/>
            <span className={`block h-px bg-white transition-all ${open ? "opacity-0" : ""}`}/>
            <span className={`block h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}/>
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1e1e1e] bg-black px-6 py-4 flex flex-col gap-4">
          <Link href="#how" className="text-[#555] text-sm" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="#pricing" className="text-[#555] text-sm" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/app" className="bg-[#C6FF33] text-black text-sm font-bold px-5 py-3 text-center">
            Try for free →
          </Link>
        </div>
      )}
    </nav>
  );
}
