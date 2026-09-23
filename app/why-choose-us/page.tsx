import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Why Choose Us | DU-Astral Construction',
  description: 'Discover why DU-Astral is the preferred EPC partner for India\'s leading industrial companies.',
};

export default function WhyChooseUsPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Why Choose Us" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
          <div className="border-l-4 border-[#F8991C] pl-8 py-4">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">OUR EDGE / WHY CHOOSE US</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              THE DU-ASTRAL<br />
              <span className="text-[#F8991C]">DIFFERENCE.</span>
            </h1>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-lg mt-6">
              We don&apos;t just build structures — we engineer confidence, trust, and lasting relationships with our clients.
            </p>
          </div>
        </div>
      </header>

      {/* ── 4 PILLARS ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-14 text-center">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">OUR CORE STRENGTHS</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Uncompromising Standards
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'ENGINEERING PRECISION',
                img: '/cap-mechanical.png',
                desc: 'Every project begins with meticulous engineering planning. We combine decades of domain knowledge with cutting-edge tools to deliver solutions that work — the first time.',
                points: ['Detailed Engineering Design', 'Value Engineering Approach', 'Advanced Project Planning', '3D Modelling & Clash Detection'],
              },
              {
                num: '02',
                title: 'SAFETY FIRST CULTURE',
                img: '/cap-shutdown.png',
                desc: 'Safety is embedded in our DNA. Our HSE management system ensures that every worker goes home safely, every single day — across every project site.',
                points: ['5M+ Safe Manhours', 'Zero LTI Record (2023)', 'ISO 45001 Certified', 'Daily Toolbox Talks'],
              },
              {
                num: '03',
                title: 'ON-TIME DELIVERY',
                img: '/cap-commissioning.png',
                desc: 'Committed to client schedules. Our robust project management methodology, milestone tracking, and experienced leadership ensure projects are delivered on time and within budget.',
                points: ['Detailed Baseline Schedules', 'Earned Value Management', 'Proactive Risk Mitigation', 'Weekly Client Progress Reports'],
              },
              {
                num: '04',
                title: 'SKILLED WORKFORCE',
                img: '/workers.png',
                desc: 'Our people are our greatest asset. With 5000+ skilled professionals — engineers, supervisors, and tradesmen — we mobilize rapidly and execute with discipline.',
                points: ['5000+ Skilled Professionals', 'CSWIP / NACE Certified Inspectors', 'Rapid Mobilization Capability', 'In-House Training Programs'],
              },
            ].map((item) => (
              <div key={item.num} className="border border-[#e8e8e8] overflow-hidden group hover:border-[#F8991C] transition-colors duration-300">
                {/* Image banner */}
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-6 flex items-end gap-4">
                    <span className="text-[#F8991C] font-black text-[52px] leading-none opacity-60">{item.num}</span>
                    <h2 className="text-white font-black text-[16px] uppercase leading-tight tracking-tight">{item.title}</h2>
                  </div>
                </div>
                {/* Content */}
                <div className="p-8">
                  <p className="text-[#666] text-[13px] leading-[1.8] mb-6">{item.desc}</p>
                  <ul className="space-y-2.5">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#F8991C]/10 border border-[#F8991C]/30 flex-shrink-0 flex items-center justify-center">
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="#F8991C" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        </div>
                        <span className="text-[12px] text-[#555]">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS / TRACK RECORD ── */}
      <section className="bg-[#f5f5f5] py-24 border-y border-[#e0e0e0]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">OUR CLIENTS</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#e0e0e0]">
            {['IOCL', 'ONGC', 'RINL', 'NTPC', 'Tata Steel', 'JSW Steel', 'Petronet LNG', 'HPCL'].map((client, i) => (
              <div key={i} className="border-r border-b border-[#e0e0e0] p-10 flex items-center justify-center hover:bg-white transition-colors group">
                <span className="font-black text-[#bbb] text-[16px] uppercase tracking-widest group-hover:text-[#F8991C] transition-colors">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── CTA ── */}
      <section className="bg-[#F8991C] py-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-black uppercase text-black leading-tight tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Ready to Partner<br />with the Best?
            </h2>
            <p className="text-black/70 text-[13px] mt-3">Experience the DU-Astral difference on your next project.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-black text-white font-black text-[12px] tracking-[0.2em] uppercase px-10 py-5 hover:bg-[#111] transition-colors">
            GET STARTED
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
