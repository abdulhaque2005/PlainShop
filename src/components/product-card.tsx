import Link from "next/link";
import Image from "next/image";
import {
  Headphones,
  Keyboard,
  Lightbulb,
  Coffee,
  ShoppingBag,
  Sparkles,
  Laptop,
  BookOpen,
  Tag,
  ArrowRight,
} from "lucide-react";
import { Product, ProductTagIcon } from "@/types";

interface ProductCardProps {
  product: Product;
}

function ProductTagBadgeIcon({ icon }: { icon: ProductTagIcon }) {
  const className = "w-3 h-3 text-gray-700";

  switch (icon) {
    case "headphones":
      return <Headphones className={className} />;
    case "keyboard":
      return <Keyboard className={className} />;
    case "lamp":
      return <Lightbulb className={className} />;
    case "coffee":
      return <Coffee className={className} />;
    case "bag":
      return <ShoppingBag className={className} />;
    case "beanie":
      return <Sparkles className={className} />;
    case "stand":
      return <Laptop className={className} />;
    case "notebook":
      return <BookOpen className={className} />;
    default:
      return <Tag className={className} />;
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col rounded-lg border border-gray-200 bg-white overflow-hidden transition-all duration-200 hover:shadow-md hover:border-gray-300">
      <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Tag badge matching reference image */}
        <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/90 backdrop-blur-xs border border-gray-200/80 shadow-2xs">
          <ProductTagBadgeIcon icon={product.tagIcon} />
          <span className="text-[11px] font-mono font-medium text-gray-700">
            {product.tagCode}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
          <span>
            {product.category} / {product.subcategory}
          </span>
          <span className="font-mono text-gray-400">{product.sku}</span>
        </div>

        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Brand: <span className="text-gray-700">{product.brand}</span>
        </p>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-gray-950 font-mono">
            {product.formattedPrice}
          </span>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>View product</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
