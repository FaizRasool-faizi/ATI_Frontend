"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  // Timeline Data
  const timeline = [
    { year: "1968", event: "Establishment of ATI Pakistan", leader: "Founding Nazim" },
    { year: "1980", event: "Expansion into major universities", leader: "Central Leadership" },
    { year: "2000", event: "Digital Reform & Student Welfare", leader: "Modern Era Council" },
    { year: "2026", event: "Leading the Future of Youth", leader: "Current Executive Committee" },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO BANNER */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image src="/Logo/home_hero.png" alt="About ATI" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-5xl md:text-7xl font-black text-white tracking-tighter"
        >
          Our <span className="text-[#237E41]">Legacy</span>
        </motion.h1>
      </section>

      {/* 2. HISTORY & TIMELINE SECTION */}
      <section className="py-24 container mx-auto px-4 grid lg:grid-cols-2 gap-16">
        {/* Left: Detailed History */}
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-gray-900">A Journey of <span className="text-[#237E41]">Ideology</span></h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Anjuman Talaba Islam (ATI) isn't just an organization; it's a movement that has shaped the moral and educational landscape of Pakistan for decades. Since 1968, we have stood firm on our principles...
          </p>
        </div>

        {/* Right: Modern Timeline */}
        <div className="border-l-2 border-[#237E41]/30 pl-8 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <div className="absolute -left-[41px] w-5 h-5 bg-[#237E41] rounded-full" />
              <span className="text-[#E11D48] font-bold tracking-widest">{item.year}</span>
              <h3 className="text-xl font-bold text-gray-900">{item.event}</h3>
              <p className="text-gray-500 text-sm italic">{item.leader}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SUCCESS STORIES (Modern Grid) */}
      <section className="py-24 bg-[#F7FAF8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16">Success <span className="text-[#237E41]">Stories</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((story) => (
              <div key={story} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#237E41]/10 rounded-2xl mb-6 flex items-center justify-center text-[#237E41] font-black">
                  {story}
                </div>
                <h4 className="text-xl font-bold mb-3">Empowering Education</h4>
                <p className="text-gray-600">Highlighting how we transformed student access to quality resources across provinces.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}