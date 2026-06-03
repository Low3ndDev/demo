"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

const services = [
  {
    title: "Roof Repairs",
    description:
      "From cracked tiles and leaking flashings to storm damage, we fix all types of roofing problems fast. Our experienced team diagnoses the issue and provides a lasting repair that protects your home for years to come.",
    image: "/roofing/service-roof-repair.png",
    imageAlt: "Damaged residential roof tiles being repaired by a roofing tradesperson",
  },
  {
    title: "Roof Restoration",
    description:
      "Bring your tired roof back to life. Our restoration process includes high-pressure cleaning, re-bedding and re-pointing ridge caps, applying quality coatings, and replacing broken tiles to give your roof a brand-new finish.",
    image: "/roofing/service-roof-restoration.png",
    imageAlt: "Residential roof after professional restoration with clean renewed tiles",
  },
  {
    title: "Gutter Installation",
    description:
      "Protect your home from water damage with properly installed gutters. We supply and fit quality aluminium and Colorbond guttering systems tailored to your roofline, ensuring effective drainage in all weather conditions.",
    image: "/roofing/service-gutter.png",
    imageAlt: "New aluminium gutters being installed on a residential roof edge",
  },
  {
    title: "Colorbond Roofing",
    description:
      "Upgrade to a durable, low-maintenance Colorbond steel roof. Available in a wide range of colours, Colorbond roofing is built to withstand harsh Australian conditions while improving the look and value of your property.",
    image: "/roofing/service-colorbond.png",
    imageAlt: "Modern Colorbond steel roofing panels installed on an Australian home",
  },
  {
    title: "Roof Inspections",
    description:
      "Catch problems before they become costly repairs. Our thorough roof inspections identify issues such as cracked tiles, deteriorating flashing, blocked gutters, and membrane damage. We provide honest, detailed reports so you can make informed decisions.",
    image: "/roofing/service-inspection.png",
    imageAlt: "Professional tradesperson conducting a roof inspection on a residential property",
  },
];

const serviceAreas = [
  "Wollongong",
  "Shellharbour",
  "Dapto",
  "Albion Park",
  "Kiama",
];

export default function RoofingPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sent">("idle");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ===== HERO ===== */}
      <header className="relative w-full bg-neutral-900">
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
          <Image
            src="/roofing/hero-roofer.png"
            alt="Professional roofer working on a residential roof in Wollongong"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-neutral-900/60" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4 max-w-3xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Shield className="h-8 w-8 text-orange-600" />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Shield Roofing
                </h1>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium mb-6">
                Professional Roofing Services — Wollongong &amp; Illawarra
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="tel:0456789012"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 text-white font-semibold px-6 py-3 rounded text-base transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Call 0456 789 012
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-neutral-900 font-semibold px-6 py-3 rounded text-base transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ===== SERVICES ===== */}
        <section className="py-12 sm:py-16 px-4" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2"
            >
              Our <span className="text-orange-600">Services</span>
            </h2>
            <p className="text-neutral-600 mb-10 max-w-2xl">
              We offer a full range of roofing services for residential properties across the
              Illawarra region. Every job is completed to the highest standard with quality
              materials and a 10-year workmanship warranty.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="border border-neutral-200 rounded overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-orange-600 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section
          className="py-12 sm:py-16 px-4 bg-neutral-50"
          aria-labelledby="about-heading"
        >
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h2
                id="about-heading"
                className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4"
              >
                About <span className="text-orange-600">Shield Roofing</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Shield Roofing has protected homes across the Illawarra region since 2012. We
                specialise in both tile and metal roofing, using quality materials with a
                10-year workmanship warranty on all jobs. Our team of licensed tradespeople takes
                pride in delivering reliable, honest service on every project, no matter the size.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Whether you need an emergency leak repair, a full roof restoration, or a
                comprehensive inspection to assess the condition of your roof, we are here to
                help. We work with homeowners, property managers, and strata complexes throughout
                Wollongong and surrounding suburbs.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Free roof inspections are available across all of our service areas. Contact us
                today to book an obligation-free assessment and find out exactly what condition
                your roof is in.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SERVICE AREAS ===== */}
        <section
          className="py-12 sm:py-16 px-4"
          aria-labelledby="areas-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="areas-heading"
              className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2"
            >
              Service <span className="text-orange-600">Areas</span>
            </h2>
            <p className="text-neutral-600 mb-8 max-w-2xl">
              We provide professional roofing services across the Illawarra region. If your
              suburb is not listed below, get in touch — we may still be able to help.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 border border-neutral-200 rounded px-4 py-3"
                >
                  <MapPin className="h-4 w-4 text-orange-600 flex-shrink-0" />
                  <span className="text-neutral-900 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section
          id="contact"
          className="py-12 sm:py-16 px-4 bg-neutral-50"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2"
            >
              Contact <span className="text-orange-600">Us</span>
            </h2>
            <p className="text-neutral-600 mb-10 max-w-2xl">
              Ready to discuss your roofing needs? Get in touch by phone, email, or fill out the
              form below and we will get back to you promptly.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <div className="flex items-start gap-3 mb-6">
                  <Phone className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-neutral-900">Phone</h3>
                    <a
                      href="tel:0456789012"
                      className="text-orange-600 hover:text-orange-700 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-orange-600 rounded transition-colors"
                    >
                      0456 789 012
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-6">
                  <Mail className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-neutral-900">Email</h3>
                    <a
                      href="mailto:info@shieldroofing.com.au"
                      className="text-orange-600 hover:text-orange-700 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-orange-600 rounded transition-colors"
                    >
                      info@shieldroofing.com.au
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-neutral-900">Service Area</h3>
                    <p className="text-neutral-600">
                      Wollongong, Shellharbour, Dapto, Albion Park, Kiama
                    </p>
                  </div>
                </div>
              </div>

              <form
                className="bg-white border border-neutral-200 rounded p-6"
                method="POST"
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormStatus("sent");
                }}
              >
                {formStatus === "sent" ? (
                  <div className="py-8 text-center">
                    <p className="text-green-700 font-semibold text-lg mb-2">
                      Message sent successfully
                    </p>
                    <p className="text-neutral-600 text-sm">
                      We will get back to you within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormStatus("idle")}
                      className="mt-4 text-orange-600 hover:text-orange-700 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-orange-600 font-medium text-sm rounded transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-900 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        className="w-full border border-neutral-300 rounded px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-900 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        required
                        className="w-full border border-neutral-300 rounded px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-900 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        className="w-full border border-neutral-300 rounded px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-900 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full border border-neutral-300 rounded px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent resize-vertical"
                        placeholder="Tell us about your roofing needs"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-orange-600 hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 text-white font-semibold py-3 rounded transition-colors"
                    >
                      Send Message
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-neutral-900 text-neutral-300 py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="font-bold text-white">
            Shield Roofing
          </p>
          <div className="flex items-center gap-4">
            <a
              href="tel:0456789012"
              className="flex items-center gap-1 hover:text-orange-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-orange-400 rounded transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              0456 789 012
            </a>
            <a
              href="mailto:info@shieldroofing.com.au"
              className="flex items-center gap-1 hover:text-orange-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-orange-400 rounded transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              info@shieldroofing.com.au
            </a>
          </div>
          <p className="text-neutral-400">&copy; 2026 Shield Roofing</p>
        </div>
      </footer>
    </div>
  );
}
