import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Bus } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Armada", href: "#fleet" },
    { name: "Booking", href: "#booking" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-neutral-950/90 backdrop-blur-lg py-4 shadow-xl" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/asset/logo6.png" 
            alt="Gumara Transport Logo" 
            className="h-10 w-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiNGRjhDMDAiLz48dGV4dCB4PSIxNiIgeT0iMTgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzE3MTcxNyIgdGV4dC1hbmNob3I9Im1pZGJsZSI+RzwvdGV4dD48L3N2Zz4=';
            }}
          />
          <span className="text-xl font-display font-bold text-white tracking-tighter">GUMARA <span className="text-gumara-orange">TRANSPORT</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-neutral-300 hover:text-gumara-orange font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="orange-gradient px-6 py-2.5 rounded-full text-white font-bold text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform"
          >
            Sewa Sekarang
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-b border-neutral-800"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-white"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="orange-gradient w-full py-4 rounded-xl text-white font-bold text-center"
              >
                Sewa Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
