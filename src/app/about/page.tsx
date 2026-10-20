import { Header, BreadcrumbBar, Footer } from "@/components";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/about" />

      <BreadcrumbBar
        segments={[{ label: "Index", href: "/" }, { label: "About" }]}
        routePattern="/about"
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            About PlainShop
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            PlainShop is a reference e-commerce architecture designed to
            demonstrate clean Next.js App Router patterns, static generation,
            clean typography, and minimalist UI design.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 mt-6 space-y-3">
            <h2 className="text-sm font-semibold text-gray-900">
              Architecture Highlights
            </h2>
            <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside">
              <li>App Router with nested and optional catch-all routes</li>
              <li>Strongly-typed data structures in dedicated types modules</li>
              <li>Centralized constants for catalog taxonomy and products</li>
              <li>Pure Tailwind CSS layout matching minimalist design</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
