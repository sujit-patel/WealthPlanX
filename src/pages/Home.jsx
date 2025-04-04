import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex justify-between flex-col bg-gradient-to-b from-gray-100 to-gray-300"
    >
      <Navbar />
      <Hero />
      <Footer />
    </motion.div>
  );
}

export default Home;
