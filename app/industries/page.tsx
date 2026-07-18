import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Industries | DU-Astral Construction',
  description: 'Serving Oil & Gas, Steel, Power, Refineries, Petrochemicals, and Renewable Energy sectors with end-to-end EPC solutions.',
};

const industries = [
  {
    id: '01',
    name: 'OIL & GAS',
    img: '/ind-oilgas.png',
    desc: 'Complete EPC services for upstream, midstream, and downstream oil & gas projects — from well platforms to pipeline networks and terminal facilities.',
    scope: ['Offshore & Onshore Platforms', 'Pipeline Networks', 'Gas Processing Units', 'Terminal & Storage Facilities'],
  },
  {
    id: '02',
    name: 'STEEL',
    img: '/ind-steel.png',
    desc: 'Comprehensive construction and maintenance services for integrated steel plants, including blast furnaces, rolling mills, and continuous casting units.',
    scope: ['Blast Furnace Construction', 'Rolling Mill Erection', 'Continuous Casting Units', 'Plant Maintenance'],
  },
  {
    id: '03',
    name: 'POWER',
    img: '/ind-power.png',
    desc: 'Turnkey mechanical and E&I services for thermal, gas, and renewable power plants — ensuring safe, reliable, and efficient operations.',
    scope: ['Thermal Power Plants', 'Boiler Erection', 'Turbine Installation', 'Balance of Plant (BOP)'],
  },
  {
    id: '04',
    name: 'REFINERIES',
    img: '/ind-refinery.png',
    desc: 'Specialized EPC capabilities for petroleum refineries — from grassroots construction to revamp, expansion, and turnaround maintenance.',
    scope: ['Grassroots Construction', 'Revamp & Expansion', 'Turnaround Maintenance', 'Unit Commissioning'],
  },
  {
    id: '05',
    name: 'PETROCHEMICALS',
    img: '/ind-petrochemical.png',
    desc: 'Full-scope mechanical, piping, and E&I solutions for petrochemical and fertilizer plants, handling complex process requirements with precision.',
    scope: ['Cracker Units', 'Polymer Plants', 'Fertilizer Plants', 'Storage & Transfer Systems'],
  },
  {
    id: '06',
    name: 'RENEWABLE ENERGY',
    img: '/ind-renewable.png',
    desc: 'Supporting the energy transition with civil, mechanical, and electrical work for solar, wind, and hydrogen energy facilities.',
    scope: ['Solar Farm Construction', 'Wind Turbine Erection', 'Hydrogen Plants', 'Battery Storage Systems'],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Industries" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
          <div className="border-l-4 border-[#F8991C] pl-8 py-4">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">SECTOR EXPERTISE / INDUSTRIES WE SERVE</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              INDUSTRIES<br />
              <span className="text-[#F8991C]">WE SERVE.</span>
            </h1>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-lg mt-6">
              Decades of specialized experience across 25+ industries — delivering precision engineering where it matters most.
            </p>
          </div>
        </div>
      </header>

      {/* ── INDUSTRIES ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="space-y-6">
            {industries.map((ind, i) => (
              <div key={ind.id} className={`grid grid-cols-12 border border-[#e8e8e8] overflow-hidden group hover:border-[#F8991C] transition-colors duration-300 ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                {/* Image */}
                <div className={`col-span-12 lg:col-span-4 relative min-h-[260px] overflow-hidden ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image src={ind.img} alt={ind.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-6 left-6">
                    <span className="text-white font-black text-[11px] tracking-[0.2em] uppercase border border-white/40 px-3 py-1.5">{ind.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-12 lg:col-span-5 p-10 flex flex-col justify-center">
                  <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-3">SECTOR {ind.id}</span>
                  <h2 className="font-black uppercase text-[#111] text-[24px] leading-tight tracking-tight mb-5">{ind.name}</h2>
                  <p className="text-[#666] text-[13px] leading-[1.8] mb-6">{ind.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[#111] font-black text-[11px] tracking-[0.2em] uppercase border-b-2 border-[#111] pb-1 hover:text-[#F8991C] hover:border-[#F8991C] transition-colors self-start">
                    ENQUIRE NOW
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </Link>
                </div>

                {/* Scope */}
                <div className="col-span-12 lg:col-span-3 bg-[#f5f5f5] p-10 flex flex-col justify-center">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#aaa] block mb-5">OUR SCOPE</span>
                  <ul className="space-y-3">
                    {ind.scope.map((s) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F8991C] mt-1.5 flex-shrink-0" />
                        <span className="text-[12px] text-[#555] leading-tight">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-[#F8991C] p-14 flex flex-col justify-between min-h-[280px]">
            <span className="text-black/60 text-[11px] font-black tracking-[0.25em] uppercase">LET&apos;S BUILD</span>
            <div>
              <h3 className="font-black uppercase text-black leading-[1.0] tracking-tight mb-8" style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}>
                SERVE YOUR<br />INDUSTRY.
              </h3>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-black text-white font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#222] transition-colors">
                CONTACT US
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M9 1l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#0D0D0D] p-14 flex flex-col justify-center min-h-[280px] relative overflow-hidden">
            <div className="absolute inset-0"><Image src="/hero-bg.png" alt="" fill className="object-cover opacity-10" /></div>
            <div className="relative z-10 max-w-sm">
              <h4 className="text-white font-black text-[17px] uppercase tracking-wide mb-3">Need a specialized EPC partner?</h4>
              <p className="text-white/50 text-[13px] leading-[1.7] mb-8">
                Our team of experts is ready to assess your project requirements and propose the right engineering solution.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#F8991C] text-[#F8991C] font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#F8991C] hover:text-black transition-all">
                TALK TO OUR EXPERTS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
