import Link from "next/link";
import { ArrowLeft, Settings, ShoppingBag } from "lucide-react";
import { NAV_ITEMS } from "@/constants";

interface HeaderProps {
  activePath?: string;
  showBackToStore?: boolean;
  prefixBreadcrumb?: React.ReactNode;
}

export function Header({
  activePath = "/products",
  showBackToStore = false,
  prefixBreadcrumb,
}: HeaderProps) {
  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-lg font-bold text-gray-950 tracking-tight hover:opacity-90 flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-600"></span>
              <span>PlainShop</span>
            </Link>

            {prefixBreadcrumb && (
              <div className="flex items-center text-xs text-gray-500 gap-1.5">
                {prefixBreadcrumb}
              </div>
            )}

            <nav className="hidden sm:flex items-center gap-6 text-sm ml-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  activePath === item.href ||
                  (item.href === "/products" && activePath === "/");

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={
                      isActive
                        ? "relative py-4 font-semibold text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600"
                        : "py-4 text-gray-500 hover:text-gray-900 transition-colors"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {showBackToStore && (
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Store</span>
              </Link>
            )}

            <Link
              href="/preferences"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-2xs"
            >
              <Settings className="w-3.5 h-3.5 text-gray-500" />
              <span>Preferences</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
