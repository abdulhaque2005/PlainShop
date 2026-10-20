"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

const QUICK_PATHS = [
  { label: "Electronics", href: "/browse/electronics" },
  { label: "Audio Gear", href: "/browse/electronics/audio" },
  { label: "Kitchenware", href: "/browse/home-office/kitchenware" },
  { label: "Bags & Carry", href: "/browse/apparel/bags" },
];

export function QuickPathSimulation() {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-2xs space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 font-medium text-gray-900">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Quick Department Jump</span>
        </div>

        <span className="text-gray-400 text-[11px]">
          Direct category shortcuts
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap pt-1">
        {QUICK_PATHS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="px-3.5 py-1.5 text-xs font-medium rounded-md border border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/30 bg-white transition-colors cursor-pointer"
          >
            {p.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
