import { TaxonomyCategory } from "@/types";
import { TaxonomyCard } from "./taxonomy-card";

interface TaxonomyGridProps {
  categories: TaxonomyCategory[];
}

export function TaxonomyGrid({ categories }: TaxonomyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {categories.map((category) => (
        <TaxonomyCard key={category.id} category={category} />
      ))}
    </div>
  );
}
