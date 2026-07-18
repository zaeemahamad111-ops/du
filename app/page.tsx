'use client';

import Link from 'next/link';
import Image from 'next/image';

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
      <section className="bg-[#0D0D0D] text-white py-24 relative overflow-hidden" id="capabilities">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(248,153,28,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.6) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">

          <div className="flex justify-between items-end border-b border-white/10 pb-8 mb-14">
            <div>
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">OUR CAPABILITIES</span>
              <h2 className="font-black uppercase text-white leading-none tracking-tight"
                style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}>
                End-To-End Engineering Solutions
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden md:flex items-center gap-2 text-[#F8991C] font-black text-[10px] tracking-[0.2em] uppercase hover:brightness-110"
            >
              VIEW ALL SERVICES
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* 6 capability cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { title: 'MECHANICAL\nCONSTRUCTION', img: '/cap-mechanical.png' },
              { title: 'HEAVY\nFABRICATION', img: '/cap-fabrication.png' },
              { title: 'INDUSTRIAL\nPIPING', img: '/cap-piping.png' },
              { title: 'PLANT\nCOMMISSIONING', img: '/cap-commissioning.png' },
              { title: 'SHUTDOWN\nMAINTENANCE', img: '/cap-shutdown.png' },
              { title: 'ELECTRICAL &\nINSTRUMENTATION', img: '/cap-electrical.png' },
            ].map((cap, i) => (
              <div key={i} className="group relative overflow-hidden bg-[#151515] border border-white/[0.06] hover:border-[#F8991C]/40 transition-colors duration-500 cursor-pointer" style={{ aspectRatio: '9/14' }}>
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={cap.img}
                    alt={cap.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* CAD-style icon top */}
                <div className="absolute top-5 left-5 z-10">
                  <div className="w-9 h-9 border border-white/25 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.2">
                      <rect x="2" y="2" width="12" height="12" />
                      <path d="M5 8h6M8 5v6" />
                    </svg>
                  </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 border-t border-white/10">
                  <h3 className="text-white font-black text-[10px] tracking-[0.15em] uppercase leading-tight mb-4 whitespace-pre-line">
                    {cap.title}
                  </h3>
                  <svg className="text-[#F8991C] group-hover:translate-x-1.5 transition-transform duration-300" width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5h12M9 1l4 4-4 4" stroke="#F8991C" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. GLOBAL PRESENCE ── */}
      <section className="bg-[#0f0f0f] border-y border-white/5 py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-14">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">GLOBAL REACH</span>
            <h2 className="font-black uppercase text-white leading-none tracking-tight text-[28px] md:text-[48px]">
              International Operations
            </h2>
            <p className="text-white/45 text-[13px] mt-4 max-w-xl leading-relaxed">
              With proven logistical capabilities and high standards of safety compliance, DU-Astral delivers critical industrial infrastructure across global territories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                country: 'SAUDI ARABIA',
                type: 'OIL & GAS / PETROCHEMICALS',
                desc: 'Executing process piping fabrication, refinery expansion modules, and high-pressure pipeline networks under rigorous industrial parameters.',
                coords: '23°88\'64" N // 45°07\'91" E'
              },
              {
                country: 'SOUTH AFRICA',
                type: 'STEEL & POWER INFRASTRUCTURE',
                desc: 'Supporting thermal power plant upgrades, rolling mill structural erection, and heavy fabrication works for local industrial clusters.',
                coords: '30°55\'92" S // 22°93\'75" E'
              },
              {
                country: 'FIJI',
                type: 'RENEWABLE ENERGY & POWER GRID',
                desc: 'Developing wind farm foundations, high-voltage substations, and mechanical support systems for green energy transition initiatives.',
                coords: '17°71\'39" S // 178°06\'50" E'
              }
            ].map((loc, i) => (
              <div key={i} className="bg-black/40 border border-white/10 p-8 flex flex-col justify-between hover:border-[#F8991C] transition-colors duration-300">
                <div>
                  <span className="text-white/30 text-[9px] font-mono block mb-4">{loc.coords}</span>
                  <h3 className="text-[#F8991C] font-black text-[20px] uppercase mb-1 tracking-wider">{loc.country}</h3>
                  <span className="text-white/40 text-[9px] font-black tracking-widest block mb-4">{loc.type}</span>
                  <p className="text-white/60 text-[12.5px] leading-relaxed mb-6 font-medium">
                    {loc.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-[10px] font-black tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F8991C]" />
                  Active Operation
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
