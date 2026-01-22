"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Visit", path: "/visit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? "py-4 glass-effect border-b border-amber-900/30" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-bold tracking-[0.2em] gold-text">
          NOIR CAFÉ
        </Link>
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:tracking-[0.3em] relative group ${
                pathname === item.path ? "text-amber-400" : "text-amber-100/60 hover:text-amber-400"
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 ${
                pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          ))}
        </nav>
        <button 
          className="md:hidden flex flex-col gap-1.5" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-amber-500 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-amber-500 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-4 h-0.5 bg-amber-500 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 w-6' : ''}`}></span>
        </button>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden px-6 py-8 flex flex-col gap-6 glass-effect border-t border-amber-900/20 mt-4">
          {navItems.map((item, idx) => (
            <Link 
              key={item.name} 
              href={item.path} 
              className={`text-sm tracking-[0.2em] uppercase transition-colors animate-rise ${
                pathname === item.path ? "text-amber-400" : "text-amber-100/80 hover:text-amber-400"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
