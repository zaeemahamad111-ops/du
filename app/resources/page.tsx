import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Resources | DU-Astral Construction',
  description: 'Access case studies, brochures, news and insights from DU-Astral Construction.',
};

export default function ResourcesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/cap-commissioning.png" alt="Resources" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
          <div className="border-l-4 border-[#F8991C] pl-8 py-4">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">KNOWLEDGE HUB / RESOURCES</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              INSIGHTS &amp;<br />
              <span className="text-[#F8991C]">RESOURCES.</span>
            </h1>
          </div>
        </div>
      </header>

      {/* ── CASE STUDIES ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-end border-b border-[#e8e8e8] pb-8 mb-12">
            <div>
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">FEATURED WORK</span>
              <h2 className="font-black uppercase text-[#111] leading-none tracking-tight" style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>Case Studies</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'PARADIP REFINERY EXPANSION', client: 'IOCL', industry: 'Refineries', year: '2023', img: '/featured-project.png' },
              { title: 'VIZAG STEEL PLANT REVAMP', client: 'RINL', industry: 'Steel', year: '2022', img: '/ind-steel.png' },
              { title: 'KOCHI LNG TERMINAL', client: 'Petronet LNG', industry: 'Oil & Gas', year: '2021', img: '/ind-oilgas.png' },
            ].map((cs) => (
              <div key={cs.title} className="group border border-[#e8e8e8] overflow-hidden hover:border-[#F8991C] transition-colors duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={cs.img} alt={cs.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-4 left-4 bg-[#F8991C] text-black text-[9px] font-black tracking-widest uppercase px-3 py-1.5">
                    {cs.industry}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[#aaa] text-[10px] font-black tracking-widest uppercase block mb-2">{cs.client} / {cs.year}</span>
                  <h3 className="font-black uppercase text-[#111] text-[15px] leading-tight mb-4">{cs.title}</h3>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[#111] font-black text-[10px] tracking-[0.2em] uppercase border-b border-[#111] pb-0.5 hover:text-[#F8991C] hover:border-[#F8991C] transition-colors">
                    VIEW CASE STUDY
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOADS ── */}
      <section className="bg-[#f5f5f5] py-24 border-y border-[#e0e0e0]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">DOWNLOADS</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight" style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>Brochures & Documents</h2>
          </div>
          <div className="space-y-0 border border-[#e0e0e0]">
            {[
              { title: 'DU-Astral Company Profile', type: 'PDF', size: '4.2 MB' },
              { title: 'Capabilities & Services Brochure', type: 'PDF', size: '2.8 MB' },
              { title: 'Safety Policy & HSE Standards', type: 'PDF', size: '1.4 MB' },
              { title: 'Quality Management System Overview', type: 'PDF', size: '1.1 MB' },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-6 border-b border-[#e0e0e0] last:border-b-0 bg-white hover:bg-[#fffbf5] transition-colors group">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#F8991C]/10 border border-[#F8991C]/30 flex items-center justify-center">
                    <span className="text-[#F8991C] text-[9px] font-black uppercase">{doc.type}</span>
                  </div>
                  <div>
                    <span className="text-[#111] font-black text-[14px] block">{doc.title}</span>
                    <span className="text-[#aaa] text-[11px]">{doc.size}</span>
                  </div>
                </div>
                <a href="#" className="flex items-center gap-2 text-[#F8991C] font-black text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  DOWNLOAD
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v7M2 8l4 3 4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWS ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">LATEST UPDATES</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight" style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>News & Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { date: 'JULY 2026', title: 'DU-Astral Wins Major EPC Contract for Vizag Green Steel Project', tag: 'PRESS RELEASE' },
              { date: 'JUNE 2026', title: 'Achieving 5 Million Safe Manhours: A Safety Milestone', tag: 'SAFETY' },
              { date: 'MAY 2026', title: 'Expanding Operations: New Office in Odisha for Paradip Cluster', tag: 'EXPANSION' },
              { date: 'APRIL 2026', title: 'DU-Astral Partners with IIT Bombay for Advanced Engineering Training', tag: 'PARTNERSHIP' },
            ].map((news, i) => (
              <div key={i} className="border border-[#e8e8e8] p-8 group hover:border-[#F8991C] transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-[#F8991C]/10 text-[#F8991C] text-[9px] font-black tracking-widest uppercase px-3 py-1.5">{news.tag}</span>
                  <span className="text-[#aaa] text-[10px] font-black tracking-wider uppercase">{news.date}</span>
                </div>
                <h3 className="font-black uppercase text-[#111] text-[16px] leading-tight mb-5 group-hover:text-[#F8991C] transition-colors">{news.title}</h3>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#111] font-black text-[10px] tracking-[0.2em] uppercase border-b border-[#111] pb-0.5 hover:text-[#F8991C] hover:border-[#F8991C] transition-colors">
                  READ MORE
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4h10M7 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
