"use client";

import Link from "next/link";
import Image from "next/image";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#10281D] via-[#18392A] to-[#7A2430] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Top Accent Line */}
        <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#237E41] via-[#E41E2C] to-[#237E41] mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/Logo/logo.png"
                alt="ATI Logo"
                width={80}
                height={80}
                priority
              />
            </div>

            <p className="text-sm leading-relaxed text-white/75">
              Anjuman Talaba Islam serves as the cradle of ideological
              leadership, fostering a generation rooted in faith, intellect,
              and service. We strive to redefine student activism through
              knowledge, character, and social responsibility.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">
              About Us
            </h4>

            <ul className="space-y-4 text-sm">
              {[
                "Who We Are",
                "Our Leaders",
                "Our Message",
                "Our Projects",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/75 hover:text-[#8EE4AF] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Literature */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">
              Literature
            </h4>

            <ul className="space-y-4 text-sm">
              {["Books", "Magazines", "Blogs"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-white/75 hover:text-[#8EE4AF] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media & News */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">
              Media & News
            </h4>

            <ul className="space-y-4 text-sm">
              {["Press Release", "Our Activities", "Images", "Videos"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/75 hover:text-[#8EE4AF] transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/60">
            © 2026 Anjuman Talaba Islam. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-white/80 hover:text-[#8EE4AF] transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="text-white/80 hover:text-[#8EE4AF] transition-all duration-300 hover:scale-110"
            >
              <FaInstagram size={18} />
            </Link>

            <Link
              href="#"
              aria-label="WhatsApp"
              className="text-white/80 hover:text-[#8EE4AF] transition-all duration-300 hover:scale-110"
            >
              <FaWhatsapp size={18} />
            </Link>

            <Link
              href="#"
              aria-label="X"
              className="text-white/80 hover:text-[#8EE4AF] transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter size={18} />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-xs">
            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}