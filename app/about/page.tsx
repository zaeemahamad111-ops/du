import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | DU-Astral Construction',
  description: 'Founded on the principles of engineering excellence, DU-Astral stands at the vanguard of industrial construction.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="About Us" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
          <div className="border-l-4 border-[#F8991C] pl-8 py-4">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">PAGE HEADER</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight mb-6" style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              ABOUT <span className="text-[#F8991C]">US.</span>
            </h1>
            <p className="text-white/70 text-[16px] font-medium leading-relaxed max-w-2xl border-t border-white/10 pt-6">
              Specialist Mechanical Engineering, Heavy Equipment Erection & Plant Maintenance Partner Across India.
            </p>
          </div>
        </div>
      </header>

      {/* ── COMPANY OVERVIEW & HIGHLIGHTS ── */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-5">
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-5">COMPANY OVERVIEW</span>
              <h2 className="font-black uppercase leading-[1.0] tracking-tight text-[#111]" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                Bridging the Gap Between Engineering Design & Site Execution.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
              <p className="text-[#555] text-[15px] leading-[1.8] font-medium pl-6 border-l-2 border-[#F8991C]">
                We are a trusted mechanical contracting company specializing in heavy equipment erection, industrial structural fabrication, high-pressure piping execution, and shutdown maintenance for India’s core infrastructure sectors.
              </p>
              <p className="text-[#555] text-[14px] leading-[1.8]">
                Operating as a direct partner to plant owners, EPC contractors, and project developers, we bridge the gap between engineering design and site execution. From installing rotary kilns and wind turbine generators to executing critical refinery piping and emergency plant turnarounds, our work is driven by zero-harm safety standards, precision quality control, and strict schedule adherence.
              </p>
            </div>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '01', title: 'Specialist Focus', desc: 'Non-EPC Mechanical Execution, Fabrication & Erection' },
              { id: '02', title: 'Core Sectors', desc: 'Cement, Steel, Renewable Energy, Refineries & Process Plants' },
              { id: '03', title: 'Certified Workforce', desc: '6G/TIG Welders, Heavy Riggers, QA/QC Inspectors & HSE Officers' },
              { id: '04', title: 'Compliance Framework', desc: 'ISO 9001, ISO 45001 & ASME / API Execution Standards' }
            ].map((highlight) => (
              <div key={highlight.id} className="bg-[#FAF9F6] border border-zinc-200 p-8 flex flex-col group hover:border-[#F8991C] transition-colors duration-300">
                <span className="text-zinc-300 font-black text-[40px] leading-none mb-6 block group-hover:text-[#F8991C]/20 transition-colors">{highlight.id}</span>
                <h3 className="font-black text-[16px] text-[#111] uppercase tracking-tight mb-3">{highlight.title}</h3>
                <p className="text-zinc-600 text-[13px] leading-relaxed font-medium">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="bg-[#111] text-white py-24 border-y border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Vision */}
          <div className="bg-[#1a1a1a] border border-zinc-800 p-12 relative group hover:border-[#F8991C]/50 transition-colors">
            <div className="absolute top-0 left-0 w-1.5 h-16 bg-[#F8991C]" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#F8991C] block mb-6">OUR VISION</span>
            <p className="text-white/90 text-[16px] md:text-[18px] leading-[1.8] font-medium">
              To be India’s most reliable mechanical construction and plant erection contractor, recognized for technical precision, zero-incident site safety, and rapid project mobilization.
            </p>
          </div>
          {/* Mission */}
          <div className="bg-[#1a1a1a] border border-zinc-800 p-12 relative group hover:border-[#F8991C]/50 transition-colors">
            <div className="absolute top-0 left-0 w-1.5 h-16 bg-white" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-white/50 block mb-6">OUR MISSION</span>
            <p className="text-white/90 text-[15px] md:text-[16px] leading-[1.8] font-medium">
              To deliver safe, high-quality, and on-time mechanical execution for core industrial sectors through certified workforces, modern tooling, and strict adherence to international quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-[#FAF9F6] py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">OUR CORE VALUES</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Quality, Health, Safety & Environment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: '01', title: 'Safety First (HSE Excellence)', desc: 'Strict adherence to ISO 45001 frameworks and daily site safety management to ensure zero lost-time incidents across all project sites.' },
              { num: '02', title: 'Technical Precision & QA/QC', desc: 'Executing every weld, machinery alignment, and heavy lift in full compliance with ASME, API, and Indian Standards (BIS).' },
              { num: '03', title: 'Timely Mobilization & Delivery', desc: 'Meeting tight project milestones and critical shutdown deadlines through organized field leadership and dedicated tooling.' },
              { num: '04', title: 'Operational Integrity', desc: 'Building long-term client partnerships through clear communication, honest technical planning, and execution reliability.' }
            ].map((value) => (
              <div key={value.num} className="bg-white border border-zinc-200 p-10 flex gap-8 group hover:border-[#F8991C] hover:shadow-lg transition-all duration-300 items-start">
                <span className="text-[#F8991C]/20 font-black text-[48px] leading-none group-hover:text-[#F8991C] transition-colors mt-1">{value.num}</span>
                <div>
                  <h3 className="font-black text-[18px] text-[#111] uppercase tracking-tight mb-3">{value.title}</h3>
                  <p className="text-zinc-600 text-[14px] leading-relaxed font-medium">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="bg-[#0D0D0D] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.6) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex justify-between items-end border-b border-white/10 pb-8 mb-14">
            <div>
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">03 / LEADERSHIP</span>
              <h2 className="font-black uppercase text-white leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>The Master Builders.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: 'FOUNDER & CEO', name: 'Shri D.U. Patel', bio: '30 years of engineering excellence and strategic vision in heavy industrial construction.' },
              { role: 'CHIEF ENGINEER', name: 'Rajesh Kumar', bio: 'Pioneer in advanced structural dynamics and large-scale EPC project management.' },
              { role: 'HEAD OF OPERATIONS', name: 'Priya Sharma', bio: 'Expert in project delivery, workforce management, and quality assurance.' },
            ].map((leader) => (
              <div key={leader.name} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6 border border-white/10 relative bg-[#1a1a1a]">
                  <Image src="/workers.png" alt={leader.name} fill className="object-cover grayscale opacity-60 group-hover:opacity-80 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <span className="text-[#F8991C] text-[10px] font-black tracking-[0.2em] uppercase block mb-2">{leader.role}</span>
                <h5 className="text-white font-black text-[18px] uppercase mb-2">{leader.name}</h5>
                <p className="text-white/50 text-[12px] leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#F8991C] py-20">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-black/20">
          {[
            { val: '18+', label: 'Years of Excellence' },
            { val: '1000+', label: 'Projects Completed' },
            { val: '25+', label: 'Industries Served' },
            { val: '5000+', label: 'Skilled Professionals' },
          ].map((s, i) => (
            <div key={i} className="px-10 py-8 text-center">
              <span className="text-black font-black block" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>{s.val}</span>
              <span className="text-black/70 text-[11px] font-black tracking-[0.2em] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#111] py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0"><Image src="/hero-bg.png" alt="" fill className="object-cover opacity-10" /></div>
        <div className="relative z-10 max-w-2xl mx-auto px-8">
          <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-6">START A PROJECT</span>
          <h2 className="text-white font-black uppercase leading-none tracking-tight mb-8" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
            Ready to Build<br />Something Great?
          </h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F8991C] text-black font-black text-[12px] tracking-[0.2em] uppercase px-10 py-5 hover:bg-[#e08810] transition-colors">
            CONTACT US TODAY
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
