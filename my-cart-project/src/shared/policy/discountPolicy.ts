export interface DiscountPolicyValue {
  label: string;
  rate: number;
}
export const DISCOUNT_POLICIES:Record<string, DiscountPolicyValue> = {
  NORMAL: { label: "일반 상품", rate: 0 },
  SALE: { label: "세일 상품", rate: 20 },
  BEST: { label: "베스트 상품", rate: 30 },
  NEW: { label: "신규 상품", rate: 5 },
} as const;

export type DiscountPolicyKey = keyof typeof DISCOUNT_POLICIES;