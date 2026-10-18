// Mock Shopify API for frontend-only storefront
// Replace these implementations with your own backend API calls

import { cacheLife, cacheTag } from "next/cache";
import {
  Cart,
  CartItem,
  Collection,
  Menu,
  Page,
  Product,
} from "./types";

// Mock product data
const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    title: "Premium Wireless Headphones",
    handle: "premium-wireless-headphones",
    description: "High-quality wireless headphones with noise cancellation",
    descriptionHtml:
      "<p>Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort design.</p>",
    availableForSale: true,
    priceRange: {
      maxVariantPrice: { amount: "299.99", currencyCode: "USD" },
      minVariantPrice: { amount: "199.99", currencyCode: "USD" },
    },
    options: [{ id: "opt_1", name: "Color", values: ["Black", "Silver"] }],
    variants: [
      {
        id: "var_1",
        title: "Black",
        availableForSale: true,
        price: { amount: "299.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Color", value: "Black" }],
      },
      {
        id: "var_2",
        title: "Silver",
        availableForSale: true,
        price: { amount: "299.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Color", value: "Silver" }],
      },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
        altText: "Premium Wireless Headphones",
        width: 500,
        height: 500,
      },
    ],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      altText: "Premium Wireless Headphones",
      width: 500,
      height: 500,
    },
    seo: {
      title: "Premium Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
    },
    tags: ["audio", "headphones"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_2",
    title: "Minimalist Watch",
    handle: "minimalist-watch",
    description: "Sleek minimalist design with smart features",
    descriptionHtml:
      "<p>A sophisticated minimalist timepiece combining elegant design with smart notifications and fitness tracking.</p>",
    availableForSale: true,
    priceRange: {
      maxVariantPrice: { amount: "199.99", currencyCode: "USD" },
      minVariantPrice: { amount: "149.99", currencyCode: "USD" },
    },
    options: [{ id: "opt_2", name: "Strap", values: ["Black Leather", "Silver Metal"] }],
    variants: [
      {
        id: "var_3",
        title: "Black Leather",
        availableForSale: true,
        price: { amount: "199.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Strap", value: "Black Leather" }],
      },
      {
        id: "var_4",
        title: "Silver Metal",
        availableForSale: true,
        price: { amount: "199.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Strap", value: "Silver Metal" }],
      },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop",
        altText: "Minimalist Watch",
        width: 500,
        height: 500,
      },
    ],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop",
      altText: "Minimalist Watch",
      width: 500,
      height: 500,
    },
    seo: {
      title: "Minimalist Watch",
      description: "Sleek minimalist design with smart features",
    },
    tags: ["wearables", "watch"],
    updatedAt: new Date().toISOString(),
  },
  {
    id: "prod_3",
    title: "Portable Speaker",
    handle: "portable-speaker",
    description: "Compact speaker with powerful sound",
    descriptionHtml:
      "<p>Enjoy immersive audio anywhere with our portable speaker. Water-resistant, long battery life, and exceptional sound quality.</p>",
    availableForSale: true,
    priceRange: {
      maxVariantPrice: { amount: "129.99", currencyCode: "USD" },
      minVariantPrice: { amount: "99.99", currencyCode: "USD" },
    },
    options: [{ id: "opt_3", name: "Color", values: ["Blue", "Red", "Black"] }],
    variants: [
      {
        id: "var_5",
        title: "Blue",
        availableForSale: true,
        price: { amount: "99.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Color", value: "Blue" }],
      },
      {
        id: "var_6",
        title: "Red",
        availableForSale: true,
        price: { amount: "99.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Color", value: "Red" }],
      },
      {
        id: "var_7",
        title: "Black",
        availableForSale: true,
        price: { amount: "129.99", currencyCode: "USD" },
        selectedOptions: [{ name: "Color", value: "Black" }],
      },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
        altText: "Portable Speaker",
        width: 500,
        height: 500,
      },
    ],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
      altText: "Portable Speaker",
      width: 500,
      height: 500,
    },
    seo: {
      title: "Portable Speaker",
      description: "Compact speaker with powerful sound",
    },
    tags: ["audio", "speaker"],
    updatedAt: new Date().toISOString(),
  },
];

const MOCK_COLLECTIONS: Collection[] = [
  {
    title: "Audio",
    handle: "audio",
    description: "High-quality audio equipment",
    path: "/search/audio",
    seo: {
      title: "Audio",
      description: "High-quality audio equipment",
    },
    updatedAt: new Date().toISOString(),
  },
  {
    title: "Wearables",
    handle: "wearables",
    description: "Smart wearable technology",
    path: "/search/wearables",
    seo: {
      title: "Wearables",
      description: "Smart wearable technology",
    },
    updatedAt: new Date().toISOString(),
  },
];

