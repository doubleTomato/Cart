import type { Product } from "@/shared/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 101,
    title: "그래픽 반팔 티셔츠",
    basePrice: 15000,
    thumbnail: "/images/products/101-image1.jpg",
    shortDescription: "매일 입기 좋은 깔끔한 핏의 기본 반팔 티셔츠",
    saleType: "BEST",
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

  // 추가 리스트
  {
    id: 106,
    title: "베이직 카라 니트 집업",
    basePrice: 48000,
    thumbnail: "/images/products/106-image1.jpg",
    shortDescription: "정방향 지퍼로 다양한 연출이 가능한 미니멀 니트 집업",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 3,
    detail: {
      description: "부드러운 비스코스 혼방 원사로 맨살에 입어도 깔끔한 핏을 연출합니다.",
      images: ["/images/products/106-image1.jpg"],
      contentImages: ["/images/products/106-image2.jpg", "/images/products/106-image3.jpg"],
      info: "원단 변형 방지를 위해 드라이클리닝 또는 평평하게 뉘어서 건조하세요.",
      specs: {
        material: "Viscose 50%, Polyester 30%, Nylon 20%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "106-bk-m", color: "Black", size: "M", stock: 15, additionalPrice: 0, isActive: true },
      { id: "106-bk-l", color: "Black", size: "L", stock: 22, additionalPrice: 0, isActive: true },
      { id: "106-be-m", color: "Beige", size: "M", stock: 12, additionalPrice: 0, isActive: true },
      { id: "106-be-l", color: "Beige", size: "L", stock: 8, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 107,
    title: "나일론 파라슈트 팬츠",
    basePrice: 42000,
    thumbnail: "/images/products/107-image1.jpg",
    shortDescription: "밑단 스트링으로 투웨이 연출이 가능한 트렌디 파라슈트 팬츠",
    saleType: "BEST",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "가볍고 바스락거리는 나일론 원단으로 트렌디한 고프코어 룩에 제격입니다.",
      images: ["/images/products/107-image1.jpg"],
      contentImages: ["/images/products/107-image2.jpg"],
      info: "찬물 가벼운 기계 세탁이 가능하며 건조기 사용은 피해주세요.",
      specs: {
        material: "Nylon 100%",
        thickness: "THIN",
        flexibility: false
      }
    },
    variants: [
      { id: "107-kh-m", color: "Khaki", size: "M", stock: 30, additionalPrice: 0, isActive: true },
      { id: "107-kh-l", color: "Khaki", size: "L", stock: 25, additionalPrice: 0, isActive: true },
      { id: "107-bk-m", color: "Black", size: "M", stock: 45, additionalPrice: 0, isActive: true },
      { id: "107-bk-l", color: "Black", size: "L", stock: 40, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 108,
    title: "헤비웨이트 피그먼트 맨투맨",
    basePrice: 38000,
    thumbnail: "/images/products/108-image1.jpg",
    shortDescription: "빈티지한 컬러감이 돋보이는 고중량 루즈핏 맨투맨",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 10,
    detail: {
      description: "피그먼트 워싱 공정을 거쳐 자연스러운 물 빠짐과 부드러운 터치감을 자랑합니다.",
      images: ["/images/products/108-image1.jpg"],
      contentImages: ["/images/products/108-image2.jpg", "/images/products/108-image3.jpg"],
      info: "피그먼트 염색 특성상 초기 세탁 시 물 빠짐이 있을 수 있으니 단독 세탁하세요.",
      specs: {
        material: "Cotton 100%",
        thickness: "THICK",
        flexibility: true
      }
    },
    variants: [
      { id: "108-cc-m", color: "Charcoal", size: "M", stock: 14, additionalPrice: 0, isActive: true },
      { id: "108-cc-l", color: "Charcoal", size: "L", stock: 19, additionalPrice: 0, isActive: true },
      { id: "108-cc-xl", color: "Charcoal", size: "XL", stock: 8, additionalPrice: 2000, isActive: true },
      { id: "108-kh-m", color: "Khaki", size: "M", stock: 11, additionalPrice: 0, isActive: true },
      { id: "108-kh-l", color: "Khaki", size: "L", stock: 15, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 109,
    title: "세미 와이드 생지 데님",
    basePrice: 41000,
    thumbnail: "/images/products/109-image1.jpg",
    shortDescription: "깔끔하고 깊은 인디고 컬러의 탄탄한 생지 청바지",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "스티치 라인으로 포인트를 준 생지 데님으로 깔끔한 미니멀 룩에 매치하기 좋습니다.",
      images: ["/images/products/109-image1.jpg"],
      contentImages: ["/images/products/109-image2.jpg"],
      info: "생지 원단 특성상 이염 우려가 있으므로 밝은 계열 의류나 신발과의 착용에 주의하세요.",
      specs: {
        material: "Cotton 98%, Span 2%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "109-id-28", color: "Indigo", size: "28", stock: 12, additionalPrice: 0, isActive: true },
      { id: "109-id-30", color: "Indigo", size: "30", stock: 18, additionalPrice: 0, isActive: true },
      { id: "109-id-32", color: "Indigo", size: "32", stock: 14, additionalPrice: 0, isActive: true },
      { id: "109-id-34", color: "Indigo", size: "34", stock: 5, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 110,
    title: "오버핏 비건 레더 자켓",
    basePrice: 89000,
    thumbnail: "/images/products/110-image1.jpg",
    shortDescription: "부드럽고 유연한 텍스처의 트렌디 오버핏 가죽 자켓",
    saleType: "BEST",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 2,
    detail: {
      description: "리얼 레더에 가까운 고급스러운 광택감과 자연스러운 실루엣이 연출되는 자켓입니다.",
      images: ["/images/products/110-image1.jpg"],
      contentImages: ["/images/products/110-image2.jpg", "/images/products/110-image3.jpg"],
      info: "가죽 전용 클리너를 사용하시고 직사광선을 피해 보관하십시오.",
      specs: {
        material: "Polyurethane 100% (Lining: Polyester 100%)",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "110-bk-m", color: "Black", size: "M", stock: 7, additionalPrice: 0, isActive: true },
      { id: "110-bk-l", color: "Black", size: "L", stock: 13, additionalPrice: 0, isActive: true },
      { id: "110-br-m", color: "Brown", size: "M", stock: 4, additionalPrice: 0, isActive: true },
      { id: "110-br-l", color: "Brown", size: "L", stock: 9, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 111,
    title: "피케 반팔 카라티",
    basePrice: 24000,
    thumbnail: "/images/products/111-image1.jpg",
    shortDescription: "여름철 출근룩과 데일리룩 모두 활용 가능한 피케 셔츠",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 8,
    detail: {
      description: "통기성이 뛰어난 벌집 구조의 피케 원단으로 쾌적한 착용감을 유지해 줍니다.",
      images: ["/images/products/111-image1.jpg"],
      contentImages: ["/images/products/111-image2.jpg"],
      info: "세탁망에 넣어 찬물 세탁을 권장합니다.",
      specs: {
        material: "Cotton 60%, Polyester 40%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "111-wt-m", color: "White", size: "M", stock: 20, additionalPrice: 0, isActive: true },
      { id: "111-wt-l", color: "White", size: "L", stock: 25, additionalPrice: 0, isActive: true },
      { id: "111-nv-m", color: "Navy", size: "M", stock: 18, additionalPrice: 0, isActive: true },
      { id: "111-nv-l", color: "Navy", size: "L", stock: 30, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 112,
    title: "나일론 메신저 백",
    basePrice: 35000,
    thumbnail: "/images/products/112-image1.jpg",
    shortDescription: "넓은 수납공간과 가벼운 무게감을 자랑하는 데일리 크로스백",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 3,
    detail: {
      description: "생활 방수가 가능한 고밀도 나일론 소재로 내부 노트북 수납 포켓이 포함되어 있습니다.",
      images: ["/images/products/112-image1.jpg"],
      contentImages: ["/images/products/112-image2.jpg"],
      info: "오염 부위만 물티슈나 중성세제로 가볍게 닦아내세요.",
      specs: {
        material: "Nylon 100%",
        thickness: "NORMAL",
        flexibility: false
      }
    },
    variants: [
      { id: "112-bk-f", color: "Black", size: "FREE", stock: 40, additionalPrice: 0, isActive: true },
      { id: "112-gy-f", color: "Gray", size: "FREE", stock: 15, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 113,
    title: "원턱 테이퍼드 치노팬츠",
    basePrice: 36000,
    thumbnail: "/images/products/113-image1.jpg",
    shortDescription: "허리 턱 디테일로 볼륨감을 살린 클래식 면바지",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "허벅지부터 밑단으로 갈수록 자연스럽게 좁아지는 테이퍼드 실루엣입니다.",
      images: ["/images/products/113-image1.jpg"],
      contentImages: ["/images/products/113-image2.jpg", "/images/products/113-image3.jpg"],
      info: "단추를 모두 채운 뒤 뒤집어서 세탁하시면 형태 유지에 좋습니다.",
      specs: {
        material: "Cotton 100%",
        thickness: "NORMAL",
        flexibility: false
      }
    },
    variants: [
      { id: "113-be-30", color: "Beige", size: "30", stock: 14, additionalPrice: 0, isActive: true },
      { id: "113-be-32", color: "Beige", size: "32", stock: 20, additionalPrice: 0, isActive: true },
      { id: "113-be-34", color: "Beige", size: "34", stock: 8, additionalPrice: 0, isActive: true },
      { id: "113-ny-30", color: "Navy", size: "30", stock: 11, additionalPrice: 0, isActive: true },
      { id: "113-ny-32", color: "Navy", size: "32", stock: 16, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 114,
    title: "쿨링 머슬핏 반팔 티셔츠",
    basePrice: 19000,
    thumbnail: "/images/products/114-image1.jpg",
    shortDescription: "체형을 탄탄하게 잡아주는 기능성 인체공학적 머슬핏 티셔츠",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 10,
    detail: {
      description: "접촉 냉감 기능성 원사로 입는 순간 시원하며, 뛰어난 신축성으로 상체를 부각해 줍니다.",
      images: ["/images/products/114-image1.jpg"],
      contentImages: ["/images/products/114-image2.jpg"],
      info: "기능성 유지를 위해 섬유유연제 사용을 지양해 주세요.",
      specs: {
        material: "Polyester 90%, Span 10%",
        thickness: "THIN",
        flexibility: true
      }
    },
    variants: [
      { id: "114-bk-m", color: "Black", size: "M", stock: 50, additionalPrice: 0, isActive: true },
      { id: "114-bk-l", color: "Black", size: "L", stock: 65, additionalPrice: 0, isActive: true },
      { id: "114-wt-m", color: "White", size: "M", stock: 42, additionalPrice: 0, isActive: true },
      { id: "114-wt-l", color: "White", size: "L", stock: 55, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 115,
    title: "헤링본 울 블렌드 블레이저",
    basePrice: 115000,
    thumbnail: "/images/products/115-image1.jpg",
    shortDescription: "클래식한 헤링본 패턴이 고급스러운 울 자켓",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 2,
    detail: {
      description: "울 혼방 소재로 한겨울 전까지 아우터로 활용 가능한 두께감과 보온성을 갖추었습니다.",
      images: ["/images/products/115-image1.jpg"],
      contentImages: ["/images/products/115-image2.jpg", "/images/products/115-image3.jpg"],
      info: "반드시 드라이클리닝 하십시오.",
      specs: {
        material: "Wool 40%, Polyester 60%",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "115-br-m", color: "Brown", size: "M", stock: 5, additionalPrice: 5000, isActive: true },
      { id: "115-br-l", color: "Brown", size: "L", stock: 8, additionalPrice: 5000, isActive: true },
      { id: "115-gy-m", color: "Gray", size: "M", stock: 6, additionalPrice: 5000, isActive: true },
      { id: "115-gy-l", color: "Gray", size: "L", stock: 7, additionalPrice: 5000, isActive: true }
    ]
  },
  {
    id: 116,
    title: "데일리 레더 첼시 부츠",
    basePrice: 65000,
    thumbnail: "/images/products/116-image1.jpg",
    shortDescription: "슬림한 스퀘어 토 라인의 트렌디 미니멀 첼시 부츠",
    saleType: "BEST",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 2,
    detail: {
      description: "부드러운 합성 피혁을 사용하여 뒤꿈치 까짐이 적고, 견고한 아웃솔로 착화감이 좋습니다.",
      images: ["/images/products/116-image1.jpg"],
      contentImages: ["/images/products/116-image2.jpg"],
      info: "물에 젖었을 경우 마른 천으로 닦은 후 그늘에서 건조해 주세요.",
      specs: {
        material: "Synthetic Leather 100%",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "116-bk-260", color: "Black", size: "260", stock: 10, additionalPrice: 0, isActive: true },
      { id: "116-bk-270", color: "Black", size: "270", stock: 14, additionalPrice: 0, isActive: true },
      { id: "116-bk-280", color: "Black", size: "280", stock: 6, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 117,
    title: "스트라이프 오버핏 니트",
    basePrice: 43000,
    thumbnail: "/images/products/117-image1.jpg",
    shortDescription: "감각적인 컬러 배색의 데일리 레이어드 스트라이프 니트",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 5,
    detail: {
      description: "까슬거림 없는 아크릴 소프트 원사로 루즈하게 떨어지는 핏이 매력적입니다.",
      images: ["/images/products/117-image1.jpg"],
      contentImages: ["/images/products/117-image2.jpg"],
      info: "니트 특성상 옷걸이에 걸면 늘어날 수 있으니 접어서 보관하세요.",
      specs: {
        material: "Acrylic 100%",
        thickness: "NORMAL",
        flexibility: true
      }
    },
    variants: [
      { id: "117-nv-f", color: "Navy-White", size: "FREE", stock: 22, additionalPrice: 0, isActive: true },
      { id: "117-bk-f", color: "Black-Green", size: "FREE", stock: 17, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 118,
    title: "카고 하프 밴딩 팬츠",
    basePrice: 29000,
    thumbnail: "/images/products/118-image1.jpg",
    shortDescription: "여름철 가볍게 입기 좋은 사이드 포켓 카고 반바지",
    saleType: "SALE",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 6,
    detail: {
      description: "허리 전체 밴딩과 조절 스트링으로 체형에 구애받지 않고 편안하게 착용 가능합니다.",
      images: ["/images/products/118-image1.jpg"],
      contentImages: ["/images/products/118-image2.jpg"],
      info: "첫 세탁 시 약간의 단독 세탁을 권장합니다.",
      specs: {
        material: "Cotton 70%, Nylon 30%",
        thickness: "THIN",
        flexibility: false
      }
    },
    variants: [
      { id: "118-kh-f", color: "Khaki", size: "FREE", stock: 35, additionalPrice: 0, isActive: true },
      { id: "118-bk-f", color: "Black", size: "FREE", stock: 40, additionalPrice: 0, isActive: true },
      { id: "118-be-f", color: "Beige", size: "FREE", stock: 28, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 119,
    title: "워셔블 하이넥 미니멀 패딩",
    basePrice: 98000,
    thumbnail: "/images/products/119-image1.jpg",
    shortDescription: "물세탁이 가능해 관리가 용이한 웰론 충전재 하이넥 패딩",
    saleType: "NEW",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 2,
    detail: {
      description: "가볍고 보온성이 뛰어난 웰론 충전재를 아낌없이 넣어 한겨울에도 따뜻합니다.",
      images: ["/images/products/119-image1.jpg"],
      contentImages: ["/images/products/119-image2.jpg", "/images/products/119-image3.jpg"],
      info: "중성세제를 사용하여 미온수 손세탁 또는 울코스 세탁이 가능합니다.",
      specs: {
        material: "Poly (Out: Nylon 100%, Fill: Wellon 100%)",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "119-gy-m", color: "Gray", size: "M", stock: 12, additionalPrice: 0, isActive: true },
      { id: "119-gy-l", color: "Gray", size: "L", stock: 15, additionalPrice: 0, isActive: true },
      { id: "119-bk-m", color: "Black", size: "M", stock: 20, additionalPrice: 0, isActive: true },
      { id: "119-bk-l", color: "Black", size: "L", stock: 24, additionalPrice: 0, isActive: true }
    ]
  },
  {
    id: 120,
    title: "코듀로이 볼캡",
    basePrice: 22000,
    thumbnail: "/images/products/120-image1.jpg",
    shortDescription: "따뜻한 텍스처와 깊은 깊이감으로 대두 캡으로도 좋은 모자",
    saleType: "NORMAL",
    shippingPolicyId: "default",
    maxPurchaseQuantity: 4,
    detail: {
      description: "가을/겨울 시즌 포인트 아이템으로 매치하기 좋은 골이 깊고 단단한 코듀로이 캡입니다.",
      images: ["/images/products/120-image1.jpg"],
      contentImages: ["/images/products/120-image2.jpg"],
      info: "형태 변형 우려가 있으므로 세탁기 사용을 금하며 오염 부위만 솔로 털어내세요.",
      specs: {
        material: "Cotton 100%",
        thickness: "THICK",
        flexibility: false
      }
    },
    variants: [
      { id: "120-br-f", color: "Brown", size: "FREE", stock: 18, additionalPrice: 0, isActive: true },
      { id: "120-nv-f", color: "Navy", size: "FREE", stock: 25, additionalPrice: 0, isActive: true },
      { id: "120-bg-f", color: "Burgundy", size: "FREE", stock: 12, additionalPrice: 0, isActive: true }
    ]
  }
];