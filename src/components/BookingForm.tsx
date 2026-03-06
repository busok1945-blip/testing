import React, { useState } from "react";
import { motion } from "motion/react";
import { Bus, MapPin, Calendar, Clock, Settings, Send } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    type: "Big Bus",
    engine: "Scania",
    pickup: "",
    destination: "",
    duration: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validasi form
    if (!formData.pickup.trim() || !formData.destination.trim() || !formData.duration.trim() || !formData.date) {
      alert('Harap lengkapi semua field yang wajib diisi!');
      return;
    }

    // Validasi tanggal tidak boleh di masa lalu
    const today = new Date().toISOString().split('T')[0];
    if (formData.date < today) {
      alert('Tanggal tidak boleh di masa lalu!');
      return;
    }

    const message = `Halo Gumara Transport, saya ingin booking unit mewah anda:

🚍 Tipe: ${formData.type}
⚙️ Mesin: ${formData.engine}
📍 Jemput: ${formData.pickup}
🏁 Tujuan: ${formData.destination}
⏳ Durasi: ${formData.duration}
📅 Tanggal: ${formData.date}

Mohon info ketersediaan unit oren-nya ya bang. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285290464191?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="booking" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Booking Unit Mewah</h2>
          <p className="text-neutral-400">Rencanakan perjalanan premium Anda bersama armada terbaik kami.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass-panel bg-neutral-800/50 p-8 rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <Bus size={16} /> Tipe Bus
            </label>
            <select
              className="w-full bg-neutral-700 border-none rounded-xl p-3 focus:ring-2 focus:ring-gumara-orange transition-all"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option>Medium Bus</option>
              <option>Big Bus</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <Settings size={16} /> Preferensi Mesin
            </label>
            <select
              className="w-full bg-neutral-700 border-none rounded-xl p-3 focus:ring-2 focus:ring-gumara-orange transition-all"
              value={formData.engine}
              onChange={(e) => setFormData({ ...formData, engine: e.target.value })}
            >
              <option>Scania</option>
              <option>Mercedes-Benz</option>
              <option>Hino</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <MapPin size={16} /> Lokasi Jemput
            </label>
            <input
              type="text"
              placeholder="Contoh: Semarang"
              required
              className="w-full bg-neutral-700 border-none rounded-xl p-3 focus:ring-2 focus:ring-gumara-orange transition-all"
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <MapPin size={16} /> Tujuan
            </label>
            <input
              type="text"
              placeholder="Contoh: Yogyakarta"
              required
              className="w-full bg-neutral-700 border-none rounded-xl p-3 focus:ring-2 focus:ring-gumara-orange transition-all"
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <Clock size={16} /> Durasi
            </label>
            <input
              type="text"
              placeholder="Contoh: 3 Hari"
              required
              className="w-full bg-neutral-700 border-none rounded-xl p-3 focus:ring-2 focus:ring-gumara-orange transition-all"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <Calendar size={16} /> Tanggal
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full bg-neutral-700 border-none rounded-xl p-3 focus:ring-2 focus:ring-gumara-orange transition-all"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 mt-4 orange-gradient hover:opacity-90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-orange-500/20"
          >
            <Send size={20} />
            Kirim Booking via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
