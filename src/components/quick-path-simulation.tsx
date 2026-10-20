"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import { SIMULATION_PATHS } from "@/constants";
import { RouteSimulationPath } from "@/types";

interface QuickPathSimulationProps {
  paths?: RouteSimulationPath[];
  activePath?: string;
  onPathSelect?: (path: string) => void;
}

export function QuickPathSimulation({
  paths = SIMULATION_PATHS,
  activePath = "/browse/electronics",
  onPathSelect,
}: QuickPathSimulationProps) {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-2xs space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 font-medium text-gray-900">
          <Terminal className="w-3.5 h-3.5 text-gray-500" />
          <span>Quick Path Simulation</span>
        </div>

        <span className="text-gray-400 text-[11px]">
          Simulate Next.js router transitions
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap pt-1">
        {paths.map((p) => {
          const isActive = p.href === activePath || p.active;

          return (
            <Link
              key={p.href}
              href={p.href}
              onClick={() => onPathSelect?.(p.href)}
              className={
                isActive
                  ? "px-3 py-1.5 text-xs font-mono rounded-md border border-blue-500 text-blue-600 bg-blue-50/50 transition-colors cursor-pointer"
                  : "px-3 py-1.5 text-xs font-mono rounded-md border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 bg-white transition-colors cursor-pointer"
              }
            >
              {p.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
