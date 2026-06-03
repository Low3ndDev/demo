import type { Metadata } from "next";

const siteUrl = "https://prysmn.com/painter";

export const metadata: Metadata = {
  title: "Brushworks Painting — Quality Painting Services | Sutherland Shire & Cronulla",
  description:
    "Brushworks Painting delivers quality interior painting, exterior painting, deck & fence staining, commercial painting, and colour consultation across Sutherland Shire, Cronulla, Caringbah, Miranda, and Gymea.",
  keywords: [
    "painter Sutherland Shire",
    "painter Cronulla",
    "interior painting Sydney",
    "exterior painting",
    "deck staining",
    "colour consultation",
  ],
  openGraph: {
    title: "Brushworks Painting — Quality Painting Services | Sutherland Shire & Cronulla",
    description:
      "Brushworks Painting delivers quality interior painting, exterior painting, deck & fence staining, commercial painting, and colour consultation across Sutherland Shire and Cronulla.",
    url: siteUrl,
    siteName: "Brushworks Painting",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: `${siteUrl}/painter/hero-painting.jpg`,
        width: 1344,
        height: 768,
        alt: "Brushworks Painting — professional painter applying interior wall paint",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Brushworks Painting",
  description:
    "Brushworks Painting delivers quality interior painting, exterior painting, deck & fence staining, commercial painting, and colour consultation across Sutherland Shire, Cronulla, Caringbah, Miranda, and Gymea.",
  url: siteUrl,
  telephone: "+61 478 901 234",
  email: "info@brushworkspainting.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sutherland Shire",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  areaServed: [
    "Sutherland Shire",
    "Cronulla",
    "Caringbah",
    "Miranda",
    "Gymea",
  ],
};

export default function PainterLayout({
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
