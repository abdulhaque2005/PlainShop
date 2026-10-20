"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Star,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { Product } from "@/types";

interface ProductDetailViewProps {
  product: Product;
  resolvedSlug: string;
}

export function ProductDetailView({
  product,
}: ProductDetailViewProps) {
  const [selectedColor, setSelectedColor] = useState("matte-slate");
  const [selectedConnectivity, setSelectedConnectivity] = useState("std-bt53");
  const [selectedCushion, setSelectedCushion] = useState("mem-foam");
  const [activeThumbnail, setActiveThumbnail] = useState<"front" | "folded" | "profile">("front");
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  // Dynamic price calculation
  let priceAddon = 0;
  if (selectedConnectivity === "studio-dac") priceAddon += 40;
  if (selectedCushion === "cooling-gel") priceAddon += 15;
  const totalPrice = (product.price + priceAddon) * quantity;

  const handleAddToCart = () => {
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Clean Breadcrumb Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs pb-3 border-b border-gray-200">
        <div className="flex items-center gap-1.5 text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-gray-900">
            Products
          </Link>
          <span>/</span>
          <span className="hover:text-gray-900">{product.category}</span>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{product.title}</span>
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to products</span>
        </Link>
      </div>

      {/* Main Product Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Image & Specifications */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Image */}
          <div className="relative rounded-xl border border-gray-200 bg-[#f7f7f7] overflow-hidden aspect-[4/3] shadow-xs">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-gray-200 text-xs font-medium text-gray-700 shadow-2xs">
              Original 1:1 Scale
            </div>
          </div>

          {/* 3 Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "front", label: "Front View", img: product.image },
              { id: "folded", label: "Compact Folded", img: product.image },
              { id: "profile", label: "Profile Angle", img: product.image },
            ].map((thumb) => {
              const isActive = activeThumbnail === thumb.id;
              return (
                <button
                  key={thumb.id}
                  type="button"
                  onClick={() => setActiveThumbnail(thumb.id as any)}
                  className={`group relative rounded-lg border p-1 text-left transition-all ${
                    isActive
                      ? "border-blue-600 ring-2 ring-blue-500/20 bg-blue-50/20"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded bg-gray-100 overflow-hidden mb-1">
                    <Image
                      src={thumb.img}
                      alt={thumb.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between px-1 text-[11px] font-medium text-gray-700">
                    <span>{thumb.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Physical Specifications Card */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-2xs space-y-3">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
              TECHNICAL SPECIFICATIONS
            </span>
            <div className="divide-y divide-gray-100 text-xs">
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-500">Chassis Transducer</span>
                <span className="text-gray-900 font-medium">40mm Dynamic Neodymium</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-500">Total Net Mass</span>
                <span className="text-gray-900 font-medium">242 g (8.53 oz)</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-500">Frequency Response</span>
                <span className="text-gray-900 font-medium">15 Hz – 24,000 Hz</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-500">Passive Noise Attenuation</span>
                <span className="text-gray-900 font-medium">-22 dB @ 1 kHz</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Price, Options, Purchase Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="text-xs text-gray-500 mb-1.5">
              <span>{product.category} / {product.subcategory}</span>
              <span className="mx-2">·</span>
              <span>Brand: <strong className="text-gray-800">{product.brand}</strong></span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-950">
              {product.title}
            </h1>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-gray-950 font-mono">
                ${totalPrice.toFixed(2)}
              </span>
              <span className="text-xs text-gray-500">
                USD · Taxes included
              </span>
            </div>

            {/* Badges */}
            <div className="mt-3 flex items-center gap-2.5 flex-wrap text-xs">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-gray-700">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>4.8 / 5.0 (128 reviews)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-gray-200 bg-white text-gray-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>In Stock (Ready to ship)</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5 text-xs text-gray-600 leading-relaxed border-t border-b border-gray-100 py-4">
            High-fidelity closed-back wireless headphones engineered with precision 40mm dynamic drivers, low-latency Bluetooth 5.3 connection, and 38-hour battery longevity. Designed for distraction-free listening and long work sessions.
          </div>

          {/* Configurable Parameters */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-2xs space-y-4">
            <h3 className="font-semibold text-gray-900 text-sm">
              Custom Configurations
            </h3>

            {/* Param 01: Color */}
            <div className="space-y-2 pt-1 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-gray-700">Finish &amp; Color</span>
                <span className="text-gray-500 capitalize">{selectedColor.replace("-", " ")}</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "matte-slate", label: "Matte Slate" },
                  { id: "chalk-white", label: "Chalk White" },
                  { id: "midnight-navy", label: "Midnight Navy" },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedColor(c.id)}
                    className={`px-3 py-2 text-xs rounded-md border text-left font-medium transition-all flex items-center justify-between ${
                      selectedColor === c.id
                        ? "border-blue-600 bg-blue-50/40 text-blue-900 shadow-2xs"
                        : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                    }`}
                  >
                    <span>{c.label}</span>
                    {selectedColor === c.id && <Check className="w-3.5 h-3.5 text-blue-600" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Param 02: Connectivity Architecture */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-gray-700">Connectivity</span>
                <span className="text-gray-500">
                  {selectedConnectivity === "std-bt53" ? "Standard Wireless" : "Studio + DAC"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "std-bt53", label: "Standard Wireless", extra: "" },
                  { id: "studio-dac", label: "Studio Wireless + DAC", extra: "+$40" },
                ].map((conn) => (
                  <button
                    key={conn.id}
                    type="button"
                    onClick={() => setSelectedConnectivity(conn.id)}
                    className={`px-3 py-2 text-xs rounded-md border text-left font-medium transition-all flex items-center justify-between ${
                      selectedConnectivity === conn.id
                        ? "border-blue-600 bg-blue-50/40 text-blue-900 shadow-2xs"
                        : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                    }`}
                  >
                    <span>{conn.label}</span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-gray-500">
                      {conn.extra}
                      {selectedConnectivity === conn.id && <Check className="w-3.5 h-3.5 text-blue-600" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Param 03: Ear Cushion */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-gray-700">Ear Cushion Seal</span>
                <span className="text-gray-500">
                  {selectedCushion === "mem-foam" ? "Memory Foam" : "Cooling Gel"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "mem-foam", label: "Memory Foam", extra: "" },
                  { id: "cooling-gel", label: "Cooling Gel", extra: "+$15" },
                ].map((cush) => (
                  <button
                    key={cush.id}
                    type="button"
                    onClick={() => setSelectedCushion(cush.id)}
                    className={`px-3 py-2 text-xs rounded-md border text-left font-medium transition-all flex items-center justify-between ${
                      selectedCushion === cush.id
                        ? "border-blue-600 bg-blue-50/40 text-blue-900 shadow-2xs"
                        : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                    }`}
                  >
                    <span>{cush.label}</span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-gray-500">
                      {cush.extra}
                      {selectedCushion === cush.id && <Check className="w-3.5 h-3.5 text-blue-600" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity & Add to Cart Actions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-lg border border-gray-200 bg-white shadow-2xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-950 font-semibold"
                >
                  -
                </button>
                <span className="px-3 py-2 text-xs font-semibold text-gray-900 min-w-[32px] text-center font-mono">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-950 font-semibold"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag • ${totalPrice.toFixed(2)}</span>
              </button>
            </div>

            {addedToast && (
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-xs text-emerald-800 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Added to your shopping bag!</span>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-gray-400" />
              <span>Free Express Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-gray-400" />
              <span>30-Day Easy Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gray-400" />
              <span>2-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
