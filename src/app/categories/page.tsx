import {
  Header,
  BreadcrumbBar,
  QuickPathSimulation,
  TaxonomyGrid,
  Footer,
} from "@/components";
import { TAXONOMY_CATEGORIES } from "@/constants";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/categories" />

      <BreadcrumbBar
        segments={[
          { label: "Home", href: "/" },
          { label: "Categories" },
        ]}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Explore Categories
          </h1>
          <p className="mt-1 text-sm text-gray-500 max-w-2xl leading-relaxed">
            Browse our complete catalog organized into clean, focused everyday essentials categories.
          </p>
        </div>

        <QuickPathSimulation />

        <TaxonomyGrid categories={TAXONOMY_CATEGORIES} />
      </main>

      <Footer />
    </div>
  );
}
