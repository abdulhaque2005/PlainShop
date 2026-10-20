import { Database } from "lucide-react";

interface SystemStatusBannerProps {
  totalItems?: number;
  cacheStatus?: string;
  renderTime?: string;
  description?: string;
}

export function SystemStatusBanner({
  totalItems = 8,
  cacheStatus = "HIT",
  renderTime = "14ms",
  description = "Catalog rendered from normalized in-memory dataset without dynamic CMS dependencies.",
}: SystemStatusBannerProps) {
  return (
    <div className="w-full rounded-lg border border-blue-100 bg-[#f8faff] p-3.5 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-gray-700">
          <Database className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong className="font-semibold text-gray-900">
              Static Schema Validation:
            </strong>{" "}
            {description}
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] text-gray-500 tracking-wider shrink-0">
          <span>ITEMS: {totalItems}</span>
          <span className="text-gray-300">|</span>
          <span>CACHE: {cacheStatus}</span>
          <span className="text-gray-300">|</span>
          <span>RENDER: {renderTime}</span>
        </div>
      </div>
    </div>
  );
}
