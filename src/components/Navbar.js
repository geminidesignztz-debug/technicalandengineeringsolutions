'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const services = [
  { name: 'Infrared Thermography', href: '/services/infrared-thermography', icon: '/infaredthermography.webp' },
  { name: 'Power Quality Analysis', href: '/services/power-quality-analysis', icon: '/powerqualityanalysis.webp' },
  { name: 'Vibration Analysis', href: '/services/advanced-vibration-analysis', icon: '/vibrationalanalysis.webp' },
  { name: 'Battery Impedance Testing', href: '/services/battery-impedance-testing', icon: '/Battery Impedance Inspection.webp' },
  { name: 'Industrial Acoustic Imaging', href: '/services/acoustic-imaging-leak-testing', icon: '/Industrial Acoustic Imaging.webp' },
  { name: 'Non-Contact Voltage', href: '/services/non-contact-electrical-measurement', icon: '/on-Voltage and Current Measurement.webp' },
  { name: 'Earth Resistance Testing', href: '/services/earth-resistance-measurement', icon: '/Earth Resistance Measurement.webp' },
  { name: 'Oil Condition Monitoring', href: '/services/oil-condition-monitoring', icon: '/Oil Condition Monitoring.webp' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-md border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[#0066B2] font-bold text-lg tracking-tight">TECHNICAL & ENGINEERING</span>
                  <span className="text-[#FF5733] font-bold text-lg tracking-tight">SOLUTIONS</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className={`${isScrolled ? 'text-gray-800' : 'text-[#2B3990]'} hover:text-[#FF5733] px-3 py-2 text-sm font-medium transition-colors`}>
              Home
            </Link>
            <Link href="/about" className={`${isScrolled ? 'text-gray-800' : 'text-[#2B3990]'} hover:text-[#FF5733] px-3 py-2 text-sm font-medium transition-colors`}>
              About
            </Link>
            <div className="relative group">
              <Link
                href="/services"
                className={`${isScrolled ? 'text-gray-800' : 'text-[#2B3990]'} hover:text-[#FF5733] px-3 py-2 text-sm font-medium transition-colors flex items-center group`}
              >
                Services 
                <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div
                className="absolute left-0 w-80 mt-2 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200"
              >
                <div className="py-2 bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm text-gray-500">Our Services</p>
                    <Link 
                      href="/services" 
                      className="mt-1 block text-sm font-medium text-[#2B3990] hover:text-[#FF5733]"
                    >
                      View all services →
                    </Link>
                  </div>
                  <div className="py-2 max-h-[calc(100vh-200px)] overflow-y-auto">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                          <Image
                            src={service.icon}
                            alt={service.name}
                            fill
                            className="object-cover transition-transform duration-200 group-hover/item:scale-110"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="text-sm font-medium text-gray-900 group-hover/item:text-[#FF5733] transition-colors">
                            {service.name}
                          </p>
                          <p className="mt-1 text-xs text-gray-500 line-clamp-1">
                            {service.description || 'Learn more about this service'}
                          </p>
                        </div>
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover/item:text-[#FF5733] group-hover/item:translate-x-1 transition-all"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link href="/projects" className={`${isScrolled ? 'text-gray-800' : 'text-[#2B3990]'} hover:text-[#FF5733] px-3 py-2 text-sm font-medium transition-colors`}>
              Projects
            </Link>
            <Link href="/team" className={`${isScrolled ? 'text-gray-800' : 'text-[#2B3990]'} hover:text-[#FF5733] px-3 py-2 text-sm font-medium transition-colors`}>
              Our Team
            </Link>
            <Link href="/contact" className={`${isScrolled ? 'text-gray-800' : 'text-[#2B3990]'} hover:text-[#FF5733] px-3 py-2 text-sm font-medium transition-colors`}>
              Contact
            </Link>
            <a
              href="tel:+255123456789"
              className="bg-[#FF5733] hover:bg-[#FF5733]/90 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg ${
                isScrolled ? 'text-gray-800' : 'text-[#2B3990]'
              }`}
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-2xl">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FF5733] rounded-lg">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-text hover:text-primary">
              About
            </Link>
            <div>
              <Link
                href="/services"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#FF5733] rounded-lg"
              >
                Services
              </Link>
              <div className="mt-2 pl-6 space-y-1 border-l-2 border-gray-100">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#FF5733] rounded-lg group"
                  >
                    <div className="relative w-8 h-8 rounded overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={service.icon}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-200 group-hover:scale-110"
                      />
                    </div>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/projects" className="block px-3 py-2 text-base font-medium text-text hover:text-primary">
              Projects
            </Link>
            <Link href="/team" className="block px-3 py-2 text-base font-medium text-text hover:text-primary">
              Our Team
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-text hover:text-primary">
              Contact
            </Link>
            <a
              href="mailto:info@tesolutions.com"
              className="block px-3 py-2 text-base font-medium bg-accent text-white rounded-md text-center"
            >
              Email Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
