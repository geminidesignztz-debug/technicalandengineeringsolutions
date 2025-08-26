import Container from "@/components/Container";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Hill Group Tanzania - Power Plant Optimization",
    client: "Hill Group Tanzania",
    duration: "6 months",
    type: "Power Generation",
    image: "/homepage1.webp",
    description: "Comprehensive condition monitoring implementation for critical power generation equipment, resulting in 40% reduction in unplanned downtime.",
    services: ["Vibration Analysis", "Infrared Thermography", "Power Quality Analysis", "Oil Monitoring"],
    results: [
      "40% reduction in unplanned downtime",
      "$2.3M in maintenance cost savings",
      "15% improvement in equipment efficiency",
      "Zero critical equipment failures"
    ]
  },
  {
    title: "DTB Bank - Critical Infrastructure Monitoring",
    client: "Diamond Trust Bank",
    duration: "3 months",
    type: "Financial Services",
    image: "/homepage2.webp",
    description: "Implementation of comprehensive electrical and mechanical monitoring systems for mission-critical banking infrastructure.",
    services: ["Power Quality Analysis", "Battery Testing", "Earth Resistance Testing", "Thermal Imaging"],
    results: [
      "99.9% uptime achievement",
      "Complete electrical safety compliance",
      "Proactive battery replacement program",
      "Enhanced disaster preparedness"
    ]
  }
];

const caseStudies = [
  {
    title: "Damaged Pump Early Detection",
    tags: ["Vibration Analysis"],
    image: "/homepage3.webp",
    problem: "A critical cooling water pump was experiencing unusual vibrations during operation.",
    solution: "Our advanced vibration analysis identified bearing wear and shaft misalignment before catastrophic failure.",
    outcome: "Prevented $150,000 in equipment damage and 3 days of production downtime."
  },
  {
    title: "Power Cable Failure Prevention",
    tags: ["Infrared Thermography"],
    image: "/homepage4.webp",
    problem: "Electrical distribution system showing intermittent power quality issues.",
    solution: "Infrared thermography revealed hotspots in cable connections indicating imminent failure.",
    outcome: "Replaced faulty connections before failure, preventing $200,000 in business interruption costs."
  }
];

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-white py-20">
        <Container>
          <div className="space-y-16">
            {/* Projects & Experience Header */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2B3990] mb-6">Projects & Experience</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Proven track record of delivering exceptional results for leading organizations across various industries
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="group" data-aos="fade-up" data-aos-delay="0">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-[#2B3990]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Image src="/file.svg" alt="Projects" width={32} height={32} className="opacity-80" />
                  </div>
                  <div className="text-3xl font-bold text-[#2B3990]">150+</div>
                  <div className="text-sm text-gray-600 text-center">Projects Completed</div>
                </div>
              </div>
              <div className="group" data-aos="fade-up" data-aos-delay="100">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-[#2B3990]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Image src="/globe.svg" alt="Clients" width={32} height={32} className="opacity-80" />
                  </div>
                  <div className="text-3xl font-bold text-[#2B3990]">75+</div>
                  <div className="text-sm text-gray-600 text-center">Satisfied Clients</div>
                </div>
              </div>
              <div className="group" data-aos="fade-up" data-aos-delay="200">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-[#2B3990]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Image src="/window.svg" alt="Savings" width={32} height={32} className="opacity-80" />
                  </div>
                  <div className="text-3xl font-bold text-[#2B3990]">$15M+</div>
                  <div className="text-sm text-gray-600 text-center">Cost Savings Generated</div>
                </div>
              </div>
              <div className="group" data-aos="fade-up" data-aos-delay="300">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 bg-[#2B3990]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Image src="/window.svg" alt="Failures" width={32} height={32} className="opacity-80" />
                  </div>
                  <div className="text-3xl font-bold text-[#2B3990]">500+</div>
                  <div className="text-sm text-gray-600 text-center">Equipment Failures Prevented</div>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-gray-900">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.title}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 text-sm bg-[#2B3990] text-white rounded-full">
                          {project.type}
                        </span>
                      </div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <span>{project.client}</span>
                        </div>
                        <span>{project.duration}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Services Provided:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map(service => (
                              <span
                                key={service}
                                className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
                          <ul className="space-y-1">
                            {project.results.map(result => (
                              <li key={result} className="text-sm text-gray-600 flex items-center space-x-2">
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-20">
        <Container>
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-gray-900">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={study.title}
                  className="bg-white rounded-2xl overflow-hidden shadow transition-all hover:shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-sm bg-[#2B3990] text-white rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Problem:</h4>
                        <p className="text-sm text-gray-600">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Solution:</h4>
                        <p className="text-sm text-gray-600">{study.solution}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-green-700">Outcome:</h4>
                        <p className="text-sm text-green-600">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
