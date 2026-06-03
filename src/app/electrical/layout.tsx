import type { Metadata } from "next";

const siteUrl = "https://prysmn.com/electrical";

export const metadata: Metadata = {
  title: "Volt Electrical | Licensed Electrician — Sydney Inner West",
  description:
    "Licensed electrical contractor serving residential and commercial clients across Sydney's inner west. New wiring, renovations, emergency repairs, commercial fit-outs, and smoke alarm services.",
  keywords: [
    "electrician Sydney",
    "licensed electrician",
    "electrical contractor",
    "inner west electrician",
    "Annandale electrician",
    "emergency electrical repairs",
    "residential electrical",
    "commercial electrical",
  ],
  openGraph: {
    title: "Volt Electrical | Licensed Electrician — Sydney Inner West",
    description:
      "Licensed electrical contractor serving residential and commercial clients across Sydney's inner west. New wiring, renovations, emergency repairs, commercial fit-outs, and smoke alarm services.",
    url: siteUrl,
    siteName: "Volt Electrical",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: `${siteUrl}/electrical/hero-electrical.jpg`,
        width: 1344,
        height: 768,
        alt: "Volt Electrical — licensed electrician at work on a residential switchboard in Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volt Electrical | Licensed Electrician — Sydney Inner West",
    description:
      "Licensed electrical contractor serving residential and commercial clients across Sydney's inner west.",
    images: [`${siteUrl}/electrical/hero-electrical.jpg`],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Volt Electrical",
  description:
    "Licensed electrical contractor serving residential and commercial clients across Sydney's inner west.",
  url: siteUrl,
  telephone: "+61 412 345 678",
  email: "info@voltelectrical.com.au",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Annandale",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.8875,
    longitude: 151.1722,
  },
  areaServed: [
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
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "New Home Wiring",
          description:
            "Complete electrical installation for new builds including switchboards, power points, lighting circuits, appliance wiring, and safety compliance certification.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovation Electrical",
          description:
            "Rewiring, switchboard upgrades, additional power points, LED lighting retrofits, ceiling fan installation, and compliance updates for older homes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Repairs",
          description:
            "24/7 fault finding, power outages, electrical faults, safety switch tripping, exposed wiring, and urgent repair callouts.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Fit-Outs",
          description:
            "Office and retail electrical including data cabling, power distribution, lighting design, exit and emergency lighting, and test and tag.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smoke Alarm Services",
          description:
            "Supply and installation of interconnected photoelectric smoke alarms, annual testing, battery replacement, and compliance certificates for rental properties.",
        },
      },
    ],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

export default function ElectricalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
