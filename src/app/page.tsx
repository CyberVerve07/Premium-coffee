"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const bestSellers = [
    { name: "Basque Burnt Cheesecake", desc: "Our legendary signature dessert", price: "₹380", type: "dessert" },
    { name: "Nitro Cold Brew", desc: "Impossibly smooth, cascading perfection", price: "₹350", type: "coffee" },
    { name: "Saffron Rose Latte", desc: "East meets West in every sip", price: "₹420", type: "coffee" },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-900/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-700/10 blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating 3D Orbs */}
        <div className="absolute top-1/3 right-10 w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent blur-md animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-gradient-to-tr from-amber-700/10 to-transparent blur-xl animate-[float_12s_ease-in-out_infinite_reverse]"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-10 inline-block">
            <div className="px-8 py-3 border border-amber-700/40 rounded-full backdrop-blur-sm bg-amber-950/20 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-amber-400/90 font-medium">Est. 2019 • Premium Coffee & Desserts</span>
            </div>
          </div>
          
          <div className="perspective-1000">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight mb-8 leading-[0.9] tracking-tight transform-gpu hover:rotate-x-12 transition-transform duration-700 cursor-default">
              <span className="block text-amber-50/90">Where Coffee</span>
              <span className="block font-bold gold-text mt-2 drop-shadow-[0_10px_30px_rgba(212,175,55,0.4)]">Becomes Art</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed text-amber-100/50 font-light">
            Handcrafted espresso. Artisan cheesecakes. An experience designed for those who appreciate the finer details.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/menu" 
              className="px-12 py-5 text-sm tracking-[0.25em] uppercase font-semibold shimmer-btn text-amber-950 rounded-sm"
            >
              Discover the Menu
            </Link>
            <Link 
              href="/visit" 
              className="px-12 py-5 text-sm tracking-[0.25em] uppercase font-semibold border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-all rounded-sm"
            >
              Book a Table
            </Link>
          </div>
          
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[10px] tracking-[0.4em] uppercase text-amber-600/50">Scroll</span>
              <div className="w-px h-20 bg-gradient-to-b from-amber-600 via-amber-600/50 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-20 right-20 hidden lg:flex flex-col items-center gap-1 opacity-30">
          <div className="w-1 h-8 bg-amber-400/60 rounded-full steam"></div>
          <div className="w-1 h-10 bg-amber-400/40 rounded-full steam"></div>
          <div className="w-1 h-6 bg-amber-400/50 rounded-full steam"></div>
        </div>
      </section>

      <section className="py-32 px-6 section-gradient-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,90,43,0.1)_0%,_transparent_70%)]"></div>
        
        {/* 3D Content Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative">
          <div className="order-2 lg:order-1 perspective-2000">
             <div className="card-3d p-1 relative overflow-hidden group">
                <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-lg grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10 right-10">
                   <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-4">Signature Blend</p>
                   <h3 className="text-3xl font-light text-white mb-2 tracking-wide">The Noir Roast</h3>
                   <div className="w-12 h-px bg-amber-500"></div>
                </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-600/70 block mb-6">The Essence</span>
            <h2 className="text-4xl md:text-6xl font-extralight mb-10 leading-tight">
              Crafting <span className="italic font-normal gold-text">Perfection</span> <br /> in Every Drop
            </h2>
            <p className="text-amber-100/40 text-lg leading-relaxed mb-12 max-w-xl">
              From the high-altitude estates of Coorg to your cup, we oversee every step of the journey. Our baristas don&apos;t just make coffee; they compose it.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-2xl font-bold gold-text mb-1 italic">98%</p>
                <p className="text-xs uppercase tracking-widest text-amber-100/30">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold gold-text mb-1 italic">12+</p>
                <p className="text-xs uppercase tracking-widest text-amber-100/30">Single Origin Beans</p>
              </div>
            </div>
            <Link href="/about" className="group flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-amber-400 hover:text-amber-300 transition-colors">
              Our Journey
              <span className="w-10 h-px bg-amber-400 group-hover:w-16 transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 section-gradient-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-600/70 block mb-4">Exquisite Selection</span>
            <h2 className="text-4xl md:text-6xl font-light gold-text">Best Sellers</h2>
            <div className="w-40 h-px mx-auto mt-10 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {bestSellers.map((item, idx) => (
              <div 
                key={item.name} 
                className="best-seller-card card-3d text-center p-12 md:p-14 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>
                
                <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] uppercase text-amber-600/50 px-4 py-1.5 border border-amber-700/30 rounded-full">
                  {item.type}
                </div>
                
                <div className="w-28 h-28 mx-auto mb-12 rounded-full flex items-center justify-center text-5xl font-light relative group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 animate-pulse"></div>
                  <div className="absolute inset-1 rounded-full bg-[#0a0908]"></div>
                  <span className="relative z-10 gold-text font-bold italic">{idx + 1}</span>
                </div>
                
                <h3 className="text-2xl font-medium mb-6 text-amber-50 group-hover:text-amber-200 transition-colors tracking-wide">{item.name}</h3>
                <p className="text-sm mb-10 text-amber-100/40 leading-relaxed font-light italic">{item.desc}</p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-8 bg-amber-900/50"></div>
                  <p className="text-3xl font-bold gold-text">{item.price}</p>
                  <div className="h-px w-8 bg-amber-900/50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10 grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-transparent to-[#0a0908]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="perspective-1000">
            <h2 className="text-4xl md:text-7xl font-extralight mb-16 leading-tight tracking-tight hover:rotate-x-6 transition-transform duration-700">
              Join Us for a <span className="gold-text italic">Sensory</span> <br /> Experience
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-amber-100/40 mb-16 font-light leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;A coffee at Noir is not just a drink; it&apos;s a moment of clarity in a chaotic world.&rdquo;
          </p>
          <Link 
            href="/visit" 
            className="inline-block px-16 py-6 text-sm tracking-[0.4em] uppercase font-bold bg-amber-500 text-black hover:bg-amber-400 transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:shadow-[0_25px_60px_rgba(212,175,55,0.5)] hover:-translate-y-1"
          >
            Visit Our Space
          </Link>
        </div>
      </section>
    </div>
  );
}
