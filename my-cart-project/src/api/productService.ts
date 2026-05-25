import { PRODUCTS } from '@/constants/products'; 
import type { Product } from '../shared/types/product';
import { DISCOUNT_POLICIES } from '@/shared/policy/discountPolicy';
import type { DiscountPolicyValue, DiscountPolicyKey } from '@/shared/policy/discountPolicy';

// 리스트 전체 불러오기
export const getProducts = async (): Promise<Product[]> => {
  // 로컬 데이터 0.5초 뒤에 반환 => 네트워크 지연 테스트용
  return new Promise((resolve) => {
    setTimeout(() => resolve(PRODUCTS), 500);
  });
};

// 해당 아이디에서 사용하는 detail 
export const getProductById = async (id: number): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = PRODUCTS.find(p => p.id === id);
      resolve(product);
    }, 300);
  });
};

// 상품 sale 정보
export const getSaleInfo = async (): Promise<Record<DiscountPolicyKey, DiscountPolicyValue>> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(DISCOUNT_POLICIES), 300);
  });
};