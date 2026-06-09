"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const provinces = [
  "South Punjab",
  "North Punjab",
  "Sindh",
  "Balochistan",
  "AJK & GB",
];

const getCabinetMembers = (province: string) => {
  if (province === "South Punjab") {
    return [
      {
        role: "Nazim",
        name: "Umair Awan",
        image: "/Logo/punjab_south_presd.png",
      },
      {
        role: "General Secretary",
        name: "Shakir Aslam Noonari",
        image: "/Logo/punjab_south_sec.png",
      },
      {
        role: "Advisory Council",
        name: "Imran Rasheed",
        image: "/Logo/member_advisory_Council.png",
      },
      {
        role: "Advisory Council",
        name: "Abdul Jaleel Khosa",
        image: "/Logo/member_advisory_Council2.png",
      },
    ];
  }

  if (province === "North Punjab") {
    return [
      {
        role: "Nazim",
        name: "Ahsan Kabir",
        image: "/Logo/ahsan_kabir_namiz.png",
      },
      {
        role: "General Secretary",
        name: "Bilal Mustafai",
        image: "/Logo/Bilal_minhas_Gs.png",
      },
      {
        role: "Advisory Council",
        name: "Nasarullah Sultan",
        image: "/Logo/Nasr_sultan.png",
      },
      {
        role: "Advisory Council",
        name: "Mohsin Ali",
        image: "/Logo/Mohsin_ali.png",
      },
    ];
  }

  return [
    {
      role: "Nazim",
      name: `President ${province}`,
      image: "https://avatar.iran.liara.run/public/31",
    },
    {
      role: "General Secretary",
      name: `Gen. Secretary ${province}`,
      image: "https://avatar.iran.liara.run/public/32",
    },
    {
      role: "Advisory Council",
      name: `Member 1 ${province}`,
      image: "https://avatar.iran.liara.run/public/33",
    },
    {
      role: "Advisory Council",
      name: `Member 2 ${province}`,
      image: "https://avatar.iran.liara.run/public/34",
    },
  ];
};

export function ProvincialCabinets() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F7FAF8] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Provincial <span className="text-[#237E41]">Cabinets</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Meet the leadership teams serving across different regions of Pakistan.
          </p>
        </div>

        <Tabs defaultValue="South Punjab" className="w-full">
          {/* Responsive Tabs Container */}
          <div className="flex justify-center mb-14">
            <TabsList className="bg-white border border-gray-200 shadow-sm p-1.5 h-auto flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-2 rounded-2xl w-full md:w-fit scrollbar-hide">
              {provinces.map((prov) => (
                <TabsTrigger
                  key={prov}
                  value={prov}
                  className="
                    px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap
                    data-[state=active]:bg-gradient-to-r
                    data-[state=active]:from-[#237E41]
                    data-[state=active]:to-[#1B5E32]
                    data-[state=active]:text-white
                    transition-all duration-300
                  "
                >
                  {prov}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* ... (TabsContent aur baki code waisa hi rahega) */}
          {provinces.map((prov) => (
            <TabsContent key={prov} value={prov} className="mt-0 focus-visible:outline-none">
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
                >
                  {getCabinetMembers(prov).map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="relative h-[320px] overflow-hidden pl-10">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-0 left-0 h-full z-10">
                          <div className="h-full bg-gradient-to-b from-[#237E41] to-[#1B5E32] px-3 flex items-center shadow-xl">
                            <span
                              className="text-white text-[11px] font-black uppercase tracking-[0.25em]"
                              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                            >
                              {member.role}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-2xl font-bold text-gray-900">{member.name}</h4>
                        <p className="mt-2 text-gray-500 font-medium">{member.role}</p>
                        <div className="w-12 h-1 bg-[#237E41] rounded-full mx-auto mt-4"></div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}