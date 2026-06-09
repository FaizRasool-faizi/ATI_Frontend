"use client";

import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";

const offices = [
  {
    city: "Karachi",
    address: "20 Hiemani Mansion, M.A Jinnah Road",
  },
  {
    city: "Islamabad",
    address: "F-13, New Abpara Arcade, G-6/1",
  },
  {
    city: "Lahore",
    address: "Aiwan-e-Khair, Lower Mall, Bhatti Gate",
  },
];

export function OfficeLocations() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] via-[#F3F8F5] to-[#EEF6F1]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            National <span className="text-[#237E41]">Presence</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            ATI operates across Pakistan with strong regional offices dedicated
            to student leadership, education, and community service.
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-[#237E41] to-[#7A2430] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards Only Layout */}
        <div className="grid md:grid-cols-3 gap-6">

          {offices.map((office, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(35,126,65,0.15)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#237E41]/10 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-[#237E41]" />
              </div>

              {/* City */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {office.city}
              </h3>

              {/* Address */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {office.address}
              </p>

              {/* Action */}
              <button className="flex items-center gap-2 text-[#237E41] text-sm font-semibold hover:underline">
                <MapPin className="w-4 h-4" />
                View Location
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}