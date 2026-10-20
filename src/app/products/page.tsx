import {
  Header,
  BreadcrumbBar,
  PageHeader,
  ProductCatalog,
  Footer,
} from "@/components";
import { PRODUCTS } from "@/constants";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/products" />

      <BreadcrumbBar
        segments={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
        <PageHeader
          title="Products"
          description="Browse minimalist everyday essentials and hardware catalog."
          itemCount={PRODUCTS.length}
        />

        <ProductCatalog products={PRODUCTS} />
      </main>

      <Footer />
    </div>
  );
}
