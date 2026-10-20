import {
  Header,
  BreadcrumbBar,
  QuickPathSimulation,
  TaxonomyGrid,
  RouteAnatomyReference,
  PageHeader,
  FilterControls,
  ProductGrid,
  SystemStatusBanner,
  Footer,
} from "@/components";
import { TAXONOMY_CATEGORIES, PRODUCTS } from "@/constants";

interface BrowsePageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function BrowsePage({ params }: BrowsePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug || slug.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <Header activePath="/categories" />

        <BreadcrumbBar
          segments={[
            { label: "App Router" },
            { label: "indexing" },
            { label: "[[...slug]]" },
          ]}
          rightSlot={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[11px] font-mono text-blue-900">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
              <span>
                Optional Catch-All Route: /browse/[[...slug]] - Root Mode (param
                slug is undefined)
              </span>
            </div>
          }
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-950">
              Explore Product Taxonomy
            </h1>
            <p className="mt-1 text-sm text-gray-500 max-w-3xl leading-relaxed">
              Complete hierarchical catalog index. When no nested path is
              supplied to the optional catch-all route, this comprehensive category
              overview renders automatically.
            </p>
          </div>

          <QuickPathSimulation activePath="/browse" />
          <TaxonomyGrid categories={TAXONOMY_CATEGORIES} />
          <RouteAnatomyReference />
        </main>

        <Footer />
      </div>
    );
  }

  const currentCategorySlug = slug[0];
  const currentSubcategorySlug = slug[1];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      item.category.toLowerCase().replace(/\s+&?\s*/g, "-") ===
      currentCategorySlug.toLowerCase();

    if (!currentSubcategorySlug) return matchesCategory;

    return (
      matchesCategory &&
      item.subcategory.toLowerCase().replace(/\s+/g, "-") ===
        currentSubcategorySlug.toLowerCase()
    );
  });

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : PRODUCTS;

  const currentPathString = `/browse/${slug.join("/")}`;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/products" />

      <BreadcrumbBar
        segments={[
          { label: "Index", href: "/" },
          { label: "Browse", href: "/browse" },
          ...slug.map((s, idx) => ({
            label: s.charAt(0).toUpperCase() + s.slice(1),
            href: `/browse/${slug.slice(0, idx + 1).join("/")}`,
          })),
        ]}
        routePattern={currentPathString}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
        <PageHeader
          title={`${slug[0].charAt(0).toUpperCase() + slug[0].slice(1)} Catalog`}
          description={`Browsing ${slug.join(" / ")}. Showing registered catalog items.`}
          itemCount={displayProducts.length}
        />
        <FilterControls />
        <ProductGrid products={displayProducts} />
        <SystemStatusBanner
          totalItems={displayProducts.length}
          description={`Catalog filtered dynamically for route [${slug.join(", ")}].`}
        />
      </main>

      <Footer />
    </div>
  );
}
