import Link from "next/link";
import { Cpu, Lamp, Shirt, Briefcase, Package, ArrowRight } from "lucide-react";
import { TaxonomyCategory } from "@/types";

interface TaxonomyCardProps {
  category: TaxonomyCategory;
}

function TaxonomyIcon({ icon }: { icon: TaxonomyCategory["icon"] }) {
  const className = "w-4 h-4 text-gray-700";

  switch (icon) {
    case "cpu":
      return <Cpu className={className} />;
    case "lamp":
      return <Lamp className={className} />;
    case "shirt":
      return <Shirt className={className} />;
    case "briefcase":
      return <Briefcase className={className} />;
    default:
      return <Package className={className} />;
  }
}

export function TaxonomyCard({ category }: TaxonomyCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <TaxonomyIcon icon={category.icon} />
            <h3 className="text-base font-semibold text-gray-950">
              {category.name}
            </h3>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-gray-200 text-xs text-gray-500 bg-white">
            <Package className="w-3 h-3 text-gray-400" />
            <span>{category.itemCount} Items</span>
          </span>
        </div>

        <p className="mt-2 text-xs text-gray-500 leading-relaxed">
          {category.description}
        </p>

        <div className="mt-5">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
            SUBCATEGORIES
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            {category.subcategories.map((sub) => (
              <span
                key={sub}
                className="px-2.5 py-1 text-xs text-gray-700 bg-gray-50 border border-gray-200 rounded-md"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
        <span className="font-mono text-gray-400">
          Slug: [&apos;{category.slug}&apos;]
        </span>

        <Link
          href={`/browse/${category.slug}`}
          className="inline-flex items-center gap-1 font-mono text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span>/browse/{category.slug}</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}
