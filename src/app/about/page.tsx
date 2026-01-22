export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <span className="text-xs tracking-[0.5em] uppercase text-amber-600 mb-6 block font-medium">Our Legacy</span>
              <h1 className="text-5xl md:text-8xl font-extralight mb-12 gold-text leading-tight tracking-tighter">
                The Art of <br /> <span className="italic font-normal">Silence</span>
              </h1>
              <div className="space-y-8 text-amber-100/50 text-lg font-light leading-relaxed max-w-xl">
                <p>
                  Founded in 2019, Noir Café was envisioned as more than just a destination for caffeine. It was designed as a sanctuary—a place where time slows down and the senses are heightened.
                </p>
                <p>
                  Our philosophy is simple: perfection is found in the details. From the specific mineral content of our brewing water to the exact temperature of our milk, every variable is meticulously controlled.
                </p>
              </div>
            </div>
            
            <div className="perspective-2000 relative">
              <div className="card-3d p-2 aspect-square relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center rounded-lg"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 rounded-lg"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-amber-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 border border-amber-900/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 px-6 section-gradient-1">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-3xl md:text-5xl font-light mb-8 gold-text">Our Core Pillars</h2>
            <div className="w-24 h-px bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {[
              {
                title: "The Bean",
                desc: "We source exclusively from single estates. Our relationships with farmers ensure not just quality, but ethical sustainability.",
                icon: "◈"
              },
              {
                title: "The Craft",
                desc: "Our baristas undergo six months of training before they serve their first signature cup. Precision is our baseline.",
                icon: "◇"
              },
              {
                title: "The Space",
                desc: "Designed with acoustic perfection in mind, our café is a place for focus, conversation, and deep appreciation.",
                icon: "◆"
              }
            ].map((pillar, idx) => (
              <div key={pillar.title} className="group cursor-default animate-rise" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="text-5xl mb-10 text-amber-500/40 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-500">{pillar.icon}</div>
                <h3 className="text-2xl font-medium mb-6 text-amber-100 group-hover:text-amber-50 transition-colors tracking-wide">{pillar.title}</h3>
                <p className="text-amber-100/40 leading-relaxed font-light italic">{pillar.desc}</p>
                <div className="mt-8 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop')] bg-cover bg-fixed opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <blockquote className="text-3xl md:text-5xl font-extralight italic text-amber-50/80 leading-snug mb-16">
            &ldquo;We don&apos;t just serve coffee; we serve a moment of stillness in an increasingly loud world.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-px bg-amber-900/50"></div>
            <p className="text-amber-400 tracking-[0.4em] uppercase text-sm font-bold">The Noir Collective</p>
            <div className="w-12 h-px bg-amber-900/50"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
