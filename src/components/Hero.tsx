import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-950/90"></div>
        <img 
          src={`${import.meta.env.BASE_URL}asset/scania_imgupscaler.ai_Penajam_2K.png`}
          alt="Gumara Transport Scania K360IB Hero" 
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMxNzE3MTciLz48dGV4dCB4PSI5NjAiIHk9IjU0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGOERDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hb21hcmEgVHJhbnNwb3J0PC90ZXh0Pjwvc3ZnPg==';
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gumara-orange/10 border border-gumara-orange/20 text-gumara-orange text-sm font-bold mb-6">
            <Zap size={16} />
            <span>SCANIA K360IB OPTICRUISE</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Premium <span className="text-gumara-orange">Reliable</span> & Tech-Driven
          </h1>
          <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-lg">
            Nikmati standar baru perjalanan bus pariwisata dengan armada Scania Opticruise. Kenyamanan maksimal, keamanan terjamin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="orange-gradient px-8 py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-orange-500/20"
            >
              Booking Sekarang <ArrowRight size={20} />
            </a>
            <a 
              href="#fleet" 
              className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
            >
              Lihat Armada
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-gumara-orange" />
              <span className="text-neutral-300 text-sm font-medium">Verified Safety</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-gumara-orange" />
              <span className="text-neutral-300 text-sm font-medium">Opticruise Tech</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-4 metallic-gradient opacity-20 blur-3xl rounded-full"></div>
          <div className="relative glass-panel p-4 rounded-[2.5rem] rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src={`${import.meta.env.BASE_URL}asset/bus4.png`}
              alt="Gumara Transport Premium Bus" 
              className="rounded-[2rem] shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHZpZXdCb3g9IjAgMCA4MDAgMTAwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIGZpbGw9IiMxNzE3MTciLz48dGV4dCB4PSI0MDAiIHk9IjUwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjRkZGOERDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hb21hcmEgVHJhbnNwb3J0PC90ZXh0Pjwvc3ZnPg==';
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl">
              <p className="text-neutral-900 font-display font-bold text-2xl">4.4/5.0</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest">Customer Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
