'use client';

import Link from 'next/link';
import Image from 'next/image';

const coreServicesData = [
  {
    title: 'Cement Plant Mechanical Erection & Shutdown Maintenance',
    bullets: [
      {
        subtitle: 'Core Plant Equipment Erection',
        desc: 'Precision erection, drive alignment, and mechanical installation of Rotary Kilns, Ball Mills, Vertical Roller Mills (VRM), Raw Mills, and Preheater Towers.'
      },
      {
        subtitle: 'Material Handling & Processing',
        desc: 'Assembly and precision alignment of heavy crushers, clinker coolers, bucket elevators, deep bucket conveyors, and bag filters.'
      },
      {
        subtitle: 'Plant Modernization & Upgradation',
        desc: 'Retrofitting existing production lines, plant debottlenecking, capacity expansion, and Waste Heat Recovery Plant (WHRP) integration.'
      },
      {
        subtitle: 'Annual & Emergency Shutdown Execution',
        desc: 'Rapid mobilization of dedicated 24/7 technical workforces, heavy tooling, and certified rigging teams for zero-delay turnaround execution.'
      }
    ]
  },
  {
    title: 'Steel Plant Construction & Heavy Machinery Assembly',
    bullets: [
      {
        subtitle: 'Heavy Equipment Erection',
        desc: 'Precision positioning and laser alignment of Blast Furnaces, Direct Reduced Iron (DRI) kilns, Electric Arc Furnaces (EAF), and Continuous Casting Machines.'
      },
      {
        subtitle: 'Rolling Mill Assembly',
        desc: 'Installation and commissioning support for rebar mills, wire rod mills, heavy drive gearboxes, overhead crane systems, and hydraulic tilt tables.'
      },
      {
        subtitle: 'Utility & Ducting Networks',
        desc: 'High-capacity industrial air/gas ducting fabrication, cooling water headers, slurry piping systems, and heavy exhaust stack erection.'
      }
    ]
  },
  {
    title: 'Structural Steel Fabrication & Erection',
    bullets: [
      {
        subtitle: 'Industrial Buildings & Heavy Plant Sheds',
        desc: 'Fabrication and field erection of pre-engineered and heavy structural plant buildings, furnace sheds, warehouse structures, powerhouse buildings, and conveyor gantries.'
      },
      {
        subtitle: 'Pipe Racks & Access Platforms',
        desc: 'Multi-tier heavy pipe racks, heat exchanger support structures, equipment access platforms, stair towers, walkways, and safety handrailing.'
      },
      {
        subtitle: 'Heavy Girders, Columns & Frames',
        desc: 'Workshop fabrication and field assembly of high-tonnage EOT crane girders, box columns, heavy built-up sections, roof trusses, and spatial frames.'
      },
      {
        subtitle: 'Hoppers, Silos & Support Framing',
        desc: 'Structural framing and assembly for heavy raw material hoppers, clinker silos, coal bunkers, and cyclone support towers.'
      },
      {
        subtitle: 'Surface Preparation & Quality Control',
        desc: 'SA 2.5 shot/grit blasting, anti-corrosive industrial painting systems, and 100% joint NDT (RT/UT/MPT/LPT) executed by certified 6G/SMAW/MIG welders.'
      }
    ]
  },
  {
    title: 'High-Pressure Industrial Piping Systems',
    bullets: [
      {
        subtitle: 'Process & Utility Piping',
        desc: 'Shop and field fabrication of Carbon Steel (CS), Stainless Steel (SS), and Alloy Steel piping for high-pressure, high-temperature industrial process lines.'
      },
      {
        subtitle: 'Testing & Pre-Commissioning Support',
        desc: 'Hydro-testing, pneumatic testing, line flushing, chemical cleaning, and joint NDT inspections to ensure 100% leak-free plant startups.'
      }
    ]
  },
  {
    title: 'Wind Turbine Erection & Renewable Energy Balance-of-Plant',
    bullets: [
      {
        subtitle: 'Wind Turbine Generator (WTG) Erection',
        desc: 'Complete mechanical assembly, heavy crane positioning, and torque-controlled fastening of nacelles, hubs, rotors, and tower sections for onshore wind farms.'
      },
      {
        subtitle: 'Hybrid Concrete Towers',
        desc: 'Specialized segment alignment, jointing, and post-tensioning execution for high-capacity hybrid concrete wind turbine towers.'
      },
      {
        subtitle: 'Waste Heat Recovery Systems (WHRP)',
        desc: 'Turnkey mechanical assembly, boiler casing erection, heat exchanger placement, and ducting integration to capture waste thermal energy in cement and steel facilities.'
      },
      {
        subtitle: 'Mechanical Balance-of-Plant (BOP)',
        desc: 'Erection of auxiliary mechanical networks, including hydraulic power packs, lube oil piping, cooling systems, and structural bases.'
      }
    ]
  },
  {
    title: 'Heavy Industrial Fabrication & Storage Vessels',
    bullets: [
      {
        subtitle: 'Ducting & Hopper Fabrication',
        desc: 'Custom fabrication of thick-plate ducting, raw material hoppers, silos, cyclones, and discharge chutes.'
      },
      {
        subtitle: 'Storage Tanks & Pressure Vessels',
        desc: 'On-site and shop fabrication of API 650 storage tanks, utility vessels, chemical tanks, and heat exchanger shells.'
      },
      {
        subtitle: 'Protective Surface Coatings',
        desc: 'Specialized grit blasting, anti-corrosive primer application, and heavy-duty industrial painting for harsh operating environments.'
      }
    ]
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

const detailedIndustriesData = [
  {
    title: 'Cement & Mineral Processing',
    scope: 'Turnkey mechanical erection, rotary kiln installations, preheaters, clinker grinding units, and structural construction for greenfield plants, modernizations, and capacity expansions.'
  },
  {
    title: 'Steel, Aluminium & Heavy Metals',
    scope: 'Structural steel fabrication, blast furnace erections, sponge iron plants, rebar mills, and heavy mill machinery positioning and alignment.'
  },
  {
    title: 'Oil Refineries & Petrochemicals',
    scope: 'High-pressure process piping pre-fabrication, mobile service tower installations, cross-country pipelines, and specialized equipment erection under strict ASME/API guidelines.'
  },
  {
    title: 'Thermal Power & Captive Utilities',
    scope: 'Comprehensive construction and mechanical installation for power generation facilities, boiler units, structural sheds, and industrial utility networks.'
  },
  {
    title: 'Wind & Renewable Energy',
    scope: 'Assembly, heavy lifting, and mechanical erection of Wind Turbine Generators (WTGs), hybrid concrete towers, waste heat recovery systems (WHRP), and mechanical balance-of-plant packages.'
  },
  {
    title: 'Process Industries (Sugar, Fertilizer & MDF)',
    scope: 'Specialized vessel fabrication, digester dome construction, chemical storage units, and process equipment mechanical assembly.'
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

      {/* ── 3. OUR CORE SERVICES ── */}
      <section className="bg-white py-24 relative overflow-hidden" id="core-services">
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          
          {/* Header matches Industries We Serve exactly */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-end border-b border-[#e8e8e8] pb-8 mb-16 gap-6">
            <div className="max-w-3xl">
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">
                OUR CORE SERVICES
              </span>
              <h2 className="font-black uppercase text-[#111] leading-[1.1] tracking-tight mb-4"
                style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>
                Our Core Services.
              </h2>
              <p className="text-zinc-600 text-[14px] font-medium leading-relaxed max-w-xl">
                Mechanical Fabrication, Heavy Equipment Erection, Plant Shutdowns & Field Support
              </p>
            </div>
          </div>

          {/* 2x2 Grid of detailed service cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServicesData.map((service, i) => (
              <div key={i} className="bg-[#FAF9F6] border border-zinc-200 p-10 flex flex-col group hover:border-[#F8991C] hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-zinc-300 font-black text-[40px] leading-none group-hover:text-[#F8991C]/20 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="font-black text-[22px] text-[#111] uppercase tracking-tight leading-tight mb-8 pb-6 border-b border-zinc-200 group-hover:border-[#F8991C]/30 transition-colors">
                  {service.title}
                </h3>
                
                <div className="flex flex-col gap-6">
                  {service.bullets.map((bullet, j) => (
                    <div key={j}>
                      <span className="inline-block text-[#111] text-[11px] font-black tracking-[0.1em] uppercase mb-2">
                        • {bullet.subtitle}
                      </span>
                      <p className="text-zinc-600 text-[13px] leading-[1.7] font-medium pl-3 border-l-2 border-[#F8991C]/30">
                        {bullet.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
