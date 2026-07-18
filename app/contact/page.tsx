import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | DU-Astral Construction',
  description: 'Get in touch with DU-Astral Construction for EPC project enquiries, partnerships, and career opportunities.',
};

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <header className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#0a0a0a] pt-24">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Contact" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/40" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
          <div className="border-l-4 border-[#F8991C] pl-8 py-4">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.3em] uppercase block mb-4">REACH US / CONTACT US</span>
            <h1 className="text-white font-black uppercase leading-[0.92] tracking-tight" style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}>
              LET&apos;S BUILD<br />
              <span className="text-[#F8991C]">TOGETHER.</span>
            </h1>
            <p className="text-white/55 text-[13px] leading-relaxed max-w-lg mt-6">
              Have a project in mind? Reach out to our team and let&apos;s discuss how we can engineer your vision into reality.
            </p>
          </div>
        </div>
      </header>

      {/* ── CONTACT GRID ── */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-12 gap-10">

          {/* Contact Info */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            <div>
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-6">GET IN TOUCH</span>

              <div className="space-y-6">
                <div className="border border-[#e8e8e8] p-6">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#aaa] block mb-3">HEAD OFFICE</span>
                  <p className="text-[#555] text-[13px] leading-[1.8]">
                    PHE Industrial Area,<br />
                    Hosur Road, Bengaluru - 560 095,<br />
                    Karnataka, India
                  </p>
                </div>

                <div className="border border-[#e8e8e8] p-6">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#aaa] block mb-3">PHONE</span>
                  <a href="tel:+911234567890" className="text-[#111] font-black text-[16px] hover:text-[#F8991C] transition-colors">+91 (0)46 - 67580</a>
                </div>

                <div className="border border-[#e8e8e8] p-6">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#aaa] block mb-3">EMAIL</span>
                  <a href="mailto:info@du-astral.com" className="text-[#F8991C] font-black text-[15px] hover:underline">info@du-astral.com</a>
                </div>

                <div className="border border-[#e8e8e8] p-6">
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#aaa] block mb-4">FOLLOW US</span>
                  <div className="flex gap-3">
                    {[{ label: 'LinkedIn', short: 'IN' }, { label: 'Instagram', short: 'IG' }, { label: 'YouTube', short: 'YT' }].map((s) => (
                      <a key={s.label} href="#" aria-label={s.label}
                        className="w-10 h-10 border border-[#e8e8e8] flex items-center justify-center text-[9px] font-black uppercase text-[#888] hover:border-[#F8991C] hover:text-[#F8991C] transition-all">
                        {s.short}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-6">SEND US A MESSAGE</span>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-[#888] block mb-2">Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full border border-[#e8e8e8] bg-white px-5 py-4 text-[13px] text-[#111] placeholder-[#bbb] outline-none focus:border-[#F8991C] transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-[#888] block mb-2">Company Name</label>
                  <input type="text" placeholder="Your Company" className="w-full border border-[#e8e8e8] bg-white px-5 py-4 text-[13px] text-[#111] placeholder-[#bbb] outline-none focus:border-[#F8991C] transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-[#888] block mb-2">Email Address *</label>
                  <input type="email" placeholder="john@company.com" className="w-full border border-[#e8e8e8] bg-white px-5 py-4 text-[13px] text-[#111] placeholder-[#bbb] outline-none focus:border-[#F8991C] transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] font-black tracking-[0.2em] uppercase text-[#888] block mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full border border-[#e8e8e8] bg-white px-5 py-4 text-[13px] text-[#111] placeholder-[#bbb] outline-none focus:border-[#F8991C] transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black tracking-[0.2em] uppercase text-[#888] block mb-2">Industry / Sector</label>
                <select className="w-full border border-[#e8e8e8] bg-white px-5 py-4 text-[13px] text-[#111] outline-none focus:border-[#F8991C] transition-colors appearance-none">
                  <option value="">Select Industry...</option>
                  <option>Oil & Gas</option>
                  <option>Steel</option>
                  <option>Power</option>
                  <option>Refineries</option>
                  <option>Petrochemicals</option>
                  <option>Renewable Energy</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black tracking-[0.2em] uppercase text-[#888] block mb-2">Project Details *</label>
                <textarea
                  rows={6}
                  placeholder="Briefly describe your project requirements, scope, and location..."
                  className="w-full border border-[#e8e8e8] bg-white px-5 py-4 text-[13px] text-[#111] placeholder-[#bbb] outline-none focus:border-[#F8991C] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-[#F8991C] text-black font-black text-[12px] tracking-[0.2em] uppercase px-10 py-5 hover:bg-[#e08810] transition-colors"
              >
                SEND MESSAGE
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 5h12M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ── OFFICE LOCATION ── */}
      <section className="bg-[#0D0D0D] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(248,153,28,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.6) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: 'BENGALURU', label: 'HEAD OFFICE', addr: 'PHE Industrial Area, Hosur Road, Bengaluru - 560 095' },
              { city: 'MUMBAI', label: 'WEST OFFICE', addr: 'MIDC Industrial Area, Andheri East, Mumbai - 400 093' },
              { city: 'ODISHA', label: 'EAST OFFICE', addr: 'Paradip Industrial Area, Jagatsinghpur, Odisha - 754 142' },
            ].map((office) => (
              <div key={office.city} className="border border-white/10 p-8 hover:border-[#F8991C]/50 transition-colors">
                <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase block mb-2">{office.label}</span>
                <h3 className="text-white font-black text-[20px] uppercase mb-4">{office.city}</h3>
                <p className="text-white/50 text-[12px] leading-[1.7]">{office.addr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
