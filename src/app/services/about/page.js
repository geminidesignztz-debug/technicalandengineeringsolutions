import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Leading the way in technical engineering solutions"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2>Our Mission</h2>
            <p>
              At Technical & Engineering Solutions, we are committed to providing innovative
              and reliable engineering solutions that help our clients optimize their operations,
              reduce downtime, and improve efficiency. Our team of expert engineers combines
              cutting-edge technology with decades of experience to deliver exceptional results.
            </p>

            <h2>Our Vision</h2>
            <p>
              We aspire to be the leading provider of technical engineering solutions,
              recognized for our expertise, innovation, and commitment to excellence.
              Our vision is to help organizations across industries achieve optimal
              performance through advanced engineering services and solutions.
            </p>

            <h2>Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">John Smith</h3>
                <p className="text-accent mb-2">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 20 years of experience in industrial engineering,
                  John leads our company&apos;s strategic direction and growth.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-accent mb-2">Technical Director</p>
                <p className="text-gray-600">
                  Sarah brings fifteen years of expertise in power systems and
                  electrical engineering to guide our technical operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <CTA
        title="Want to learn more about our capabilities?"
        description="Contact us to discuss how we can help improve your facility's performance."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
