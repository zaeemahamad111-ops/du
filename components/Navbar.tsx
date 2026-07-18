'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/services', label: 'SERVICES' },
  { href: '/industries', label: 'INDUSTRIES' },
  { href: '/why-choose-us', label: 'WHY CHOOSE US' },
  { href: '/clients-testimonials', label: 'CLIENTS & TESTIMONIALS' },
  { href: '/quality-safety', label: 'QUALITY & SAFETY' },
  { href: '/resources', label: 'RESOURCES' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Logo */}
        <Link href="/" className="flex items-center py-1">
          <Image
            src="/logo-white.png"
            alt="Du-Astral Construction"
            width={240}
            height={72}
            style={{ height: '40px', width: 'auto' }}
            className="object-contain"
            priority
          />
        </Link>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 bg-[#F8991C] text-black px-6 py-2.5 font-black text-[11px] tracking-[0.2em] uppercase hover:bg-[#e08810] transition-colors"
          >
            LET&apos;S TALK
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 border border-white/25 flex items-center justify-center text-white hover:border-[#F8991C] hover:text-[#F8991C] transition-all"
            aria-label="Toggle Menu"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Premium Full-Screen Overlay Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-black/95 backdrop-blur-md z-[100] flex flex-col justify-between py-12 px-8 lg:px-16 animate-fade-in">
          
          {/* Top Bar inside Overlay */}
          <div className="flex justify-between items-center max-w-[1440px] mx-auto w-full">
            {/* Logo */}
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
              <Image
                src="/logo-white.png"
                alt="Du-Astral Construction"
                width={240}
                height={72}
                style={{ height: '40px', width: 'auto' }}
                className="object-contain"
                priority
              />
            </Link>

            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-[#F8991C] hover:text-[#F8991C] transition-all"
              aria-label="Close Menu"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Middle Content */}
          <div className="max-w-[1440px] mx-auto w-full flex-grow flex items-center my-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full">
              
              {/* Navigation Links (Left column) */}
              <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-4">
                <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-2">NAVIGATION</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`group flex items-center justify-between py-2 border-b border-white/5 transition-colors ${
                          isActive ? 'text-[#F8991C]' : 'text-white/80 hover:text-[#F8991C]'
                        }`}
                      >
                        <span className="text-[18px] md:text-[22px] font-black tracking-wider uppercase">{link.label}</span>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform duration-300">
                          <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Contact / Info (Right column) */}
              <div className="col-span-12 md:col-span-5 md:border-l border-white/10 md:pl-16 flex flex-col justify-center">
                <div>
                  <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">HEAD OFFICE</span>
                  <p className="text-white/60 text-[14px] leading-relaxed mb-8 font-medium">
                    PHE Industrial Area,<br />
                    Hosur Road, Bengaluru - 560 095,<br />
                    Karnataka, India
                  </p>
                  
                  <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-3">QUICK ENQUIRY</span>
                  <a href="mailto:info@du-astral.com" className="text-white font-black text-[18px] hover:text-[#F8991C] transition-colors block mb-2">
                    info@du-astral.com
                  </a>
                  <a href="tel:+914667580" className="text-white/70 text-[14px] hover:text-white transition-colors block">
                    +91 (0)46 - 67580
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Footer inside Overlay */}
          <div className="max-w-[1440px] mx-auto w-full flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-6 gap-4">
            <span className="text-white/30 text-[10px] tracking-wider uppercase font-bold">
              © {new Date().getFullYear()} DU-Astral Construction
            </span>
            <div className="flex gap-4">
              {['in', 'ig', 'yt'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:border-[#F8991C] hover:text-[#F8991C] text-[11px] uppercase font-black transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

        </div>
      )}
    </nav>
  );
}
