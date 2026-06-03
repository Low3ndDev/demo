"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronRight, Menu, X } from "lucide-react";

const PHONE = "0478 901 234";
const PHONE_TEL = "0478901234";
const EMAIL = "info@brushworkspainting.com.au";

const services = [
  {
    title: "Interior Painting",
    img: "/painter/hero-painting.jpg",
    alt: "Interior painting service",
    desc: "Refresh every room in your home with a flawless interior finish. We handle walls, ceilings, architraves, and skirting boards with full surface preparation, including filling, sanding, and priming to ensure a smooth, long-lasting result. We work with premium Dulux and Taubmans products for a finish you can rely on.",
  },
  {
    title: "Exterior Painting",
    img: "/painter/exterior-painting.jpg",
    alt: "Exterior painting service",
    desc: "Protect and transform the outside of your property with weather-resistant coatings built to withstand the harsh Australian climate. From weatherboards and rendered walls to fascias and eaves, we prepare every surface thoroughly and apply durable, UV-stable paint systems designed to look great for years.",
  },
  {
    title: "Deck & Fence Staining",
    img: "/painter/deck-staining.jpg",
    alt: "Deck and fence staining service",
    desc: "Restore and protect your outdoor timber with professional staining and oiling services. Whether it's a deck, pergola, fence, or garden structure, we clean back the surface, apply quality oil-based or water-based stains, and leave your timber looking rich and well-maintained.",
  },
  {
    title: "Commercial Painting",
    img: "/painter/commercial-painting.jpg",
    alt: "Commercial painting service",
    desc: "We work with businesses across the Sutherland Shire to deliver clean, professional finishes for offices, retail spaces, and commercial premises. Our team can schedule work around your operating hours to minimise disruption, and we use low-odour, quick-drying products where needed.",
  },
  {
    title: "Colour Consultation",
    img: "/painter/colour-consultation.jpg",
    alt: "Colour consultation service",
    desc: "Choosing the right colours can transform the feel of your home or business. We offer a personalised colour consultation service, bringing sample pots and colour charts directly to you. We help you select a palette that suits your space, your style, and your lighting conditions.",
  },
] as const;

const areas = [
  {
    name: "Sutherland Shire",
    desc: "Covering the broader Sutherland Shire region including Kirrawee, Sylvania, Menai, and Engadine for all residential and commercial painting work.",
  },
  {
    name: "Cronulla",
    desc: "Serving Cronulla and surrounding beachside suburbs with interior, exterior, and deck staining services tailored to coastal conditions.",
  },
  {
    name: "Caringbah",
    desc: "Providing reliable painting services to Caringbah and neighbouring areas, from single-room touch-ups to full home repaints.",
  },
  {
    name: "Miranda",
    desc: "Offering professional painting solutions across Miranda for homes, units, and commercial premises, including colour consultation.",
  },
  {
    name: "Gymea",
    desc: "Delivering quality finishes to Gymea and the surrounding suburbs, with a focus on preparation and premium paint systems.",
  },
] as const;

const inputClass =
  "w-full rounded border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C2410C] focus:border-[#C2410C]";

