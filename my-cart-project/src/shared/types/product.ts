// shared/types/product.ts

export type SaleType =
  | "NEW"
  | "BEST"
  | "SALE"
  | "NORMAL";

export type Thickness =
  | "THIN"
  | "NORMAL"
  | "THICK";

export type ShippingPolicyType =
  | "FREE"
  | "FIXED"
  | "CONDITIONAL";

export interface ShippingPolicy {
  id: string;

  type: ShippingPolicyType;

  fee: number;

  freeThreshold?: number;
}

export interface ProductSpec {
  material: string;

  thickness: Thickness;

  flexibility: boolean;
}

export interface ProductDetail {
  description: string;

  images: string[];

  contentImages: string[];

  info: string;

  specs: ProductSpec;
}

export interface ProductVariant {
  id: string;

  color: string;

  size: string;

  stock: number;

  additionalPrice: number;

  maxPurchaseQuantity?: number;

  isActive: boolean;
}

export interface Product {
  id: number;

  title: string;

  basePrice: number;

  thumbnail: string;

  shortDescription: string;

  saleType: SaleType;

  shippingPolicyId: string;

  maxPurchaseQuantity: number;

  detail: ProductDetail;

  variants: ProductVariant[];
}