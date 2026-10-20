import Link from "next/link";
import { FOOTER_LINKS } from "@/constants";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">PlainShop</span>
            <span>·</span>
            <span>© 2025 PlainShop. Educational Reference Architecture.</span>
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
