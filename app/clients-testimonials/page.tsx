import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Clients & Testimonials | DU-Astral Construction',
  description: 'See how DU-Astral Construction partners with leading industrial clients across India to deliver exceptional EPC projects.',
};

export default function ClientsTestimonialsPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src="/hero-bg.png" alt="Clients and Testimonials" fill className="object-cover opacity-25 scale-[1.05]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/45" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
          <div className="border-l-4 border-[#F8991C] pl-8 py-4">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">OUR PARTNERS / CLIENTS &amp; TESTIMONIALS</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight text-[48px] md:text-[76px]">
              TRUSTED BY<br />
              <span className="text-[#F8991C]">LEADERS.</span>
            </h1>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-lg mt-6">
              Our record speaks through our client relationships. We deliver infrastructure that powers progress for India&apos;s most prominent industrial companies.
            </p>
          </div>
        </div>
      </header>

      {/* ── TRACK RECORD ── */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">OUR TRACK RECORD</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight text-[28px] md:text-[48px]">
              Industry Giants Who Rely On Us
            </h2>
            <p className="text-[#666] text-[13px] mt-4 leading-relaxed">
              From public sector enterprises to private manufacturing giants, we have executed critical infrastructure projects across various challenging sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#e0e0e0] shadow-sm">
            {[
              { name: 'IOCL', tag: 'Indian Oil Corporation' },
              { name: 'ONGC', tag: 'Oil & Natural Gas Corp' },
              { name: 'RINL', tag: 'Rashtriya Ispat Nigam' },
              { name: 'NTPC', tag: 'National Thermal Power' },
              { name: 'TATA STEEL', tag: 'Tata Steel Group' },
              { name: 'JSW STEEL', tag: 'JSW Industries' },
              { name: 'PETRONET LNG', tag: 'Petronet LNG Terminal' },
              { name: 'HPCL', tag: 'Hindustan Petroleum' }
            ].map((client, i) => (
              <div key={i} className="border-r border-b border-[#e0e0e0] p-12 text-center hover:bg-white/80 transition-colors group flex flex-col justify-center min-h-[180px]">
                <span className="font-black text-[#ccc] text-[24px] uppercase tracking-widest group-hover:text-[#F8991C] transition-colors block mb-2">{client.name}</span>
                <span className="text-[#888] text-[10px] font-medium tracking-wider uppercase block opacity-0 group-hover:opacity-100 transition-opacity">{client.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ── */}
      <section className="bg-[#f9f9f9] py-24 border-y border-[#e8e8e8]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">CLIENT FEEDBACK</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight text-[28px] md:text-[48px]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "DU-Astral delivered the Paradip Refinery piping works ahead of schedule. Their dedication to safety controls and quality parameters sets them apart from typical contractor teams.",
                author: "Project Director",
                org: "Indian Oil Corporation Ltd. (IOCL)",
                project: "Paradip Refinery Expansion"
              },
              {
                quote: "The structural steel fabrication quality on the Vizag plant revamp was exceptional. Their certified welding procedures and documentation are thorough and highly reliable.",
                author: "General Manager (Projects)",
                org: "Rashtriya Ispat Nigam Ltd. (RINL)",
                project: "Vizag Steel Plant Revamp"
              },
              {
                quote: "Safety is indeed a core value for DU-Astral. With zero lost time injuries over 24 months, they completed our thermal station piping installation flawlessly.",
                author: "Head of Infrastructure",
                org: "National Thermal Power Corporation (NTPC)",
                project: "Super Thermal Power Station"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white border border-[#e8e8e8] p-8 flex flex-col justify-between hover:border-[#F8991C] transition-colors duration-300 shadow-sm relative">
                <span className="text-[#F8991C] font-black text-[56px] leading-none absolute top-4 left-6 opacity-20">&ldquo;</span>
                <p className="text-[#555] text-[13px] leading-[1.8] italic relative z-10 mb-8 pt-4">
                  {t.quote}
                </p>
                <div className="border-t border-[#e8e8e8] pt-6">
                  <span className="text-[#111] font-black text-[12px] tracking-wider uppercase block">{t.author}</span>
                  <span className="text-[#F8991C] text-[10px] font-bold tracking-wider uppercase block mt-1">{t.org}</span>
                  <span className="text-[#aaa] text-[9px] block mt-1">Project: {t.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE IN POINT ── */}
      <section className="bg-[#0d0d0d] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.6) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-6">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">CASE IN POINT</span>
            <h2 className="font-black uppercase text-white leading-tight tracking-tight text-[28px] md:text-[44px] mb-6">
              Proven Performance Under Rigorous Standards
            </h2>
            <p className="text-white/60 text-[13px] leading-[1.8] mb-8">
              We maintain active vendor registration status with India&apos;s leading engineering consultants and public sector undertakings, satisfying strict criteria for financial capability, technical competence, and safety compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/resources" className="inline-flex items-center gap-2 bg-[#F8991C] text-black font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#e08810] transition-colors">
                VIEW CASE STUDIES
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="relative aspect-[16/10] overflow-hidden border border-white/10">
              <Image src="/workers.png" alt="Collaborative work" fill className="object-cover opacity-70" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
