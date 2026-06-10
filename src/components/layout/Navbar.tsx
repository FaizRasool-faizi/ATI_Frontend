"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#", hasDropdown: true },
    { name: "Literature", href: "#", hasDropdown: true },
    { name: "Media & News", href: "#", hasDropdown: true },
  ];

  const dropdownData: Record<string, { name: string, href: string }[]> = {
    "About Us": [
      { name: "Who Are We?", href: "/about/who-are-we" },
      { name: "Our Team", href: "/about/our-team" },
      { name: "Our Message", href: "/about/our-message" },
      { name: "Our Projects", href: "/about/our-projects" },
      { name: "Our Past Presidents", href: "/about/past-presidents" },
      { name: "Contact Us", href: "/contact" },
    ],
    "Literature": [
      { name: "Blogs", href: "/literature/blogs" },
      { name: "Books", href: "/literature/books" },
      { name: "Magazine", href: "/literature/magazine" },
      { name: "Newsletter", href: "/literature/newsletter" },
    ],
    "Media & News": [
      { name: "Press Release", href: "/media/press-release" },
      { name: "Our Activities", href: "/media/activities" },
      { name: "Images", href: "/media/images" },
      { name: "Audio", href: "/media/audio" },
      { name: "Videos", href: "/media/videos" },
    ]
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Left: Logo Area */}
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
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={link.href} 
                className="text-base font-semibold hover:text-ati-green transition-colors cursor-pointer flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {link.hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 bg-white text-ati-green shadow-xl rounded-b-lg overflow-hidden border-t-2 border-ati-green z-50"
                    >
                      {dropdownData[link.name]?.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="block px-4 py-3 text-[15px] font-medium hover:text-ati-red hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Custom Buttons (Aligned with Reference) */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3">
            {/* Membership Button */}
            <Link 
              href="/membership" 
              className="bg-ati-red text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-all cursor-pointer"
            >
              Membership
            </Link>
            
            {/* Donate Button (Outlined) */}
            <Link 
              href="/donate" 
              className="border-2 border-ati-green text-ati-green px-6 py-2 rounded-lg font-semibold hover:bg-ati-green hover:text-white transition-all cursor-pointer"
            >
              Donate
            </Link>
          </div>
          
          <button className="md:hidden p-2 text-ati-green cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}