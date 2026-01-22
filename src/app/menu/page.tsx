"use client";

import { useState } from "react";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("coffee");

  const coffeeCategories = [
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

  const dessertCategories = [
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

  const sandwichCategories = [
    {
      name: "Artisanal Paninis",
      items: [
        { name: "Pesto Chicken", desc: "Grilled breast, basil pesto, mozzarella, sun-dried tomatoes", price: "₹420" },
        { name: "Truffle Mushroom", desc: "Wild mushrooms, truffle oil, swiss cheese, arugula", price: "₹380" },
        { name: "Roast Beef & Horseradish", desc: "Slow-roasted beef, sharp cheddar, caramelized onions", price: "₹480" },
        { name: "Caprese Melt", desc: "Buffalo mozzarella, heirloom tomatoes, balsamic glaze", price: "₹350" },
      ],
    },
    {
      name: "Signature Sourdough",
      items: [
        { name: "Avocado & Poached Egg", desc: "Smashed hass avocado, chili flakes, sourdough toast", price: "₹380" },
        { name: "Smoked Salmon Luxe", desc: "Cream cheese, capers, red onion, dill on rye sourdough", price: "₹520" },
        { name: "Prosciutto & Fig", desc: "Parma ham, honeyed figs, goat cheese, balsamic drizzle", price: "₹450" },
        { name: "Mediterrean Veggie", desc: "Roasted peppers, hummus, feta, kalamata olives", price: "₹340" },
      ],
    },
    {
      name: "Warm Savory Toasts",
      items: [
        { name: "Croque Monsieur Noir", desc: "Smoked ham, gruyère, béchamel, toasted brioche", price: "₹400" },
        { name: "Triple Cheese Garlic", desc: "Aged cheddar, parmesan, mozzarella, garlic butter", price: "₹320" },
        { name: "Spicy Paneer Tikka", desc: "Marinated cottage cheese, mint chutney, masala onion", price: "₹360" },
      ],
    },
  ];

  const getActiveCategories = () => {
    switch (activeTab) {
      case "coffee": return coffeeCategories;
      case "desserts": return dessertCategories;
      case "sandwiches": return sandwichCategories;
      default: return coffeeCategories;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <section className="px-6 mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-900/10 blur-[150px] -z-10"></div>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.5em] uppercase text-amber-600 mb-6 block">Culinary Selection</span>
          <h1 className="text-5xl md:text-7xl font-extralight gold-text mb-10 tracking-tight">The Noir Menu</h1>
          <p className="text-amber-100/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
            &ldquo;Each creation is a testament to our commitment to the finest ingredients and the most precise techniques.&rdquo;
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <button 
            onClick={() => setActiveTab("coffee")}
            className={`px-8 py-4 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold transition-all duration-500 rounded-sm border ${
              activeTab === "coffee" 
                ? "bg-amber-500 text-black border-amber-500 shadow-[0_0_30px_rgba(212,175,55,0.3)]" 
                : "text-amber-100/40 border-amber-900/30 hover:border-amber-500/50 hover:text-amber-400"
            }`}
          >
            Coffee Selection
          </button>
          <button 
            onClick={() => setActiveTab("sandwiches")}
            className={`px-8 py-4 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold transition-all duration-500 rounded-sm border ${
              activeTab === "sandwiches" 
                ? "bg-amber-500 text-black border-amber-500 shadow-[0_0_30px_rgba(212,175,55,0.3)]" 
                : "text-amber-100/40 border-amber-900/30 hover:border-amber-500/50 hover:text-amber-400"
            }`}
          >
            Gourmet Sandwiches
          </button>
          <button 
            onClick={() => setActiveTab("desserts")}
            className={`px-8 py-4 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold transition-all duration-500 rounded-sm border ${
              activeTab === "desserts" 
                ? "bg-amber-500 text-black border-amber-500 shadow-[0_0_30px_rgba(212,175,55,0.3)]" 
                : "text-amber-100/40 border-amber-900/30 hover:border-amber-500/50 hover:text-amber-400"
            }`}
          >
            Sweet Indulgence
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 transition-all duration-700">
          {getActiveCategories().map((category, catIdx) => (
            <div 
              key={category.name} 
              className="card-3d relative p-8 md:p-12 rounded-xl overflow-hidden animate-rise"
              style={{ animationDelay: `${catIdx * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>
              
              <h3 className="text-2xl font-light mb-12 pb-6 border-b border-amber-900/30 text-amber-400 tracking-[0.1em] flex justify-between items-center">
                {category.name}
                <span className="w-12 h-px bg-amber-900/50"></span>
              </h3>
              
              <div className="space-y-10">
                {category.items.map((item) => (
                  <div key={item.name} className="menu-item flex justify-between items-start group cursor-pointer perspective-1000">
                    <div className="flex-1 transform-gpu transition-transform duration-500 group-hover:translate-x-2">
                      <div className="flex items-baseline gap-4 mb-2">
                        <h4 className="item-name font-medium text-amber-50 text-xl tracking-wide">{item.name}</h4>
                        <div className="flex-grow h-px border-t border-dotted border-amber-900/30"></div>
                      </div>
                      <p className="text-sm text-amber-100/30 leading-relaxed font-light italic">{item.desc}</p>
                    </div>
                    <span className="font-bold ml-8 text-2xl gold-text group-hover:scale-110 transition-transform">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mt-40 py-20 bg-amber-950/5 border-y border-amber-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-amber-400/60 text-sm tracking-[0.3em] uppercase mb-8 italic">Dietary Notes</p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-6 border border-amber-900/20 rounded-lg">
              <p className="text-amber-100/60 text-xs tracking-widest leading-loose">VEGAN OPTIONS AVAILABLE FOR MOST COFFEES</p>
            </div>
            <div className="p-6 border border-amber-900/20 rounded-lg">
              <p className="text-amber-100/60 text-xs tracking-widest leading-loose">SUGAR-FREE SWEETENERS UPON REQUEST</p>
            </div>
            <div className="p-6 border border-amber-900/20 rounded-lg">
              <p className="text-amber-100/60 text-xs tracking-widest leading-loose">GLUTEN-FREE DESSERT SELECTIONS</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
