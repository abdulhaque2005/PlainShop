import Link from "next/link";
import Image from "next/image";
import { Package, Grid } from "lucide-react";
import { Header, Footer } from "@/components";

export default function NotFound() {
  const suggestedProducts = [
    {
      title: "Wireless Headphones",
      path: "/products/wireless-headphones",
      image: "/images/products/headphones.jpg",
      price: "$149.00",
    },
    {
      title: "Mechanical Keyboard",
      path: "/products/mechanical-keyboard",
      image: "/images/products/keyboard.jpg",
      price: "$119.00",
    },
    {
      title: "Minimal Desk Lamp",
      path: "/products/minimal-desk-lamp",
      image: "/images/products/lamp.jpg",
      price: "$68.00",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/products" />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 my-10">
        <div className="max-w-2xl w-full rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-xs space-y-8">
          {/* Header & Badges */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-700">
              <span>404 Error</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950">
              Page or product not found
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
              We couldn&apos;t find the page or product you were looking for. It may have been moved, renamed, or is currently unavailable.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gray-950 text-white text-xs font-semibold hover:bg-gray-800 transition-colors shadow-2xs"
            >
              <Package className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>

            <Link
              href="/categories"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-colors shadow-2xs"
            >
              <Grid className="w-4 h-4" />
              <span>Browse All Categories</span>
            </Link>
          </div>

          {/* Suggested Valid Products */}
          <div className="pt-6 border-t border-gray-100 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-gray-900 tracking-wider text-[11px] uppercase">
                POPULAR PRODUCTS YOU MIGHT LIKE
              </span>
              <Link href="/products" className="text-blue-600 hover:text-blue-700 font-medium">
                View catalog &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {suggestedProducts.map((p) => (
                <Link
                  key={p.path}
                  href={p.path}
                  className="group rounded-xl border border-gray-200 p-2.5 bg-white hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div className="relative w-full aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden mb-2">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="200px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 group-hover:text-blue-600 truncate">
                      {p.title}
                    </h4>
                    <span className="text-xs font-semibold font-mono text-gray-700 mt-1 block">
                      {p.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
