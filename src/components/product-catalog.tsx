"use client";

import { useState, useMemo } from "react";
import { Search, RotateCcw } from "lucide-react";
import { Product } from "@/types";
import { CATEGORY_FILTERS, SORT_OPTIONS } from "@/constants";
import { ProductCard } from "./product-card";

interface ProductCatalogProps {
  products: Product[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [selectedSort, setSelectedSort] = useState("featured");

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.subcategory.toLowerCase().includes(query) ||
          product.tagCode.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (activeCategoryId !== "all") {
      result = result.filter((product) => {
        switch (activeCategoryId) {
          case "electronics":
            return product.category === "Electronics";
          case "home-office":
            return product.category === "Home & Office";
          case "apparel":
            return product.category === "Apparel";
          case "accessories":
            return product.category === "Accessories";
          default:
            return true;
        }
      });
    }

    // Sort
    switch (selectedSort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case "featured":
      default:
        break;
    }

    return result;
  }, [products, searchQuery, activeCategoryId, selectedSort]);

  const handleReset = () => {
    setSearchQuery("");
    setActiveCategoryId("all");
    setSelectedSort("featured");
  };

  return (
    <div className="space-y-6">
      {/* Filter Controls */}
      <div className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, brands, or categories..."
              className="w-full pl-9 pr-12 py-2 text-xs text-gray-900 bg-white border border-gray-200 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />

            <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
              <kbd className="inline-flex items-center px-1.5 py-0.5 border border-gray-200 rounded text-[10px] font-medium font-mono text-gray-400 bg-gray-50">
                ⌘K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 font-medium">Sort by:</span>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="py-1.5 pl-2.5 pr-8 text-xs text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-gray-400" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-gray-100">
          <span className="text-xs font-medium text-gray-500 mr-1">Filter:</span>
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={
                  isActive
                    ? "px-3 py-1 text-xs font-medium rounded-md border border-blue-600 text-blue-600 bg-blue-50/40 cursor-pointer"
                    : "px-3 py-1 text-xs font-medium rounded-md border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 bg-white transition-colors cursor-pointer"
                }
              >
                {cat.name} ({cat.count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Grid */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="w-full rounded-lg border border-gray-200 bg-white p-12 text-center">
          <p className="text-sm text-gray-500">
            No products found matching your search criteria.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-gray-200 text-xs font-medium text-gray-600 bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-gray-400" />
            <span>Clear filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
