"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coffeeMenu = [
    {
      name: "Espresso & Strong Coffee",
      items: [
        { name: "Single Origin Espresso", desc: "Pure, intense shot from Ethiopian beans", price: "₹180" },
        { name: "Double Ristretto", desc: "Concentrated, syrupy, deeply aromatic", price: "₹220" },
        { name: "Long Black", desc: "Espresso over hot water, crema preserved", price: "₹200" },
        { name: "Turkish Coffee", desc: "Finely ground, cardamom-infused tradition", price: "₹250" },
      ],
    },
    {
      name: "Milk-Based Coffee",
      items: [
        { name: "Velvet Cappuccino", desc: "Silky foam, perfect espresso balance", price: "₹280" },
        { name: "Signature Latte", desc: "House blend with creamy steamed milk", price: "₹300" },
        { name: "Flat White", desc: "Double ristretto, velvety microfoam", price: "₹320" },
        { name: "Cortado", desc: "Equal parts espresso and warm milk", price: "₹260" },
      ],
    },
    {
      name: "Cold Coffee & Shakes",
      items: [
        { name: "Nitro Cold Brew", desc: "20-hour steeped, nitrogen-infused", price: "₹350" },
        { name: "Vietnamese Iced Coffee", desc: "Condensed milk, bold robusta blend", price: "₹300" },
        { name: "Espresso Shake", desc: "Double shot blended with vanilla ice cream", price: "₹380" },
        { name: "Cold Brew Tonic", desc: "Sparkling tonic, citrus, cold brew", price: "₹320" },
      ],
    },
    {
      name: "Signature Cafe Specials",
      items: [
        { name: "Saffron Rose Latte", desc: "Persian saffron, rose water, espresso", price: "₹420" },
        { name: "Salted Caramel Mocha", desc: "Dark chocolate, sea salt, caramel drizzle", price: "₹380" },
        { name: "Hazelnut Praline", desc: "House-made praline, espresso, oat milk", price: "₹400" },
        { name: "Maple Bourbon Latte", desc: "Canadian maple, bourbon vanilla, cream", price: "₹450" },
      ],
    },
  ];

  const dessertMenu = [
    {
      name: "Classic Cheesecakes",
      items: [
        { name: "New York Baked", desc: "Dense, creamy, graham cracker crust", price: "₹350" },
        { name: "Basque Burnt", desc: "Caramelized top, custardy center", price: "₹380" },
        { name: "Japanese Souffle", desc: "Light, jiggly, cloud-like texture", price: "₹320" },
        { name: "Lotus Biscoff", desc: "Speculoos base, cookie butter swirl", price: "₹400" },
      ],
    },
    {
      name: "Chocolate-Based Desserts",
      items: [
        { name: "Molten Lava Cake", desc: "Warm center, vanilla bean gelato", price: "₹380" },
        { name: "Dark Chocolate Torte", desc: "70% cacao, raspberry coulis", price: "₹420" },
        { name: "Tiramisu", desc: "Espresso-soaked, mascarpone layers", price: "₹360" },
        { name: "Chocolate Fondant", desc: "Belgian chocolate, gold leaf finish", price: "₹450" },
      ],
    },
    {
      name: "Cafe Specials",
      items: [
        { name: "Affogato Supreme", desc: "Vanilla gelato drowned in espresso", price: "₹300" },
        { name: "Pistachio Cremeux", desc: "Sicilian pistachio, white chocolate", price: "₹420" },
        { name: "Mango Passion Panna Cotta", desc: "Tropical, silky, seasonal fruit", price: "₹340" },
        { name: "Salted Caramel Brownie", desc: "Fudgy center, fleur de sel, cream", price: "₹320" },
      ],
    },
  ];

  const bestSellers = [
    { name: "Basque Burnt Cheesecake", desc: "Our legendary signature dessert", price: "₹380", type: "dessert" },
    { name: "Nitro Cold Brew", desc: "Impossibly smooth, cascading perfection", price: "₹350", type: "coffee" },
    { name: "Saffron Rose Latte", desc: "East meets West in every sip", price: "₹420", type: "coffee" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0908] text-amber-50 overflow-x-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(0) rotateY(0); }
          50% { transform: translateY(-15px) rotateX(3deg) rotateY(2deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.2), 0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1); }
          50% { box-shadow: 0 0 60px rgba(212, 175, 55, 0.4), 0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes border-glow {
          0%, 100% { border-color: rgba(212, 175, 55, 0.3); }
          50% { border-color: rgba(212, 175, 55, 0.6); }
        }
        @keyframes rise {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes coffee-steam {
          0%, 100% { transform: translateY(0) scaleX(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scaleX(1.2); opacity: 0; }
        }
        .card-3d {
          transform-style: preserve-3d;
          perspective: 1200px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          background: linear-gradient(145deg, rgba(30, 25, 20, 0.95) 0%, rgba(15, 12, 10, 0.98) 100%);
          border: 1px solid rgba(212, 175, 55, 0.15);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(212, 175, 55, 0.05), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .card-3d:hover {
          transform: translateY(-20px) rotateX(8deg) rotateY(-4deg) scale(1.02);
          box-shadow: 0 50px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255,255,255,0.1);
          border-color: rgba(212, 175, 55, 0.4);
        }
        .card-3d::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, transparent 40%, transparent 60%, rgba(139, 90, 43, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
          border-radius: inherit;
        }
        .card-3d:hover::before { opacity: 1; }
        .card-3d::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .card-3d:hover::after { opacity: 1; }
        .gold-text {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 25%, #d4af37 50%, #b8860b 75%, #d4af37 100%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
          filter: drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3));
        }
        .shimmer-btn {
          background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 30%, #d4af37 60%, #b8860b 100%);
          background-size: 300% auto;
          animation: shimmer 3s linear infinite;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3), inset 0 1px 0 rgba(255,255,255,0.3);
          transition: all 0.3s ease;
        }
        .shimmer-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.5), inset 0 1px 0 rgba(255,255,255,0.3);
        }
        .best-seller-card {
          animation: glow-pulse 3s ease-in-out infinite;
          background: linear-gradient(160deg, rgba(40, 30, 20, 0.95) 0%, rgba(20, 15, 10, 0.98) 50%, rgba(30, 20, 15, 0.95) 100%);
        }
        .hero-gradient {
          background: 
            radial-gradient(ellipse 80% 60% at 20% 100%, rgba(139, 90, 43, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 40%),
            radial-gradient(ellipse 100% 100% at 50% 50%, rgba(45, 30, 20, 0.8) 0%, transparent 70%),
            linear-gradient(180deg, #0a0908 0%, #1a1410 50%, #0a0908 100%);
        }
        .section-gradient-1 {
          background: linear-gradient(180deg, #0a0908 0%, #1a1410 30%, #251a12 50%, #1a1410 70%, #0a0908 100%);
        }
        .section-gradient-2 {
          background: linear-gradient(180deg, #0a0908 0%, #12100e 50%, #0a0908 100%);
        }
        .menu-item:hover .item-name {
          color: #d4af37;
          transform: translateX(8px);
        }
        .steam {
          animation: coffee-steam 2.5s ease-in-out infinite;
        }
        .steam:nth-child(2) { animation-delay: 0.5s; }
        .steam:nth-child(3) { animation-delay: 1s; }
        .animate-rise {
          animation: rise 0.8s ease-out forwards;
        }
        .glass-effect {
          background: rgba(20, 15, 10, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? "py-4 glass-effect border-b border-amber-900/30" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl md:text-3xl font-bold tracking-[0.2em] gold-text">
            NOIR CAFÉ
          </a>
          <nav className="hidden md:flex gap-10">
            {["Menu", "Desserts", "Best Sellers", "About", "Visit"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xs tracking-[0.25em] uppercase text-amber-100/60 hover:text-amber-400 transition-all duration-300 hover:tracking-[0.3em] relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a>
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
            {["Menu", "Desserts", "Best Sellers", "About", "Visit"].map((item, idx) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-sm tracking-[0.2em] uppercase text-amber-100/80 hover:text-amber-400 transition-colors animate-rise"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-900/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-700/10 blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-10 inline-block">
            <div className="px-8 py-3 border border-amber-700/40 rounded-full backdrop-blur-sm bg-amber-950/20">
              <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-amber-400/90">Est. 2019 • Premium Coffee & Desserts</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight mb-8 leading-[0.9] tracking-tight">
            <span className="block text-amber-50/90">Where Coffee</span>
            <span className="block font-bold gold-text mt-2">Becomes Art</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed text-amber-100/50 font-light">
            Handcrafted espresso. Artisan cheesecakes. An experience designed for those who appreciate the finer details.
          </p>
          
          <a 
            href="#menu" 
            className="inline-block px-12 py-5 text-sm tracking-[0.25em] uppercase font-semibold shimmer-btn text-amber-950 rounded-sm"
          >
            Discover the Menu
          </a>
          
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

      <section id="menu" className="py-32 px-6 section-gradient-1 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,90,43,0.1)_0%,_transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-600/70 block mb-4">Crafted Daily</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light gold-text">Coffee Menu</h2>
            <div className="w-32 h-px mx-auto mt-8 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {coffeeMenu.map((category, catIdx) => (
              <div 
                key={category.name} 
                className="card-3d relative p-8 md:p-10 rounded-lg overflow-hidden"
                style={{ animationDelay: `${catIdx * 0.15}s` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500/30 via-transparent to-amber-600/20"></div>
                
                <h3 className="text-xl md:text-2xl font-medium mb-10 pb-5 border-b border-amber-700/30 text-amber-400 tracking-wide">
                  {category.name}
                </h3>
                
                <div className="space-y-7">
                  {category.items.map((item) => (
                    <div key={item.name} className="menu-item flex justify-between items-start group cursor-pointer">
                      <div className="flex-1">
                        <h4 className="item-name font-medium text-amber-50 transition-all duration-300 text-lg">{item.name}</h4>
                        <p className="text-sm mt-2 text-amber-100/40 leading-relaxed">{item.desc}</p>
                      </div>
                      <span className="font-bold ml-6 text-xl text-amber-500 group-hover:text-amber-400 transition-colors">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="desserts" className="py-32 px-6 section-gradient-2 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.05)_0%,_transparent_60%)]"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-600/70 block mb-4">Sweet Indulgence</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light gold-text">Cheesecake & Desserts</h2>
            <div className="w-32 h-px mx-auto mt-8 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dessertMenu.map((category, catIdx) => (
              <div 
                key={category.name} 
                className="card-3d relative p-8 rounded-lg overflow-hidden"
                style={{ animationDelay: `${catIdx * 0.15}s` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-600/10 to-transparent rounded-bl-full"></div>
                
                <h3 className="text-lg md:text-xl font-medium mb-8 pb-4 border-b border-amber-700/30 text-amber-400 tracking-wide">
                  {category.name}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="menu-item group cursor-pointer">
                      <div className="flex justify-between items-center">
                        <h4 className="item-name font-medium text-amber-50 transition-all duration-300">{item.name}</h4>
                        <span className="font-bold text-amber-500 group-hover:text-amber-400 transition-colors">{item.price}</span>
                      </div>
                      <p className="text-sm mt-1.5 text-amber-100/35 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="best-sellers" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-[#1a1208] to-amber-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.1)_0%,_transparent_60%)]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-600/70 block mb-4">Guest Favorites</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light gold-text">Best Sellers</h2>
            <div className="w-32 h-px mx-auto mt-8 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {bestSellers.map((item, idx) => (
              <div 
                key={item.name} 
                className="best-seller-card card-3d text-center p-10 md:p-12 rounded-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>
                
                <div className="absolute top-4 right-4 text-[10px] tracking-[0.3em] uppercase text-amber-600/50 px-3 py-1 border border-amber-700/30 rounded-full">
                  {item.type}
                </div>
                
                <div className="w-24 h-24 mx-auto mb-10 rounded-full flex items-center justify-center text-4xl font-light relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 animate-pulse"></div>
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-amber-400 to-amber-700"></div>
                  <span className="relative z-10 text-amber-950 font-bold">{idx + 1}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-medium mb-4 text-amber-50 group-hover:text-amber-200 transition-colors">{item.name}</h3>
                <p className="text-sm mb-8 text-amber-100/40 leading-relaxed">{item.desc}</p>
                <p className="text-3xl md:text-4xl font-bold gold-text">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 section-gradient-2 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-600/70 block mb-4">The Craft</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light gold-text">Why Our Café</h2>
            <div className="w-32 h-px mx-auto mt-8 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Single Origin Beans", text: "Sourced directly from estates in Coorg, Chikmagalur, and select Ethiopian highlands. Roasted in small batches weekly.", icon: "◈" },
              { title: "Precision Brewing", text: "Each extraction calibrated by our certified baristas. Temperature, pressure, and timing perfected for every cup.", icon: "◇" },
              { title: "Artisan Desserts", text: "Our pastry chef crafts each cheesecake from scratch daily. No preservatives, only premium ingredients.", icon: "◆" },
            ].map((item, idx) => (
              <div key={item.title} className="text-center p-10 group">
                <div className="text-4xl mb-6 text-amber-500/60 group-hover:text-amber-400 transition-colors duration-500">{item.icon}</div>
                <div className="w-16 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-amber-600 to-transparent group-hover:w-24 transition-all duration-500"></div>
                <h3 className="text-xl font-medium mb-5 text-amber-100 group-hover:text-amber-50 transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed text-amber-100/45">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-[#151210] to-[#0a0908]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,90,43,0.08)_0%,_transparent_60%)]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-600/70 block mb-4">Since 2019</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 gold-text">Our Story</h2>
          
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-600/30 to-transparent hidden md:block"></div>
            <div className="absolute -right-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-600/30 to-transparent hidden md:block"></div>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-10 text-amber-100/60 font-light">
              Noir Café was born from an obsession with perfection. We set out to create a sanctuary where every detail matters—from the origin of our beans to the temperature of your cup.
            </p>
            <p className="text-lg leading-relaxed text-amber-100/40">
              Today, we serve over two hundred cups daily to coffee lovers who share our passion. Our cheesecakes have become legendary, and our space has become a second home to creators, dreamers, and those who simply appreciate beauty in the everyday.
            </p>
          </div>
        </div>
      </section>

      <section id="visit" className="py-32 px-6 section-gradient-2 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-amber-600/70 block mb-4">Find Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light gold-text">Visit Us</h2>
            <div className="w-32 h-px mx-auto mt-8 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Address", content: ["42, Linking Road", "Bandra West", "Mumbai 400050"] },
              { title: "Contact", content: ["+91 98765 43210", "hello@noircafe.in"] },
              { title: "Hours", content: ["Mon – Fri: 8am – 11pm", "Sat – Sun: 9am – 12am"] },
            ].map((item) => (
              <div key={item.title} className="card-3d p-10 rounded-lg text-center">
                <h3 className="font-medium mb-6 text-amber-400 tracking-wide text-lg">{item.title}</h3>
                <div className="space-y-2">
                  {item.content.map((line, idx) => (
                    <p key={idx} className="text-amber-100/50">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-[#050403] border-t border-amber-900/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <p className="text-3xl md:text-4xl font-bold mb-6 gold-text tracking-[0.15em]">NOIR CAFÉ</p>
          <div className="w-24 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-amber-700 to-transparent"></div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-amber-100/25">© 2024 NOIR CAFÉ. CRAFTED WITH OBSESSION.</p>
        </div>
      </footer>
    </div>
  );
}
