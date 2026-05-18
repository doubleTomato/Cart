import type { DiscountPolicyKey } from '@/constants/discountPolicy';

export interface Product {
  id: number;
  title: string;
  price: number;
  imgUrl: string;       // 리스트용 대표 이미지
  desc?: string;
  saleType?: "NEW" | "SALE" | "BEST";
  discountPolicy?: DiscountPolicyKey;
  // 상세 정보 묶음
  detail?: {
    images: string[];   // 상세 페이지 상단 슬라이드 등에 쓰일 이미지 배열
    description: string; // 텍스트 설명
    contentImages: string[]; // 본문에 들어가는 긴 상세 설명 이미지들
    info?: string;
    colors: string[];
    sizes: string[];
    specs: {
      material: string;
      thickness: "Thin" | "Normal" | "Thick";
      flexibility: boolean;
    };
  };
}
export interface CartItem extends Pick<Product, 'id' | 'title' | 'price' | 'imgUrl'> {
  color: string;
  size: string;
  quantity: number;
}