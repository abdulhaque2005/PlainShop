import { Package, RefreshCw } from "lucide-react";

interface PageHeaderProps {
  title?: string;
  description?: string;
  itemCount?: number;
}

export function PageHeader({
  title = "Products",
  description = "Browse minimalist everyday essentials and hardware catalog. Clean taxonomy without promotions or advertisements.",
  itemCount = 8,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-6 pb-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-950">
          {title}
        </h1>
        <p className="mt-1 text-sm text-gray-500 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-xs font-medium text-gray-600 bg-white shadow-2xs">
          <Package className="w-3.5 h-3.5 text-indigo-500" />
          <span>{itemCount} items registered</span>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors shadow-2xs cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5 text-gray-500" />
          <span>Sync Static</span>
        </button>
      </div>
    </div>
  );
}