export default function PainterPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetForm = useCallback(() => {
    setFormSubmitted(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* ========== NAVIGATION ========== */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-lg font-bold text-[#C2410C]">
              Brushworks Painting
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#areas" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Service Areas
              </a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded bg-[#C2410C] hover:bg-[#9a3412] transition-colors"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
              <a href="#services" className="block text-sm text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>
                Services
              </a>
              <a href="#about" className="block text-sm text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>
                About
              </a>
              <a href="#areas" className="block text-sm text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>
                Service Areas
              </a>
              <a href="#contact" className="block text-sm text-gray-600 hover:text-gray-900" onClick={closeMobileMenu}>
                Contact
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded bg-[#C2410C] hover:bg-[#9a3412] transition-colors"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">
        {/* ========== 1. HERO SECTION ========== */}
        <section className="relative scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#C2410C]">
                  Brushworks Painting
                </h1>
                <p className="mt-4 text-lg sm:text-xl text-gray-600">
                  Quality Painting Services — Sutherland Shire &amp; Cronulla
                </p>
                <p className="mt-4 text-gray-500 max-w-lg">
                  From crisp interiors to durable exterior finishes, we deliver
                  professional painting results for homes and businesses across
                  Sydney&apos;s southern suburbs.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-white font-medium text-base bg-[#C2410C] hover:bg-[#9a3412] transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    Call {PHONE}
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border-2 font-medium text-base transition-colors border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                  >
                    Get a Quote
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/painter/hero-painting.jpg"
                  alt="Professional painter applying interior wall paint with a roller"
                  width={1344}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========== 2. SERVICES SECTION ========== */}
        <section id="services" className="bg-gray-50 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#C2410C]">
              Our Services
            </h2>
            <p className="mt-3 text-center text-gray-500 max-w-2xl mx-auto">
              We offer a full range of residential and commercial painting services,
              each delivered with meticulous preparation and premium-grade materials.
            </p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc) => (
                <div key={svc.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <Image
                    src={svc.img}
                    alt={svc.alt}
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-48 object-cover rounded mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-[#C2410C]">{svc.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 3. ABOUT SECTION ========== */}
        <section id="about" className="scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#C2410C]">
                  About Brushworks Painting
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Brushworks Painting has been transforming homes across the
                  Sutherland Shire for over 10 years. We use premium Dulux and
                  Taubmans paints and take pride in delivering a clean, precise
                  finish every time. Full preparation is included in every quote
                  — that means sanding, filling, undercoating, and masking are
                  all part of the job, not optional extras.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our team treats every property with respect. We lay drop sheets,
                  protect your floors and furniture, and clean up thoroughly at
                  the end of each day. Whether you need a single room refreshed
                  or an entire home repainted inside and out, we approach every
                  project with the same attention to detail.
                </p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We are fully insured and provide written quotes upfront, so
                  there are no surprises on the final bill. If you are in the
                  Sutherland Shire area and looking for a reliable, tidy painter
                  who shows up on time, give us a call.
                </p>
              </div>
              <div>
                <Image
                  src="/painter/exterior-painting.jpg"
                  alt="Brushworks Painting team at work on a residential property"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========== 4. SERVICE AREAS SECTION ========== */}
        <section id="areas" className="bg-gray-50 scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#C2410C]">
              Service Areas
            </h2>
            <p className="mt-3 text-center text-gray-500 max-w-2xl mx-auto">
              We proudly serve residential and commercial properties throughout
              Sydney&apos;s southern suburbs. If your area is not listed below, get
              in touch — we may still be able to help.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex items-start gap-3"
                >
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-[#C2410C]" />
                  <div>
                    <h3 className="text-base font-semibold text-[#C2410C]">
                      {area.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== 5. CONTACT SECTION ========== */}
        <section id="contact" className="scroll-mt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#C2410C]">
              Get in Touch
            </h2>
            <p className="mt-3 text-center text-gray-500 max-w-2xl mx-auto">
              Ready to discuss your next painting project? Contact us by phone,
              email, or fill in the form below and we will get back to you
              promptly.
            </p>
            <div className="mt-12 grid lg:grid-cols-2 gap-10">
              {/* Contact Details */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-[#C2410C]">
                  Contact Details
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 mt-0.5 shrink-0 text-[#C2410C]" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="text-gray-600 hover:underline"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 mt-0.5 shrink-0 text-[#C2410C]" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-gray-600 hover:underline"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-[#C2410C]" />
                    <div>
                      <p className="font-medium text-gray-900">Service Area</p>
                      <p className="text-gray-600">
                        Sutherland Shire, Cronulla, Caringbah, Miranda, Gymea
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 border border-gray-100">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <h3 className="text-lg font-semibold text-[#C2410C]">
                      Thank You
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Your message has been received. We will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={resetForm}
                      className="mt-4 text-sm font-medium underline text-[#C2410C] hover:no-underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project"
                        value={formData.message}
                        onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded text-white font-medium text-sm bg-[#C2410C] hover:bg-[#9a3412] transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== 6. FOOTER ========== */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-bold text-white text-lg">Brushworks Painting</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm">
              <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-500">
            &copy; 2026 Brushworks Painting. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
