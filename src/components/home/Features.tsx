```tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { BookOpen, ShieldCheck, Users, HeartHandshake } from "lucide-react";

export function Features() {
  const pillars = [
    {
      icon: <BookOpen className="w-8 h-8 text-ati-green" />,
      title: "Islamic Education",
      description:
        "Promoting Quranic wisdom and Islamic values among students across academic institutions.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-ati-red" />,
      title: "Character Building",
      description:
        "Focusing on moral development, self-discipline, and ethical leadership practices.",
    },
    {
      icon: <Users className="w-8 h-8 text-ati-green" />,
      title: "Student Leadership",
      description:
        "Empowering the next generation of professionals to lead with competence and integrity.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-ati-red" />,
      title: "Social Welfare",
      description:
        "Actively participating in community service, relief work, and standing for student rights.",
    },
  ];

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-gray-50/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Heading Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-ati-green bg-ati-green/10 px-3 py-1 rounded-full"
          >
            Our Core Mission
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight mt-3 text-gray-900"
          >
            The Pillars of <span className="text-ati-green">Anjuman</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mt-4"
          >
            For decades, ATI has been working tirelessly to guide student
            energy towards positive, intellectual, and revolutionary growth.
          </motion.p>
        </div>

        {/* Interactive Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -15px rgba(4, 106, 56, 0.15)",
              }}
              className="relative p-8 rounded-2xl bg-white border border-gray-100 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-ati-green to-ati-lightGreen transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-ati-green/5 transition-all duration-300">
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ati-green transition-colors duration-200">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-ati-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                Read Details <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```
