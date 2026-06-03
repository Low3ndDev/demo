import type { Metadata } from "next";

const siteUrl = "https://prysmn.com/roofing";

export const metadata: Metadata = {
  title: "Shield Roofing — Professional Roofing Services | Wollongong & Illawarra",
  description: "Shield Roofing provides professional roof repairs, restoration, gutter installation, Colorbond roofing, and roof inspections across Wollongong, Shellharbour, Dapto, Albion Park, and Kiama.",
  keywords: ["roofing", "roof repairs", "roof restoration", "gutter installation", "Colorbond roofing", "roof inspections", "Wollongong", "Illawarra", "Shellharbour", "Dapto", "Albion Park", "Kiama"],
  openGraph: {
    title: "Shield Roofing — Professional Roofing Services | Wollongong & Illawarra",
    description: "Professional roof repairs, restoration, gutter installation, Colorbond roofing, and roof inspections across the Illawarra region.",
    url: siteUrl,
    siteName: "Shield Roofing",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: `${siteUrl}/roofing/hero-roofer.png`,
        width: 1344,
        height: 768,
        alt: "Shield Roofing — professional roofer working on a residential roof",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Shield Roofing",
  description:
    "Shield Roofing provides professional roof repairs, restoration, gutter installation, Colorbond roofing, and roof inspections across Wollongong, Shellharbour, Dapto, Albion Park, and Kiama.",
  url: siteUrl,
  telephone: "+61 456 789 012",
  email: "info@shieldroofing.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wollongong",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  areaServed: [
    "Wollongong",
    "Shellharbour",
    "Dapto",
    "Albion Park",
    "Kiama",
  ],
};

export default function RoofingLayout({
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
