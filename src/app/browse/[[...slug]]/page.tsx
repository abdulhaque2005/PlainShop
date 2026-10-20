import CategoryCatchAllPage from "../../categories/[...slug]/page";
import CategoriesPage from "../../categories/page";

interface BrowseCatchAllProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function BrowseCatchAllPage({
  params,
}: BrowseCatchAllProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug || slug.length === 0) {
    return <CategoriesPage />;
  }

  return <CategoryCatchAllPage params={Promise.resolve({ slug })} />;
}
