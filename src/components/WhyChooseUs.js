'use client';

import { useEffect, useRef } from 'react';
import Container from './Container';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#2B3990]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fully Licensed',
    description: 'All required business and professional licenses'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2B3990]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Certified Quality',
    description: 'ISO 9001:2015 quality management certification'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2B3990]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
    title: 'Insured & Protected',
    description: 'Comprehensive insurance coverage'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2B3990]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'International Standards',
    description: 'Compliant with global best practices'
  }
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const featureElements = document.querySelectorAll('.feature-card');
    featureElements.forEach((el) => observer.observe(el));

    return () => {
      featureElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <Container>
        <div className="text-center mb-16">
          <svg className="w-16 h-16 text-[#2B3990] mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <h2 className="text-4xl font-bold text-[#2B3990] mb-4">
            Why Choose Technical & Engineering Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to legal compliance and professional standards ensures reliable, trustworthy service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
