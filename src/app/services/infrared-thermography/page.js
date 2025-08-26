import Hero from '@/components/Hero';
import CTA from '@/components/CTA';

export default function InfraredThermographyPage() {
  return (
    <>
      <Hero
        title="Infrared Thermography"
        subtitle="Detect thermal anomalies and potential issues before they become problems"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2>What is Infrared Thermography?</h2>
            <p>
              Infrared thermography is a non-destructive testing method that uses thermal imaging cameras to detect
              variations in temperature. This technology allows us to identify potential problems in electrical
              systems, mechanical equipment, and building structures before they lead to failures.
            </p>

            <h3>Key Benefits</h3>
            <ul>
              <li>Early detection of electrical faults</li>
              <li>Prevention of equipment failures</li>
              <li>Energy efficiency optimization</li>
              <li>Non-invasive inspection method</li>
              <li>Reduced maintenance costs</li>
            </ul>

            <h3>Applications</h3>
            <ul>
              <li>Electrical system inspections</li>
              <li>Mechanical system monitoring</li>
              <li>Building envelope analysis</li>
              <li>Process equipment monitoring</li>
              <li>Quality control</li>
            </ul>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to implement Infrared Thermography?"
        description="Contact us today to schedule an inspection and prevent costly equipment failures."
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
}
