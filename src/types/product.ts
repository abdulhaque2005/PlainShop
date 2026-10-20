export type ProductTagIcon =
  | "headphones"
  | "keyboard"
  | "lamp"
  | "coffee"
  | "bag"
  | "beanie"
  | "stand"
  | "notebook";

export interface Product {
  id: string;
  sku: string;
  tagCode: string;
  tagIcon: ProductTagIcon;
  title: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  formattedPrice: string;
  image: string;
  slug: string;
}

export interface CategoryFilterItem {
  id: string;
  name: string;
  count: number;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface TaxonomyCategory {
  id: string;
  name: string;
  icon: "cpu" | "lamp" | "shirt" | "briefcase";
  itemCount: number;
  description: string;
  subcategories: string[];
  slug: string;
}

export interface RouteSimulationPath {
  label: string;
  href: string;
  active?: boolean;
}

export interface RoutePatternRow {
  urlPattern: string;
  resolvedParams: string;
  renderedView: string;
  isPrimary?: boolean;
}
