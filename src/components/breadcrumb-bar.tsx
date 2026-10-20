import Link from "next/link";
import React from "react";

export interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface BreadcrumbBarProps {
  segments?: BreadcrumbSegment[];
  current?: string;
  routePattern?: string;
  rightSlot?: React.ReactNode;
}

export function BreadcrumbBar({
  segments,
  current = "Products",
  routePattern = "/products or /products?[query]",
  rightSlot,
}: BreadcrumbBarProps) {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-gray-500 flex-wrap">
            {segments ? (
              segments.map((seg, idx) => (
                <React.Fragment key={seg.label + idx}>
                  {idx > 0 && <span className="text-gray-300">/</span>}
                  {seg.href ? (
                    <Link
                      href={seg.href}
                      className="hover:text-gray-900 transition-colors"
                    >
                      {seg.label}
                    </Link>
                  ) : (
                    <span
                      className={
                        idx === segments.length - 1
                          ? "text-gray-700 font-medium"
                          : "text-gray-500"
                      }
                    >
                      {seg.label}
                    </span>
                  )}
                </React.Fragment>
              ))
            ) : (
              <>
                <Link
                  href="/"
                  className="hover:text-gray-900 transition-colors"
                >
                  Index
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-700 font-medium">{current}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {rightSlot ? (
              rightSlot
            ) : (
              <>
                <span className="text-gray-500">Route pattern:</span>
                <code className="px-2 py-0.5 rounded text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200">
                  {routePattern}
                </code>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
