import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 relative overflow-hidden pt-20 pb-10">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(248,153,28,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,153,28,0.6) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">

        {/* Top: Logo + Newsletter */}
        <div className="grid grid-cols-12 gap-8 border-b border-white/10 pb-14 mb-14 items-center">
          <div className="col-span-12 lg:col-span-4 mb-6 lg:mb-0">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/logo-white.png"
                alt="Du-Astral Construction"
                width={240}
                height={72}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-white/50 leading-[1.8] max-w-xs">
              Delivering engineering excellence and building a better tomorrow for industries and communities.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: 'in', href: '#' },
                { label: 'ig', href: '#' },
                { label: 'yt', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#F8991C] hover:text-[#F8991C] transition-all text-[9px] font-black uppercase tracking-wider"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-end">
            <div className="max-w-xs mr-8">
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase mb-2 block">NEWSLETTER</span>
              <p className="text-[12px] text-white/50 leading-relaxed">Stay updated with our monthly engineering briefings.</p>
            </div>
            <div className="flex w-full md:w-auto flex-grow max-w-sm gap-0">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow bg-white/5 border border-white/10 px-5 py-3 outline-none focus:border-[#F8991C] text-[12px] text-white placeholder-white/30"
              />
              <button className="bg-[#F8991C] text-black px-6 py-3 font-black text-[10px] tracking-[0.2em] uppercase hover:bg-[#e08810] transition-colors whitespace-nowrap">
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Middle: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-16">
          {[
            {
              heading: 'COMPANY',
              links: [
                { label: 'About Us', href: '/about' },
                { label: 'Why Choose Us', href: '/why-choose-us' },
                { label: 'Leadership', href: '/about' },
                { label: 'Careers', href: '/contact' },
              ],
            },
            {
              heading: 'SERVICES',
              links: [
                { label: 'Mechanical Erection & Shutdown', href: '/services' },
                { label: 'Heavy Machinery Assembly', href: '/services' },
                { label: 'Structural Steel Fabrication', href: '/services' },
                { label: 'Industrial Piping Systems', href: '/services' },
                { label: 'Renewable Energy Erection', href: '/services' },
                { label: 'Operation & Maintenance (O&M)', href: '/services' },
              ],
            },
            {
              heading: 'INDUSTRIES',
              links: [
                { label: 'Cement & Mineral Processing', href: '/industries' },
                { label: 'Steel, Aluminium & Heavy Metals', href: '/industries' },
                { label: 'Oil Refineries & Petrochemicals', href: '/industries' },
                { label: 'Thermal Power & Captive Utilities', href: '/industries' },
                { label: 'Wind & Renewable Energy', href: '/industries' },
                { label: 'Process Industries (Sugar, Fertilizer & MDF)', href: '/industries' },
              ],
            },
            {
              heading: 'RESOURCES',
              links: [
                { label: 'Case Studies', href: '/resources' },
                { label: 'Brochures', href: '/resources' },
                { label: 'News & Insights', href: '/resources' },
                { label: 'Downloads', href: '/resources' },
              ],
            },
            {
              heading: 'CONTACT US',
              links: [],
              contact: true,
            },
          ].map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <span className="text-[#F8991C] text-[10px] font-black tracking-[0.25em] uppercase">{col.heading}</span>
              <div className="h-px bg-white/10 w-full" />
              {col.contact ? (
                <div className="flex flex-col gap-3">
                  <p className="text-[12px] text-white/50 leading-relaxed">
                    PHE Industrial Area,<br />
                    Hosur Road, Bengaluru - 560 095,<br />
                    Karnataka, India
                  </p>
                  <a href="tel:+911234567890" className="text-[12px] text-white/60 hover:text-white transition-colors">
                    +91 (0)46 - 67580
                  </a>
                  <a href="mailto:info@du-astral.com" className="text-[12px] text-[#F8991C] hover:underline">
                    info@du-astral.com
                  </a>
                </div>
              ) : (
                col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[12px] text-white/50 hover:text-white transition-colors leading-tight"
                  >
                    {link.label}
                  </Link>
                ))
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30">
            © {new Date().getFullYear()} Du-Astral Construction Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-white/30">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
