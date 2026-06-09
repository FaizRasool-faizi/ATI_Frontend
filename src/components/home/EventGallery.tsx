"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const events = [
  { title: "Annual Convention", date: "May 20, 2026", img: "/Logo/anaul_convention.png" },
  { title: "Student Seminar", date: "June 05, 2026", img: "/Logo/student_seminar.png" },
  { title: "Leadership Camp", date: "June 12, 2026", img: "/Logo/leadership_camp.png" },
  { title: "Social Welfare Drive", date: "June 15, 2026", img: "/Logo/social_welfare_drive.png" },
];

export function EventGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-black text-gray-900">Latest <span style={{ color: "#237E41" }}>Events</span></h2>
          <Button variant="outline" className="border-[#237E41] text-[#237E41] hover:bg-[#237E41] hover:text-white rounded-full">
            View All Events
          </Button>
        </div>

        {/* Grid adjusted for larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative w-full h-[350px] rounded-3xl overflow-hidden shadow-2xl group border border-gray-100"
            >
              {/* Image filling the container entirely */}
              <Image
                src={event.img}
                alt={event.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#237E41]/90 via-red-600/70 to-[#237E41]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-8 z-10">
                <span className="text-white text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-3">{event.date}</span>
                <h3 className="text-white font-black text-2xl leading-snug mb-6">{event.title}</h3>
                
                <Link href={`/events/${i}`}>
                  <div className="bg-white text-[#237E41] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                    View Details
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}