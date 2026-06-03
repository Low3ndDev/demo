import Link from "next/link";

const trades = [
  {
    name: "Volt Electrical",
    href: "/electrical",
    description:
      "Licensed electrician serving Sydney's inner west. New wiring, renovations, emergency repairs, and commercial fit-outs.",
    color: "#2563EB",
    icon: "⚡",
  },
  {
    name: "Flow Plumbing",
    href: "/plumbing",
    description:
      "Trusted local plumber in Liverpool & South Western Sydney. General plumbing, hot water, blocked drains, and gas fitting.",
    color: "#0D9488",
    icon: "🔧",
  },
  {
    name: "Shield Roofing",
    href: "/roofing",
    description:
      "Professional roofing services in Wollongong & Illawarra. Roof repairs, restoration, guttering, and Colorbond roofing.",
    color: "#EA580C",
    icon: "🏠",
  },
  {
    name: "Brushworks Painting",
    href: "/painter",
    description:
      "Quality painting services across Sutherland Shire & Cronulla. Interior, exterior, deck staining, and colour consultation.",
    color: "#C2410C",
    icon: "🎨",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Prysmn
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Trade website templates — built for Australian trades.
          </p>
        </div>
      </header>

      {/* Trade Grid */}
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {trades.map((trade) => (
              <Link
                key={trade.href}
                href={trade.href}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-lg"
                    style={{ backgroundColor: trade.color + "15" }}
                  >
                    {trade.icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {trade.name}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 mb-4">
                  {trade.description}
                </p>
                <span
                  className="inline-flex items-center text-sm font-medium"
                  style={{ color: trade.color }}
                >
                  View Template
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-auto">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Prysmn. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
