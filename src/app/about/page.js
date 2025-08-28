import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    title: "Business Registration Certificate",
    type: "Business License",
    status: "Valid",
    icon: "document",
    regNumber: "REG-235-TR-2017/4",
    issueDate: "March 15, 2018",
    description: "Officially registered with the Business Registration and Licensing Agency (BRELA)"
  },
  {
    title: "Tax Identification Number (TIN)",
    type: "Tax Registration",
    status: "Active",
    icon: "document",
    regNumber: "123-456-789",
    issueDate: "January 10, 2018",
    description: "Official tax registration and compliance certification"
  },
  {
    title: "Value Added Tax (VAT) Certificate",
    type: "Tax Registration",
    status: "Active",
    icon: "document",
    regNumber: "VAT-789-123",
    issueDate: "February 5, 2018",
    description: "Value Added Tax registration and compliance certification"
  },
  {
    title: "OSHA Compliance Certificate",
    type: "Safety Compliance",
    status: "Valid",
    icon: "document",
    regNumber: "OSHA-2023-456",
    issueDate: "April 20, 2023",
    description: "Occupational Safety and Health Administration compliance certification"
  },
  {
    title: "EWURA License",
    type: "Industry License",
    status: "Valid",
    icon: "document",
    regNumber: "EWURA-2023-789",
    issueDate: "May 15, 2023",
    description: "Energy and Water Utilities Regulatory Authority operational license"
  },
  {
    title: "ISO 9001:2015 Certification",
    type: "Quality Management",
    status: "Valid",
    icon: "document",
    regNumber: "ISO-9001-123",
    issueDate: "June 1, 2023",
    description: "International Organization for Standardization quality management certification"
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/homepage3.webp"
            alt="Engineering Background"
            fill
            className="object-cover"
            priority
          />
          {/* Removed the blue overlay div */}
          <div className="absolute inset-0 bg-black/30" /> {/* Added light dark overlay for text readability */}
        </div>

        {/* Content */}
        <Container className="relative z-10 text-center text-white py-20">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            About Us
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Technical & Engineering Solutions
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Your trusted partner for comprehensive engineering diagnostics and condition-based monitoring solutions across Tanzania and beyond.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-[#FF5733] text-4xl font-bold mb-2">6+</div>
              <div className="text-white/80">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-[#FF5733] text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-[#FF5733] text-4xl font-bold mb-2">99%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-[#FF5733] text-4xl font-bold mb-2">25+</div>
              <div className="text-white/80">Team Members</div>
            </div>
          </div>
        </Container>
      </section>

{/* Our Story Section */}
      <section className="bg-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#FF5733]/10 text-[#FF5733] px-4 py-1 rounded-full mb-6">
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B3990] mb-8">
              Transforming Industrial Maintenance
            </h2>
            <p className="text-gray-600 mb-8">
              Founded with a vision to transform industrial maintenance practices across Tanzania and beyond, Technical & Engineering Solutions has established itself as a leader in engineering diagnostics and condition-based monitoring.
            </p>
            <p className="text-gray-600 mb-12">
              Our team of skilled engineers and technicians brings decades of combined experience in predictive maintenance technologies, helping organizations minimize downtime and maximize operational efficiency through innovative diagnostic solutions.
            </p>

            {/* Leadership */}
            <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
              <div className="w-24 h-24 bg-[#2B3990] rounded-full flex items-center justify-center flex-shrink-0">
                <Image
                  src="/profileicon.png"
                  alt="Leadership Icon"
                  width={48}
                  height={48}
                  className="invert"
                />
              </div>
              <div>
                <h3 className="text-2xl text-[#2B3990] font-semibold mb-2">
                  Mary William Mwanukuzi
                </h3>
                <p className="text-[#FF5733] font-medium mb-4">
                  Chief Executive Officer & Lead Engineer
                </p>
                <p className="text-gray-600 mb-6">
                  With over 15 years of experience in engineering diagnostics and industrial maintenance, Mary leads our organization with a commitment to technical excellence and innovation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• M.Eng in Mechanical Engineering</li>
                  <li>• Certified Vibration Analyst (ISO 18436)</li>
                  <li>• Thermography Level III Certified</li>
                </ul>
              </div>
            </div>

            {/* Mission Box */}
            <div className="bg-[#FF5733] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-white/90">
                To empower industries with advanced diagnostic solutions that ensure optimal equipment performance, reduce operational costs, and enhance safety standards across all operations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Milestones Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-[#FF5733]/10 text-[#FF5733] px-4 py-1 rounded-full mb-6">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B3990] mb-8">
              Milestones & Achievements
            </h2>
            <p className="text-gray-600 mb-16">
              A timeline of our growth and major accomplishments over the years.
            </p>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#2B3990]/20" />

              {/* Timeline Items */}
              <div className="space-y-24">
                {/* 2018 */}
                <div className="relative flex flex-col md:flex-row md:justify-between group">
                  <div className="flex md:w-[45%] md:text-right">
                    <div className="flex-grow">
                      <div className="text-[#FF5733] font-bold text-2xl mb-2 transition-transform group-hover:translate-x-2">2018</div>
                      <h3 className="text-xl font-semibold text-[#2B3990] mb-2">Company Founded</h3>
                      <p className="text-gray-600">Started with a vision to transform maintenance practices</p>
                    </div>
                    <div className="relative flex-none mx-4 md:mx-0">
                      <div className="h-4 w-4 rounded-full bg-[#2B3990] relative z-10 mt-2">
                        <div className="absolute inset-0 bg-[#2B3990]/20 rounded-full animate-ping" />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[45%]" />
                </div>

                {/* 2020 */}
                <div className="relative flex flex-col md:flex-row md:justify-between group">
                  <div className="hidden md:block md:w-[45%]" />
                  <div className="flex md:w-[45%] flex-row-reverse md:flex-row">
                    <div className="relative flex-none mx-4 md:mx-0">
                      <div className="h-4 w-4 rounded-full bg-[#2B3990] relative z-10 mt-2">
                        <div className="absolute inset-0 bg-[#2B3990]/20 rounded-full animate-ping" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[#FF5733] font-bold text-2xl mb-2 transition-transform group-hover:-translate-x-2">2020</div>
                      <h3 className="text-xl font-semibold text-[#2B3990] mb-2">First 100 Projects</h3>
                      <p className="text-gray-600">Achieved significant milestone in project delivery</p>
                    </div>
                  </div>
                </div>

                {/* 2022 */}
                <div className="relative flex flex-col md:flex-row md:justify-between group">
                  <div className="flex md:w-[45%] md:text-right">
                    <div className="flex-grow">
                      <div className="text-[#FF5733] font-bold text-2xl mb-2 transition-transform group-hover:translate-x-2">2022</div>
                      <h3 className="text-xl font-semibold text-[#2B3990] mb-2">Regional Expansion</h3>
                      <p className="text-gray-600">Extended services across East Africa</p>
                    </div>
                    <div className="relative flex-none mx-4 md:mx-0">
                      <div className="h-4 w-4 rounded-full bg-[#2B3990] relative z-10 mt-2">
                        <div className="absolute inset-0 bg-[#2B3990]/20 rounded-full animate-ping" />
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-[45%]" />
                </div>

                {/* 2024 */}
                <div className="relative flex flex-col md:flex-row md:justify-between group">
                  <div className="hidden md:block md:w-[45%]" />
                  <div className="flex md:w-[45%] flex-row-reverse md:flex-row">
                    <div className="relative flex-none mx-4 md:mx-0">
                      <div className="h-4 w-4 rounded-full bg-[#2B3990] relative z-10 mt-2">
                        <div className="absolute inset-0 bg-[#2B3990]/20 rounded-full animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <div className="text-[#FF5733] font-bold text-2xl mb-2 transition-transform group-hover:-translate-x-2">2024</div>
                      <h3 className="text-xl font-semibold text-[#2B3990] mb-2">Technology Innovation</h3>
                      <p className="text-gray-600">Launched advanced AI-powered diagnostics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Company Overview Section */}
      <section className="bg-gray-50 py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Company Overview</h2>
            <p className="text-gray-600 mb-6">
              We are a Tanzania‑based engineering & technology company delivering safe, efficient, and scalable solutions.
              Our team blends electrical engineering, automation, renewable energy, and secure networking to build systems that last.
            </p>
            <p className="text-gray-600">
              With over 6 years of experience and more than 500 successful projects, we have established ourselves as a trusted partner
              for businesses across Tanzania and beyond. Our commitment to excellence and customer satisfaction has earned us a 99%
              client satisfaction rate.
            </p>

            <h2 className="mt-8 text-2xl font-semibold text-gray-900">Our Approach</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Discovery & requirements gathering</li>
              <li>Design & clear documentation (drawings, BOQs, standards)</li>
              <li>Installation, testing & commissioning</li>
              <li>Training, handover & ongoing support</li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-gray-900">Our Values</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border bg-muted p-6">
                <h3 className="font-semibold text-gray-900">Quality & Safety First</h3>
                <p className="mt-2 text-sm text-gray-600">
                  We follow international standards and best practices in every project, ensuring lasting reliability and safety.
                </p>
              </div>
              <div className="rounded-xl border bg-muted p-6">
                <h3 className="font-semibold text-gray-900">Innovation & Efficiency</h3>
                <p className="mt-2 text-sm text-gray-600">
                  We leverage modern technology and proven methods to deliver cost-effective, future-proof solutions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Legal & Compliance Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-4">
                Legal Documents & Compliance
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Fully licensed, certified, and compliant with all regulatory requirements and international standards
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#2B3990]/10 rounded-xl flex items-center justify-center">
                        {cert.icon === "document" && (
                          <svg className="w-6 h-6 text-[#2B3990]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                        <p className="text-sm text-gray-500">{cert.type}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      cert.status === 'Valid' || cert.status === 'Active' 
                        ? 'text-green-700 bg-green-100' 
                        : 'text-blue-700 bg-blue-100'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>Registration #: {cert.regNumber}</p>
                    <p>Issue Date: {cert.issueDate}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Documents Button */}
            <div className="text-center" data-aos="fade-up">
              <Link
                href="/LEGAL DOCS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2B3990] text-white rounded-xl font-medium hover:bg-[#232D73] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                View All Legal Documents
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
