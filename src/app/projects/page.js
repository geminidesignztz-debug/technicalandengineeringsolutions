import Container from "@/components/Container";
import Image from "next/image";
import { BuildingOffice2Icon, ChartBarIcon, CubeTransparentIcon, LightBulbIcon } from '@heroicons/react/24/outline';

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
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/homepage3.webp"
            alt="Projects & Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <Container className="relative z-10 text-center text-white py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            Projects & Experience
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
            Proven track record of delivering exceptional results for leading organizations across various industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-[#2B3990] dark:text-white text-4xl font-bold mb-2">150+</div>
              <div className="text-gray-600 dark:text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="text-[#2B3990] dark:text-white text-4xl font-bold mb-2">75+</div>
              <div className="text-gray-600 dark:text-white/80">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-[#2B3990] dark:text-white text-4xl font-bold mb-2">$15M+</div>
              <div className="text-gray-600 dark:text-white/80">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-[#2B3990] dark:text-white text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-600 dark:text-white/80">Equipment Failures Prevented</div>
            </div>
          </div>
        </Container>
      </section>    

      {/* Featured Projects Section */}
      <section className="bg-white py-20">
        <Container>
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
