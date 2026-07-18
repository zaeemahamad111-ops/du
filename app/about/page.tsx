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
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">WHO WE ARE / ABOUT US</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              BUILT ON<br />
              <span className="text-[#F8991C]">PRECISION.</span>
            </h1>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-lg mt-6">
              With decades of experience and a relentless commitment to quality, safety and innovation, we deliver infrastructure that drives progress and empowers industries.
            </p>
          </div>
        </div>
      </header>

      {/* ── WHO WE ARE ── */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-7">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-5">01 / GENESIS</span>
            <h2 className="font-black uppercase leading-[1.0] tracking-tight text-[#111] mb-7" style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}>
              WHERE STRUCTURAL RIGOR<br />MEETS VISIONARY DESIGN.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-[#555] text-[13px] leading-[1.8]">
                Founded on the core tenets of engineering excellence, DU-Astral represents the vanguard of modern industrial construction. We operate under the belief that true quality is found in the precision of execution and the integrity of materials.
              </p>
              <p className="text-[#555] text-[13px] leading-[1.8]">
                Every project we undertake is a narrative of structural optimization, balancing complex logistics and environmental challenges to build facilities that accelerate industrial progress and operational efficacy.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative mt-10 lg:mt-0">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#e8e8e8]">
              <Image src="/workers.png" alt="DU-Astral team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-[#F8991C] flex items-center justify-center p-4">
              <span className="text-black text-[9px] font-black uppercase tracking-wider text-center leading-tight">BUILT ON<br />METALLURGICAL<br />TRUST</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-[#f5f5f5] py-24 border-y border-[#e0e0e0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#e0e0e0] p-10 relative">
            <div className="absolute top-0 left-0 w-1 h-12 bg-[#111]" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#111] block mb-4">THE MISSION</span>
            <h3 className="font-black uppercase text-[#111] text-[22px] leading-tight tracking-tight mb-5">
              To eliminate the redundant, leaving behind pure structural honesty.
            </h3>
            <p className="text-[#666] text-[13px] leading-[1.8]">
              We strip away the superfluous to construct facilities of steel, pipe, and intent — creating industrial environments that serve productivity, safety, and efficiency.
            </p>
          </div>
          <div className="bg-black text-white border border-black p-10 relative">
            <div className="absolute top-0 left-0 w-1 h-12 bg-[#F8991C]" />
            <span className="text-[10px] font-black tracking-[0.25em] uppercase text-[#F8991C] block mb-4">THE VISION</span>
            <h3 className="font-black uppercase text-white text-[22px] leading-tight tracking-tight mb-5">
              Accelerating industrial potential through precision engineering.
            </h3>
            <p className="text-white/60 text-[13px] leading-[1.8] mb-8">
              By 2030, DU-Astral will benchmark zero-incident engineering architectures, seamlessly linking computational workflows with traditional craftsmanship.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#F8991C] font-black text-[11px] tracking-[0.2em] uppercase border-b border-[#F8991C] pb-1 hover:opacity-80 transition-opacity">
              GET IN TOUCH
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-4">02 / CHRONOLOGY</span>
            <h2 className="font-black uppercase text-[#111] leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
              Timeline of Scale
            </h2>
          </div>
          <div className="space-y-0 border border-[#e8e8e8]">
            {[
              { year: '2006', title: 'INCEPTION', text: 'Founded in Bengaluru with a vision to deliver world-class EPC services to Indian industry.' },
              { year: '2012', title: 'FIRST MAJOR PROJECT', text: 'Completed the first large-scale refinery project for IOCL — a milestone that set the standard for DU-Astral.' },
              { year: '2018', title: 'PAN-INDIA EXPANSION', text: 'Extended operations to 10+ states, serving oil & gas, steel, power, and petrochemical sectors.' },
              { year: '2024', title: 'THE ASTRAL ERA', text: 'Crossing 1000+ completed projects with 5000+ skilled professionals across India.' },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-12 border-b border-[#e8e8e8] last:border-b-0 group hover:bg-[#f5f5f5] transition-colors">
                <div className="col-span-2 bg-[#f5f5f5] group-hover:bg-[#F8991C] transition-colors p-8 flex items-center justify-center border-r border-[#e8e8e8]">
                  <span className="font-black text-[22px] text-[#111] group-hover:text-black">{item.year}</span>
                </div>
                <div className="col-span-10 p-8">
                  <span className="text-[#F8991C] text-[10px] font-black tracking-[0.2em] uppercase block mb-2">{item.title}</span>
                  <p className="text-[#555] text-[13px] leading-[1.7]">{item.text}</p>
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
