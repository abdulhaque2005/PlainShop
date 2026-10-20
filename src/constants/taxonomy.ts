import { TaxonomyCategory, RouteSimulationPath, RoutePatternRow } from "@/types";

export const TAXONOMY_CATEGORIES: TaxonomyCategory[] = [
  {
    id: "electronics",
    name: "Electronics",
    icon: "cpu",
    itemCount: 14,
    description:
      "Engineered hardware modules across computing, precise acoustic transducers, and functional peripheral work surfaces.",
    subcategories: ["Audio", "Computing", "Peripherals", "Accessories"],
    slug: "electronics",
  },
  {
    id: "home-office",
    name: "Home & Office",
    icon: "lamp",
    itemCount: 12,
    description:
      "Ergonomic timber and aluminum workspace setups, uniform optical illumination fixtures, and storage organizers.",
    subcategories: ["Furniture", "Lighting", "Kitchenware", "Organization"],
    slug: "home-office",
  },
  {
    id: "apparel",
    name: "Apparel",
    icon: "shirt",
    itemCount: 8,
    description:
      "Minimalist weatherproof shells, unbranded natural heavyweight cotton staples, and technical transit carriers.",
    subcategories: ["Essentials", "Headwear", "Bags", "Outerwear"],
    slug: "apparel",
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: "briefcase",
    itemCount: 6,
    description:
      "Vegetable-tanned folio sleeves, grid-lined technical notebooks, and high-density desk blotters.",
    subcategories: ["Leather Goods", "Stationery", "Desk Mats"],
    slug: "accessories",
  },
];

export const SIMULATION_PATHS: RouteSimulationPath[] = [
  { label: "/browse/electronics", href: "/browse/electronics", active: true },
  { label: "/browse/electronics/audio", href: "/browse/electronics/audio" },
  {
    label: "/browse/home-office/kitchenware",
    href: "/browse/home-office/kitchenware",
  },
  { label: "/browse/apparel/bags", href: "/browse/apparel/bags" },
];

export const ROUTE_PATTERN_ROWS: RoutePatternRow[] = [
  {
    urlPattern: "/browse",
    resolvedParams: "undefined",
    renderedView: "Root Category Matrix",
    isPrimary: true,
  },
  {
    urlPattern: "/browse/electronics",
    resolvedParams: "['electronics']",
    renderedView: "Category Product View",
  },
  {
    urlPattern: "/browse/audio/speakers",
    resolvedParams: "['audio', 'speakers']",
    renderedView: "Filtered Subtree",
  },
];
