import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Core Capabilities & Services | DU-Astral Construction',
  description: 'End-to-end mechanical erection, equipment shutdown maintenance, metallic & non-metallic industrial piping, structural steel erection, and operation & maintenance (O&M) contracts.',
};

const services = [
  {
    id: '01',
    title: 'Mechanical Erection & Equipment Installation',
    desc: 'Precision erection and installation of heavy plant machinery and critical process equipment.',
    img: '/svc-cement.png',
    bullets: [
      {
        subtitle: 'Core Heavy Equipment Erection',
        detail: 'Precision erection, laser drive alignment, and mechanical positioning of Rotary Kilns, Ball Mills, Vertical Roller Mills (VRM), Steam/Gas Turbines, and Heavy Machinery.',
      },
      {
        subtitle: 'Material Handling & Processing Systems',
        detail: 'Assembly and precision positioning of heavy crushers, clinker coolers, bucket elevators, deep bucket conveyors, and bag filter systems.',
      },
      {
        subtitle: 'Plant Modernization & Capacity Expansion',
        detail: 'Retrofitting existing production lines, debottlenecking, equipment upgrades, and Waste Heat Recovery Plant (WHRP) integration.',
      },
    ],
  },
  {
    id: '02',
    title: 'Heavy Industrial Structural Steel Fabrication & Erection',
    desc: 'Complete structural steel fabrication and site erection services.',
    img: '/svc-structural.png',
    bullets: [
      {
        subtitle: 'Industrial Buildings & Heavy Plant Sheds',
        detail: 'Shop fabrication and field erection of pre-engineered and heavy structural plant buildings, furnace sheds, powerhouse structures, and conveyor gantries.',
      },
      {
        subtitle: 'Pipe Racks & Access Platforms',
        detail: 'Multi-tier heavy pipe racks, heat exchanger support structures, equipment access platforms, stair towers, walkways, and safety handrailing.',
      },
      {
        subtitle: 'Heavy Girders, Columns & Silo Framing',
        detail: 'Workshop fabrication and field assembly of high-tonnage EOT crane girders, box columns, raw material hoppers, clinker silos, and spatial frames.',
      },
    ],
  },
  {
    id: '03',
    title: 'Industrial Piping Systems (Fabrication & Erection)',
    desc: 'Metallic (CS, SS, Alloy) and Non-Metallic (FRP, GRP, HDPE, PVC/CPVC, PP) piping systems.',
    img: '/svc-piping.png',
    bullets: [
      {
        subtitle: 'Metallic Piping Systems (CS, SS, Alloy)',
        detail: 'Shop and field fabrication of Carbon Steel (CS), Stainless Steel (SS), and Alloy Steel piping for high-pressure, high-temperature industrial process lines and utility headers.',
      },
      {
        subtitle: 'Non-Metallic Piping Systems (FRP, GRP, HDPE, PVC/CPVC, PP)',
        detail: 'Specialized fabrication, spooling, jointing, and field laying of FRP/GRP, HDPE, PVC/CPVC, and PP piping for corrosive chemical process lines, water treatment, and effluent networks.',
      },
      {
        subtitle: 'Testing & Pre-Commissioning Support',
        detail: 'Hydro-testing, pneumatic testing, line flushing, chemical cleaning, and 100% joint NDT inspections to ensure leak-free plant startups.',
      },
    ],
  },
  {
    id: '04',
    title: 'Wind Turbine Erection & Renewable Energy Balance-of-Plant',
    desc: 'WTG erection, hybrid concrete towers, WHRP, and mechanical BOP packages.',
    img: '/svc-renewable.png',
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
        subtitle: 'Waste Heat Recovery Systems (WHRP) & Mechanical BOP',
        detail: 'Turnkey mechanical assembly of boiler casings, heat exchangers, hydraulic power packs, lube oil piping, cooling networks, and structural bases.',
      },
    ],
  },
  {
    id: '05',
    title: 'Specialized Mechanical Execution & Manpower Support',
    desc: 'Plant shutdowns, overhauls, and skilled manpower deployment.',
    img: '/svc-steel.png',
    bullets: [
      {
        subtitle: 'Annual & Emergency Shutdown Execution',
        detail: 'Rapid mobilization of 24/7 turnaround teams, heavy tooling, and certified rigging crews for zero-delay plant overhaul execution.',
      },
      {
        subtitle: 'Certified Manpower Deployment',
        detail: 'Deployment of CSWIP/AWS certified 6G welders, master riggers, millwright fitters, QA/QC inspectors, and ISO 45001 HSE stewards.',
      },
      {
        subtitle: 'Plant Overhauls & Renovation',
        detail: 'Specialized mechanical overhauls, debottlenecking, equipment refurbishment, and field modifications for continuous industrial facilities.',
      },
    ],
  },
  {
    id: '06',
    title: 'Operation & Maintenance (O&M)',
    desc: 'Routine, predictive, breakdown support, and long-term O&M contracts.',
    img: '/svc-om.png',
    bullets: [
      {
        subtitle: 'Routine & Preventive Maintenance',
        detail: 'Scheduled mechanical overhauls, drive gear alignments, lube oil servicing, and preventive maintenance routines for uninterrupted plant operations.',
      },
      {
        subtitle: 'Predictive Maintenance & Monitoring',
        detail: 'Vibration analysis, thermal imaging, laser alignment, and condition-based monitoring to detect and rectify equipment anomalies before failures occur.',
      },
      {
        subtitle: 'Breakdown Support & Long-Term O&M Contracts',
        detail: 'Rapid 24/7 emergency repair response and turnkey multi-year Operation & Maintenance contracts to lower operational risk and optimize asset performance.',
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
              End-to-end mechanical construction, metallic & non-metallic piping, operation & maintenance (O&M), and turnkey plant erection — delivered with precision, safety, and on-time execution.
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
              { step: '01', title: 'CONSULTATION', desc: 'Understanding your project requirements, scope, site conditions, and timelines in detail.' },
              { step: '02', title: 'PLANNING', desc: 'Detailed execution planning, resource allocation, material coordination, and method statements.' },
              { step: '03', title: 'EXECUTION', desc: 'Mobilization of skilled workforce, tools, and equipment for safe and precise on-site execution.' },
              { step: '04', title: 'HANDOVER & SUPPORT', desc: 'Quality checks, documentation, commissioning support, and structured handover to client teams.' },
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
