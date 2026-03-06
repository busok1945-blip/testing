import { motion } from "motion/react";
import { Star, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              src="/asset/logo6.png" 
              alt="Gumara Transport Logo" 
              className="h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiNGRjhDMDAiLz48dGV4dCB4PSIyMCIgeT0iMjIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzE3MTcxNyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RzwvdGV4dD48L3N2Zz4=';
              }}
            />
            <span className="text-2xl font-display font-bold tracking-tighter">GUMARA <span className="text-gumara-orange">TRANSPORT</span></span>
          </div>
          <p className="text-neutral-400 leading-relaxed">
            Solusi transportasi premium terpercaya untuk perjalanan wisata, bisnis, dan acara spesial Anda. Mengutamakan kenyamanan dan keamanan.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-gumara-orange transition-colors"><Instagram size={20} /></a>
            <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-gumara-orange transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-display font-bold">Kontak & Lokasi</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-neutral-400">
              <MapPin className="text-gumara-orange shrink-0" size={20} />
              <p>Jl. Raya Semarang - Boja Km. 2, Boja, Kendal.</p>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <Phone className="text-gumara-orange shrink-0" size={20} />
              <p>0852-9046-4191</p>
            </div>
            <a 
              href="https://www.google.com/maps/search/Jl.+Raya+Semarang+-+Boja+Km.+2,+Boja,+Kendal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-gumara-orange hover:underline font-medium"
            >
              Buka di Google Maps →
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-display font-bold">Trust Signals</h4>
          <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800">
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={20} className="fill-gumara-orange text-gumara-orange" />
              ))}
              <Star size={20} className="fill-gumara-orange/50 text-gumara-orange/50" />
            </div>
            <p className="text-3xl font-display font-bold">4.4<span className="text-sm text-neutral-500 font-normal ml-2">/ 5.0 Rating</span></p>
            <p className="text-neutral-500 text-sm mt-2">Berdasarkan ulasan pelanggan setia Gumara Transport.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-800 text-center text-neutral-600 text-sm">
        <p>© {new Date().getFullYear()} Gumara Transport. All rights reserved. Designed for Premium Experience.</p>
      </div>
    </footer>
  );
}
