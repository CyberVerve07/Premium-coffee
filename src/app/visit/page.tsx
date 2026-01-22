"use client";

import { useState } from "react";

export default function VisitPage() {
  const [formData, setFormData] = useState({ name: "", email: "", guests: "2", date: "", time: "" });

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="px-6 mb-20 text-center">
        <span className="text-xs tracking-[0.5em] uppercase text-amber-600 mb-6 block font-medium">Join Us</span>
        <h1 className="text-5xl md:text-7xl font-extralight gold-text mb-8 tracking-tight">Visit Noir</h1>
        <p className="text-amber-100/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
          &ldquo;Step into a world where every detail is designed for your comfort and sensory delight.&rdquo;
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Info & Map */}
        <div className="space-y-12">
          <div className="card-3d p-10 rounded-xl">
            <h2 className="text-2xl font-light text-amber-400 mb-8 tracking-widest uppercase">The Sanctuary</h2>
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-amber-600 mb-2">Location</p>
                <p className="text-xl text-amber-50/80 font-light">42, Linking Road, Bandra West</p>
                <p className="text-xl text-amber-50/80 font-light">Mumbai, Maharashtra 400050</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-amber-600 mb-2">Contact</p>
                <p className="text-xl text-amber-50/80 font-light">+91 98765 43210</p>
                <p className="text-xl text-amber-50/80 font-light">hello@noircafe.in</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-amber-600 mb-2">Operating Hours</p>
                <div className="flex justify-between items-center max-w-xs">
                  <span className="text-amber-100/40">Mon – Fri</span>
                  <span className="text-amber-100/80">8am – 11pm</span>
                </div>
                <div className="flex justify-between items-center max-w-xs mt-2">
                  <span className="text-amber-100/40">Sat – Sun</span>
                  <span className="text-amber-100/80">9am – 12am</span>
                </div>
              </div>
            </div>
          </div>

          <div className="perspective-2000">
            <div className="card-3d p-1 rounded-xl overflow-hidden aspect-video relative group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1525610553991-2bede1a233e9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110"></div>
              <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <button className="px-8 py-3 bg-black/80 backdrop-blur-md text-amber-400 text-xs tracking-[0.3em] uppercase border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-all">
                   View on Google Maps
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Reservation Form */}
        <div className="perspective-2000">
          <form className="card-3d p-10 md:p-14 rounded-2xl relative overflow-hidden space-y-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[60px]"></div>
            
            <h2 className="text-3xl font-extralight text-white mb-10 text-center tracking-tight italic">Secure Your <span className="gold-text font-normal not-italic">Table</span></h2>
            
            <div className="space-y-6">
              <div className="group">
                <label className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-2 block font-bold group-focus-within:text-amber-400 transition-colors">Your Name</label>
                <input 
                  type="text" 
                  placeholder="EX. JULIAN REED"
                  className="w-full bg-transparent border-b border-amber-900/50 py-3 text-amber-50 placeholder:text-amber-900/30 focus:outline-none focus:border-amber-500 transition-all tracking-widest uppercase text-sm"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-2 block font-bold">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="HELLO@DOMAIN.COM"
                    className="w-full bg-transparent border-b border-amber-900/50 py-3 text-amber-50 placeholder:text-amber-900/30 focus:outline-none focus:border-amber-500 transition-all tracking-widest uppercase text-sm"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-2 block font-bold">Number of Guests</label>
                  <select className="w-full bg-transparent border-b border-amber-900/50 py-3 text-amber-50 focus:outline-none focus:border-amber-500 transition-all tracking-widest uppercase text-sm appearance-none">
                    <option className="bg-[#0a0908]">1 GUEST</option>
                    <option className="bg-[#0a0908]">2 GUESTS</option>
                    <option className="bg-[#0a0908]">3 GUESTS</option>
                    <option className="bg-[#0a0908]">4 GUESTS</option>
                    <option className="bg-[#0a0908]">5+ GUESTS</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-2 block font-bold">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-transparent border-b border-amber-900/50 py-3 text-amber-50 focus:outline-none focus:border-amber-500 transition-all tracking-widest uppercase text-sm invert hue-rotate-180 brightness-50 opacity-40"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-2 block font-bold">Preferred Time</label>
                  <input 
                    type="time" 
                    className="w-full bg-transparent border-b border-amber-900/50 py-3 text-amber-50 focus:outline-none focus:border-amber-500 transition-all tracking-widest uppercase text-sm invert hue-rotate-180 brightness-50 opacity-40"
                  />
                </div>
              </div>

              <div className="group pt-6">
                <label className="text-[10px] tracking-[0.4em] uppercase text-amber-600 mb-2 block font-bold">Special Requests</label>
                <textarea 
                  rows={3}
                  placeholder="DIETARY REQUIREMENTS OR CELEBRATIONS..."
                  className="w-full bg-transparent border border-amber-900/30 p-4 text-amber-50 placeholder:text-amber-900/30 focus:outline-none focus:border-amber-500/50 transition-all tracking-widest uppercase text-xs rounded-sm"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-amber-500 text-black font-bold text-xs tracking-[0.5em] uppercase hover:bg-amber-400 transition-all shadow-[0_20px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_25px_50px_rgba(212,175,55,0.4)] transform-gpu active:scale-95 mt-4"
            >
              Confirm Reservation
            </button>
            
            <p className="text-[10px] text-center text-amber-100/20 tracking-[0.2em] mt-8 uppercase italic">
              *Reservations are recommended for weekend evenings
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
