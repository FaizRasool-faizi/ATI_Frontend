"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full h-[72vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Logo/home_hero.png"
          alt="ATI Pakistan Student Leadership"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Green → Red Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#14532d]/40 via-black/20 to-[#991b1b]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Session Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm md:text-base font-medium"
        >
          Session 2025 - 2026
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          <span className="block text-white text-4xl md:text-6xl lg:text-7xl font-extrabold mb-3">
            Building Future
          </span>

          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0F7A36] via-[#198754] to-[#C1121F] text-5xl md:text-7xl lg:text-8xl font-black leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Muslim Student Leadership
          </span>
        </motion.h1>
      </div>
    </section>
  );
}