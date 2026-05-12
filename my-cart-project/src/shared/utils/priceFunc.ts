import type { Product } from "../types/product";
import type { DiscountPolicyValue } from "@/constants/discountPolicy";

export const getDiscountedPrice = (
  product: Product | null | undefined, 
  sales: Record<string, DiscountPolicyValue> | undefined
) => {
  if (!product) return 0;
  
  // 정책이 x | sales x | sales에 key x => 정가 반환
  const policyKey = product.discountPolicy;
  if (!policyKey || !sales || !sales[policyKey]) {
    return product.price;
  }

  // 할인율 계산
  const rate = sales[policyKey].rate;
  return product.price * (1 - rate / 100);
};