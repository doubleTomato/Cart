import type { Product } from "@/shared/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 101,
    title: "베이직 무지 반팔 티셔츠",
    basePrice: 15000,
    thumbnail: "/images/products/tee-01.jpg",
    shortDescription: "매일 입기 좋은 깔끔한 핏의 기본 반팔 티셔츠",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 10,
    detail: {
      description: "탄탄한 코튼 원단으로 제작되어 세탁 후에도 변형이 적습니다.",
      images: ["/images/products/tee-01-1.jpg"],
      contentImages: ["/images/products/tee-size-info.jpg"],
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
      { id: "101-bk-l", color: "Black", size: "L", stock: 0, additionalPrice: 0, isActive: true },
      { id: "101-wt-s", color: "White", size: "S", stock: 18, additionalPrice: 0, isActive: true },
      { id: "101-wt-m", color: "White", size: "M", stock: 30, additionalPrice: 0, isActive: true },
      { id: "101-wt-l", color: "White", size: "L", stock: 15, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 102,
    title: "와이드 데님 팬츠",
    basePrice: 39000,
    thumbnail: "/images/products/denim-01.jpg",
    shortDescription: "자연스러운 워싱과 트렌디한 와이드 핏 청바지",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "사계절 착용하기 좋은 두께감의 데님 원단입니다.",
      images: ["/images/products/denim-01-1.jpg"],
      contentImages: ["/images/products/denim-size.jpg"],
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
    thumbnail: "/images/products/shirt-03.jpg",
    shortDescription: "캐주얼하고 클래식하게 연출 가능한 오버핏 셔츠",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "부드럽고 촘촘한 옥스포드 조직감으로 구김이 덜합니다.",
      images: ["/images/products/shirt-03-1.jpg"],
      contentImages: ["/images/products/shirt-detail.jpg"],
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
    thumbnail: "/images/products/slacks-05.jpg",
    shortDescription: "여름철 시원하게 입을 수 있는 린넨 슬랙스",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 4,
    detail: {
      description: "린넨과 혼방 소재로 특유의 까슬거림을 줄이고 통기성을 높였습니다.",
      images: ["/images/products/slacks-05-1.jpg"],
      contentImages: ["/images/products/slacks-fabric.jpg"],
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
      { id: "104-bg-s", color: "Beige", size: "S", stock: 8, additionalPrice: 0, isActive: true },
      { id: "104-bg-m", color: "Beige", size: "M", stock: 14, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 105,
    title: "데일리 스니커즈",
    basePrice: 59000,
    thumbnail: "/images/products/shoes-01.jpg",
    shortDescription: "어디에나 매치하기 좋은 미니멀한 스니커즈",
    saleType: "BEST",
    shippingPolicyId: "free",
    maxPurchaseQuantity: 2,
    detail: {
      description: "유행을 타지 않는 베이직한 디자인과 편안한 쿠션감이 특징입니다.",
      images: ["/images/products/shoes-01-1.jpg"],
      contentImages: ["/images/products/shoes-view.jpg"],
      info: "물세탁은 피해주시고 오염 시 가죽 전용 클리너를 사용하세요.",
      specs: {
        material: "Synthetic Leather",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "105-wt-230", color: "White", size: "230", stock: 5, additionalPrice: 0, isActive: true },
      { id: "105-wt-240", color: "White", size: "240", stock: 8, additionalPrice: 0, isActive: true },
      { id: "105-wt-250", color: "White", size: "250", stock: 12, additionalPrice: 0, isActive: true },
      { id: "105-bk-260", color: "Black", size: "260", stock: 4, additionalPrice: 0, isActive: true },
      { id: "105-bk-270", color: "Black", size: "270", stock: 6, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 106,
    title: "헤비웨이트 후드 집업",
    basePrice: 68000,
    thumbnail: "/images/products/hood-02.jpg",
    shortDescription: "고중량 원단으로 각이 잘 잡히는 후드 집업",
    saleType: "NORMAL",
    shippingPolicyId: "free",
    maxPurchaseQuantity: 3,
    detail: {
      description: "안감 루프 형태로 제작되어 봄 가을철 쾌적한 착용감을 선사합니다.",
      images: ["/images/products/hood-02-1.jpg"],
      contentImages: ["/images/products/hood-detail.jpg"],
      info: "지퍼를 잠근 후 뒤집어 세탁망에 넣어 세탁하세요.",
      specs: {
        material: "Cotton 100%",
        thickness: "THICK",
        flexibility: true
      }
    },
    variants: [
      { id: "106-gy-m", color: "Gray", size: "M", stock: 20, additionalPrice: 0, isActive: true },
      { id: "106-gy-l", color: "Gray", size: "L", stock: 18, additionalPrice: 0, isActive: true },
      { id: "106-bk-m", color: "Black", size: "M", stock: 14, additionalPrice: 0, isActive: true },
      { id: "106-bk-l", color: "Black", size: "L", stock: 25, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 107,
    title: "카고 나일론 조거팬츠",
    basePrice: 42000,
    thumbnail: "/images/products/cargo-01.jpg",
    shortDescription: "바스락거리는 나일론 소재의 트렌디 카고 팬츠",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "가볍고 시원한 나일론 소재로 아웃도어 및 데일리 룩에 적합합니다.",
      images: ["/images/products/cargo-01-1.jpg"],
      contentImages: ["/images/products/cargo-pocket.jpg"],
      info: "원단 특성상 고온 기계 건조는 수축을 유발할 수 있습니다.",
      specs: {
        material: "Nylon 100%",
        thickness: "THIN",
        flexibility: false
      }
    },
    variants: [
      { id: "107-kh-m", color: "Khaki", size: "M", stock: 8, additionalPrice: 0, isActive: true },
      { id: "107-kh-l", color: "Khaki", size: "L", stock: 13, additionalPrice: 0, isActive: true },
      { id: "107-bk-m", color: "Black", size: "M", stock: 16, additionalPrice: 0, isActive: true },
      { id: "107-bk-l", color: "Black", size: "L", stock: 20, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 108,
    title: "케이블 니트 베스트",
    basePrice: 35000,
    thumbnail: "/images/products/vest-04.jpg",
    shortDescription: "셔츠나 티셔츠 위에 레이어드하기 좋은 니트 조끼",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "클래식한 케이블 패턴 짜임으로 고급스러운 무드를 줍니다.",
      images: ["/images/products/vest-04-1.jpg"],
      contentImages: ["/images/products/vest-knit.jpg"],
      info: "소재 특성상 필링(보풀)이 발생할 수 있으니 주의하세요.",
      specs: {
        material: "Acrylic 80%, Polyester 20%",
        thickness: "THICK",
        flexibility: true
      }
    },
    variants: [
      { id: "108-iv-f", color: "Ivory", size: "FREE", stock: 35, additionalPrice: 0, isActive: true },
      { id: "108-nv-f", color: "Navy", size: "FREE", stock: 12, additionalPrice: 0, isActive: true }
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
      { id: "109-bk-m", color: "Black", size: "M", stock: 5, additionalPrice: 0, isActive: true },
      { id: "109-bk-l", color: "Black", size: "L", stock: 10, additionalPrice: 0, isActive: true },
      { id: "109-wt-m", color: "White", size: "M", stock: 1, additionalPrice: 0, isActive: true },
      { id: "109-wt-l", color: "White", size: "L", stock: 12, additionalPrice: 0, isActive: true }
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
      { id: "110-br-m", color: "Brown", size: "M", stock: 8, additionalPrice: 0, isActive: true },
      { id: "110-br-l", color: "Brown", size: "L", stock: 5, additionalPrice: 0, isActive: true },
      { id: "110-bk-m", color: "Black", size: "M", stock: 14, additionalPrice: 0, isActive: true },
      { id: "110-bk-l", color: "Black", size: "L", stock: 9, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 111,
    title: "그래픽 오버핏 맨투맨",
    basePrice: 48000,
    thumbnail: "/images/products/sweat-09.jpg",
    shortDescription: "감각적인 전면 나염 프린팅 오버핏 스웨트셔츠",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "안감은 쭈리 기모가 없는 고중량 루프 원단입니다.",
      images: ["/images/products/sweat-09-1.jpg"],
      contentImages: ["/images/products/sweat-graphic.jpg"],
      info: "나염 보호를 위해 뒤집어 찬물 세탁을 하십시오.",
      specs: {
        material: "Cotton 100%",
        thickness: "THICK",
        flexibility: true
      }
    },
    variants: [
      { id: "111-me-m", color: "Melange", size: "M", stock: 22, additionalPrice: 0, isActive: true },
      { id: "111-me-l", color: "Melange", size: "L", stock: 17, additionalPrice: 0, isActive: true },
      { id: "111-gr-m", color: "Green", size: "M", stock: 11, additionalPrice: 0, isActive: true },
      { id: "111-gr-l", color: "Green", size: "L", stock: 14, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 112,
    title: "치노 플랫 프론트 팬츠",
    basePrice: 36000,
    thumbnail: "/images/products/chino-01.jpg",
    shortDescription: "기본에 충실한 깔끔한 일자핏 치노 면바지",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "가볍게 스판이 함유되어 면바지 특유의 뻣뻣함을 줄였습니다.",
      images: ["/images/products/chino-01-1.jpg"],
      contentImages: ["/images/products/chino-fit.jpg"],
      info: "구김이 심할 경우 약한 온도로 다림질해 주세요.",
      specs: {
        material: "Cotton 97%, Span 3%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "112-kh-30", color: "Khaki", size: "30", stock: 12, additionalPrice: 0, isActive: true },
      { id: "112-kh-32", color: "Khaki", size: "32", stock: 18, additionalPrice: 0, isActive: true },
      { id: "112-tn-30", color: "Tan", size: "30", stock: 15, additionalPrice: 0, isActive: true },
      { id: "112-tn-32", color: "Tan", size: "32", stock: 11, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 113,
    title: "윈드브레이커 나일론 재킷",
    basePrice: 75000,
    thumbnail: "/images/products/jacket-11.jpg",
    shortDescription: "생활 방수가 가능한 가벼운 바람막이 아우터",
    saleType: "BEST",
    shippingPolicyId: "free",
    maxPurchaseQuantity: 2,
    detail: {
      description: "소매 밴딩과 밑단 스트링 디테일로 찬 바람을 차단합니다.",
      images: ["/images/products/jacket-11-1.jpg"],
      contentImages: ["/images/products/jacket-detail.jpg"],
      info: "가벼운 오염은 물티슈로 닦아내고 기계 세탁 시 중성세제를 쓰세요.",
      specs: {
        material: "Nylon 100% (Waterproof)",
        thickness: "THIN",
        flexibility: false
      }
    },
    variants: [
      { id: "113-bk-m", color: "Black", size: "M", stock: 9, additionalPrice: 0, isActive: true },
      { id: "113-bk-l", color: "Black", size: "L", stock: 14, additionalPrice: 0, isActive: true },
      { id: "113-od-m", color: "Olive-Drab", size: "M", stock: 4, additionalPrice: 0, isActive: true },
      { id: "113-od-l", color: "Olive-Drab", size: "L", stock: 7, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 114,
    title: "미니멀 가죽 벨트",
    basePrice: 29000,
    thumbnail: "/images/products/belt-01.jpg",
    shortDescription: "소가죽으로 제작되어 견고한 기본 가죽 벨트",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "매트한 실버 버클 디테일로 슬랙스나 데님에 모두 잘 묻어납니다.",
      images: ["/images/products/belt-01-1.jpg"],
      contentImages: ["/images/products/belt-buckle.jpg"],
      info: "가죽 특성상 물이나 땀에 취약하므로 직사광선을 피해 보관하세요.",
      specs: {
        material: "Cowhide 100%",
        thickness: "NORMAL",
        flexibility: false
      }
    },
    variants: [
      { id: "114-bk-m", color: "Black", size: "M(30-32)", stock: 40, additionalPrice: 0, isActive: true },
      { id: "114-bk-l", color: "Black", size: "L(34-36)", stock: 25, additionalPrice: 0, isActive: true },
      { id: "114-db-m", color: "Dark Brown", size: "M(30-32)", stock: 18, additionalPrice: 0, isActive: true },
      { id: "114-db-l", color: "Dark Brown", size: "L(34-36)", stock: 12, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 115,
    title: "캔버스 버킷 햇",
    basePrice: 24000,
    thumbnail: "/images/products/hat-03.jpg",
    shortDescription: "기분 좋게 푹 눌러쓸 수 있는 탄탄한 캔버스 버킷햇",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "두께감 있는 10수 캔버스 원단으로 핏이 자연스럽게 무너집니다.",
      images: ["/images/products/hat-03-1.jpg"],
      contentImages: ["/images/products/hat-angle.jpg"],
      info: "형태 유지를 위해 가벼운 손세탁을 권장합니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "115-ec-58", color: "Ecru", size: "58", stock: 14, additionalPrice: 0, isActive: true },
      { id: "115-ec-60", color: "Ecru", size: "60", stock: 8, additionalPrice: 0, isActive: true },
      { id: "115-bk-58", color: "Black", size: "58", stock: 22, additionalPrice: 0, isActive: true },
      { id: "115-bk-60", color: "Black", size: "60", stock: 19, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 116,
    title: "헤비 코튼 카디건",
    basePrice: 54000,
    thumbnail: "/images/products/cardigan-02.jpg",
    shortDescription: "묵직하게 떨어지는 실루엣의 로브 칼라 니트 가디건",
    saleType: "NORMAL",
    shippingPolicyId: "free",
    maxPurchaseQuantity: 3,
    detail: {
      description: "늘어남을 최소화하기 위해 특수 변형 짜임으로 편직하였습니다.",
      images: ["/images/products/cardigan-02-1.jpg"],
      contentImages: ["/images/products/cardigan-texture.jpg"],
      info: "옷걸이에 걸어두면 늘어날 수 있으니 개어서 보관해 주세요.",
      specs: {
        material: "Cotton 60%, Acrylic 40%",
        thickness: "THICK",
        flexibility: true
      }
    },
    variants: [
      { id: "116-ot-m", color: "Oatmeal", size: "M", stock: 11, additionalPrice: 0, isActive: true },
      { id: "116-ot-l", color: "Oatmeal", size: "L", stock: 16, additionalPrice: 0, isActive: true },
      { id: "116-cc-m", color: "Charcoal", size: "M", stock: 9, additionalPrice: 0, isActive: true },
      { id: "116-cc-l", color: "Charcoal", size: "L", stock: 13, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 117,
    title: "피케 칼라 반팔 셔츠",
    basePrice: 28000,
    thumbnail: "/images/products/pique-01.jpg",
    shortDescription: "단정하고 통기성이 좋은 카라 피케 반팔티",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 10,
    detail: {
      description: "벌집 모양의 피케 조직으로 몸에 잘 달라붙지 않아 여름철 쾌적합니다.",
      images: ["/images/products/pique-01-1.jpg"],
      contentImages: ["/images/products/pique-neck.jpg"],
      info: "세탁 후 가볍게 털어서 그늘에 건조해 주세요.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "117-wt-m", color: "White", size: "M", stock: 30, additionalPrice: 0, isActive: true },
      { id: "117-wt-l", color: "White", size: "L", stock: 42, additionalPrice: 0, isActive: true },
      { id: "117-bg-m", color: "Burgundy", size: "M", stock: 15, additionalPrice: 0, isActive: true },
      { id: "117-bg-l", color: "Burgundy", size: "L", stock: 18, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 118,
    title: "스웨트 이지 쇼츠",
    basePrice: 22000,
    thumbnail: "/images/products/shorts-04.jpg",
    shortDescription: "홈웨어 및 가벼운 외출에 좋은 밴딩 반바지",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "허리 전체 스트링 밴딩 처리로 체형에 구애 없이 편안하게 잘 맞습니다.",
      images: ["/images/products/shorts-04-1.jpg"],
      contentImages: ["/images/products/shorts-waist.jpg"],
      info: "첫 세탁 시 미세한 물 빠짐이 있을 수 있으니 단독 세탁을 권장합니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "118-me-s", color: "Melange", size: "S", stock: 14, additionalPrice: 0, isActive: true },
      { id: "118-me-m", color: "Melange", size: "M", stock: 28, additionalPrice: 0, isActive: true },
      { id: "118-bk-m", color: "Black", size: "M", stock: 33, additionalPrice: 0, isActive: true },
      { id: "118-bk-l", color: "Black", size: "L", stock: 21, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 119,
    title: "워크웨어 코튼 재킷",
    basePrice: 89000,
    thumbnail: "/images/products/work-01.jpg",
    shortDescription: "내구성이 뛰어난 코튼 캔버스 소재의 워크 재킷",
    saleType: "NEW",
    shippingPolicyId: "free",
    maxPurchaseQuantity: 2,
    detail: {
      description: "빈티지한 무드의 스티치 디테일과 전면 대형 아웃포켓이 특징입니다.",
      images: ["/images/products/work-01-1.jpg"],
      contentImages: ["/images/products/work-pocket.jpg"],
      info: "기계 세탁이 가능하나 잦은 세탁은 에이징 효과를 가속화할 수 있습니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "119-br-l", color: "Brown", size: "L", stock: 6, additionalPrice: 0, isActive: true },
      { id: "119-br-xl", color: "Brown", size: "XL", stock: 3, additionalPrice: 3000, isActive: true },
      { id: "119-cc-l", color: "Charcoal", size: "L", stock: 8, additionalPrice: 0, isActive: true },
      { id: "119-cc-xl", color: "Charcoal", size: "XL", stock: 4, additionalPrice: 3000, isActive: true }
    ]
  },
  {
    id: 120,
    title: "코튼 크루삭스 3팩",
    basePrice: 12000,
    thumbnail: "/images/products/socks-01.jpg",
    shortDescription: "발목까지 부드럽게 감싸주는 고품질 면 양말 패키지",
    saleType: "BEST",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 10,
    detail: {
      description: "흘러내림 방지 밴딩 가공 처리가 되어 있어 일상생활에서 안정적입니다.",
      images: ["/images/products/socks-01-1.jpg"],
      contentImages: ["/images/products/socks-band.jpg"],
      info: "건조기 사용 시 세로 수축이 있을 수 있으니 자연 건조를 권장합니다.",
      specs: {
        material: "Cotton 85%, Polyester 12%, Span 3%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "120-wp-m", color: "White-Pack", size: "M(230-250)", stock: 50, additionalPrice: 0, isActive: true },
      { id: "120-wp-l", color: "White-Pack", size: "L(260-280)", stock: 65, additionalPrice: 0, isActive: true },
      { id: "120-mp-m", color: "Multi-Pack", size: "M(230-250)", stock: 35, additionalPrice: 1000, isActive: true },
      { id: "120-mp-l", color: "Multi-Pack", size: "L(260-280)", stock: 40, additionalPrice: 1000, isActive: true }
    ]
  }
];