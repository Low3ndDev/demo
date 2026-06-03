"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Zap,
  Home as HomeIcon,
  Hammer,
  AlertTriangle,
  Building2,
  ShieldCheck,
  ChevronRight,
  CheckCircle,
  ClipboardList,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ------------------------------------------------------------------ */
/*  NAV                                                               */
/* ------------------------------------------------------------------ */
function Nav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2">
          <Zap className="h-7 w-7 text-[#2563EB]" strokeWidth={2.5} />
          <span className="text-xl font-bold text-gray-900">
            Volt Electrical
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-[#2563EB]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:0412345678"
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-[#2563EB]"
          >
            <Phone className="h-4 w-4" />
            0412 345 678
          </a>
          <Button asChild>
            <a href="#contact">Get a Free Quote</a>
          </Button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-gray-700 hover:text-[#2563EB]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0412345678"
            className="flex items-center gap-2 py-2.5 text-sm font-semibold text-gray-700"
          >
            <Phone className="h-4 w-4" />
            0412 345 678
          </a>
          <div className="pt-2">
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Get a Free Quote
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                              */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative">
      <div className="grid min-h-[520px] items-center lg:min-h-[560px]">
        <div className="bg-white px-6 py-16 lg:px-0 lg:py-0">
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Reliable Electrical Service in{" "}
                <span className="text-[#2563EB]">Sydney&rsquo;s Inner West</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
                Licensed electrical contractor serving residential and commercial
                clients across Sydney&rsquo;s inner west. From new builds and
                renovations to emergency repairs &mdash; quality workmanship you can
                trust.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <a href="#contact">Get a Free Quote</a>
                </Button>
                <a
                  href="tel:0412345678"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#2563EB]"
                >
                  <Phone className="h-4 w-4" />
                  Call 0412 345 678
                </a>
              </div>
            </div>

            <div className="mt-10 hidden lg:block">
              <Image
                src="/electrical/hero-electrical.jpg"
                alt="Volt Electrical — licensed electrician at work on a residential switchboard in Sydney"
                className="w-full rounded-lg object-cover shadow-lg"
                width={640}
                height={440}
                priority
                sizes="(max-width: 1024px) 0, 640px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES                                                          */
/* ------------------------------------------------------------------ */
const services = [
  {
    icon: <HomeIcon className="h-7 w-7" />,
    title: "New Home Wiring",
    description:
      "Complete electrical installation for new builds including switchboards, power points, lighting circuits, appliance wiring, and safety compliance certification.",
  },
  {
    icon: <Hammer className="h-7 w-7" />,
    title: "Renovation Electrical",
    description:
      "Rewiring, switchboard upgrades, additional power points, LED lighting retrofits, ceiling fan installation, and compliance updates for older homes.",
  },
  {
    icon: <AlertTriangle className="h-7 w-7" />,
    title: "Emergency Repairs",
    description:
      "24/7 fault finding, power outages, electrical faults, safety switch tripping, exposed wiring, and urgent repair callouts.",
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Commercial Fit-Outs",
    description:
      "Office and retail electrical including data cabling, power distribution, lighting design, exit and emergency lighting, and test and tag.",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Smoke Alarm Services",
    description:
      "Supply and installation of interconnected photoelectric smoke alarms, annual testing, battery replacement, and compliance certificates for rental properties.",
  },
];

function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our <span className="text-[#2563EB]">Services</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Comprehensive electrical solutions for homes and businesses across
            Sydney&rsquo;s inner west.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                             */
/* ------------------------------------------------------------------ */
const values = [
  "Licensed and fully insured",
  "Same-day service available",
  "Upfront pricing, no surprises",
  "Quality workmanship guaranteed",
];

const suburbs = [
  "Annandale",
  "Ashfield",
  "Burwood",
  "Canterbury",
  "Earlwood",
  "Haberfield",
  "Leichhardt",
  "Marrickville",
  "Newtown",
  "Petersham",
  "Stanmore",
  "Strathfield",
  "Summer Hill",
  "and surrounding areas",
];

function About() {
  return (
    <section id="about" className="scroll-mt-16 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src="/electrical/about-electrician.jpg"
              alt="Volt Electrical — licensed electrician working on a commercial fit-out in Sydney"
              className="w-full rounded-lg object-cover shadow-lg"
              width={640}
              height={440}
              sizes="(max-width: 1024px) 100vw, 640px"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              About <span className="text-[#2563EB]">Volt Electrical</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Volt Electrical is a licensed electrical contractor based in
              Annandale, serving residential and commercial clients across
              Sydney&rsquo;s inner west. Whether it&rsquo;s a full home wiring
              installation, a renovation upgrade, or an urgent repair, we deliver
              safe, reliable, and compliant electrical work every time.
            </p>
            <ul className="mt-6 space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                  <span className="text-gray-700">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                Service Areas
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {suburbs.join(" \u00B7 ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  HOW IT WORKS                                                      */
/* ------------------------------------------------------------------ */
const steps = [
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Call or Book Online",
    description:
      "Get in touch by phone or through our contact form. Tell us about your electrical needs and we\u2019ll arrange a convenient time.",
  },
  {
    icon: <ClipboardList className="h-8 w-8" />,
    title: "Free Quote",
    description:
      "We\u2019ll assess the job on-site and provide a clear, upfront quote \u2014 no hidden fees, no surprises.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    title: "Job Done Right",
    description:
      "Our licensed electrician completes the work to code, cleans up, and provides all necessary compliance documentation.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How It <span className="text-[#2563EB]">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Getting your electrical work done is simple.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2563EB] text-white">
                {step.icon}
              </div>
              <div className="mt-2 mb-1 text-xs font-bold uppercase tracking-wide text-[#2563EB]">
                Step {i + 1}
              </div>
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT FORM                                                      */
/* ------------------------------------------------------------------ */
const serviceOptions = [
  "New Home Wiring",
  "Renovation Electrical",
  "Emergency Repairs",
  "Commercial Fit-Outs",
  "Smoke Alarm Services",
  "Other",
];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [service, setService] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service,
      details: (form.elements.namedItem("details") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Submission failed");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 py-16 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-[#2563EB]" />
        <p className="text-lg font-semibold text-gray-900">
          Thanks! We will be in touch within 2 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setService("");
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input id="name" name="name" required placeholder="Your full name" className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="phone">
          Phone <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="e.g. 04XX XXX XXX"
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="email">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input id="email" name="email" type="email" required placeholder="you@example.com" className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="service">Service Type</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger id="service" className="mt-1.5 w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="details">Project Details</Label>
        <Textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Tell us about your electrical needs..."
          className="mt-1.5"
        />
      </div>

      {error && (
        <p className="text-sm font-medium text-red-600">{error}</p>
      )}
      <Button type="submit" size="lg" className="w-full" disabled={sending}>
        {sending ? "Sending..." : "Send Enquiry"}
        <ChevronRight className="h-4 w-4" />
      </Button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT SECTION                                                   */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get In <span className="text-[#2563EB]">Touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Ready to get started? Fill out the form below and we&rsquo;ll get
            back to you within 2 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a
                    href="tel:0412345678"
                    className="mt-1 block text-gray-600 hover:text-[#2563EB]"
                  >
                    0412 345 678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a
                    href="mailto:info@voltelectrical.com.au"
                    className="mt-1 block text-gray-600 hover:text-[#2563EB]"
                  >
                    info@voltelectrical.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="mt-1 text-gray-600">
                    Mon&ndash;Fri 7am&ndash;6pm
                  </p>
                  <p className="text-gray-600">Sat 8am&ndash;1pm</p>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#2563EB]">
                  Based in Annandale
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Serving residential and commercial clients across
                  Sydney&rsquo;s inner west and surrounding areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FLOATING PHONE BUTTON (MOBILE ONLY)                                 */
/* ------------------------------------------------------------------ */
function FloatingPhoneButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="tel:0412345678"
      aria-label="Call Volt Electrical"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg hover:bg-[#1d4ed8] md:hidden"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                            */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-[#2563EB]" strokeWidth={2.5} />
              <span className="text-lg font-bold text-gray-900">
                Volt Electrical
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Licensed electrical contractor serving Sydney&rsquo;s inner west.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-600 hover:text-[#2563EB]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Contact
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="tel:0412345678"
                  className="text-sm text-gray-600 hover:text-[#2563EB]"
                >
                  0412 345 678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@voltelectrical.com.au"
                  className="text-sm text-gray-600 hover:text-[#2563EB]"
                >
                  info@voltelectrical.com.au
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
              Hours
            </h4>
            <ul className="mt-3 space-y-1 text-sm text-gray-600">
              <li>Mon&ndash;Fri 7am&ndash;6pm</li>
              <li>Sat 8am&ndash;1pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <small className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Volt Electrical. All rights
            reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function ElectricalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <FloatingPhoneButton />
    </div>
  );
}
