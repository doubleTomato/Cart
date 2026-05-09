import type { Product } from '@/shared/types/product';

export const CLOTHING_PRODUCTS: Product[] = [
  {
    id: 101,
    title: "오버핏 헤비 코튼 반팔 티셔츠",
    price: 29000,
    imgUrl: "/images/products/tee-01.jpg",
    desc: "탄탄한 10수 코튼 원단으로 제작된 데일리 티셔츠",
    saleType: "NEW",
    detail: {
      images: ["/images/products/tee-01-1.jpg", "/images/products/tee-01-2.jpg"],
      description: "고중량 10수 싱글 원단을 사용하여 세탁 후에도 목 늘어남이나 변형이 적은 실루엣을 유지합니다.",
      contentImages: ["/images/products/detail-desc-01.jpg"],
      info: "여유로운 세미 오버핏으로 제작되었습니다.",
      colors: ["White", "Black", "Gray"],
      sizes: ["S", "M", "L", "XL"],
      specs: {
        material: "Cotton 100%",
        thickness: "Thick",
        flexibility: true
      }
    }
  },
  {
    id: 102,
    title: "와이드 리지드 데님 팬츠",
    price: 58000,
    imgUrl: "/images/products/denim-01.jpg",
    desc: "클래식한 생지 데님 본연의 멋을 살린 와이드 팬츠",
    saleType: "SALE",
    discountPolicy: "SPRING_SALE",
    detail: {
      images: ["/images/products/denim-01-1.jpg"],
      description: "정통 리지드 데님 원단을 사용하여 입을수록 사용자의 체형에 맞게 워싱이 진행되는 매력적인 팬츠입니다.",
      contentImages: ["/images/products/denim-detail.jpg"],
      info: "이염 방지를 위해 첫 세탁은 드라이클리닝을 권장합니다.",
      colors: ["Indigo"],
      sizes: ["28", "30", "32", "34"],
      specs: {
        material: "Denim 100%",
        thickness: "Thick",
        flexibility: false
      }
    }
  },
  {
    id: 103,
    title: "데일리 옥스포드 셔츠",
    price: 45000,
    imgUrl: "/images/products/shirt-01.jpg",
    desc: "사계절 내내 활용하기 좋은 스탠다드 핏 셔츠",
    saleType: "BEST",
    discountPolicy: "WEEKEND_DUO",
    detail: {
      images: ["/images/products/shirt-01-1.jpg", "/images/products/shirt-01-2.jpg"],
      description: "부드러운 옥스포드 코튼 소재로 제작되어 캐주얼과 포멀함을 동시에 잡은 베이직 아이템입니다.",
      contentImages: ["/images/products/shirt-detail.jpg"],
      info: "자연스러운 구김이 멋스러운 셔츠입니다.",
      colors: ["White", "Sky Blue", "Pink"],
      sizes: ["95", "100", "105"],
      specs: {
        material: "Cotton 100%",
        thickness: "Normal",
        flexibility: true
      }
    }
  },
  {
    id: 104,
    title: "린넨 혼방 슬림 슬랙스",
    price: 39000,
    imgUrl: "/images/products/slacks-01.jpg",
    desc: "여름철 시원하게 착용 가능한 린넨 슬랙스",
    saleType: "SALE",
    discountPolicy: "CLEARANCE",
    detail: {
      images: ["/images/products/slacks-01-1.jpg"],
      description: "린넨과 폴리 혼방 소재로 린넨 특유의 시원함은 살리고 고질적인 구김 문제는 최소화했습니다.",
      contentImages: ["/images/products/slacks-info.jpg"],
      info: "슬림하게 떨어지는 핏이 다리를 길어 보이게 합니다.",
      colors: ["Beige", "Black", "Charcoal"],
      sizes: ["S", "M", "L"],
      specs: {
        material: "Linen 50%, Poly 50%",
        thickness: "Thin",
        flexibility: true
      }
    }
  },
  {
    id: 105,
    title: "나일론 포켓 카고 팬츠",
    price: 49000,
    imgUrl: "/images/products/cargo-01.jpg",
    desc: "가벼운 나일론 소재의 트렌디한 카고 팬츠",
    saleType: "NEW",
    detail: {
      images: ["/images/products/cargo-01-1.jpg"],
      description: "바스락거리는 질감의 나일론 소재로 제작되어 고프코어 룩이나 스트릿 룩 연출에 제격입니다.",
      contentImages: ["/images/products/cargo-detail.jpg"],
      info: "허리 밴딩과 밑단 스트링으로 사이즈 조절이 용이합니다.",
      colors: ["Khaki", "Black"],
      sizes: ["M", "L"],
      specs: {
        material: "Nylon 100%",
        thickness: "Thin",
        flexibility: false
      }
    }
  },
  {
    id: 106,
    title: "피그먼트 다잉 맨투맨",
    price: 42000,
    imgUrl: "/images/products/sweat-01.jpg",
    desc: "빈티지한 색감이 매력적인 오버핏 맨투맨",
    saleType: "SALE",
    discountPolicy: "SPRING_SALE",
    detail: {
      images: ["/images/products/sweat-01-1.jpg"],
      description: "피그먼트 워싱 공법을 통해 자연스러운 물 빠짐과 빈티지한 컬러감을 구현한 오버핏 맨투맨입니다.",
      contentImages: ["/images/products/sweat-detail.jpg"],
      info: "안감이 기모가 아닌 테리 소재로 사계절용입니다.",
      colors: ["Charcoal", "Brick", "Olive"],
      sizes: ["Free"],
      specs: {
        material: "Cotton 100%",
        thickness: "Normal",
        flexibility: true
      }
    }
  },
  {
    id: 107,
    title: "울 블렌드 체크 코트",
    price: 159000,
    imgUrl: "/images/products/coat-01.jpg",
    desc: "고급스러운 체크 패턴의 세미 오버핏 코트",
    saleType: "BEST",
    detail: {
      images: ["/images/products/coat-01-1.jpg", "/images/products/coat-01-2.jpg"],
      description: "높은 울 함유량의 이중지 원단을 사용하여 뛰어난 보온성과 우아한 드레이프성을 보여줍니다.",
      contentImages: ["/images/products/coat-material.jpg"],
      info: "안감 퀼팅 처리가 되어 있어 한겨울에도 따뜻합니다.",
      colors: ["Brown Check", "Grey Check"],
      sizes: ["M", "L"],
      specs: {
        material: "Wool 70%, Nylon 30%",
        thickness: "Thick",
        flexibility: false
      }
    }
  },
  {
    id: 108,
    title: "베이직 케이블 니트 베스트",
    price: 35000,
    imgUrl: "/images/products/vest-01.jpg",
    desc: "레이어드하기 좋은 클래식한 꽈배기 니트 조끼",
    discountPolicy: "NEW_MEMBER",
    detail: {
      images: ["/images/products/vest-01-1.jpg"],
      description: "촘촘한 꽈배기 패턴이 들어간 케이블 니트 베스트로, 셔츠나 반팔 위에 가볍게 포인트 주기 좋습니다.",
      contentImages: ["/images/products/vest-detail.jpg"],
      info: "넥라인과 밑단 시보리가 탄탄합니다.",
      colors: ["Navy", "Ivory", "Green"],
      sizes: ["M", "L"],
      specs: {
        material: "Acrylic 80%, Polyester 20%",
        thickness: "Normal",
        flexibility: true
      }
    }
  },
  {
    id: 109,
    title: "스트라이프 롱 슬리브",
    price: 26000,
    imgUrl: "/images/products/long-01.jpg",
    desc: "어디에나 잘 어울리는 기본 스트라이프 티셔츠",
    saleType: "SALE",
    discountPolicy: "CLEARANCE",
    detail: {
      images: ["/images/products/long-01-1.jpg"],
      description: "적당한 간격의 스트라이프 패턴으로 단품 착용은 물론 이너로서의 활용도도 매우 높습니다.",
      contentImages: ["/images/products/long-size.jpg"],
      info: "세탁 시 수축 방지 가공 처리가 되어 있습니다.",
      colors: ["Black/White", "Blue/White"],
      sizes: ["S", "M", "L", "XL"],
      specs: {
        material: "Cotton 100%",
        thickness: "Normal",
        flexibility: true
      }
    }
  },
  {
    id: 110,
    title: "코듀로이 밴딩 팬츠",
    price: 43000,
    imgUrl: "/images/products/pants-02.jpg",
    desc: "포근한 코듀로이 소재의 편안한 밴딩 바지",
    saleType: "NEW",
    discountPolicy: "SPRING_SALE",
    detail: {
      images: ["/images/products/pants-02-1.jpg", "/images/products/pants-02-2.jpg"],
      description: "부드러운 골지 코듀로이 원단으로 제작되어 겨울철 따뜻하고 편안하게 착용할 수 있는 데일리 팬츠입니다.",
      contentImages: ["/images/products/corduroy-info.jpg"],
      info: "와이드한 실루엣으로 활동성이 매우 뛰어납니다.",
      colors: ["Beige", "Brown", "Black"],
      sizes: ["M", "L"],
      specs: {
        material: "Cotton 98%, Span 2%",
        thickness: "Thick",
        flexibility: true
      }
    }
  }
];