import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import { MdOutlineThermostat } from "react-icons/md";
import { FaBolt, FaOilCan, FaBatteryFull } from "react-icons/fa";
import { GiVibratingSmartphone, GiSoundWaves } from "react-icons/gi";
import Slideshow from "@/components/Slideshow";

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <Link href="/services" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">Learn more →</Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen">
        <Slideshow />
        <div className="absolute inset-0 flex items-center justify-center">
          <Container className="text-center text-white">
            <div className="bg-gray-600/50 inline-block px-6 py-2 rounded-full mb-4">
              Leading Engineering Solutions in Tanzania
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Engineering Precision,<br />
              Monitoring with Insight.
            </h1>
            <p className="text-2xl mb-8 text-[#FF5733]">
              Minimizing Downtime, Maximizing Uptime
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We deliver innovative solutions that ensure peak performance and maximum reliability for your critical assets.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 bg-[#FF5733] text-white rounded-lg text-lg font-medium hover:bg-[#FF5733]/90 transition-colors"
              >
                Explore Our Services →
              </Link>
              <Link 
                href="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gray-600/50 text-white rounded-lg text-lg font-medium hover:bg-gray-600/60 transition-colors"
              >
                <span className="mr-2">▶</span> Watch Demo
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-block text-[#FF5733] px-4 py-1 rounded-full mb-4 text-sm font-medium bg-[#FF5733]/10">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B3990] mb-6">
              What We Do
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive engineering diagnostics and monitoring solutions for your critical infrastructure
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Infrared Thermography */}
            <div 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/infaredthermography.webp"
                  alt="Infrared Thermography"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Infrared Thermography Inspection
                </h3>
                <p className="text-gray-600 mb-4">
                  Detect overheating, loose connections, and hidden faults with advanced thermal imaging technology.
                </p>
                <Link href="/services/infrared-thermography" className="inline-flex items-center text-[#2B3990] font-medium hover:text-[#FF5733] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Power Quality Analysis */}
            <div 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/powerqualityanalysis.webp"
                  alt="Power Quality Analysis"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Power Quality Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Monitor harmonics, voltage dips/swells, and ensure stable operations for optimal performance.
                </p>
                <Link href="/services/power-quality" className="inline-flex items-center text-[#2B3990] font-medium hover:text-[#FF5733] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Vibration Analysis */}
            <div 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/vibrationalanalysis.webp"
                  alt="Vibration Analysis"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Advanced Vibration Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Diagnose unbalance, misalignment, and early bearing wear using cutting-edge analysis tools.
                </p>
                <Link href="/services/vibration-analysis" className="inline-flex items-center text-[#2B3990] font-medium hover:text-[#FF5733] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Oil Condition Monitoring */}
            <div 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/Oil Condition Monitoring.webp"
                  alt="Oil Condition Monitoring"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Transformer & Oil Condition Monitoring
                </h3>
                <p className="text-gray-600 mb-4">
                  Analyze oil condition for reliability and early warning of failures in critical equipment.
                </p>
                <Link href="/services/oil-monitoring" className="inline-flex items-center text-[#2B3990] font-medium hover:text-[#FF5733] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Battery Testing */}
            <div 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/Battery Impedance Inspection.webp"
                  alt="Battery Testing"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Battery & Electrical Testing
                </h3>
                <p className="text-gray-600 mb-4">
                  Assess battery impedance and measure earth resistance for optimal safety and performance.
                </p>
                <Link href="/services/battery-testing" className="inline-flex items-center text-[#2B3990] font-medium hover:text-[#FF5733] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Acoustic Imaging */}
            <div 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/Industrial Acoustic Imaging.webp"
                  alt="Acoustic Imaging"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Acoustic Imaging & Leak Detection
                </h3>
                <p className="text-gray-600 mb-4">
                  Identify gas/air leaks and partial discharge using advanced ultrasound technology.
                </p>
                <Link href="/services/acoustic-imaging" className="inline-flex items-center text-[#2B3990] font-medium hover:text-[#FF5733] transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />
    </>
  );
}
