import Link from "next/link";
import React from "react";

export interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface BreadcrumbBarProps {
  segments?: BreadcrumbSegment[];
  current?: string;
  rightContent?: React.ReactNode;
}

export function BreadcrumbBar({
  segments,
  current = "Products",
  rightContent,
}: BreadcrumbBarProps) {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between text-xs gap-4 flex-wrap">
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
                  Home
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-700 font-medium">{current}</span>
              </>
            )}
          </div>

          {rightContent && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              {rightContent}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
