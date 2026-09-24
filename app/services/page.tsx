import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services | DU-Astral Construction',
  description: 'End-to-end EPC engineering solutions: Mechanical Construction, Heavy Fabrication, Industrial Piping, Plant Commissioning, Shutdown Maintenance, Electrical & Instrumentation.',
};

const services = [
  {
    id: '01',
    title: 'Cement Plant Mechanical Erection & Shutdown Maintenance',
    desc: 'We deliver end-to-end mechanical erection, equipment alignment, plant renovation, and shutdown execution for cement manufacturing facilities across India.',
    img: '/cap-mechanical.png',
    points: ['Core Plant Equipment Erection', 'Material Handling & Processing', 'Plant Modernization & Upgradation', 'Annual & Emergency Shutdown Execution'],
  },
  {
    id: '02',
    title: 'Steel Plant Construction & Heavy Machinery Assembly',
    desc: 'We execute heavy-duty mechanical construction, precision equipment positioning, and utility assembly for steel mills, sponge iron plants, and metal processing complexes.',
    img: '/cap-piping.png',
    points: ['Heavy Equipment Erection', 'Rolling Mill Assembly', 'Utility & Ducting Networks'],
  },
  {
    id: '03',
    title: 'Structural Steel Fabrication & Erection',
    desc: 'We offer full-scope structural engineering—from shop detailing, heavy plate fabrication, and surface treatment to site transportation and precision heavy-lift erection.',
    img: '/cap-shutdown.png',
    points: ['Industrial Buildings & Heavy Plant Sheds', 'Pipe Racks & Access Platforms', 'Heavy Girders, Columns & Frames', 'Hoppers, Silos & Support Framing', 'Surface Preparation & Quality Control'],
  },
  {
    id: '04',
    title: 'High-Pressure Industrial Piping Systems',
    desc: 'We provide complete industrial piping solutions—from isometric detailing and shop fabrication to field fit-up, NDT testing, and system pre-commissioning.',
    img: '/cap-fabrication.png',
    points: ['Process & Utility Piping', 'Testing & Pre-Commissioning Support'],
  },
  {
    id: '05',
    title: 'Wind Turbine Erection & Renewable Energy',
    desc: 'We specialize in heavy-lift rigging, mechanical assembly, and site erection for utility-scale renewable power installations and industrial energy recovery projects.',
    img: '/cap-mechanical.png',
    points: ['Wind Turbine Generator (WTG) Erection', 'Hybrid Concrete Towers', 'Waste Heat Recovery Systems (WHRP)', 'Mechanical Balance-of-Plant (BOP)'],
  },
  {
    id: '06',
    title: 'Heavy Industrial Fabrication & Storage Vessels',
    desc: 'Our workshop and field teams execute custom plate fabrication, heavy ducting, and industrial tankage strictly conforming to code requirements.',
    img: '/cap-piping.png',
    points: ['Ducting & Hopper Fabrication', 'Storage Tanks & Pressure Vessels', 'Protective Surface Coatings'],
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
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">WHAT WE DO / OUR CORE CAPABILITIES</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              OUR CORE<br />
              <span className="text-[#F8991C]">CAPABILITIES.</span>
            </h1>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-lg mt-6">
              End-to-end mechanical construction, heavy fabrication, high-pressure piping, and renewable energy erection — delivered with precision, safety, and on-time execution.
            </p>
          </div>
        </div>
      </header>

      {/* ── SERVICES GRID ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="space-y-0 border border-[#e8e8e8]">
            {services.map((svc, i) => (
              <div key={svc.id} className={`grid grid-cols-12 border-b border-[#e8e8e8] last:border-b-0 ${i % 2 !== 0 ? 'bg-[#f9f9f9]' : 'bg-white'}`}>
                {/* Image */}
                <div className="col-span-12 lg:col-span-4 relative overflow-hidden min-h-[280px]">
                  <Image src={svc.img} alt={svc.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[#F8991C] font-black text-[48px] leading-none opacity-50">{svc.id}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-12 lg:col-span-5 p-10 flex flex-col justify-center border-r border-[#e8e8e8]">
                  <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-3">SERVICE {svc.id}</span>
                  <h2 className="font-black uppercase text-[#111] text-[22px] leading-tight tracking-tight mb-5">{svc.title}</h2>
                  <p className="text-[#666] text-[13px] leading-[1.8]">{svc.desc}</p>
                </div>

                {/* Points */}
                <div className="col-span-12 lg:col-span-3 p-10 flex flex-col justify-center bg-[#f5f5f5]">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#aaa] block mb-5">KEY SCOPE</span>
                  <ul className="space-y-3">
                    {svc.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F8991C] mt-1.5 flex-shrink-0" />
                        <span className="text-[12px] text-[#555] leading-tight">{p}</span>
                      </li>
                    ))}
                  </ul>
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
            ].map((p, i) => (
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
