import { Header, BreadcrumbBar, Footer } from "@/components";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/about" />

      <BreadcrumbBar
        segments={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            About PlainShop
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            PlainShop is a minimalist e-commerce store offering carefully
            curated everyday essentials. We believe in clean design,
            quality products, and a straightforward shopping experience.
          </p>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 mt-6 space-y-3">
            <h2 className="text-sm font-semibold text-gray-900">
              What We Offer
            </h2>
            <ul className="text-xs text-gray-600 space-y-2 list-disc list-inside">
              <li>Curated selection of minimalist everyday essentials</li>
              <li>Premium electronics and accessories</li>
              <li>Home and office products for modern workspaces</li>
              <li>Sustainable apparel and lifestyle goods</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

