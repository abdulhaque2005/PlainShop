"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sliders, Layout, Bell, Check } from "lucide-react";
import { Header, Footer } from "@/components";

export default function AccountPreferencesPage() {
  const [density, setDensity] = useState<"comfortable" | "compact">("comfortable");
  const [currency, setCurrency] = useState("USD");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [defaultSort, setDefaultSort] = useState("featured");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleReset = () => {
    setDensity("comfortable");
    setCurrency("USD");
    setEmailNotifications(true);
    setDefaultSort("featured");
    setSaveSuccess(false);
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header activePath="/preferences" />

      {/* Clean Breadcrumb Bar */}
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Preferences</span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Store</span>
          </Link>
        </div>
      </div>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-950">
            Account &amp; Preferences
          </h1>
          <p className="mt-1 text-sm text-gray-500 leading-relaxed">
            Customize your store experience, display density, and notification settings.
          </p>
        </div>

        {/* Card 1: Display Preferences */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs space-y-6">
          <div className="flex items-center gap-2 font-semibold text-gray-900 text-sm border-b border-gray-100 pb-3">
            <Layout className="w-4 h-4 text-blue-600" />
            <span>Store Display Preferences</span>
          </div>

          {/* Density */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold text-gray-900">Catalog View Density</div>
              <div className="text-xs text-gray-500 mt-0.5">
                Adjust vertical spacing and padding in product listings.
              </div>
            </div>
            <div className="inline-flex rounded-md border border-gray-200 p-0.5 bg-gray-50 shrink-0">
              <button
                type="button"
                onClick={() => setDensity("comfortable")}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  density === "comfortable"
                    ? "bg-white text-blue-600 shadow-2xs border border-blue-500/50"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                Comfortable
              </button>
              <button
                type="button"
                onClick={() => setDensity("compact")}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                  density === "compact"
                    ? "bg-white text-blue-600 shadow-2xs border border-blue-500/50"
                    : "text-gray-600 hover:text-gray-950"
                }`}
              >
                Compact
              </button>
            </div>
          </div>

          {/* Currency */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
            <div>
              <div className="text-xs font-semibold text-gray-900">Preferred Currency</div>
              <div className="text-xs text-gray-500 mt-0.5">
                Choose the default currency symbol and pricing format.
              </div>
            </div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="px-3 py-1.5 text-xs border border-gray-200 rounded-md bg-white text-gray-700 min-w-[180px] cursor-pointer"
            >
              <option value="USD">USD ($) - US Dollar</option>
              <option value="EUR">EUR (€) - Euro</option>
              <option value="GBP">GBP (£) - British Pound</option>
            </select>
          </div>

          {/* Default sort */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
            <div>
              <div className="text-xs font-semibold text-gray-900">Default Product Sorting</div>
              <div className="text-xs text-gray-500 mt-0.5">
                Initial order applied when browsing collections.
              </div>
            </div>
            <select
              value={defaultSort}
              onChange={(e) => setDefaultSort(e.target.value)}
              className="px-3 py-1.5 text-xs border border-gray-200 rounded-md bg-white text-gray-700 min-w-[180px] cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>

        {/* Card 2: Notifications */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-2xs space-y-6">
          <div className="flex items-center gap-2 font-semibold text-gray-900 text-sm border-b border-gray-100 pb-3">
            <Bell className="w-4 h-4 text-blue-600" />
            <span>Notification &amp; Privacy</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold text-gray-900">Order &amp; Shipping Updates</div>
              <div className="text-xs text-gray-500 mt-0.5">
                Receive email notifications when an order status changes or ships.
              </div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={emailNotifications}
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ${
                emailNotifications ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  emailNotifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          {saveSuccess && (
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-medium mr-2">
              <Check className="w-4 h-4" />
              Preferences saved successfully!
            </span>
          )}

          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 text-xs font-medium rounded-md border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors shadow-2xs cursor-pointer"
          >
            Reset to Defaults
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 text-xs font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-2xs cursor-pointer"
          >
            Save Preferences
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
