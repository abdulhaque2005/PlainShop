import { NavItem, FooterLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Products", href: "/products", active: true },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
];

export const FOOTER_LINKS: FooterLink[] = [
  { label: "All Products", href: "/products" },
  { label: "Taxonomy Index", href: "/taxonomy" },
  { label: "Route Anatomy ([...slug])", href: "/docs/routes" },
  { label: "Account Group ((account))", href: "/account" },
];
