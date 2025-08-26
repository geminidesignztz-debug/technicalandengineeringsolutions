import Container from "./Container";
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#2B3990] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="Logo" width={50} height={50} className="object-contain" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">TECHNICAL & ENGINEERING</span>
                <span className="text-[#FF5733] font-bold text-sm">SOLUTIONS</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Minimizing Downtime, Maximizing Uptime. We provide comprehensive engineering diagnostics and condition-based monitoring solutions across Tanzania and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/objectives" className="text-gray-300 hover:text-white transition-colors">Objectives</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/infrared-thermography" className="text-gray-300 hover:text-white transition-colors">Infrared Thermography</Link></li>
              <li><Link href="/services/vibration-analysis" className="text-gray-300 hover:text-white transition-colors">Vibration Analysis</Link></li>
              <li><Link href="/services/oil-analysis" className="text-gray-300 hover:text-white transition-colors">Oil Analysis</Link></li>
              <li><Link href="/services/motor-circuit-analysis" className="text-gray-300 hover:text-white transition-colors">Motor Circuit Analysis</Link></li>
              <li><Link href="/services/electrical-testing" className="text-gray-300 hover:text-white transition-colors">Electrical Testing</Link></li>
              <li><Link href="/services/consulting" className="text-gray-300 hover:text-white transition-colors">Consulting Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="bg-[#FF5733]/20 p-2 rounded-full">
                  <svg className="w-5 h-5 text-[#FF5733]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300">+255 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#FF5733]/20 p-2 rounded-full">
                  <svg className="w-5 h-5 text-[#FF5733]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300">info@tes.co.tz</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-[#FF5733]/20 p-2 rounded-full">
                  <svg className="w-5 h-5 text-[#FF5733]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">Dar es Salaam, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400/30 pt-8">
          <div className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} Technical & Engineering Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
  return (
    <footer className="mt-16 border-t bg-white py-10">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-primary">Tech & Engineering</h3>
          <p className="mt-2 text-sm text-gray-600">
            Professional engineering & technology solutions — from design to deployment, and lifetime support.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-primary" href="/services">Services</Link></li>
            <li><Link className="hover:text-primary" href="/projects">Projects</Link></li>
            <li><Link className="hover:text-primary" href="/about">About</Link></li>
            <li><Link className="hover:text-primary" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-sm text-gray-600">Arusha & Dar es Salaam, Tanzania</p>
          <p className="text-sm text-gray-600">Phone: +255 XXX XXX XXX</p>
          <p className="text-sm text-gray-600">Email: info@tewebsite.co.tz</p>
        </div>
      </Container>
      <Container className="mt-8 border-t pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Tech & Engineering. All rights reserved.
      </Container>
    </footer>
  );
}
