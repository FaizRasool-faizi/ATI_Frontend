"use client";

import { motion, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Counter Component remains same
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useSpring(0, { duration: 3000, bounce: 0 });

  useEffect(() => {
    if (isInView) { motionValue.set(value); }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    motionValue.on("change", (latest) => {
      if (ref.current) { ref.current.textContent = Math.round(latest).toLocaleString(); }
    });
  }, [motionValue]);

  return <span ref={ref} />;
}

export function AboutJourney() {
  return (
    // Background updated to a lighter, richer Green shade based on #237E41
    <section className="py-32 relative overflow-hidden bg-[#0f351c] text-white">
      
      {/* Soft Glow based on your official Green */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#237E41]/30 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]" style={{ color: "#237E41" }}>Our Legacy</h2>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              The Heartbeat of <br/>
              <span className="text-ati-red">Student Activism.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed border-l-4 border-ati-red pl-6">
              Since 1968, ATI has been the vanguard of ideological integrity. We don’t just graduate students; we produce leaders who redefine the nation's future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Years of Legacy", value: 60 },
              { label: "Active Universities", value: 200 },
              { label: "Student Leaders", value: 1000 },
              { label: "National Chapters", value: 500 }
            ].map((stat, i) => (
              <div key={i} className="bg-[#237E41]/20 border border-[#237E41]/40 p-8 rounded-3xl backdrop-blur-sm">
                <div className="text-4xl font-black text-white mb-2">
                  <Counter value={stat.value} />+
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-[#237E41]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}