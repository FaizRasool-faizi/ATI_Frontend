"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Updated Nav Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Literature", href: "/literature" },
    { name: "Activities", href: "/activities" },
    { name: "Media", href: "/media" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Left: ATI Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12">
            <Image src="/Logo/logo.png" alt="ATI Logo" width={48} height={48} className="object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-lg text-ati-green leading-none">Anjuman Talaba Islam</span>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mt-1">Pakistan</p>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-ati-green transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" className="border-ati-green text-ati-green cursor-pointer">Virtual Hamdard</Button>
            <Button className="bg-ati-red hover:bg-red-700 cursor-pointer">Donate</Button>
          </div>
          
          <button className="md:hidden p-2 text-ati-green cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg font-semibold text-gray-800 hover:text-ati-green cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button variant="outline" className="w-full cursor-pointer">Virtual Hamdard</Button>
                <Button className="w-full bg-ati-red cursor-pointer">Donate</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}