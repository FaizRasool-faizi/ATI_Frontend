"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Logo/home_hero.png"
          alt="ATI Pakistan Student Leadership"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2e1f]/70 via-[#10281d]/60 to-[#7a2430]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-medium"
        >
          Session 2025 - 2026
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-tight mb-6"
        >
          Building Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8EE4AF] to-white">
            Muslim Student Leadership
          </span>
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Join ATI Button - Added cursor-pointer */}
          <Button
            size="lg"
            className="bg-[#237E41] hover:bg-[#1f6b38] text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 cursor-pointer"
          >
            Join ATI
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Explore Button - Added cursor-pointer */}
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-6 text-lg rounded-full transition-all duration-300 cursor-pointer"
          >
            Explore Leadership
          </Button>
        </motion.div>
      </div>
    </section>
  );
}