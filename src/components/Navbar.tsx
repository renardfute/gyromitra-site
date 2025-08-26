"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur header-line">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-cropped.png"
            alt="Gyromitra Inc."
            width={360}
            height={180}
            className="h-12 w-auto object-contain"
            priority
            style={{ objectPosition: 'center' }}
          />
        </Link>
        <nav className="hidden gap-8 text-sm text-slate-700 md:flex">
          <Link href="#services">Services</Link>
          <Link href="/training">Training</Link>
          <Link href="#why-us">Why Us</Link>
          <Link href="#cases">Case Highlights</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border border-neutral-300 px-3 py-2 text-slate-900"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="container grid gap-3 py-4 text-slate-700">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <Link href="/training" onClick={() => setOpen(false)}>Training</Link>
            <a href="#why-us" onClick={() => setOpen(false)}>Why Us</a>
            <a href="#cases" onClick={() => setOpen(false)}>Case Highlights</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
