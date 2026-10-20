import Link from "next/link";
import { NAV_ITEMS } from "@/constants";

interface HeaderProps {
  activePath?: string;
  storeLabel?: string;
}

export function Header({
  activePath = "/products",
  storeLabel = "Practice Store",
}: HeaderProps) {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-lg font-bold text-gray-950 tracking-tight hover:opacity-90"
            >
              PlainShop
            </Link>

            <nav className="flex items-center gap-6 text-sm">
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

          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 cursor-default select-none shadow-2xs">
              {storeLabel}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
