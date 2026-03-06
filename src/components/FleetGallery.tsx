import { motion } from "motion/react";
import { Shield, Zap, Users } from "lucide-react";

const fleets = [
  {
    title: "Big Bus Scania",
    highlight: "Opticruise Transmission",
    description: "Kenyamanan maksimal dengan perpindahan gigi halus dan suspensi udara premium.",
    icon: <Zap className="text-gumara-orange" />,
    image: `${import.meta.env.BASE_URL}asset/scania_imgupscaler.ai_Penajam_2K.png`,
    alt: "Gumara Transport Scania K360IB Opticruise Transmission"
  },
  {
    title: "Big Bus Mercedes-Benz",
    highlight: "German Engineering & Safety",
    description: "Keamanan tingkat tinggi dengan teknologi pengereman ABS dan sasis tangguh khas Jerman.",
    icon: <Shield className="text-gumara-orange" />,
    image: `${import.meta.env.BASE_URL}asset/marcy_imgupscaler.ai_Penajam_2K.png`,
    alt: "Gumara Transport Mercedes-Benz OH Series Premium Bus"
  },
  {
    title: "Medium Bus",
    highlight: "Agility & Comfort",
    description: "Pilihan tepat untuk rombongan keluarga dengan aksesibilitas tinggi ke berbagai medan.",
    icon: <Users className="text-gumara-orange" />,
    image: `${import.meta.env.BASE_URL}asset/bus4.png`,
    alt: "Gumara Transport Premium Medium Bus"
  }
];

export default function FleetGallery() {
  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Armada Premium Kami</h2>
          <div className="h-1.5 w-24 bg-gumara-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleets.map((fleet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={fleet.image} 
                  alt={fleet.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiMxNzE3MTciLz48dGV4dCB4PSI0MDAiIHk9IjMwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGOERDIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Hb21hcmEgVHJhbnNwb3J0PC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    {fleet.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold">{fleet.title}</h3>
                </div>
                <p className="text-gumara-orange font-bold text-sm uppercase tracking-wider mb-3">
                  {fleet.highlight}
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  {fleet.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="metallic-gradient p-2 rounded-full shadow-lg">
                  <Zap size={16} className="text-neutral-800" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
