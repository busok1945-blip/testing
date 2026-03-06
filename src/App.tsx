import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FleetGallery from "./components/FleetGallery";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <Navbar />
      <main>
        <Hero />
        <FleetGallery />
        <BookingForm />
      </main>
      <Footer />
    </motion.div>
  );
}
