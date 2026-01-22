export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#050403] border-t border-amber-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.03)_0%,_transparent_50%)]"></div>
      
      {/* 3D decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-950/10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-950/10 blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <p className="text-3xl font-bold mb-6 gold-text tracking-[0.15em]">NOIR CAFÉ</p>
            <p className="text-amber-100/40 max-w-sm leading-relaxed">
              Crafting experiences through the art of coffee and fine desserts since 2019. Join us in our sanctuary of taste.
            </p>
          </div>
          <div>
            <h4 className="text-amber-400 font-medium mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {["Menu", "About", "Visit", "Events"].map(link => (
                <li key={link}>
                  <a href={`/${link.toLowerCase()}`} className="text-amber-100/30 hover:text-amber-400 transition-colors text-sm tracking-wider">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-amber-400 font-medium mb-6 uppercase tracking-widest text-xs">Social</h4>
            <ul className="space-y-4">
              {["Instagram", "Facebook", "Twitter"].map(link => (
                <li key={link}>
                  <a href="#" className="text-amber-100/30 hover:text-amber-400 transition-colors text-sm tracking-wider">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-amber-900/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.5em] uppercase text-amber-100/25">
            © 2026 NOIR CAFÉ. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] tracking-[0.2em] uppercase text-amber-100/20 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] tracking-[0.2em] uppercase text-amber-100/20 hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