const MOCK_MENU: Menu[] = [
  { title: "About", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
];

// Mock implementation - replace with your backend API
export async function getProduct(handle: string): Promise<Product | undefined> {
  "use cache";
  cacheTag("products");
  cacheLife("days");
  return MOCK_PRODUCTS.find((p) => p.handle === handle);
}

export async function getProducts({
  sortKey,
  reverse,
  query,
}: {
  sortKey?: string;
  reverse?: boolean;
  query?: string;
}): Promise<Product[]> {
  "use cache";
  cacheTag("products");
  cacheLife("days");

  let products = [...MOCK_PRODUCTS];

  if (query) {
    products = products.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (sortKey === "PRICE" && reverse) {
    products.sort(
      (a, b) =>
        parseFloat(b.priceRange.maxVariantPrice.amount) -
        parseFloat(a.priceRange.maxVariantPrice.amount)
    );
  } else if (sortKey === "PRICE") {
    products.sort(
      (a, b) =>
        parseFloat(a.priceRange.minVariantPrice.amount) -
        parseFloat(b.priceRange.minVariantPrice.amount)
    );
  }

  return products;
}

export async function getProductRecommendations(
  id: string
): Promise<Product[]> {
  "use cache";
  cacheTag("products");
  cacheLife("days");
  return MOCK_PRODUCTS.filter((p) => p.id !== id).slice(0, 4);
}

export async function getCollection(handle: string): Promise<Collection> {
  "use cache";
  cacheTag("collections");
  cacheLife("days");

  const collection = MOCK_COLLECTIONS.find((c) => c.handle === handle);
  if (!collection) {
    throw new Error(`Collection ${handle} not found`);
  }
  return collection;
}

export async function getCollectionProducts({
  collection,
  reverse = false,
  sortKey = "RELEVANCE",
}: {
  collection: string;
  reverse?: boolean;
  sortKey?: string;
}): Promise<Product[]> {
  "use cache";
  cacheTag("products", "collections");
  cacheLife("days");

  // In a real implementation, filter products by collection
  // For now, return all products (demo data)
  return MOCK_PRODUCTS;
}

export async function getCollections(): Promise<Collection[]> {
  "use cache";
  cacheTag("collections");
  cacheLife("days");
  return MOCK_COLLECTIONS;
}

export async function getMenu(handle: string): Promise<Menu[]> {
  "use cache";
  cacheTag("menus");
  cacheLife("days");

  if (handle.includes("header")) {
    return MOCK_MENU;
  }
  return [
    { title: "Privacy", path: "/privacy" },
    { title: "Terms", path: "/terms" },
  ];
}

export async function getPage(handle: string): Promise<Page> {
  "use cache";
  cacheTag("pages");
  cacheLife("days");

  // Mock page data
  return {
    id: `page_${handle}`,
    title: handle.replace("-", " ").toUpperCase(),
    handle,
    body: `<p>This is the ${handle} page.</p>`,
    bodySummary: `${handle} page content`,
    seo: {
      title: handle.replace("-", " "),
      description: `${handle} page`,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

export async function getPages(): Promise<Page[]> {
  "use cache";
  cacheTag("pages");
  cacheLife("days");

  return [
    {
      id: "page_about",
      title: "About",
      handle: "about",
      body: "<p>About our store</p>",
      bodySummary: "About us",
      seo: { title: "About", description: "About our store" },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

// Mock cart operations - stored in browser via CartProvider
// The CartProvider handles persistence via cookies automatically

const getStoredCart = (): Array<{ merchandiseId: string; quantity: number }> => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("mock_cart_items");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCart = (items: Array<{ merchandiseId: string; quantity: number }>) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("mock_cart_items", JSON.stringify(items));
  } catch {
    // Silently fail
  }
};

let mockCartId = "mock_cart_" + Math.random().toString(36).substr(2, 9);

export async function createCart(): Promise<Cart> {
  mockCartId = "mock_cart_" + Math.random().toString(36).substr(2, 9);
  saveCart([]);
  return {
    id: mockCartId,
    checkoutUrl: "https://checkout.example.com",
    cost: {
      subtotalAmount: { amount: "0", currencyCode: "USD" },
      totalAmount: { amount: "0", currencyCode: "USD" },
      totalTaxAmount: { amount: "0", currencyCode: "USD" },
    },
    lines: [],
    totalQuantity: 0,
  };
}

export async function addToCart(
  lines: Array<{ merchandiseId: string; quantity: number }>
): Promise<Cart> {
  const items = getStoredCart();

  // Add or update items
  for (const newLine of lines) {
    const existing = items.find((i) => i.merchandiseId === newLine.merchandiseId);
    if (existing) {
      existing.quantity += newLine.quantity;
    } else {
      items.push(newLine);
    }
  }

  saveCart(items);

  return {
    id: mockCartId,
    checkoutUrl: "https://checkout.example.com",
    cost: {
      subtotalAmount: { amount: "0", currencyCode: "USD" },
      totalAmount: { amount: "0", currencyCode: "USD" },
      totalTaxAmount: { amount: "0", currencyCode: "USD" },
    },
    lines: (items.map((line) => ({
      id: line.merchandiseId,
      quantity: line.quantity,
      cost: {
        totalAmount: { amount: "0", currencyCode: "USD" },
      },
      merchandise: {
        id: line.merchandiseId,
        title: "Product",
        selectedOptions: [],
        product: {
          id: line.merchandiseId,
          handle: "product",
          title: "Product",
          featuredImage: {
            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            altText: "Product",
            width: 500,
            height: 500,
          },
        },
      },
    })) as unknown) as CartItem[],
    totalQuantity: items.reduce((sum, line) => sum + line.quantity, 0),
  };
}

export async function removeFromCart(lineIds: string[]): Promise<Cart> {
  const items = getStoredCart().filter(
    (i) => !lineIds.includes(i.merchandiseId)
  );
  saveCart(items);

  return {
    id: mockCartId,
    checkoutUrl: "https://checkout.example.com",
    cost: {
      subtotalAmount: { amount: "0", currencyCode: "USD" },
      totalAmount: { amount: "0", currencyCode: "USD" },
      totalTaxAmount: { amount: "0", currencyCode: "USD" },
    },
    lines: (items.map((line) => ({
      id: line.merchandiseId,
      quantity: line.quantity,
      cost: {
        totalAmount: { amount: "0", currencyCode: "USD" },
      },
      merchandise: {
        id: line.merchandiseId,
        title: "Product",
        selectedOptions: [],
        product: {
          id: line.merchandiseId,
          handle: "product",
          title: "Product",
          featuredImage: {
            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            altText: "Product",
            width: 500,
            height: 500,
          },
        },
      },
    })) as unknown) as CartItem[],
    totalQuantity: items.reduce((sum, line) => sum + line.quantity, 0),
  };
}

export async function updateCart(
  lines: Array<{ id: string; quantity: number }>
): Promise<Cart> {
  const items = lines.map((line) => ({
    merchandiseId: line.id,
    quantity: line.quantity,
  }));
  saveCart(items);

  return {
    id: mockCartId,
    checkoutUrl: "https://checkout.example.com",
    cost: {
      subtotalAmount: { amount: "0", currencyCode: "USD" },
      totalAmount: { amount: "0", currencyCode: "USD" },
      totalTaxAmount: { amount: "0", currencyCode: "USD" },
    },
    lines: (items.map((line) => ({
      id: line.merchandiseId,
      quantity: line.quantity,
      cost: {
        totalAmount: { amount: "0", currencyCode: "USD" },
      },
      merchandise: {
        id: line.merchandiseId,
        title: "Product",
        selectedOptions: [],
        product: {
          id: line.merchandiseId,
          handle: "product",
          title: "Product",
          featuredImage: {
            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            altText: "Product",
            width: 500,
            height: 500,
          },
        },
      },
    })) as unknown) as CartItem[],
    totalQuantity: items.reduce((sum, line) => sum + line.quantity, 0),
  };
}

export async function getCart(): Promise<Cart | undefined> {
  const items = getStoredCart();

  if (items.length === 0) {
    return undefined;
  }

  return {
    id: mockCartId,
    checkoutUrl: "https://checkout.example.com",
    cost: {
      subtotalAmount: { amount: "0", currencyCode: "USD" },
      totalAmount: { amount: "0", currencyCode: "USD" },
      totalTaxAmount: { amount: "0", currencyCode: "USD" },
    },
    lines: (items.map((line) => ({
      id: line.merchandiseId,
      quantity: line.quantity,
      cost: {
        totalAmount: { amount: "0", currencyCode: "USD" },
      },
      merchandise: {
        id: line.merchandiseId,
        title: "Product",
        selectedOptions: [],
        product: {
          id: line.merchandiseId,
          handle: "product",
          title: "Product",
          featuredImage: {
            url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            altText: "Product",
            width: 500,
            height: 500,
          },
        },
      },
    })) as unknown) as CartItem[],
    totalQuantity: items.reduce((sum, line) => sum + line.quantity, 0),
  };
}

export async function revalidate() {
  // No-op for mock implementation
  return { revalidated: true };
}
