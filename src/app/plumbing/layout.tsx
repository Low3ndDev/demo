import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

const siteUrl = "https://prysmn.com/plumbing";

export const metadata: Metadata = {
  title: "Flow Plumbing — Trusted Local Plumber | Liverpool & South Western Sydney",
  description:
    "Flow Plumbing provides reliable plumbing services across Liverpool, Casula, Moorebank, Holsworthy and Chipping Norton. General plumbing, hot water systems, blocked drains, toilet repairs and gas fitting.",
  keywords: [
    "plumber Liverpool",
    "plumber South Western Sydney",
    "blocked drains",
    "hot water systems",
    "gas fitting",
    "toilet repairs",
    "emergency plumber",
    "Flow Plumbing",
  ],
  openGraph: {
    title: "Flow Plumbing — Trusted Local Plumber | Liverpool & South Western Sydney",
    description:
      "Flow Plumbing provides reliable plumbing services across Liverpool, Casula, Moorebank, Holsworthy and Chipping Norton.",
    url: siteUrl,
    siteName: "Flow Plumbing",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: `${siteUrl}/plumbing/hero-plumber.jpg`,
        width: 1344,
        height: 768,
        alt: "Flow Plumbing — professional plumber at work",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "Flow Plumbing",
  description:
    "Flow Plumbing provides reliable plumbing services across Liverpool, Casula, Moorebank, Holsworthy and Chipping Norton.",
  url: siteUrl,
  telephone: "+61 423 567 890",
  email: "info@flowplumbing.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Liverpool",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  areaServed: [
    "Liverpool",
    "Casula",
    "Moorebank",
    "Holsworthy",
    "Chipping Norton",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "18:00",
  },
};

export default function PlumbingLayout({
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
      <Toaster />
      {children}
    </>
  );
}
