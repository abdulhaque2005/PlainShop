import { Package } from "lucide-react";

interface PageHeaderProps {
  title?: string;
  description?: string;
  itemCount?: number;
  showBadges?: boolean;
}

export function PageHeader({
  title = "Products",
  description = "Browse minimalist everyday essentials and hardware catalog.",
  itemCount = 8,
  showBadges = true,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6 pb-2">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-950">
          {title}
        </h1>
        <p className="mt-1 text-sm text-gray-500 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      {showBadges && (
        <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-end">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 bg-white text-xs font-medium text-gray-700 shadow-2xs">
            <Package className="w-3.5 h-3.5 text-blue-600" />
            <span>{itemCount} Products</span>
          </div>
        </div>
      )}
    </div>
  );
}
