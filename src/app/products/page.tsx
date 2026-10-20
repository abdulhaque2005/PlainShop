import {
  Header,
  BreadcrumbBar,
  PageHeader,
  FilterControls,
  ProductGrid,
  SystemStatusBanner,
  Footer,
} from "@/components";
import { PRODUCTS } from "@/constants";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <BreadcrumbBar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
        <PageHeader itemCount={PRODUCTS.length} />
        <FilterControls />
        <ProductGrid products={PRODUCTS} />
        <SystemStatusBanner totalItems={PRODUCTS.length} />
      </main>

      <Footer />
    </div>
  );
}
