type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string; // Consider using Date if you will be converting it later
  updatedAt: string; // Consider using Date if you will be converting it later
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[]; // Array of image URLs
  creationAt: string; // Consider using Date if you will be converting it later
  updatedAt: string; // Consider using Date if you will be converting it later
  category: Category; // Nested category object
};
