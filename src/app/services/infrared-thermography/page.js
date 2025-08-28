import Container from "@/components/Container";
import Image from "next/image";
import { getService } from "@/lib/services";

export default function InfraredThermographyPage() {
  const service = getService('infrared-thermography');

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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>

        <Container className="relative z-10 text-white py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            {service.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {service.description}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
                <h2 className="text-2xl font-bold text-[#2B3990] mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-2xl font-bold text-[#2B3990] mb-6">Benefits</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl font-bold text-[#2B3990] mb-6">Applications</h2>
                <ul className="space-y-3">
                  {service.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-[#2B3990] mb-6">How It Works</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Infrared thermography is a non-destructive testing method that uses thermal imaging cameras to detect variations in temperature. This technology allows us to identify potential issues in electrical and mechanical systems before they lead to failures.
                </p>
                <p className="mb-4">
                  Our advanced thermal imaging equipment can detect temperature differences as small as 0.1°C, enabling us to identify:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Electrical faults and loose connections</li>
                  <li>Mechanical wear and friction issues</li>
                  <li>Building envelope deficiencies</li>
                  <li>HVAC system inefficiencies</li>
                  <li>Moisture intrusion and insulation problems</li>
                </ul>
                <p>
                  Regular thermal imaging inspections are essential for preventive maintenance programs, helping to avoid unexpected equipment failures and optimize energy efficiency.
                </p>
              </div>
            </div>

            {/* Additional Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up">
                <h3 className="text-2xl font-bold text-[#2B3990] mb-4">Preventive Maintenance</h3>
                <p className="text-gray-700 mb-4">
                  Our infrared thermography service helps identify potential issues before they become critical problems, saving you time and money on repairs while preventing unexpected downtime.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Early detection of equipment issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Reduced maintenance costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Extended equipment life</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-2xl font-bold text-[#2B3990] mb-4">Safety & Compliance</h3>
                <p className="text-gray-700 mb-4">
                  Our thermographic inspections help ensure your facility meets safety standards and regulatory requirements while protecting your assets and personnel.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Compliance with safety regulations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Risk mitigation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#FF5733] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Documentation for insurance purposes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
