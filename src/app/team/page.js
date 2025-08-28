'use client';

import Container from "@/components/Container";
import Image from "next/image";
import { useState } from "react";
import { UserGroupIcon, BriefcaseIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';

const stats = [
  { number: "25+", label: "Team Members", icon: UserGroupIcon },
  { number: "15+", label: "Certified Engineers", icon: AcademicCapIcon },
  { number: "12+", label: "Years Combined", icon: StarIcon },
  { number: "500+", label: "Projects Completed", icon: BriefcaseIcon },
];

const teamMembers = [
  {
    name: "Mary William Mwanukuzi",
    role: "Managing Director",
    category: "Leadership",
    experience: "30+ Years",
    bio: "Mary brings over three decades of invaluable experience in power plant operations and industrial engineering. Her extensive background in the energy sector provides deep insights into preventive maintenance and condition-based monitoring.",
    specializations: [
      "Power Plant Operations",
      "Strategic Planning",
      "Industrial Engineering",
      "Team Leadership"
    ],
    achievements: [
      "30+ years in power plant operations",
      "Expert in industrial maintenance strategies",
      "Led multiple large-scale engineering projects",
      "Recognized industry leader in Tanzania"
    ],
    email: "mary@testz.co.tz",
    phone: "+255 758 123 456"
  },
  {
    name: "Emmanuel Calist Tarimo",
    role: "Technical Engineer",
    category: "Engineering",
    experience: "12+ Years",
    bio: "Emmanuel is a highly skilled technical engineer specializing in advanced diagnostic technologies. His expertise in vibration analysis and thermography has helped numerous clients prevent costly equipment failures.",
    specializations: [
      "Vibration Analysis",
      "Infrared Thermography",
      "Power Systems",
      "Diagnostic Equipment"
    ],
    achievements: [
      "Certified vibration analyst (ISO 18436)",
      "Expert in thermal imaging applications",
      "150+ successful diagnostic projects",
      "Advanced power systems specialist"
    ],
    email: "emmanuel@testz.co.tz",
    phone: "+255 758 123 457"
  },
  {
    name: "Goodluck Mwikala",
    role: "Technical Engineer",
    category: "Engineering",
    experience: "10+ Years",
    bio: "Goodluck specializes in electrical systems diagnostics and power quality analysis. His meticulous approach to testing and analysis ensures the highest standards of electrical safety and system reliability.",
    specializations: [
      "Power Quality Analysis",
      "Battery Testing",
      "Oil Analysis",
      "Safety Systems"
    ],
    achievements: [
      "Certified electrical systems analyst",
      "Expert in power quality diagnostics",
      "700+ electrical safety audits completed",
      "Specialist in backup power systems"
    ],
    email: "goodluck@testz.co.tz",
    phone: "+255 758 123 458"
  }
];

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/homepage4.webp"
            alt="Our Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>

        {/* Content */}
        <Container className="relative z-10 text-white py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6" data-aos="fade-down">
              <UserGroupIcon className="w-5 h-5 mr-2 text-[#FF5733]" />
              <span>Meet Our Team</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300" data-aos="fade-up">
              Expertise That Drives Innovation
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Our diverse team of engineers, technicians, and specialists brings together decades of experience in engineering diagnostics and industrial solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-[#FF5733]" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team Content Section */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <section className="py-20">
          <Container>
            {/* Section Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2B3990] mb-6" data-aos="fade-up">
                Meet the Experts
              </h2>
              <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
                Our team of dedicated professionals brings together expertise in engineering diagnostics, maintenance, and industrial solutions.
              </p>
            </div>

            {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredMember(member.name)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                  {/* Profile Section */}
                  <div className="p-8 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="w-full h-full rounded-full bg-[#2B3990]/10 flex items-center justify-center">
                        <Image
                          src="/window.svg"
                          alt={member.name}
                          width={48}
                          height={48}
                          className="opacity-70"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#2B3990]/5 transform scale-110 transition-transform duration-300 group-hover:scale-125" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2B3990] mb-2">{member.name}</h3>
                    <p className="text-[#FF5733] font-medium mb-2">{member.role}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <span>{member.category}</span>
                      <span>•</span>
                      <span>{member.experience}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 text-sm text-center mb-6">{member.bio}</p>
                  </div>

                  {/* Specializations */}
                  <div className="px-8 pb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="px-3 py-1 bg-[#2B3990]/5 text-[#2B3990] text-xs rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="px-8 pb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {member.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start space-x-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#FF5733] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="border-t border-gray-100 px-8 py-4">
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <a href={`mailto:${member.email}`} className="hover:text-[#2B3990] transition-colors">
                        {member.email}
                      </a>
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      </div>
    </>
  );
}
