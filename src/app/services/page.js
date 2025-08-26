'use client';

import Container from '@/components/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/services';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#2B3990] py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B3990] to-[#1E2B6F]" />
        <Container className="relative z-10">
          <div className="text-center text-white" data-aos="fade-up">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6">
              Our Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Engineering Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive diagnostic and monitoring solutions for your critical infrastructure
            </p>
          </div>
        </Container>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[21/9] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-[#2B3990] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 text-[#2B3990] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-[#FF5733] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Key Benefits
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 text-[#FF5733] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-[#2B3990] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Applications
                      </h3>
                      <ul className="grid grid-cols-2 gap-3">
                        {service.applications.map((application) => (
                          <li key={application} className="flex items-start text-gray-600">
                            <svg className="w-5 h-5 text-[#2B3990] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#2B3990] text-white rounded-full text-lg font-medium hover:bg-[#232D73] transition-colors group"
                    >
                      Explore {service.title}
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>
    </>
  );
}
