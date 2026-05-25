export interface DiscountPolicyValue {
  label: string;
  rate: number;
}
export const DISCOUNT_POLICIES:Record<string, DiscountPolicyValue> = {
  SPRING_SALE: { label: "봄맞이 세일", rate: 15 },
  WEEKEND_DUO: { label: "주말 특가", rate: 10 },
  CLEARANCE: { label: "시즌 오프", rate: 40 },
  NEW_MEMBER: { label: "신규 가입 혜택", rate: 5 },
} as const;

export type DiscountPolicyKey = keyof typeof DISCOUNT_POLICIES;