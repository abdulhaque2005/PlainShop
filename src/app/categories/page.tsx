import {
  Header,
  BreadcrumbBar,
  QuickPathSimulation,
  TaxonomyGrid,
  RouteAnatomyReference,
  Footer,
} from "@/components";
import { TAXONOMY_CATEGORIES } from "@/constants";

export default function CategoriesPage() {
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
            Complete hierarchical catalog index. When no nested path is supplied
            to the optional catch-all route, this comprehensive category overview
            renders automatically.
          </p>
        </div>

        <QuickPathSimulation />
        <TaxonomyGrid categories={TAXONOMY_CATEGORIES} />
        <RouteAnatomyReference />
      </main>

      <Footer />
    </div>
  );
}
