import type { Product } from "@/shared/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 101,
    title: "오버핏 헤비 코튼 반팔 티셔츠",
    basePrice: 29000,
    thumbnail: "/images/products/tee-01.jpg",
    shortDescription: "탄탄한 10수 코튼 원단으로 제작된 데일리 티셔츠",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "고중량 10수 싱글 원단을 사용하여 세탁 후에도 목 늘어남이나 변형이 적습니다.",
      images: ["/images/products/tee-01-1.jpg", "/images/products/tee-01-2.jpg"],
      contentImages: ["/images/products/detail-desc-01.jpg"],
      info: "여유로운 세미 오버핏으로 제작되었습니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "THICK",
        flexibility: true
      }
    },
    variants: [
      { id: "101-white-s", color: "White", size: "S", stock: 10, additionalPrice: 0, isActive: true },
      { id: "101-white-m", color: "White", size: "M", stock: 3, additionalPrice: 0, isActive: true },
      { id: "101-black-xl", color: "Black", size: "XL", stock: 0, additionalPrice: 2000, isActive: false }
    ]
  },
  {
    id: 102,
    title: "와이드 리지드 데님 팬츠",
    basePrice: 58000,
    thumbnail: "/images/products/denim-01.jpg",
    shortDescription: "클래식한 생지 데님 본연의 멋을 살린 와이드 팬츠",
    saleType: "BEST",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 3,
    detail: {
      description: "정통 리지드 데님 원단을 사용하여 입을수록 사용자의 체형에 맞게 워싱이 진행됩니다.",
      images: ["/images/products/denim-01-1.jpg"],
      contentImages: ["/images/products/denim-detail.jpg"],
      info: "이염 방지를 위해 첫 세탁은 드라이클리닝을 권장합니다.",
      specs: {
        material: "Denim 100%",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "102-indigo-28", color: "Indigo", size: "28", stock: 5, additionalPrice: 0, isActive: true },
      { id: "102-indigo-30", color: "Indigo", size: "30", stock: 12, additionalPrice: 0, isActive: true },
      { id: "102-indigo-32", color: "Indigo", size: "32", stock: 0, additionalPrice: 0, isActive: true },
      { id: "102-indigo-34", color: "Indigo", size: "34", stock: 2, additionalPrice: 3000, isActive: true }
    ]
  },
  {
    id: 103,
    title: "데일리 옥스포드 셔츠",
    basePrice: 45000,
    thumbnail: "/images/products/shirt-01.jpg",
    shortDescription: "사계절 내내 활용하기 좋은 스탠다드 핏 셔츠",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 10,
    detail: {
      description: "부드러운 옥스포드 코튼 소재로 제작되어 캐주얼과 포멀함을 동시에 잡았습니다.",
      images: ["/images/products/shirt-01-1.jpg"],
      contentImages: ["/images/products/shirt-detail.jpg"],
      info: "자연스러운 구김이 멋스러운 셔츠입니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "103-white-m", color: "White", size: "M", stock: 20, additionalPrice: 0, isActive: true },
      { id: "103-white-l", color: "White", size: "L", stock: 15, additionalPrice: 0, isActive: true },
      { id: "103-skyblue-m", color: "Sky Blue", size: "M", stock: 8, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 104,
    title: "린넨 혼방 슬림 슬랙스",
    basePrice: 39000,
    thumbnail: "/images/products/slacks-01.jpg",
    shortDescription: "여름철 시원하게 착용 가능한 린넨 슬랙스",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "린넨과 폴리 혼방 소재로 구김 문제를 최소화했습니다.",
      images: ["/images/products/slacks-01-1.jpg"],
      contentImages: ["/images/products/slacks-info.jpg"],
      info: "슬림하게 떨어지는 핏이 다리를 길어 보이게 합니다.",
      specs: {
        material: "Linen 50%, Poly 50%",
        thickness: "THIN",
        flexibility: true
      }
    },
    variants: [
      { id: "104-black-s", color: "Black", size: "S", stock: 7, additionalPrice: 0, isActive: true },
      { id: "104-black-m", color: "Black", size: "M", stock: 0, additionalPrice: 0, isActive: true },
      { id: "104-beige-m", color: "Beige", size: "M", stock: 3, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 105,
    title: "나일론 포켓 카고 팬츠",
    basePrice: 49000,
    thumbnail: "/images/products/cargo-01.jpg",
    shortDescription: "가벼운 나일론 소재의 트렌디한 카고 팬츠",
    saleType: "NEW",
    shippingPolicyId: "free_shipping",
    maxPurchaseQuantity: 3,
    detail: {
      description: "바스락거리는 질감의 나일론 소재로 고프코어 룩 연출에 제격입니다.",
      images: ["/images/products/cargo-01-1.jpg"],
      contentImages: ["/images/products/cargo-detail.jpg"],
      info: "전 상품 무료배송 이벤트 적용 상품입니다.",
      specs: {
        material: "Nylon 100%",
        thickness: "THIN",
        flexibility: false
      }
    },
    variants: [
      { id: "105-khaki-m", color: "Khaki", size: "M", stock: 25, additionalPrice: 0, isActive: true },
      { id: "105-khaki-l", color: "Khaki", size: "L", stock: 18, additionalPrice: 0, isActive: true },
      { id: "105-black-m", color: "Black", size: "M", stock: 0, additionalPrice: 0, isActive: false }
    ]
  },
  {
    id: 106,
    title: "피그먼트 다잉 맨투맨",
    basePrice: 42000,
    thumbnail: "/images/products/sweat-01.jpg",
    shortDescription: "빈티지한 색감이 매력적인 오버핏 맨투맨",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "피그먼트 워싱 공법을 통해 자연스러운 물 빠짐을 구현했습니다.",
      images: ["/images/products/sweat-01-1.jpg"],
      contentImages: ["/images/products/sweat-detail.jpg"],
      info: "테리 소재 안감으로 사계절 착용 가능합니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "106-charcoal-free", color: "Charcoal", size: "Free", stock: 30, additionalPrice: 0, isActive: true },
      { id: "106-brick-free", color: "Brick", size: "Free", stock: 12, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 107,
    title: "프리미엄 울 캐시미어 코트",
    basePrice: 259000,
    thumbnail: "/images/products/coat-02.jpg",
    shortDescription: "핸드메이드 공법으로 제작된 캐시미어 혼방 코트",
    saleType: "BEST",
    shippingPolicyId: "free_shipping",
    maxPurchaseQuantity: 1,
    detail: {
      description: "가볍고 보온성이 뛰어난 프리미엄 소재를 사용했습니다.",
      images: ["/images/products/coat-02-1.jpg"],
      contentImages: ["/images/products/coat-detail.jpg"],
      info: "1인당 1벌 구매 제한 상품입니다.",
      specs: {
        material: "Wool 80%, Cashmere 20%",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "107-black-m", color: "Black", size: "M", stock: 5, additionalPrice: 0, isActive: true },
      { id: "107-black-l", color: "Black", size: "L", stock: 3, additionalPrice: 0, isActive: true },
      { id: "107-camel-m", color: "Camel", size: "M", stock: 2, additionalPrice: 10000, isActive: true }
    ]
  },
  {
    id: 108,
    title: "베이직 케이블 니트 베스트",
    basePrice: 35000,
    thumbnail: "/images/products/vest-01.jpg",
    shortDescription: "레이어드하기 좋은 클래식 꽈배기 니트 조끼",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 10,
    detail: {
      description: "셔츠나 반팔 위에 가볍게 포인트 주기 좋습니다.",
      images: ["/images/products/vest-01-1.jpg"],
      contentImages: ["/images/products/vest-detail.jpg"],
      info: "넥라인과 밑단 시보리가 탄탄합니다.",
      specs: {
        material: "Acrylic 80%, Polyester 20%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "108-navy-l", color: "Navy", size: "L", stock: 40, additionalPrice: 0, isActive: true },
      { id: "108-ivory-m", color: "Ivory", size: "M", stock: 0, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 109,
    title: "스트라이프 롱 슬리브",
    basePrice: 26000,
    thumbnail: "/images/products/long-01.jpg",
    shortDescription: "어디에나 잘 어울리는 기본 스트라이프 티셔츠",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "단품 착용은 물론 이너로서의 활용도도 매우 높습니다.",
      images: ["/images/products/long-01-1.jpg"],
      contentImages: ["/images/products/long-size.jpg"],
      info: "세탁 시 수축 방지 가공 처리가 되어 있습니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "109-bw-m", color: "Black/White", size: "M", stock: 15, additionalPrice: 0, isActive: true },
      { id: "109-bw-l", color: "Black/White", size: "L", stock: 22, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 110,
    title: "코듀로이 밴딩 팬츠",
    basePrice: 43000,
    thumbnail: "/images/products/pants-02.jpg",
    shortDescription: "포근한 코듀로이 소재의 편안한 밴딩 바지",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 3,
    detail: {
      description: "부드러운 골지 코듀로이 원단으로 제작되어 겨울철 따뜻합니다.",
      images: ["/images/products/pants-02-1.jpg"],
      contentImages: ["/images/products/corduroy-info.jpg"],
      info: "와이드한 실루엣으로 활동성이 매우 뛰어납니다.",
      specs: {
        material: "Cotton 98%, Span 2%",
        thickness: "THICK",
        flexibility: true
      }
    },
    variants: [
      { id: "110-brown-m", color: "Brown", size: "M", stock: 8, additionalPrice: 0, isActive: true },
      { id: "110-brown-l", color: "Brown", size: "L", stock: 5, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 111,
    title: "에센셜 크루 삭스 5팩",
    basePrice: 15000,
    thumbnail: "/images/products/socks-01.jpg",
    shortDescription: "매일 신기 좋은 쫀쫀한 무지 양말 세트",
    saleType: "BEST",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 20,
    detail: {
      description: "발목을 안정적으로 잡아주는 골지 디테일이 들어갔습니다.",
      images: ["/images/products/socks-01-1.jpg"],
      contentImages: ["/images/products/socks-detail.jpg"],
      info: "남녀공용 프리사이즈 제품입니다.",
      specs: {
        material: "Cotton 75%, Poly 20%, Span 5%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "111-mix-free", color: "Mix(Black/White/Gray)", size: "Free", stock: 150, additionalPrice: 0, isActive: true },
      { id: "111-white-free", color: "All White", size: "Free", stock: 200, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 112,
    title: "빈티지 워싱 볼캡",
    basePrice: 29000,
    thumbnail: "/images/products/cap-01.jpg",
    shortDescription: "자연스러운 색감이 매력적인 데일리 볼캡",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "얼굴이 작아보이는 깊은 크라운 패턴을 적용했습니다.",
      images: ["/images/products/cap-01-1.jpg"],
      contentImages: ["/images/products/cap-detail.jpg"],
      info: "후면 스트랩으로 자유로운 사이즈 조절이 가능합니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: false
      }
    },
    variants: [
      { id: "112-navy-free", color: "Navy", size: "Free", stock: 12, additionalPrice: 0, isActive: true },
      { id: "112-green-free", color: "Green", size: "Free", stock: 4, additionalPrice: 0, isActive: true },
      { id: "112-red-free", color: "Washed Red", size: "Free", stock: 0, additionalPrice: 0, isActive: false }
    ]
  },
  {
    id: 113,
    title: "리얼 레더 첼시 부츠",
    basePrice: 129000,
    thumbnail: "/images/products/boots-01.jpg",
    shortDescription: "천연 소가죽으로 제작된 날렵한 실루엣의 부츠",
    saleType: "NEW",
    shippingPolicyId: "free_shipping",
    maxPurchaseQuantity: 2,
    detail: {
      description: "은은한 광택의 소가죽과 탄력 있는 밴딩으로 편안한 착화감을 제공합니다.",
      images: ["/images/products/boots-01-1.jpg"],
      contentImages: ["/images/products/boots-detail.jpg"],
      info: "정사이즈를 추천드리며, 발볼이 넓으신 분은 한 사이즈 업을 권장합니다.",
      specs: {
        material: "Cow Leather 100%",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "113-black-250", color: "Black", size: "250", stock: 3, additionalPrice: 0, isActive: true },
      { id: "113-black-260", color: "Black", size: "260", stock: 5, additionalPrice: 0, isActive: true },
      { id: "113-black-270", color: "Black", size: "270", stock: 8, additionalPrice: 0, isActive: true },
      { id: "113-black-280", color: "Black", size: "280", stock: 2, additionalPrice: 15000, isActive: true }
    ]
  },
  {
    id: 114,
    title: "워셔블 하프 집업 니트",
    basePrice: 52000,
    thumbnail: "/images/products/zipup-01.jpg",
    shortDescription: "기계 세탁이 가능한 실용적인 하프 집업 니트",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "특수 가공된 원사를 사용하여 물세탁 시에도 수축이 거의 없습니다.",
      images: ["/images/products/zipup-01-1.jpg"],
      contentImages: ["/images/products/zipup-detail.jpg"],
      info: "투웨이 지퍼를 사용하여 다양한 스타일링이 가능합니다.",
      specs: {
        material: "Acrylic 50%, Cotton 50%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "114-gray-m", color: "Gray", size: "M", stock: 11, additionalPrice: 0, isActive: true },
      { id: "114-gray-l", color: "Gray", size: "L", stock: 0, additionalPrice: 0, isActive: true },
      { id: "114-navy-l", color: "Navy", size: "L", stock: 14, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 115,
    title: "오버사이즈 덕다운 푸퍼",
    basePrice: 189000,
    thumbnail: "/images/products/puffer-01.jpg",
    shortDescription: "풍성한 볼륨감과 뛰어난 보온성의 숏패딩",
    saleType: "SALE",
    shippingPolicyId: "heavy_cargo",
    maxPurchaseQuantity: 2,
    detail: {
      description: "솜털 80, 깃털 20 비율의 우수한 덕다운 충전재를 아낌없이 넣었습니다.",
      images: ["/images/products/puffer-01-1.jpg"],
      contentImages: ["/images/products/puffer-detail.jpg"],
      info: "부피가 커서 특수 화물 배송비(heavy_cargo)가 적용됩니다.",
      specs: {
        material: "Nylon 100%, Duck Down 80/20",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "115-black-m", color: "Black", size: "M", stock: 5, additionalPrice: 0, isActive: true },
      { id: "115-black-l", color: "Black", size: "L", stock: 2, additionalPrice: 0, isActive: true },
      { id: "115-silver-l", color: "Silver", size: "L", stock: 0, additionalPrice: 20000, isActive: false }
    ]
  }
];