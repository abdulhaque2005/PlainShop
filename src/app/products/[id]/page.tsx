import { notFound } from "next/navigation";
import { Header, Footer } from "@/components";
import { ProductDetailView } from "@/components/product-detail-view";
import { PRODUCTS } from "@/constants";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;

  // Find product by slug or id
  const product = PRODUCTS.find(
    (p) => p.slug === id || p.id === id
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/products" />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ProductDetailView product={product} resolvedSlug={id} />
      </main>

      <Footer />
    </div>
  );
}
