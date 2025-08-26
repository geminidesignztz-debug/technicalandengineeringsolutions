'use client';

import Container from "@/components/Container";
import { getService } from "@/lib/services";
import Link from "next/link";
import Image from "next/image";

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  
  if (!service) {
    return (
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900">Service not found</h1>
            <p className="mt-4 text-lg text-gray-600">The service you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/services" 
              className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2B3990] hover:bg-[#232D73] transition-colors"
            >
              ← Back to Services
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B3990]/90 to-[#1E2B6F]/90" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Link 
              href="/services" 
              className="inline-flex items-center text-white/90 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">
              {service.title}
            </h1>
            <p className="mt-4 text-xl text-white/90">
              {service.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
              <ul className="space-y-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2B3990]/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#2B3990]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-gray-900">{feature}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
              <ul className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FF5733]/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#FF5733]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg text-gray-900">{benefit}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
            <p className="text-xl text-gray-600 mb-12">
              Industries and systems where our {service.title.toLowerCase()} service delivers value
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.applications.map((application, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#2B3990]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#2B3990]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{application}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="bg-[#2B3990] rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contact us today to learn more about our {service.title.toLowerCase()} service and how we can help optimize your operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#2B3990] rounded-full text-lg font-medium hover:bg-gray-100 transition-colors group"
              >
                Contact Us
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
