"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Flame,
  Droplets,
  CircleDot,
  Fuel,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const SERVICES = [
  {
    icon: Wrench,
    title: "General Plumbing",
    description:
      "From leaking taps to full pipe replacements, our licensed plumbers handle all general plumbing work across Liverpool and surrounding suburbs. We arrive on time, work cleanly, and leave everything exactly as it should be.",
  },
  {
    icon: Flame,
    title: "Hot Water Systems",
    description:
      "Whether your hot water system needs repair, servicing, or a full replacement, we work with all major brands and fuel types — electric, gas, and solar. Same-day service available for urgent breakdowns.",
  },
  {
    icon: Droplets,
    title: "Blocked Drains",
    description:
      "Slow drains, recurring blockages, or overflowing gully traps — we diagnose and clear blocked drains fast using professional-grade equipment. CCTV inspections available to pinpoint the problem.",
  },
  {
    icon: CircleDot,
    title: "Toilet Repairs",
    description:
      "Running toilets, constant cistern leaks, or complete replacements — we fix toilets efficiently so your household gets back to normal with minimal disruption. All work guaranteed.",
  },
  {
    icon: Fuel,
    title: "Gas Fitting",
    description:
      "Fully licensed gas fitting for heaters, cooktops, hot water systems, and bayonets. We also handle gas leak detection and emergency shut-off repairs. Safety is always our top priority.",
  },
];

const SERVICE_AREAS = [
  {
    name: "Liverpool",
    description:
      "Our home base. We service all residential and commercial properties across the Liverpool CBD and surrounding neighbourhoods.",
  },
  {
    name: "Casula",
    description:
      "Covering Casula and Casula Mall areas, we provide prompt plumbing services for homes and businesses alike.",
  },
  {
    name: "Moorebank",
    description:
      "From Moorebank village to the surrounding residential streets, our team is just a phone call away.",
  },
  {
    name: "Holsworthy",
    description:
      "We provide plumbing services throughout Holsworthy, including properties near the military area and Georges River.",
  },
  {
    name: "Chipping Norton",
    description:
      "Servicing all of Chipping Norton and its lakeside properties, from routine maintenance to emergency callouts.",
  },
];

/* ──────────────────────────────────────────────
   COMPONENTS
   ────────────────────────────────────────────── */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const sectionIds = useRef(["services", "about", "areas", "contact"]);
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Areas", href: "#areas" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sectionIds.current.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  function isActive(href: string) {
    return activeId === href.replace("#", "");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-16">
        <a href="#" className="flex items-center gap-2 text-[#0D9488] font-bold text-xl">
          <Wrench className="w-6 h-6" />
          <span>Flow Plumbing</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={
                  isActive(item.href)
                    ? "text-[#0D9488] text-sm font-medium"
                    : "text-gray-700 hover:text-[#0D9488] text-sm font-medium"
                }
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <Button asChild size="sm" className="bg-[#0D9488] hover:bg-[#0b7d73] text-white">
              <a href="tel:0423567890">
                <Phone className="w-4 h-4 mr-1" />
                Call 0423 567 890
              </a>
            </Button>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 top-16 bg-black/40 md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={
                    isActive(item.href)
                      ? "block text-[#0D9488] font-medium py-2"
                      : "block text-gray-700 hover:text-[#0D9488] font-medium py-2"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button asChild className="w-full bg-[#0D9488] hover:bg-[#0b7d73] text-white">
                <a href="tel:0423567890" onClick={closeMenu}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call 0423 567 890
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-28 lg:pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight text-gray-900">
              Flow Plumbing
            </h1>
            <p className="text-[#0D9488] text-xl sm:text-2xl lg:text-3xl font-semibold mt-2">
              Trusted Local Plumber — Liverpool &amp; South Western Sydney
            </p>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
              Licensed, reliable, and ready to help with all your plumbing needs.
              From emergency callouts to full bathroom renovations, same-day
              service is available for urgent jobs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#0D9488] hover:bg-[#0b7d73] text-white text-lg px-8 py-6 rounded-lg"
              >
                <a href="#contact">
                  Get a Quote
                  <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
              <a
                href="tel:0423567890"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-[#0D9488] font-medium text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                0423 567 890
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-sm">
            <img
              src="/plumbing/hero-plumber.jpg"
              alt="Professional plumber at work"
              width={1344}
              height={768}
              className="w-full h-auto object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D9488] text-center">
          Our Services
        </h2>
        <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
          From routine maintenance to emergency repairs, Flow Plumbing covers the full range of
          plumbing services for homes and businesses.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Card key={service.title} className="border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0D9488]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#0D9488]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D9488]">About Flow Plumbing</h2>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Flow Plumbing has been keeping Liverpool and surrounding suburbs flowing since 2018.
              Our team of fully licensed plumbers handles everything from emergency callouts to full
              bathroom renovations. Same-day service is available for urgent jobs.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              We pride ourselves on turning up on time, providing honest upfront quotes, and leaving
              every job site cleaner than we found it. Whether it is a dripping tap or a complete
              re-plumb, we treat every job with the same level of care and professionalism.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#0D9488] hover:bg-[#0b7d73] text-white">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" className="border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white">
                <a href="tel:0423567890">
                  <Phone className="w-4 h-4 mr-2" />
                  0423 567 890
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/plumbing/bathroom.jpg"
              alt="Modern bathroom plumbing work"
              width={1024}
              height={1024}
              className="w-full h-80 lg:h-[28rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D9488] text-center">
          Areas We Service
        </h2>
        <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
          Flow Plumbing provides prompt, reliable plumbing services across South Western Sydney.
          If your suburb is listed below, we can be there fast.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.name}
              className="flex items-start gap-4 p-5 rounded-lg border border-gray-200 bg-white"
            >
              <MapPin className="w-6 h-6 text-[#0D9488] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{area.name}</h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message sent",
          description: "We will get back to you shortly.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try calling us instead.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection or call us directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D9488] text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-4 text-center max-w-2xl mx-auto">
          Need a plumber? Get in touch and we will come back to you as soon as possible.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0D9488]/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-[#0D9488]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <a
                  href="tel:0423567890"
                  className="text-[#0D9488] hover:underline mt-1 block"
                >
                  0423 567 890
                </a>
                <p className="text-gray-500 text-sm mt-1">
                  Available Mon–Sat, 7am–6pm. Emergency callouts outside hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0D9488]/10 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#0D9488]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:info@flowplumbing.com.au"
                  className="text-[#0D9488] hover:underline mt-1 block"
                >
                  info@flowplumbing.com.au
                </a>
                <p className="text-gray-500 text-sm mt-1">
                  We respond to emails within one business day.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#0D9488]/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#0D9488]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Service Area</h3>
                <p className="text-gray-600 mt-1">
                  Liverpool, Casula, Moorebank, Holsworthy, Chipping Norton
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mt-4">
              <img
                src="/plumbing/blocked-drain.jpg"
                alt="Blocked drain clearing service"
                width={1024}
                height={1024}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="04XX XXX XXX"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the issue or job you need help with..."
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#0D9488] hover:bg-[#0b7d73] text-white"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center gap-3">
        <p className="text-white font-bold text-lg">Flow Plumbing</p>
        <p>
          <a href="tel:0423567890" className="hover:text-[#0D9488]">
            0423 567 890
          </a>
        </p>
        <p>
          <a href="mailto:info@flowplumbing.com.au" className="hover:text-[#0D9488]">
            info@flowplumbing.com.au
          </a>
        </p>
        <p className="text-gray-500 text-sm">&copy; 2026 Flow Plumbing. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────── */

export default function PlumbingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
