'use client';

import Link from 'next/link';
import Image from 'next/image';

const coreServicesData = [
  {
    id: '01',
    title: 'Mechanical Erection & Equipment Installation',
    desc: 'Precision erection and installation of heavy plant machinery and critical process equipment.',
    tags: ['Rotary Kilns & VRMs', 'Turbines & Mill Drives', 'Heavy Alignment', 'Material Handling'],
  },
  {
    id: '02',
    title: 'Heavy Industrial Structural Steel Fabrication & Erection',
    desc: 'Complete structural steel fabrication and site erection services.',
    tags: ['Plant Buildings & Sheds', 'Pipe Racks & Platforms', 'Heavy Crane Girders', 'AISC / ASME Execution'],
  },
  {
    id: '03',
    title: 'Industrial Piping Systems (Fabrication & Erection)',
    desc: 'Metallic (CS, SS, Alloy) and Non-Metallic (FRP, GRP, HDPE, PVC/CPVC, PP) piping systems.',
    tags: ['Metallic (CS/SS/Alloy)', 'Non-Metallic (FRP/GRP/HDPE)', 'Hydro & Pneumatic Testing', 'NDT Inspections'],
  },
  {
    id: '04',
    title: 'Wind Turbine Erection & Renewable Energy Balance-of-Plant',
    desc: 'WTG erection, hybrid concrete towers, WHRP, and mechanical BOP packages.',
    tags: ['WTG Nacelle & Rotor Erection', 'Hybrid Concrete Towers', 'WHRP Integration', 'Mechanical BOP'],
  },
  {
    id: '05',
    title: 'Specialized Mechanical Execution & Manpower Support',
    desc: 'Plant shutdowns, overhauls, and skilled manpower deployment.',
    tags: ['24/7 Emergency Shutdowns', 'Certified 6G Welders & Riggers', 'Plant Overhauls', 'Capacity Upgrades'],
  },
  {
    id: '06',
    title: 'Operation & Maintenance (O&M)',
    desc: 'Routine, predictive, breakdown support, and long-term O&M contracts.',
    tags: ['Routine Maintenance', 'Predictive Condition Monitoring', 'Breakdown Repair Support', 'Long-Term O&M Contracts'],
  },
];

const locationsData = [
  {
    country: 'Saudi Arabia',
    region: 'Middle East Hub',
    focus: 'Oil & Gas / Petrochemicals',
    desc: 'Executing process piping fabrication (metallic & non-metallic), refinery expansion modules, and pipeline networks under rigorous industrial parameters.',
    projectsCount: '4 Active Projects'
  },
  {
    country: 'South Africa',
    region: 'African Operations',
    focus: 'Steel & Power Infrastructure',
    desc: 'Supporting thermal power plant upgrades, rolling mill structural erection, and heavy fabrication works for local industrial clusters.',
    projectsCount: '3 Active Projects'
  },
  {
    country: 'Fiji',
    region: 'Asia-Pacific Hub',
    focus: 'Renewable Energy & Power Grid',
    desc: 'Developing wind farm foundations, high-voltage substations, and mechanical support systems for green energy transition initiatives.',
    projectsCount: '2 Active Projects'
  }
];

const detailedIndustriesData = [
  {
    title: 'Cement & Mineral Processing',
    scope: 'Mechanical erection, rotary kiln installations, preheaters, clinker grinding units, and heavy equipment alignment for greenfield plants, modernizations, and capacity expansions.'
  },
  {
    title: 'Steel, Aluminium & Heavy Metals',
    scope: 'Heavy machinery positioning, blast furnace erections, sponge iron plants, rebar mills, and industrial mill mechanical installations.'
  },
  {
    title: 'Oil Refineries & Petrochemicals',
    scope: 'Metallic & non-metallic process piping pre-fabrication, mobile service tower installations, cross-country/in-plant pipelines, and storage vessel mechanical works conforming to ASME/API standards.'
  },
  {
    title: 'Thermal Power & Captive Utilities',
    scope: 'Mechanical installation for power generation units, boiler components, ducting, heavy equipment, and utility piping networks.'
  },
  {
    title: 'Wind & Renewable Energy',
    scope: 'Assembly, heavy lifting, and mechanical erection of Wind Turbine Generators (WTGs), hybrid concrete towers, waste heat recovery systems (WHRP), and mechanical balance-of-plant packages.'
  },
  {
    title: 'Process Industries (Sugar, Fertilizer & MDF)',
    scope: 'Specialized vessel assembly, digester dome construction, tank erection, and process equipment mechanical installation.'
  }
];

