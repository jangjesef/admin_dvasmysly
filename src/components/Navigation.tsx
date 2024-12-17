'use client'

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const [logoUrl, setLogoUrl] = useState<string>('https://dvasmysly.cz/wp-content/uploads/2024/11/dvasmysly.svg');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[110] py-8 px-12">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image 
                src={logoUrl}
                alt="Dva Smysly"
                width={200}
                height={67}
                priority
                className={`w-auto transition-all duration-300 ${
                  isMenuOpen ? 'brightness-0 invert' : ''
                }`}
                style={{
                  height: '2.5rem',
                  width: 'auto'
                }}
              />
            </Link>
          </div>
          <button 
            className={`transition-all duration-200 text-2xl ${
              isMenuOpen 
                ? 'text-white hover:text-white/80' 
                : 'text-[#284B44] hover:text-neutral-600'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : "MENU"}
          </button>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav 
        className={`fixed inset-0 bg-[#284B44] text-white transition-all duration-700 transform z-[100] ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        <div className={`h-full flex flex-col justify-center px-12 transition-all duration-700 transform ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 delay-200' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-6 text-3xl font-light">
            {[
              { href: "#pribeh", text: "PŘÍBĚH" },
              { href: "#nase-vino", text: "NAŠE VÍNO" },
              { href: "#degustace", text: "DEGUSTACE" },
              { href: "#sklep", text: "SKLEP" },
              { href: "#kontakt", text: "KONTAKT" },
              { href: "/eshop", text: "E-SHOP" }
            ].map((item, index) => (
              <a 
                key={item.href}
                href={item.href} 
                className={`block hover:opacity-70 transition-all duration-500 transform ${
                  isMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
                onClick={toggleMenu}
              >
                {item.text}
              </a>
            ))}
          </div>
          <div className={`absolute bottom-12 left-12 space-x-4 text-sm text-white transition-all duration-700 transform ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 delay-1000' 
              : 'opacity-0 translate-y-10'
          }`}>
            <a href="#" className="hover:opacity-70 transition-opacity">FB</a>
            <span>•</span>
            <a href="#" className="hover:opacity-70 transition-opacity">IG</a>
          </div>
        </div>
      </nav>
    </>
  );
}
