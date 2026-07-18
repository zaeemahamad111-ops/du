import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Quality & Safety | DU-Astral Construction',
  description: 'Our commitment to zero-incident operations and uncompromising quality standards across all EPC projects.',
};

export default function QualitySafetyPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/cap-shutdown.png" alt="Quality & Safety" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
          <div className="border-l-4 border-[#F8991C] pl-8 py-4">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">OUR STANDARDS / QUALITY & SAFETY</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              ZERO<br />
              <span className="text-[#F8991C]">COMPROMISE.</span>
            </h1>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-lg mt-6">
              At DU-Astral, safety is not a priority — it is a value. We are committed to zero incidents across every project, every day.
            </p>
          </div>
        </div>
      </header>

      {/* ── SAFETY METRICS ── */}
      <section className="bg-[#F8991C] py-16">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-black/20">
          {[
            { val: '5M+', label: 'Safe Manhours' },
            { val: '0', label: 'LTI Incidents (2023)' },
            { val: '100%', label: 'PPE Compliance' },
            { val: 'ISO 45001', label: 'OH&S Certified' },
          ].map((s, i) => (
            <div key={i} className="px-10 py-8 text-center">
              <span className="text-black font-black block" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>{s.val}</span>
              <span className="text-black/70 text-[11px] font-black tracking-[0.2em] uppercase mt-1 block">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUALITY POLICY ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-5">QUALITY MANAGEMENT</span>
            <h2 className="font-black uppercase leading-[1.0] tracking-tight text-[#111] mb-7" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}>
              QUALITY IS<br />BUILT IN,<br />NOT INSPECTED IN.
            </h2>
            <p className="text-[#555] text-[13px] leading-[1.8] mb-8">
              Our quality management system (ISO 9001:2015) ensures every deliverable meets the highest industry standards. From material traceability to weld qualification records, we document every step of the process.
            </p>
            <div className="space-y-4">
              {[
                'ISO 9001:2015 Quality Management System',
                'ISO 14001:2015 Environmental Management',
                'ISO 45001:2018 Occupational Health & Safety',
                'ASME / AWS Certified Welding Procedures',
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#F8991C] flex-shrink-0 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="black" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <span className="text-[#555] text-[13px] font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative aspect-[4/3] overflow-hidden border border-[#e8e8e8]">
              <Image src="/cap-shutdown.png" alt="Quality processes" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-black p-8 w-40">
              <span className="text-[#F8991C] font-black text-[28px] leading-none block">ISO</span>
              <span className="text-white text-[10px] font-black tracking-wider uppercase">9001 Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAFETY PILLARS ── */}
      <section className="bg-[#0D0D0D] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.6) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">SAFETY PILLARS</span>
            <h2 className="font-black uppercase text-white leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Safety at Every Step
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {[
              { num: '01', title: 'RISK\nASSESSMENT', desc: 'Comprehensive HAZOP, HIRA, and JSA conducted before every activity.' },
              { num: '02', title: 'TRAINING &\nCOMPETENCY', desc: 'Rigorous safety training for all personnel before site mobilization.' },
              { num: '03', title: 'INCIDENT\nPREVENTION', desc: 'Proactive near-miss reporting and corrective action systems.' },
              { num: '04', title: 'EMERGENCY\nRESPONSE', desc: 'Site-specific emergency response plans and trained first responders.' },
            ].map((p) => (
              <div key={p.num} className="p-10 border-r border-white/10 last:border-r-0 group hover:bg-white/5 transition-colors">
                <span className="text-[#F8991C] font-black text-[48px] leading-none block mb-5 opacity-40 group-hover:opacity-100 transition-opacity">{p.num}</span>
                <h3 className="font-black text-[13px] tracking-[0.15em] uppercase text-white mb-3 whitespace-pre-line">{p.title}</h3>
                <p className="text-white/50 text-[12px] leading-[1.7]">{p.desc}</p>
                <div className="h-[2px] w-8 bg-[#F8991C] mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">ACCREDITATIONS</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Our Certifications
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { cert: 'ISO 9001:2015', desc: 'Quality Management' },
              { cert: 'ISO 14001:2015', desc: 'Environmental Management' },
              { cert: 'ISO 45001:2018', desc: 'Health & Safety' },
              { cert: 'ASME', desc: 'Boiler & Pressure Vessel' },
            ].map((c) => (
              <div key={c.cert} className="border border-[#e8e8e8] p-8 text-center hover:border-[#F8991C] transition-colors group">
                <div className="w-14 h-14 bg-[#F8991C]/10 border border-[#F8991C]/30 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F8991C" strokeWidth="1.5">
                    <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/>
                  </svg>
                </div>
                <span className="font-black text-[#111] text-[16px] block mb-1">{c.cert}</span>
                <span className="text-[#888] text-[11px] font-medium">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
