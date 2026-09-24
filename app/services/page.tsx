import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Core Capabilities & Services | DU-Astral Construction',
  description: 'End-to-end mechanical construction, heavy fabrication, high-pressure piping, structural steel erection, wind turbine erection, and renewable energy balance-of-plant services.',
};

const services = [
  {
    id: '01',
    title: 'Cement Plant Mechanical Erection & Shutdown Maintenance',
    desc: 'We deliver end-to-end mechanical erection, equipment alignment, plant renovation, and shutdown execution for cement manufacturing facilities across India.',
    img: '/cap-mechanical.png',
    bullets: [
      {
        subtitle: 'Core Plant Equipment Erection',
        detail: 'Precision erection, drive alignment, and mechanical installation of Rotary Kilns, Ball Mills, Vertical Roller Mills (VRM), Raw Mills, and Preheater Towers.',
      },
      {
        subtitle: 'Material Handling & Processing',
        detail: 'Assembly and precision alignment of heavy crushers, clinker coolers, bucket elevators, deep bucket conveyors, and bag filters.',
      },
      {
        subtitle: 'Plant Modernization & Upgradation',
        detail: 'Retrofitting existing production lines, plant debottlenecking, capacity expansion, and Waste Heat Recovery Plant (WHRP) integration.',
      },
      {
        subtitle: 'Annual & Emergency Shutdown Execution',
        detail: 'Rapid mobilization of dedicated 24/7 technical workforces, heavy tooling, and certified rigging teams for zero-delay turnaround execution.',
      },
    ],
  },
  {
    id: '02',
    title: 'Steel Plant Construction & Heavy Machinery Assembly',
    desc: 'We execute heavy-duty mechanical construction, precision equipment positioning, and utility assembly for steel mills, sponge iron plants, and metal processing complexes.',
    img: '/cap-piping.png',
    bullets: [
      {
        subtitle: 'Heavy Equipment Erection',
        detail: 'Precision positioning and laser alignment of Blast Furnaces, Direct Reduced Iron (DRI) kilns, Electric Arc Furnaces (EAF), and Continuous Casting Machines.',
      },
      {
        subtitle: 'Rolling Mill Assembly',
        detail: 'Installation and commissioning support for rebar mills, wire rod mills, heavy drive gearboxes, overhead crane systems, and hydraulic tilt tables.',
      },
      {
        subtitle: 'Utility & Ducting Networks',
        detail: 'High-capacity industrial air/gas ducting fabrication, cooling water headers, slurry piping systems, and heavy exhaust stack erection.',
      },
    ],
  },
  {
    id: '03',
    title: 'Structural Steel Fabrication & Erection',
    desc: 'We offer full-scope structural engineering—from shop detailing, heavy plate fabrication, and surface treatment to site transportation and precision heavy-lift erection in strict compliance with IS 800 / IS 808 (BIS), ASME, and AISC codes.',
    img: '/cap-shutdown.png',
    bullets: [
      {
        subtitle: 'Industrial Buildings & Heavy Plant Sheds',
        detail: 'Fabrication and field erection of pre-engineered and heavy structural plant buildings, furnace sheds, warehouse structures, powerhouse buildings, and conveyor gantries.',
      },
      {
        subtitle: 'Pipe Racks & Access Platforms',
        detail: 'Multi-tier heavy pipe racks, heat exchanger support structures, equipment access platforms, stair towers, walkways, and safety handrailing.',
      },
      {
        subtitle: 'Heavy Girders, Columns & Frames',
        detail: 'Workshop fabrication and field assembly of high-tonnage EOT crane girders, box columns, heavy built-up sections, roof trusses, and spatial frames.',
      },
      {
        subtitle: 'Hoppers, Silos & Support Framing',
        detail: 'Structural framing and assembly for heavy raw material hoppers, clinker silos, coal bunkers, and cyclone support towers.',
      },
      {
        subtitle: 'Surface Preparation & Quality Control',
        detail: 'SA 2.5 shot/grit blasting, anti-corrosive industrial painting systems, and 100% joint NDT (RT/UT/MPT/LPT) executed by certified 6G/SMAW/MIG welders.',
      },
    ],
  },
  {
    id: '04',
    title: 'High-Pressure Industrial Piping Systems',
    desc: 'We provide complete industrial piping solutions—from isometric detailing and shop fabrication to field fit-up, NDT testing, and system pre-commissioning.',
    img: '/cap-fabrication.png',
    bullets: [
      {
        subtitle: 'Process & Utility Piping',
        detail: 'Shop and field fabrication of Carbon Steel (CS), Stainless Steel (SS), and Alloy Steel piping for high-pressure, high-temperature industrial process lines.',
      },
      {
        subtitle: 'Testing & Pre-Commissioning Support',
        detail: 'Hydro-testing, pneumatic testing, line flushing, chemical cleaning, and joint NDT inspections to ensure 100% leak-free plant startups.',
      },
    ],
  },
  {
    id: '05',
    title: 'Wind Turbine Erection & Renewable Energy Balance-of-Plant',
    desc: 'We specialize in heavy-lift rigging, mechanical assembly, and site erection for utility-scale renewable power installations and industrial energy recovery projects.',
    img: '/cap-mechanical.png',
    bullets: [
      {
        subtitle: 'Wind Turbine Generator (WTG) Erection',
        detail: 'Complete mechanical assembly, heavy crane positioning, and torque-controlled fastening of nacelles, hubs, rotors, and tower sections for onshore wind farms.',
      },
      {
        subtitle: 'Hybrid Concrete Towers',
        detail: 'Specialized segment alignment, jointing, and post-tensioning execution for high-capacity hybrid concrete wind turbine towers.',
      },
      {
        subtitle: 'Waste Heat Recovery Systems (WHRP)',
        detail: 'Turnkey mechanical assembly, boiler casing erection, heat exchanger placement, and ducting integration to capture waste thermal energy in cement and steel facilities.',
      },
      {
        subtitle: 'Mechanical Balance-of-Plant (BOP)',
        detail: 'Erection of auxiliary mechanical networks, including hydraulic power packs, lube oil piping, cooling systems, and structural bases.',
      },
    ],
  },
  {
    id: '06',
    title: 'Heavy Industrial Fabrication & Storage Vessels',
    desc: 'Our workshop and field teams execute custom plate fabrication, heavy ducting, and industrial tankage strictly conforming to code requirements.',
    img: '/cap-piping.png',
    bullets: [
      {
        subtitle: 'Ducting & Hopper Fabrication',
        detail: 'Custom fabrication of thick-plate ducting, raw material hoppers, silos, cyclones, and discharge chutes.',
      },
      {
        subtitle: 'Storage Tanks & Pressure Vessels',
        detail: 'On-site and shop fabrication of API 650 storage tanks, utility vessels, chemical tanks, and heat exchanger shells.',
      },
      {
        subtitle: 'Protective Surface Coatings',
        detail: 'Specialized grit blasting, anti-corrosive primer application, and heavy-duty industrial painting for harsh operating environments.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/cap-mechanical.png" alt="Services" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
          <div className="border-l-4 border-[#F8991C] pl-8 py-4">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">WHAT WE DO / OUR CORE CAPABILITIES & SERVICES</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(44px, 6vw, 82px)' }}>
              OUR CORE<br />
              <span className="text-[#F8991C]">CAPABILITIES</span><br />
              <span className="text-white">& SERVICES.</span>
            </h1>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-lg mt-6">
              End-to-end mechanical construction, heavy fabrication, high-pressure piping, and renewable energy erection — delivered with precision, safety, and on-time execution.
            </p>
          </div>
        </div>
      </header>

      {/* ── CAPABILITIES DETAILED LIST ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="space-y-0">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`border border-[#e8e8e8] mb-0 -mt-px ${i % 2 !== 0 ? 'bg-[#FAFAF8]' : 'bg-white'}`}
              >
                {/* Top: Image banner with number + title overlay */}
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-4 relative overflow-hidden min-h-[260px]">
                    <Image src={svc.img} alt={svc.title} fill className="object-cover brightness-75" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                      <span className="text-[#F8991C] font-black text-[64px] leading-none opacity-40">{svc.id}</span>
                      <span className="text-white/60 text-[10px] font-black tracking-[0.2em] uppercase">CAPABILITY {svc.id} OF 06</span>
                    </div>
                  </div>

                  {/* Title + desc */}
                  <div className="col-span-12 lg:col-span-8 p-10 lg:p-12 flex flex-col justify-center border-l border-[#e8e8e8]">
                    <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-3">CAPABILITY {svc.id}</span>
                    <h2 className="font-black uppercase text-[#111] leading-tight tracking-tight mb-5" style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}>
                      {svc.title}
                    </h2>
                    <p className="text-[#555] text-[14px] leading-[1.85] max-w-3xl">
                      {svc.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom: Detailed bullet grid */}
                <div className="border-t border-[#e8e8e8]">
                  <div className={`grid grid-cols-1 md:grid-cols-2 ${svc.bullets.length >= 4 ? 'lg:grid-cols-4' : svc.bullets.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
                    {svc.bullets.map((bullet, j) => (
                      <div
                        key={j}
                        className="p-8 border-r border-b border-[#e8e8e8] last:border-r-0 group hover:bg-[#F8991C]/5 transition-colors duration-200"
                      >
                        {/* Orange accent line */}
                        <div className="w-8 h-[3px] bg-[#F8991C] mb-5" />
                        <h3 className="font-black text-[#111] text-[12px] tracking-[0.08em] uppercase leading-snug mb-3">
                          {bullet.subtitle}
                        </h3>
                        <p className="text-[#777] text-[12px] leading-[1.8]">
                          {bullet.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-[#0D0D0D] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.6) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">OUR PROCESS</span>
            <h2 className="font-black uppercase text-white leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              How We Deliver Excellence
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-white/10">
            {[
              { step: '01', title: 'CONSULTATION', desc: 'Understanding your project requirements, scope, and timelines in detail.' },
              { step: '02', title: 'ENGINEERING', desc: 'Detailed engineering design, material takeoffs, and execution planning.' },
              { step: '03', title: 'EXECUTION', desc: 'Mobilization of skilled workforce and deployment of resources on-site.' },
              { step: '04', title: 'HANDOVER', desc: 'Commissioning, quality checks, and structured handover to client teams.' },
            ].map((p) => (
              <div key={p.step} className="p-10 border-r border-white/10 last:border-r-0 group hover:bg-white/5 transition-colors">
                <span className="text-[#F8991C] font-black text-[48px] leading-none block mb-5 opacity-40 group-hover:opacity-100 transition-opacity">{p.step}</span>
                <h3 className="font-black text-[13px] tracking-[0.15em] uppercase text-white mb-3">{p.title}</h3>
                <p className="text-white/50 text-[12px] leading-[1.7]">{p.desc}</p>
                <div className="h-[2px] w-8 bg-[#F8991C] mt-6" />
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
              Have a Project in Mind?
            </h2>
            <p className="text-black/70 text-[13px] mt-3">Let our team help you plan, engineer, and execute with precision.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-black text-white font-black text-[12px] tracking-[0.2em] uppercase px-10 py-5 hover:bg-[#111] transition-colors">
            GET A QUOTE
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
