import Container from "@/components/Container";
import Image from "next/image";

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
          <div className="absolute inset-0 bg-[#2B3990]/80" />
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
    </>
  );
}
