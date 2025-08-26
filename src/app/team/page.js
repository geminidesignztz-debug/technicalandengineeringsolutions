'use client';

import Container from "@/components/Container";
import Image from "next/image";
import { useState } from "react";

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
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2B3990] mb-6" data-aos="fade-up">
              Our Expert Team
            </h1>
            <p className="text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Meet the experienced professionals who deliver world-class engineering diagnostic services
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
  );
}
