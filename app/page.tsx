'use client';

import Link from 'next/link';
import Image from 'next/image';

const capabilitiesData = [
  {
    num: '01',
    title: 'Mechanical Construction',
    short: 'Erecting heavy machinery, gas turbines, and industrial systems with precision.',
    desc: 'DU-Astral provides comprehensive mechanical installation services for large-scale industrial plants. Our mechanical division handles structural steel assembly, rotating equipment alignment, and heavy lifts with absolute precision.',
    img: '/cap-mechanical.png',
    features: ['Rotating equipment alignment', 'Gas & steam turbine installation', 'Heavy lift planning & execution', 'Structural steel erection']
  },
  {
    num: '02',
    title: 'Heavy Fabrication',
    short: 'Processing structural steel annually under certified ASME codes.',
    desc: 'Our fabrication facilities are equipped with state-of-the-art cutting, welding, and forming machinery. We produce heavy structural girders, vessels, and custom elements to meet stringent global specifications.',
    img: '/cap-fabrication.png',
    features: ['ASME code vessels & tanks', 'Precision plasma cutting & profiling', 'Submerged arc welding (SAW)', 'Non-destructive testing (NDT)']
  },
  {
    num: '03',
    title: 'Industrial Piping',
    short: 'High-pressure process piping systems for petrochemical, oil, gas, and power plants.',
    desc: 'We engineer, fabricate, and install high-pressure process piping networks. Our weld defect rates are among the lowest in the industry, achieved through continuous training and rigorous quality assurance protocols.',
    img: '/cap-piping.png',
    features: ['Alloy & carbon steel piping', 'Orbital and manual TIG welding', 'Hydrostatic & pneumatic testing', 'Prefabricated piping spools']
  },
  {
    num: '04',
    title: 'Plant Commissioning',
    short: 'Pre-commissioning, start-up, and operational handovers for complex facilities.',
    desc: 'DU-Astral ensures a seamless transition from construction to operations. Our specialist engineers conduct hot/cold loops testing, safety interlock verification, and performance trials before final handover.',
    img: '/cap-commissioning.png',
    features: ['Loop check & calibration', 'System cleaning & flushing', 'Start-up assistance & handovers', 'As-built documentation audits']
  },
  {
    num: '05',
    title: 'Shutdown Maintenance',
    short: 'Maximizing plant uptime through turnarounds, retrofits, and outages.',
    desc: 'We plan and execute plant shutdowns and outages. Our meticulous scheduling and resource allocation ensure turnaround projects are completed safely, on budget, and ahead of schedule.',
    img: '/cap-shutdown.png',
    features: ['Turnaround planning & scheduling', 'Critical equipment overhauls', 'Piping retrofits & modifications', 'Debottlenecking operations']
  },
  {
    num: '06',
    title: 'Electrical & Instrumentation',
    short: 'Integrated power distribution, DCS/PLC automation, and instrumentation.',
    desc: 'Our electrical and control division delivers end-to-end automation and power solutions. From high-voltage substations to smart field sensors, we integrate the nervous system of modern industrial plants.',
    img: '/cap-electrical.png',
    features: ['DCS & PLC system integration', 'High-voltage cable terminations', 'Field instrument calibration', 'Substation & switchgear erection']
  }
];

