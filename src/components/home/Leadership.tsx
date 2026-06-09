"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Award, Shield } from "lucide-react";

export function Leadership() {
  const leaders = [
    {
      name: "Mr. Faisal Qayyum Magray",
      role: "Markazi President",
      image: "/Logo/qaid1.png",
      icon: <Award className="w-8 h-8 text-white/80" />,
      tagline: "Leading the student vision with ideological integrity and revolutionary zeal.",
      phone: "+92 331 8027746",
      bgGradient: "bg-gradient-to-br from-[#237E41] via-green-700 to-[#237E41]",
      titleColor: "text-[#237E41]",
    },
    {
      name: "Sardar Baidar Awan",
      role: "Central Secretary General",
      image: "/Logo/secrtry.png",
      icon: <Shield className="w-8 h-8 text-white/80" />,
      tagline: "Orchestrating organizational framework and empowering grassroots student wings.",
      phone: "+92 300 0000000",
      bgGradient: "bg-gradient-to-br from-red-600 via-red-700 to-red-600",
      titleColor: "text-red-600",
    },
  ];

  const team = [
    { name: "Muhammad Nasrullah Sultan", role: "Vice President I", img: "/Logo/shazaib.png" },
    { name: "Mehar Arfan Sahmal", role: "Vice President II", img: "/Logo/shazaib.png" },
    { name: "Sahibzada Waqas Raisani", role: "Joint Secretary I", img: "/Logo/shazaib.png" },
    { name: "Anees Aziz", role: "Joint Secretary II", img: "/Logo/shazaib.png" },
    { name: "Jawad Khan Lodhi", role: "Press Secretary", img: "/Logo/shazaib.png" },
    { name: "Mujahid Bhatti", role: "Finance Secretary", img: "/Logo/shazaib.png" },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#237E41] bg-[#237E41]/10 px-3 py-1 rounded-full">
            Executive Committee
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 text-gray-900">
            Our Central <span className="text-[#237E41]">Leadership</span>
          </h2>
        </div>

        {/* TOP 2 MAIN LEADERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-24">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative w-full h-[550px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <div className="relative w-full h-[75%] bg-gray-100 overflow-hidden">
                <Image src={leader.image} alt={leader.name} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="absolute bottom-0 w-full h-[25%] bg-white flex flex-col items-center justify-center px-4 transition-transform duration-500 group-hover:translate-y-full z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 text-center">{leader.name}</h3>
                <p className={`text-base font-bold uppercase tracking-widest mt-1 ${leader.titleColor}`}> {leader.role} </p>
              </div>
              <div className={`absolute inset-0 ${leader.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex flex-col items-center justify-center p-8 text-center translate-y-8 group-hover:translate-y-0`}>
                <div className="mb-6">{leader.icon}</div>
                <h3 className="text-3xl font-black text-white mb-1">{leader.name}</h3>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs mb-6">{leader.role}</p>
                <div className="w-12 h-1 bg-white/30 rounded-full mb-6" />
                <p className="text-white text-lg font-medium leading-relaxed mb-8">"{leader.tagline}"</p>
                <a href={`tel:${leader.phone}`} className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-4 rounded-xl text-white transition-all">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">{leader.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Executive Team */}
        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-gray-100
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              {/* RIGHT Accent (RED instead of left green) */}
              <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-[#E11D48] via-[#E11D48] to-[#237E41]" />

              <div className="p-6 flex items-center gap-6">
                
                {/* IMAGE (INCREASED SIZE) */}
                <div className="relative w-28 h-28 shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#237E41] to-[#E11D48] p-[2px]">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#237E41]">
                    {member.role}
                  </p>

                  <h4 className="text-lg font-bold text-gray-900 leading-tight mt-1">
                    {member.name}
                  </h4>

                  <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#237E41] to-[#E11D48] mt-4" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-[#237E41]/5 to-[#E11D48]/5" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}