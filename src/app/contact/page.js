'use client';

import { useState } from 'react';
import Container from "@/components/Container";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/contact.webp"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Light dark overlay for text readability */}
        </div>
        <Container className="relative z-10 text-center text-white py-20">
          <div className="inline-block bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full mb-6" data-aos="fade-down">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Ready to optimize your operations? Contact our expert team for professional engineering diagnostics and consultation services.
          </p>
        </Container>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-block text-[#FF5733] px-4 py-1 rounded-full mb-4 text-sm font-medium">
              Contact Information
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-gray-600">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone Card */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="w-16 h-16 bg-[#4285F4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone</h3>
              <div className="space-y-2 text-gray-600">
                <p>+255 123 456 789</p>
                <p>+255 987 654 321</p>
                <p className="text-sm text-gray-500 mt-4">Call us during business hours</p>
              </div>
            </div>

            {/* Email Card */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-[#34A853]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#34A853]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
              <div className="space-y-2 text-gray-600">
                <p>info@tes.co.tz</p>
                <p>support@tes.co.tz</p>
                <p className="text-sm text-gray-500 mt-4">Send us your inquiries anytime</p>
              </div>
            </div>

            {/* Location Card */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-[#A855F7]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#A855F7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
              <div className="space-y-2 text-gray-600">
                <p>Dar es Salaam, Tanzania</p>
                <p className="text-sm text-gray-500 mt-4">Visit our modern facility</p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div 
              className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-[#FF5733]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#FF5733]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                <p>Sat: 9:00 AM - 4:00 PM</p>
                <p className="text-sm text-gray-500 mt-4">Emergency services available 24/7</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Connect With Us Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-flex items-center space-x-2">
              <svg className="w-6 h-6 text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B3990]">Connect With Us</h2>
            </div>
            <p className="text-gray-600 mt-6 mb-2">
              Stay updated with our latest projects, industry insights, and technical solutions.
            </p>
            <p className="text-gray-600">
              Join our growing community of engineering professionals and enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Facebook */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaFacebook className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Facebook</h3>
              <p className="text-gray-600 mt-2 mb-4">2.5K followers</p>
              <a href="#" className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#0066FF] text-[#0066FF] rounded-full font-medium hover:bg-[#0066FF] hover:text-white transition-colors">
                Follow Us
              </a>
            </div>

            {/* Twitter */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-[#1DA1F2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaTwitter className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Twitter</h3>
              <p className="text-gray-600 mt-2 mb-4">1.8K followers</p>
              <a href="#" className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#1DA1F2] text-[#1DA1F2] rounded-full font-medium hover:bg-[#1DA1F2] hover:text-white transition-colors">
                Follow Us
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-[#0077B5] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaLinkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">LinkedIn</h3>
              <p className="text-gray-600 mt-2 mb-4">3.2K followers</p>
              <a href="#" className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#0077B5] text-[#0077B5] rounded-full font-medium hover:bg-[#0077B5] hover:text-white transition-colors">
                Follow Us
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-gradient-to-tr from-[#FF5733] to-[#FF2D55] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FaInstagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Instagram</h3>
              <p className="text-gray-600 mt-2 mb-4">1.2K followers</p>
              <a href="#" className="inline-flex items-center justify-center px-6 py-2 border-2 border-[#FF5733] text-[#FF5733] rounded-full font-medium hover:bg-gradient-to-tr hover:from-[#FF5733] hover:to-[#FF2D55] hover:text-white transition-colors">
                Follow Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="text-[#0066FF] text-3xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Monthly Interactions</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="500">
              <div className="text-[#FF5733] text-3xl font-bold mb-2">8.7K</div>
              <div className="text-gray-600">Total Followers</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center" data-aos="fade-up" data-aos-delay="600">
              <div className="text-[#00C853] text-3xl font-bold mb-2">95%</div>
              <div className="text-gray-600">Engagement Rate</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-block text-[#FF5733] px-4 py-1 rounded-full mb-4 text-sm font-medium">
              Send us a Message
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B3990] mb-4">
              Let&apos;s Start a Conversation
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we&apos;ll get back to you promptly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B3990] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B3990] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B3990] focus:border-transparent transition-all"
                  placeholder="+255 123 456 789"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B3990] focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2B3990] focus:border-transparent transition-all"
                  placeholder="Please describe how we can assist you..."
                />
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-[#2B3990] hover:bg-[#232D73] md:text-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
