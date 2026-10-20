import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">PlainShop</span>
            <span>·</span>
            <span>© 2025 PlainShop. All rights reserved. Minimalist everyday essentials.</span>
          </div>

          <div className="flex items-center gap-6 flex-wrap font-medium">
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-950 transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/categories"
              className="text-gray-600 hover:text-gray-950 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/preferences"
              className="text-gray-600 hover:text-gray-950 transition-colors"
            >
              Preferences
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-950 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
