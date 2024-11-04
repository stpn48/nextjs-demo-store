import { User } from "@supabase/supabase-js";

// Define types for the dimensions of the product
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

// Define types for a review of the product
interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

// Define types for the meta information of the product
interface Meta {
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  barcode: string;
  qrCode: string; // Can be a string representation of the QR code
}

// Define types for a product
export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string; // URL or path to thumbnail image
  images: string[]; // Array of URLs or paths to images
}

// Define types for the overall response structure
// interface ProductResponse {
//   products: Product[];
//   total: number;
//   skip: number;
//   limit: number;
// }

export type FilterType =
  | "A-Z"
  | "Z-A"
  | "Price: Highest to Lowest"
  | "Price: Lowest to Highest"
  | "";

export type CartItem = Product & { quantity: number };

export type UserDetails = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  country: string;
  apartment: string;
  city: string;
  state: string;
  postalCode: string;
  shippingMethodId: number;
  shippingMethod: string;
  localStorageKey: string;
};

export type UserLoggedIn = User & {
  role: {
    id: number;
    userId: string;
    role: string;
    createdAt: Date;
  };
};

export type Guest = {
  role: string;
  createdAt: Date;
};
