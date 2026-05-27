import type { Product } from "@/shared/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 101,
    title: "그래픽 반팔 티셔츠",
    basePrice: 15000,
    thumbnail: "/images/products/101-image1.jpg",
    shortDescription: "매일 입기 좋은 깔끔한 핏의 기본 반팔 티셔츠",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 10,
    detail: {
      description: "탄탄한 코튼 원단으로 제작되어 세탁 후에도 변형이 적습니다.",
      images: ["/images/products/101-image1.jpg"],
      contentImages: ["/images/products/101-image2.jpg", "/images/products/101-image3.jpg"],
      info: "단독 찬물 세탁을 권장합니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "101-bk-s", color: "Black", size: "S", stock: 12, additionalPrice: 0, isActive: true },
      { id: "101-bk-m", color: "Black", size: "M", stock: 25, additionalPrice: 0, isActive: true },
      { id: "101-bk-l", color: "Black", size: "L", stock: 2, additionalPrice: 0, isActive: true },
      { id: "101-bk-f", color: "Black", size: "Free", stock: 10, additionalPrice: 0, isActive: true },

    ]
  },
  {
    id: 102,
    title: "와이드 데님 청바지",
    basePrice: 39000,
    thumbnail: "/images/products/102-image1.jpg",
    shortDescription: "자연스러운 워싱과 트렌디한 와이드 핏 청바지",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "사계절 착용하기 좋은 두께감의 데님 원단입니다.",
      images: ["/images/products/102-image1.jpg"],
      contentImages: ["/images/products/102-image2.jpg", "/images/products/102-image3.jpg"],
      info: "이염 방지를 위해 첫 세탁은 드라이클리닝을 권장합니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: false
      }
    },
    variants: [
      { id: "102-lb-28", color: "Light Blue", size: "28", stock: 7, additionalPrice: 0, isActive: true },
      { id: "102-lb-30", color: "Light Blue", size: "30", stock: 14, additionalPrice: 0, isActive: true },
      { id: "102-lb-32", color: "Light Blue", size: "32", stock: 5, additionalPrice: 0, isActive: true },
      { id: "102-db-28", color: "Deep Blue", size: "28", stock: 9, additionalPrice: 0, isActive: true },
      { id: "102-db-30", color: "Deep Blue", size: "30", stock: 22, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 103,
    title: "오버핏 옥스포드 셔츠",
    basePrice: 32000,
    thumbnail: "/images/products/103-image1.jpg",
    shortDescription: "캐주얼하고 클래식하게 연출 가능한 오버핏 셔츠",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "부드럽고 촘촘한 옥스포드 조직감으로 구김이 덜합니다.",
      images: ["/images/products/103-image1.jpg"],
      contentImages: ["/images/products/103-image2.jpg", "/images/products/103-image3.jpg", "/images/products/103-image4.jpg", "/images/products/103-image5.jpg", "/images/products/103-image6.jpg"],
      info: "드라이클리닝 또는 찬물 단독 손세탁하십시오.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: false
      }
    },
    variants: [
      { id: "103-bl-m", color: "Blue", size: "M", stock: 11, additionalPrice: 0, isActive: true },
      { id: "103-bl-l", color: "Blue", size: "L", stock: 16, additionalPrice: 0, isActive: true },
      { id: "103-wt-m", color: "White", size: "M", stock: 4, additionalPrice: 0, isActive: true },
      { id: "103-wt-l", color: "White", size: "L", stock: 9, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 104,
    title: "린넨 블렌드 슬랙스",
    basePrice: 45000,
    thumbnail: "/images/products/104-image1.jpg",
    shortDescription: "여름철 시원하게 입을 수 있는 린넨 슬랙스",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 4,
    detail: {
      description: "린넨과 혼방 소재로 특유의 까슬거림을 줄이고 통기성을 높였습니다.",
      images: ["/images/products/104-image1.jpg"],
      contentImages: ["/images/products/104-image2.jpg", "/images/products/104-image3.jpg"],
      info: "원단 특성상 뭉침 현상이나 잡사가 섞여 있을 수 있습니다.",
      specs: {
        material: "Linen 30%, Polyester 65%, Span 5%",
        thickness: "THIN",
        flexibility: true
      }
    },
    variants: [
      { id: "104-bk-s", color: "Black", size: "S", stock: 15, additionalPrice: 0, isActive: true },
      { id: "104-bk-m", color: "Black", size: "M", stock: 19, additionalPrice: 0, isActive: true },
      { id: "104-bw-s", color: "Brown", size: "S", stock: 8, additionalPrice: 0, isActive: true },
      { id: "104-bw-m", color: "Brown", size: "M", stock: 14, additionalPrice: 0, isActive: true },
      { id: "104-gy-s", color: "Gray", size: "S", stock: 3, additionalPrice: 0, isActive: true },
      { id: "104-gy-m", color: "Gray", size: "M", stock: 10, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 105,
    title: "후드티",
    basePrice: 35000,
    thumbnail: "/images/products/105-image1.jpg",
    shortDescription: "편안한 착용감과 스타일을 동시에 제공하는 후드티",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "편안하고 캐주얼한 스타일의 후드티.",
      images: ["/images/products/105-image1.jpg"],
      contentImages: ["/images/products/105-image2.jpg", "/images/products/105-image3.jpg"],
      info: "소재 특성상 필링(보풀)이 발생할 수 있으니 주의하세요.",
      specs: {
        material: "Acrylic 80%, Polyester 20%",
        thickness: "THICK",
        flexibility: true
      }
    },
    variants: [
      { id: "108-iv-f", color: "Ivory", size: "FREE", stock: 35, additionalPrice: 0, isActive: true },
      { id: "108-ng-f", color: "green", size: "FREE", stock: 15, additionalPrice: 0, isActive: true },
      { id: "108-ngg-f", color: "ginger", size: "FREE", stock: 12, additionalPrice: 0, isActive: true }
    ]
  },
];