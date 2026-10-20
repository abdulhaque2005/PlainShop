import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Layers, SlidersHorizontal } from "lucide-react";
import { Header, Footer } from "@/components";

interface CategoryCatchAllProps {
  params: Promise<{ slug: string[] }>;
}

interface HeadphoneProduct {
  id: string;
  sku: string;
  title: string;
  brand: string;
  price: string;
  image: string;
  slug: string;
  badges: string[];
  spec: string;
  type: string;
}

const HEADPHONE_PRODUCTS: HeadphoneProduct[] = [
  {
    id: "hp-1",
    sku: "SKU-7041",
    title: "Wireless Headphones",
    brand: "SonicCraft",
    price: "$149.00",
    image: "/images/products/headphones.jpg",
    slug: "wireless-headphones",
    badges: ["Closed-back ANC", "Bluetooth 5.3"],
    spec: "40mm Neodymium",
    type: "over-ear",
  },
  {
    id: "hp-2",
    sku: "SKU-8922",
    title: "Open-Back Studio Monitors",
    brand: "SonicCraft",
    price: "$199.00",
    image: "/images/products/headphones.jpg",
    slug: "open-back-studio-monitors",
    badges: ["Reference mixing", "250 Ohm"],
    spec: "Diffuse-field Eq",
    type: "over-ear",
  },
  {
    id: "hp-3",
    sku: "SKU-3118",
    title: "True Wireless Earbuds",
    brand: "SonicCraft",
    price: "$89.00",
    image: "/images/products/headphones.jpg",
    slug: "true-wireless-earbuds",
    badges: ["IPX5 water resistance", "28h Battery"],
    spec: "Dual Beamforming",
    type: "in-ear",
  },
  {
    id: "hp-4",
    sku: "SKU-9504",
    title: "Planar Magnetic Cans",
    brand: "AudioPhonic",
    price: "$289.00",
    image: "/images/products/headphones.jpg",
    slug: "planar-magnetic-cans",
    badges: ["Audiophile grade", "Ultra-thin ribbon"],
    spec: "5Hz - 50kHz Flat",
    type: "over-ear",
  },
];

export default async function CategoryCatchAllPage({
  params,
}: CategoryCatchAllProps) {
  const { slug } = await params;
  const currentCategory = slug[slug.length - 1];
  const formattedCategory =
    currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/categories" />

      {/* Clean Breadcrumb Bar */}
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-gray-900">
              Categories
            </Link>
            {slug.map((segment, idx) => (
              <span key={segment} className="flex items-center gap-1.5">
                <span>/</span>
                <span
                  className={
                    idx === slug.length - 1
                      ? "text-gray-900 font-semibold capitalize"
                      : "text-gray-600 hover:text-gray-900 capitalize"
                  }
                >
                  {segment}
                </span>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-600">
            <Link
              href="/categories"
              className="inline-flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Categories</span>
            </Link>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            {/* Category Navigation Hierarchy */}
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 font-semibold text-gray-900 text-xs">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Department Hierarchy</span>
              </div>

              <div className="space-y-2 text-xs pt-1">
                <div className="flex items-center justify-between text-gray-600 font-medium">
                  <span>Electronics</span>
                  <span className="text-[11px] text-gray-400">14 items</span>
                </div>
                <div className="flex items-center justify-between pl-3 text-gray-600">
                  <span>└ Audio</span>
                  <span className="text-[11px] text-gray-400">8 items</span>
                </div>
                <div className="flex items-center justify-between pl-6 py-1 px-2.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
                  <span>└ Headphones</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider">Active</span>
                </div>
              </div>
            </div>

            {/* Quick Filter Attributes */}
            <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-2xs space-y-3 text-xs">
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                <span>Filter by Type</span>
              </div>

              <div className="space-y-2 pt-1 text-gray-600">
                <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600" />
                  <span>Over-Ear Headphones (2)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600" />
                  <span>In-Ear Earbuds (1)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:text-gray-900">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600" />
                  <span>Planar Magnetic (1)</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="lg:col-span-9 space-y-6">
            <div>
              <div className="text-xs text-gray-500 mb-1 capitalize">
                {slug.join(" / ")}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-950">
                {formattedCategory}
              </h1>
              <p className="mt-1.5 text-sm text-gray-600 max-w-2xl leading-relaxed">
                Acoustic transducers and premium audio equipment engineered for pristine fidelity and enduring comfort.
              </p>
            </div>

            {/* Filter by leaf subdivision */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-gray-500">Filter subdivision:</span>
              <div className="flex items-center gap-2 flex-wrap">
                {["Over-Ear (4)", "On-Ear (2)", "In-Ear Monitors (3)", "Wireless DACs (2)"].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="px-3 py-1.5 rounded-md border border-gray-200 bg-white text-xs font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort bar */}
            <div className="flex items-center justify-between pt-2 text-xs">
              <span className="text-gray-500">
                Showing <strong className="text-gray-900">{HEADPHONE_PRODUCTS.length}</strong> products
              </span>

              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Sort:</span>
                <select className="px-2.5 py-1.5 text-xs border border-gray-200 rounded-md bg-white text-gray-700 cursor-pointer">
                  <option>Featured</option>
                  <option>Alphabetical (A-Z)</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* 4 Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {HEADPHONE_PRODUCTS.map((prod) => (
                <article
                  key={prod.id}
                  className="rounded-lg border border-gray-200 bg-white overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full bg-gray-100">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-gray-200 text-[10px] font-mono text-gray-700 shadow-2xs">
                      {prod.sku}
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{prod.brand}</span>
                      <span className="font-mono font-bold text-gray-900 text-sm">
                        {prod.price}
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-950 text-sm">
                      {prod.title}
                    </h3>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      {prod.badges.map((b) => (
                        <span
                          key={b}
                          className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-gray-600 border border-gray-200"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="text-gray-400 font-mono text-[11px]">{prod.spec}</span>
                      <Link
                        href={`/products/${prod.slug}`}
                        className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700"
                      >
                        <span>View product</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