const locationsData = [
  {
    country: 'Saudi Arabia',
    region: 'Middle East Hub',
    focus: 'Oil & Gas / Petrochemicals',
    desc: 'Executing process piping fabrication, refinery expansion modules, and high-pressure pipeline networks under rigorous industrial parameters.',
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
            className="w-full h-full object-cover object-center opacity-90 scale-[1.08] origin-center"
            poster="/hero-bg.png"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
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

      {/* ── 3. OUR CAPABILITIES ── */}
      <section className="bg-white text-[#111] py-28 relative overflow-hidden" id="capabilities">
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#F8991C] text-[12px] font-black tracking-[0.25em] uppercase block mb-3">
              OUR SERVICES
            </span>
            <h2 className="font-black text-[#111] tracking-tight uppercase leading-[1.1]"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              Our Mission Is To Make Your{' '}
              <span className="inline-block bg-[#F8991C] text-black px-4 py-1 rounded-full text-[0.85em] font-black align-middle my-1">
                Engineering
              </span>{' '}
              Better Through Technology
            </h2>
          </div>

          {/* Grid of 6 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Mechanical Construction (Dark) */}
            <div className="bg-[#1a1a1a] text-white p-8 rounded-xl flex flex-col justify-between min-h-[280px] border border-white/5 shadow-lg group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#F8991C] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-black text-2xl font-bold">engineering</span>
                </div>
                <h3 className="font-black text-[20px] tracking-wide uppercase mb-3 text-white">
                  Mechanical Construction
                </h3>
                <p className="text-white/60 text-[13px] leading-relaxed font-medium">
                  Erecting heavy machinery, gas turbines, and industrial systems with absolute micro-millimeter precision.
                </p>
              </div>
            </div>

            {/* Card 2: Heavy Fabrication (Orange Accent) */}
            <div className="bg-[#F8991C] text-black p-8 rounded-xl flex flex-col justify-between min-h-[280px] shadow-lg group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#F8991C] text-2xl font-bold">precision_manufacturing</span>
                </div>
                <h3 className="font-black text-[20px] tracking-wide uppercase mb-3 text-black">
                  Heavy Fabrication
                </h3>
                <p className="text-black/70 text-[13px] leading-relaxed font-semibold">
                  Processing large-scale structural steel annually under certified ASME codes and global regulations.
                </p>
              </div>
            </div>

            {/* Card 3: Industrial Piping (Dark) */}
            <div className="bg-[#1a1a1a] text-white p-8 rounded-xl flex flex-col justify-between min-h-[280px] border border-white/5 shadow-lg group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#F8991C] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-black text-2xl font-bold">plumbing</span>
                </div>
                <h3 className="font-black text-[20px] tracking-wide uppercase mb-3 text-white">
                  Industrial Piping
                </h3>
                <p className="text-white/60 text-[13px] leading-relaxed font-medium">
                  High-pressure process piping networks engineered for petrochemical, refinery, and power utility sectors.
                </p>
              </div>
            </div>

            {/* Card 4: Plant Commissioning (Light Gray) */}
            <div className="bg-[#F5F5F7] text-[#111] p-8 rounded-xl flex flex-col justify-between min-h-[280px] shadow-sm group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-2xl font-bold">power</span>
                </div>
                <h3 className="font-black text-[20px] tracking-wide uppercase mb-3 text-[#111]">
                  Plant Commissioning
                </h3>
                <p className="text-[#555] text-[13px] leading-relaxed font-medium">
                  Pre-commissioning, start-up operational checks, and performance trials for processing plants.
                </p>
              </div>
            </div>

            {/* Card 5: Shutdown Maintenance (White with Border) */}
            <div className="bg-white text-[#111] p-8 rounded-xl flex flex-col justify-between min-h-[280px] border border-zinc-200 shadow-sm group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-black text-2xl font-bold">build_circle</span>
                </div>
                <h3 className="font-black text-[20px] tracking-wide uppercase mb-3 text-[#111]">
                  Shutdown Maintenance
                </h3>
                <p className="text-[#555] text-[13px] leading-relaxed font-medium">
                  Fast-tracked turnaround outages, retrofits, and equipment debottlenecking to maximize plant uptime.
                </p>
              </div>
            </div>

            {/* Card 6: Electrical & Instrumentation (Light Gray) */}
            <div className="bg-[#F5F5F7] text-[#111] p-8 rounded-xl flex flex-col justify-between min-h-[280px] shadow-sm group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white text-2xl font-bold">schema</span>
                </div>
                <h3 className="font-black text-[20px] tracking-wide uppercase mb-3 text-[#111]">
                  Electrical & Control
                </h3>
                <p className="text-[#555] text-[13px] leading-relaxed font-medium">
                  Integrated high-voltage power distribution, DCS/PLC automation, and smart field instrumentation systems.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

       {/* ── 4. GLOBAL OPERATIONS ── */}
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

      {/* ── 5. FEATURED PROJECT ── */}
      <section className="bg-[#f5f5f5] py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

          <div className="mb-10">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-3">FEATURED PROJECT</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight"
              style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>
              PARADIP REFINERY EXPANSION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#ddd] overflow-hidden shadow-xl">

            {/* Left: Image with diagonal clip */}
            <div className="lg:col-span-7 relative h-[320px] lg:h-auto overflow-hidden bg-[#111]"
              style={{ clipPath: 'polygon(0 0, 95% 0, 100% 100%, 0 100%)' }}>
              <Image
                src="/featured-project.png"
                alt="Paradip Refinery"
                fill
                className="object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30" />
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-5 bg-white p-10 flex flex-col justify-center">

              {/* Top 3 meta */}
              <div className="grid grid-cols-3 gap-4 border-b border-[#e8e8e8] pb-6 mb-6">
                <div>
                  <span className="text-[9px] font-black tracking-[0.2em] text-[#aaa] uppercase block mb-1">CLIENT</span>
                  <span className="text-[13px] font-black text-[#111]">IOCL</span>
                </div>
                <div>
                  <span className="text-[9px] font-black tracking-[0.2em] text-[#aaa] uppercase block mb-1">INDUSTRY</span>
                  <span className="text-[13px] font-black text-[#111]">Refineries</span>
                </div>
                <div>
                  <span className="text-[9px] font-black tracking-[0.2em] text-[#aaa] uppercase block mb-1">LOCATION</span>
                  <span className="text-[13px] font-black text-[#111]">Odisha, India</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5 mb-8">
                {[
                  { icon: '📅', label: 'DURATION', val: '36 Months' },
                  { icon: '👷', label: 'MANPOWER', val: '1200+' },
                  { icon: '✓', label: 'COMPLETED', val: '2023' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#F8991C] text-[18px] leading-none">{item.icon}</span>
                    <div>
                      <span className="text-[9px] font-black tracking-widest text-[#aaa] uppercase block">{item.label}</span>
                      <span className="text-[13px] font-black text-[#111]">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[#666] text-[13px] leading-[1.8] mb-8">
                A greenfield refinery expansion project involving engineering, procurement, construction, installation and commissioning.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#111] font-black text-[11px] tracking-[0.2em] uppercase border-b-2 border-[#111] pb-1 hover:text-[#F8991C] hover:border-[#F8991C] transition-colors self-start"
              >
                VIEW CASE STUDY
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. INDUSTRIES WE SERVE ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

          <div className="flex justify-between items-end border-b border-[#e8e8e8] pb-8 mb-12">
            <div>
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">INDUSTRIES WE SERVE</span>
              <h2 className="font-black uppercase text-[#111] leading-none tracking-tight"
                style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>
                Industries We Serve.
              </h2>
            </div>
            <Link
              href="/industries"
              className="hidden md:flex items-center gap-2 text-[#F8991C] font-black text-[10px] tracking-[0.2em] uppercase hover:brightness-90"
            >
              VIEW ALL INDUSTRIES
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M9 1l4 4-4 4" stroke="#F8991C" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'OIL & GAS', img: '/ind-oilgas.png', isKeySector: false },
              { name: 'STEEL', img: '/ind-steel.png', isKeySector: true },
              { name: 'POWER', img: '/ind-power.png', isKeySector: true },
              { name: 'REFINERIES', img: '/ind-refinery.png', isKeySector: false },
              { name: 'PETROCHEMICALS', img: '/ind-petrochemical.png', isKeySector: false },
              { name: 'RENEWABLE ENERGY & WIND', img: '/ind-renewable.png', isKeySector: true },
            ].map((ind, i) => (
              <div key={i} className={`group relative overflow-hidden bg-[#111] border transition-colors duration-300 cursor-pointer ${
                ind.isKeySector ? 'border-[#F8991C]/50 hover:border-[#F8991C]' : 'border-[#ddd] hover:border-[#F8991C]'
              }`} style={{ aspectRatio: '3/4' }}>
                
                {ind.isKeySector && (
                  <div className="absolute top-3 right-3 bg-[#F8991C] text-black text-[7.5px] font-black tracking-widest px-2 py-0.5 flex items-center gap-0.5 z-10 shadow-lg">
                    <span>CORE</span>
                    <span className="text-[9px] leading-none font-bold">+</span>
                  </div>
                )}

                <Image
                  src={ind.img}
                  alt={ind.name}
                  fill
                  className="object-cover grayscale opacity-70 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex justify-between items-end">
                  <h3 className="text-white font-black text-[9.5px] tracking-[0.12em] uppercase leading-tight">{ind.name}</h3>
                  <svg className="text-[#F8991C] group-hover:translate-x-1 transition-transform" width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5h12M9 1l4 4-4 4" stroke="#F8991C" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
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