export default function HomePage() {
  return (
    <div className="bg-white font-sans antialiased text-[#111]">

      {/* ── 1. HERO ── */}
      <header className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0a]">

        {/* Full-bleed background refinery video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center opacity-90 scale-[1.08] origin-center"
            poster="/hero-bg.png"
          >
            <source src="/hero-video-opt.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Blueprint grid overlay */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center max-w-[1440px] mx-auto w-full px-8 lg:px-16 pt-28 pb-32">
          <div className="grid grid-cols-12 gap-6 w-full items-center">

            {/* LEFT: Typography */}
            <div className="col-span-12 lg:col-span-10 flex flex-col">

              {/* Row label */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#F8991C] font-bold text-[10px] tracking-[0.25em] uppercase">Built on Precision, Delivered with Pride.</span>
                <span className="w-8 h-px bg-[#F8991C]" />
              </div>

              {/* Section number */}
              <span className="text-white/30 text-[10px] tracking-[0.2em] font-bold mb-4 block">01</span>

              {/* Main headline */}
              <h1 className="text-white font-black uppercase leading-[0.92] tracking-[-0.02em] mb-7"
                style={{ fontSize: 'clamp(52px, 7vw, 96px)' }}>
                ENGINEERING<br />
                <span className="text-[#F8991C]">TOMORROW.</span><br />
                BUILDING<br />
                WHAT MATTERS.
              </h1>

              <p className="text-white/55 text-[13px] leading-relaxed max-w-md mb-10">
                DU-Astral Construction is a leading EPC and infrastructure company delivering end-to-end engineering solutions across industries.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 bg-[#F8991C] text-black font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#e08810] transition-colors"
                >
                  VIEW CASE STUDIES
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/10 transition-colors"
                >
                  OUR CAPABILITIES
                </a>
              </div>

              {/* Scroll indicator */}
              <div className="flex items-center gap-3 mt-16">
                <span className="text-white/30 text-[9px] tracking-[0.3em] font-bold uppercase">Scroll Down</span>
                <svg className="text-white/30 animate-bounce" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v12M2 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Stats bottom bar */}
        <div className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { val: '18+', label: 'YEARS OF EXCELLENCE' },
              { val: '1000+', label: 'PROJECTS COMPLETED' },
              { val: '25+', label: 'INDUSTRIES SERVED' },
              { val: '5000+', label: 'SKILLED PROFESSIONALS' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 px-8 py-6">
                <span className="text-[#F8991C] font-black text-[28px] leading-none">{s.val}</span>
                <span className="text-white/45 text-[9px] font-bold tracking-[0.18em] uppercase leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── 2. WHO WE ARE ── */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-12 gap-8 items-center">

          {/* Left: Text */}
          <div className="col-span-12 lg:col-span-6">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-5">WHO WE ARE</span>
            <h2 className="font-black uppercase leading-[1.0] tracking-tight text-[#111] mb-7"
              style={{ fontSize: 'clamp(32px, 4vw, 54px)' }}>
              WE DON&apos;T JUST<br />
              CONSTRUCT.<br />
              <span className="text-[#F8991C]">WE ENGINEER</span><br />
              <span className="text-[#F8991C]">IMPACT.</span>
            </h2>
            <p className="text-[#555] text-[13px] leading-[1.8] max-w-lg mb-8">
              With decades of experience and a relentless commitment to quality, safety and innovation, we deliver infrastructure that drives progress and empowers industries.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#111] font-black text-[11px] tracking-[0.2em] uppercase border-b-2 border-[#111] pb-1 hover:text-[#F8991C] hover:border-[#F8991C] transition-colors"
            >
              MORE ABOUT US
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mt-14 pt-8 border-t border-[#e8e8e8]">
              {[
                { val: '18+', label: 'Years of Experience', icon: '⏱' },
                { val: '1000+', label: 'Projects Completed', icon: '✓' },
                { val: '25+', label: 'Industries Served', icon: '◈' },
                { val: '5M+', label: 'Safe Manhours', icon: '⬡' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[#F8991C] text-[18px] font-black mb-0.5">{s.icon}</span>
                  <span className="text-[#111] font-black text-[20px] leading-none mb-1">{s.val}</span>
                  <span className="text-[#888] text-[10px] leading-tight font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Custom graphic */}
          <div className="col-span-12 lg:col-span-6 flex justify-center items-center relative">
            {/* Background blueprint D logo */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[380px] h-[380px] opacity-[0.04] pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" stroke="#F8991C" strokeWidth="2" className="w-full h-full">
                <path d="M25 15H45C65 15 78 30 78 50C78 70 65 85 45 85H25V15Z" />
              </svg>
            </div>

            <div className="relative w-full max-w-[560px] aspect-[1024/1501]">
              <Image
                src="/du-nbg.png"
                alt="Engineering team graphic"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── CORE OPERATIONAL PILLARS (ERECTION, SHUTDOWN, MAINTENANCE, CONTRACTS) ── */}
      <section className="bg-[#0D0D0D] text-white py-16 border-y border-zinc-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-3">
                CORE OPERATIONAL SCOPE
              </span>
              <h2 className="font-black uppercase text-white leading-none tracking-tight text-[28px] md:text-[40px]">
                Our Main Operational Capabilities.
              </h2>
            </div>
            <p className="text-white/60 text-[13px] max-w-md font-medium">
              We specialize in full-spectrum industrial mechanical execution with deep technical expertise, certified manpower, and turnkey management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'ERECTION',
                badge: 'Precision Mechanical Positioning',
                desc: 'Precision mechanical erection of heavy equipment, rotary kilns, mill drives, turbines, and structural steel frameworks.',
                tag: 'Equipment & Heavy Rigging'
              },
              {
                title: 'SHUTDOWN',
                badge: '24/7 Rapid Turnaround',
                desc: 'Annual and emergency plant shutdown execution, turnaround overhauls, and rapid 24/7 technical workforce mobilization.',
                tag: 'Zero-Delay Turnarounds'
              },
              {
                title: 'MAINTENANCE',
                badge: 'Preventive & Predictive',
                desc: 'Routine plant maintenance, predictive condition monitoring, laser alignment, and emergency breakdown recovery support.',
                tag: 'Plant Overhauls & Repairs'
              },
              {
                title: 'CONTRACTS',
                badge: 'Turnkey O&M Support',
                desc: 'Long-term Operation & Maintenance (O&M) contracts, Annual Maintenance Contracts (AMC), and comprehensive service agreements.',
                tag: 'Long-Term O&M Contracts'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="bg-[#161616] border border-white/10 p-8 flex flex-col justify-between group hover:border-[#F8991C] transition-all duration-300">
                <div>
                  <span className="text-[#F8991C] text-[9px] font-black tracking-[0.2em] uppercase block mb-2">{pillar.badge}</span>
                  <h3 className="text-[#F8991C] font-black text-[24px] uppercase tracking-wider mb-4 leading-none">{pillar.title}</h3>
                  <p className="text-white/70 text-[13px] leading-relaxed mb-6 font-medium">{pillar.desc}</p>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-white/40 text-[10px] font-bold tracking-wider uppercase">{pillar.tag}</span>
                  <span className="text-[#F8991C] font-black text-[14px]">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. INDUSTRIES WE SERVE ── */}
      <section className="bg-[#FAF9F6] py-24 border-y border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

          <div className="flex flex-col lg:flex-row justify-between lg:items-end border-b border-zinc-200 pb-8 mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">INDUSTRIES WE SERVE</span>
              <h2 className="font-black uppercase text-[#111] leading-[1.1] tracking-tight mb-4"
                style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>
                Industries We Serve.
              </h2>
              <p className="text-zinc-600 text-[14px] font-medium leading-relaxed max-w-xl">
                Specialized Mechanical Construction, Heavy Erection & Maintenance across Core Industrial Infrastructure
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[#111] font-black text-[11px] tracking-[0.2em] uppercase border-b-2 border-[#111] pb-1 hover:text-[#F8991C] hover:border-[#F8991C] transition-colors self-start lg:self-auto mb-2"
            >
              VIEW ALL INDUSTRIES
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedIndustriesData.map((ind, i) => (
              <div key={i} className="bg-white border border-zinc-200 p-8 flex flex-col justify-between group hover:border-[#F8991C] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-zinc-200 font-black text-[36px] leading-none group-hover:text-[#F8991C]/20 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="material-symbols-outlined text-zinc-300 group-hover:text-[#F8991C] transition-colors">
                      north_east
                    </span>
                  </div>
                  <h3 className="font-black text-[18px] text-[#111] uppercase tracking-tight leading-tight mb-6">
                    {ind.title}
                  </h3>
                  <div className="space-y-2">
                    <span className="inline-block text-[#F8991C] text-[9px] font-black tracking-[0.2em] uppercase">
                      SCOPE OF WORK
                    </span>
                    <p className="text-zinc-600 text-[13px] leading-[1.7] font-medium">
                      {ind.scope}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-[3px] bg-zinc-200 mt-10 group-hover:bg-[#F8991C] group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. OUR CORE CAPABILITIES & SERVICES ── */}
      <section className="bg-white py-24 relative overflow-hidden" id="core-services">
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end border-b border-[#e8e8e8] pb-8 mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">
                OUR CORE CAPABILITIES & SERVICES
              </span>
              <h2 className="font-black uppercase text-[#111] leading-[1.1] tracking-tight mb-4"
                style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>
                Our Core Capabilities<br />
                <span className="text-[#F8991C]">&amp; Services.</span>
              </h2>
              <p className="text-zinc-600 text-[14px] font-medium leading-relaxed max-w-xl">
                Mechanical Fabrication, Heavy Equipment Erection, Plant Shutdowns &amp; Field Support
              </p>
            </div>
            <Link
              href="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#111] text-white font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#F8991C] hover:text-black transition-colors self-start lg:self-auto"
            >
              VIEW ALL CAPABILITIES
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* 3x2 Grid — condensed cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#e8e8e8]">
            {coreServicesData.map((service, i) => (
              <div
                key={i}
                className={`p-8 border-r border-b border-[#e8e8e8] flex flex-col group hover:bg-[#F8991C]/5 transition-all duration-300 ${
                  i % 3 === 2 ? 'lg:border-r-0' : ''
                } ${
                  i >= 3 ? 'md:border-b-0' : ''
                }`}
              >
                {/* Number + title */}
                <div className="flex items-start gap-4 mb-5">
                  <span className="text-[#F8991C] font-black text-[32px] leading-none opacity-30 group-hover:opacity-60 transition-opacity flex-shrink-0">
                    {service.id}
                  </span>
                  <h3 className="font-black text-[15px] text-[#111] uppercase tracking-tight leading-snug mt-1">
                    {service.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-[#F8991C] mb-5" />

                {/* Short description */}
                <p className="text-zinc-600 text-[13px] leading-[1.75] mb-6 flex-1">
                  {service.desc}
                </p>

                {/* Scope tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-black tracking-[0.08em] uppercase text-[#555] bg-zinc-100 px-2.5 py-1 border border-zinc-200 group-hover:border-[#F8991C]/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile CTA below grid */}
          <div className="mt-10 flex justify-center lg:hidden">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#111] text-white font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#F8991C] hover:text-black transition-colors"
            >
              VIEW ALL CAPABILITIES
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>

       {/* ── 5. GLOBAL OPERATIONS ── */}
      <section className="bg-[#FAF9F6] border-y border-zinc-200 py-28 relative overflow-hidden" id="global-reach">
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          
          {/* Header */}
          <div className="grid grid-cols-12 gap-8 mb-20 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="text-[#F8991C] text-[12px] font-black tracking-[0.25em] uppercase block mb-3">
                GLOBAL FOOTPRINT
              </span>
              <h2 className="font-black text-[#111] uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(28px, 4.5vw, 54px)' }}>
                International Operations
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="text-zinc-600 text-[13px] leading-relaxed max-w-sm">
                With proven logistical capabilities and high standards of safety compliance, DU-Astral delivers critical industrial infrastructure across global territories.
              </p>
            </div>
          </div>

          {/* Grid: Columns separated by thin lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-t border-b border-zinc-200 py-12">
            {locationsData.map((loc, i) => (
              <div key={i} className="py-8 md:py-0 px-0 md:px-10 first:pl-0 last:pr-0 flex flex-col justify-between min-h-[420px] group">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-zinc-400 text-[9px] font-mono tracking-[0.2em] uppercase">
                      {loc.region}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 text-[9px] font-black tracking-widest uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Active Hub
                    </span>
                  </div>
                  
                  <h3 className="text-[#111] font-black text-[32px] tracking-tight uppercase leading-none mb-3 group-hover:text-[#F8991C] transition-colors duration-300">
                    {loc.country}
                  </h3>
                  
                  <span className="text-zinc-500 text-[10px] font-black tracking-widest block mb-6 uppercase">
                    {loc.focus}
                  </span>
                  
                  <p className="text-zinc-600 text-[13.5px] leading-relaxed font-medium mb-10">
                    {loc.desc}
                  </p>
                </div>

                <div className="border-t border-zinc-100 pt-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-zinc-400 font-bold uppercase tracking-wider">Logistics & Support</span>
                      <span className="text-[#111] font-black uppercase">Full Operational</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-zinc-400 font-bold uppercase tracking-wider">Scale of Operations</span>
                      <span className="text-[#F8991C] font-black uppercase">{loc.projectsCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MANPOWER POWERHOUSE SHOWCASE ── */}
      <section className="bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#111] text-white py-20 border-t border-zinc-800 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-6">
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">OUR MAIN STRENGTH</span>
              <h2 className="font-black uppercase text-white leading-none tracking-tight mb-6" style={{ fontSize: 'clamp(28px, 3.8vw, 50px)' }}>
                POWERED BY A<br />
                <span className="text-[#F8991C]">CERTIFIED WORKFORCE.</span>
              </h2>
              <p className="text-white/70 text-[14px] leading-relaxed mb-8">
                Our greatest competitive advantage lies in our highly skilled, certified, and battle-tested manpower pool. From CSWIP/AWS certified 6G welders to master riggers and HSE stewards, we mobilize trained technical teams to execute complex industrial projects under aggressive timelines.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-[#F8991C] pl-4">
                  <span className="text-[#F8991C] font-black text-[22px] block">5000+ Personnel</span>
                  <span className="text-white/60 text-[11px] uppercase tracking-wider block">Multi-Skilled Technical Pool</span>
                </div>
                <div className="border-l-2 border-[#F8991C] pl-4">
                  <span className="text-[#F8991C] font-black text-[22px] block">24/7 Mobilization</span>
                  <span className="text-white/60 text-[11px] uppercase tracking-wider block">Rapid Emergency Response</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
              {[
                { title: 'Certified Welders', desc: '6G / TIG / MIG / SMAW welders qualified per ASME Section IX & AWS D1.1.' },
                { title: 'Heavy Rigging Masters', desc: 'Certified crane operators, rigging supervisors & heavy lift engineers.' },
                { title: 'Millwright Technicians', desc: 'Laser alignment specialists for kilns, turbines, mills & high-speed drives.' },
                { title: 'Safety & QA/QC Engineers', desc: 'ISO 45001 safety stewards & NDT Level II certified inspectors.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-none hover:border-[#F8991C] transition-colors">
                  <span className="text-[#F8991C] font-black text-[14px] block mb-2">0{idx + 1}. {item.title}</span>
                  <p className="text-white/60 text-[12px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE DU-ASTRAL ── */}
      <section className="bg-[#f5f5f5] py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">

          <div className="mb-14">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">WHY CHOOSE DU-ASTRAL</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight"
              style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>
              Uncompromising Standards.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'ENGINEERING\nPRECISION', desc: 'We combine deep engineering knowledge with smart execution.' },
              { num: '02', title: 'SAFETY\nFIRST', desc: 'We follow global safety standards in every project.' },
              { num: '03', title: 'ON-TIME\nDELIVERY', desc: 'Committed to delivering projects within time and budget.' },
              { num: '04', title: 'SKILLED\nWORKFORCE', desc: 'Our people are our strength and the key to our success.' },
            ].map((item) => (
              <div key={item.num} className="bg-white border border-[#e0e0e0] p-8 flex flex-col group hover:border-[#F8991C] transition-colors duration-300">
                {/* Large outline number */}
                <span className="font-black text-[64px] leading-none text-[#e0e0e0] group-hover:text-[#F8991C]/20 transition-colors duration-300 mb-4 block">
                  {item.num}
                </span>
                <h3 className="font-black text-[13px] text-[#111] tracking-[0.12em] uppercase mb-4 leading-tight whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-[#777] text-[12px] leading-[1.7] flex-1">
                  {item.desc}
                </p>
                {/* Yellow underline */}
                <div className="h-[3px] w-10 bg-[#F8991C] mt-6" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. LET'S BUILD CTA ── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Left: Solid yellow block */}
          <div className="lg:col-span-5 bg-[#F8991C] p-14 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
            {/* Dark diagonal accent */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-black/10 rotate-45" />

            <span className="text-black/60 text-[11px] font-black tracking-[0.25em] uppercase">LET&apos;S BUILD</span>
            <div>
              <h3 className="font-black uppercase text-black leading-[1.0] tracking-tight mb-10"
                style={{ fontSize: 'clamp(32px, 3.5vw, 52px)' }}>
                THE FUTURE<br />TOGETHER.
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#222] transition-colors"
              >
                START YOUR PROJECT
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Dark block with background */}
          <div className="lg:col-span-7 bg-[#0D0D0D] p-14 flex flex-col justify-center min-h-[320px] relative overflow-hidden">
            <div className="absolute inset-0">
              <Image src="/hero-bg.png" alt="" fill className="object-cover opacity-10" />
            </div>
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(248,153,28,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.8) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative z-10 max-w-sm">
              <h4 className="text-white font-black text-[17px] uppercase tracking-wide mb-3">Have a project in mind?</h4>
              <p className="text-white/50 text-[13px] leading-[1.7] mb-10">
                Let&apos;s create something extraordinary. Discuss parameters, engineering blueprints, and supply logistics with our experts.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#F8991C] text-[#F8991C] font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#F8991C] hover:text-black transition-all"
              >
                TALK TO OUR EXPERTS
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
