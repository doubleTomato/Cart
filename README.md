# 🛒 Cart - 마구마구샵 Frontend(React)

React 19와 TypeScript를 기반으로 제작한 패션 쇼핑몰 프론트엔드 프로젝트입니다. 단순한 UI 구현을 넘어 장바구니 상태 관리, 수량 제한 정책, 커스텀 다이얼로그, 
예외 처리 등 실제 서비스에서 발생할 수 있는 다양한 도메인 상황을 고려하여 견고하게 구현했습니다.

---

## 🛠️ Tech Stack

### Core
* React 19
* TypeScript
* Vite

### State Management & Data Fetching
* Zustand
* @tanstack/react-query

### Routing / HTTP
* React Router DOM
* Axios

### Styling & UI Libraries
* SCSS (SASS)
* Swiper
* Lucide React
* React Icons

### Optimization
* vite-plugin-image-optimizer (Sharp, SVGO)

---

## ✨ 주요 기능

### 1. Zustand 기반 장바구니 상태 관리
상품 목록, 상세 페이지, 장바구니 사이드바가 동일한 데이터를 참조해야 하므로 Zustand를 사용하여 전역 상태를 통합했습니다.
* **중앙 집중식 스토어:** 상품 추가/삭제, 수량 변경, 총액 계산, 장바구니 열기/닫기 등의 상태를 단일 Store에서 제어하여 동기화 이슈를 제거했습니다.
* **구현 포인트:** * 어느 화면에서 수량을 변경하더라도 즉시 전역 UI 반영
  * 장바구니 Drawer와 상품 상세 페이지 간 긴밀한 상태 공유
  * Store 내부 액션을 통한 비즈니스 로직 일원화

### 2. 사이드바 장바구니 (Cart Drawer)
장바구니 페이지로 매번 이동하지 않고도 현재 담긴 상품을 자유롭게 핸들링할 수 있도록 쾌적한 오프캔버스 UI를 제공합니다.
* 우측 오프캔버스 방식 레이아웃
* 인라인 실시간 수량 변경 및 즉시 총액 반영
* 불필요한 상품 즉시 삭제 기능 제공
* 전체 삭제 기능 구현

### 3. Custom Select 컴포넌트
브라우저 기본 셀렉트 박스의 디자인 한계를 극복하고 쇼핑몰 아이덴티티를 유지하기 위해 직접 구현한 컴포넌트입니다.
* 일관된 브랜드 디자인 테마 적용
* 선택 리스트 내부에 수량 선택 기능 제공
* 현재 재고 상태 및 최대 구매 가능 수량을 옵션에 직관적으로 표기

### 4. Custom Popup 시스템
프로젝트 전반에서 Alert와 Confirm UI가 반복적으로 필요했습니다.
초기에는 개별 모달을 생성하려 했지만 중복 코드가 증가할 것으로 판단하여 
BasePopup에서 Alert, Confirm으로 타입별로 출력가능하도록 작업 및 추후 BasePopup을 기반으로 Modal을 출력할 수 있도록 작업 예정입니다.

이를 통해 버튼 구성 및 레이아웃을 재사용할 수 있게 되었습니다.
* 레이아웃 커스터마이징이 유연한 공통 Popup 구조 설계
* 타입으로 구분하여 Alert/Confirm 출력하도록 구현
* 공통 버튼 인터페이스 설계를 통한 높은 재사용성 구현

### 5. React Query 기반 데이터 조회
서버 상태(Server State) 관리를 분리하고 선언적인 UI를 구성하기 위해 도입했습니다.
* 클라이언트 상태와 서버 상태의 완벽한 분리
* API 요청에 따른 로딩(Loading) 및 에러(Error) 상태의 효율적 관리
* 자체 캐싱 메커니즘을 통한 불필요한 네트워크 요청 최소화

### 6. 클라이언트 페이지네이션
20개의 목데이터를 효율적으로 분할하여 화면 피로도를 줄이고 UI 레이아웃의 완성도를 높였습니다.
* 페이지당 8개 상품 균등 출력 및 `Array.slice()` 기반 데이터 분리
* **예외 처리:** 사용자가 카테고리 탭을 바꾸거나 정렬 조건을 변경하면 현재 페이지를 강제로 1페이지로 초기화하여, 조건 변경 시 데이터가 없는 빈 화면이 노출되는 결함을 방지했습니다.

### 7. 이미지 로딩 실패 대응 (No Image Fallback)
경로 오류나 서버 응답 지연으로 인해 엑박(깨진 이미지)이 발생하는 실제 운영 환경의 변수를 통제하기 위해 제작했습니다.
* 공통 Image 컴포넌트 내부에서 `onError` 이벤트 캡처
* 엑박 발생 시 사전에 준비된 정갈한 플레이스홀더 이미지로 자동 교체

### 8. 메인 배너 UI
Swiper 라이브러리를 활용하여 모던하고 와이드한 PC 중심의 메인 배너를 구축했습니다.
* 전체 해상도 대응 중앙 정렬 레이아웃
* 폰트 시인성 및 가독성을 확보하기 위한 다크 그라데이션 오버레이(Gradient Overlay) 배치
* 마우스 호버 시 배경 이미지가 은은하게 확대(`transform: scale(1.02)`)되는 시각적 피드백 제공

---

## 고민했던 점

### 💡 수량 검증 로직의 위치 선정
* **문제 상황:** 초기에는 각 컴포넌트(상세페이지, 장바구니 등)가 수량 제한을 개별적으로 검사하여 동일한 검증 코드가 여러 곳에 흩어지는 중복 문제가 발생했습니다.
* **해결 방안:** 모든 수량 변경 흐름이 결국 전역 Store를 거친다는 점에 착안하여, Zustand Store 액션 내부에서 최종 검증을 수행하도록 변경했습니다. 덕분에 컴포넌트는 UI 표현에만 집중하고 데이터 정합성은 스토어가 보장하는 구조를 만들어 유지보수성을 극대화했습니다.

### 💡 페이지네이션 전환 예외 처리
* **문제 상황:** 유저가 3페이지(상품 번호 17~20)를 보고 있던 도중, 총 상품이 4개밖에 없는 특정 카테고리 필터나 정렬 조건을 클릭하면, 인덱스 범위를 초과하여 빈 화면이 출력되는 UX 결함이 있었습니다.
* **해결 방안:** 필터나 정렬 상태를 바꾸는 트리거 함수에 `setCurrentPage(1)` 로직을 동기화하여, 조건 변경 시 무조건 첫 페이지부터 안전하게 탐색을 시작하도록 유도함으로써 사용자 경험을 대폭 개선했습니다.

---

## 📂 Project Structure

```text
src/
├── api/          # Axios 기반 API 서비스 레이어
├── assets/       # 이미지 자산 및 SCSS 스타일 시트 폴더
├── components/   # 도메인 및 공통 UI 컴포넌트
│   ├── cart/     # CartItem, OrderSummary, SizeSelect 등
│   ├── common/   # Button, Input, CustomSelect, Image, popup(BasePopup) 등
│   └── product/  # ProductCard, SelectProduct 등
├── constants/    # 상품 Mock Data 및 내비게이션 상수 상수 관리
├── layouts/      # Header, Footer, MainLayout, SideBarCart 등 구조적 레이아웃
├── pages/        # 각 라우트별 독립 페이지 컴포넌트
├── shared/       # 프로젝트 전역 공유 자산
│   ├── policy/   # discountPolicy, shippingPolicy 등 비즈니스 정책
│   ├── types/    # TypeScript 인터페이스 및 타입 정의 파일
│   └── utils/    # priceFunc 등 공통 유틸리티 함수
└── stores/       # Zustand 스토어 (useCartStore) 관리 폴더
```


## ⚙️ Installation & Running 

### 저장소 복제 
git clone [https://github.com/doubleTomato/Cart.git](https://github.com/doubleTomato/Cart.git) 
### 패키지 설치 
npm install 
### 로컬 개발 서버 실행 (Vite) 
npm run dev





## 🚀 Roadmap (추후 추가 예정 기능 및 개선사항)

### 1. 장바구니 페이지 추가

현재는 Drawer 형태의 장바구니만 제공하고 있습니다.

추후에는 별도의 장바구니 페이지를 추가하여 다음 기능을 지원할 예정입니다.

- 상품 일괄 관리
- 배송비 계산
- 할인 정책 적용
- 주문 예상 금액 확인


### 2. 반응형 레이아웃 지원

현재는 PC 환경 중심으로 레이아웃을 구성했습니다.

향후 모바일 및 태블릿 환경에서도 사용할 수 있도록 반응형 레이아웃을 적용할 예정입니다.

- 브레이크포인트별 UI 조정
- 상품 카드 레이아웃 개선
- Drawer UI 모바일 대응

### 3. 백엔드 API 연동

현재는 ts로 제작 된 Mock Data를 기반으로 동작하고 있습니다.

실제 API 연동 시 다음 정책을 서버 데이터와 함께 검증할 예정입니다.

- 최대 구매 수량 제한
- 재고 수량 검증
- 품절 상품 처리
- 주문 가능 여부 확인

클라이언트와 서버가 동일한 정책을 기준으로 동작하도록 상태 관리 구조를 개선할 계획입니다.

### 4. 테스트 코드 작성

현재는 기능 구현에 집중했으며 테스트 코드는 작성하지 않았습니다.

추후 Jest 및 React Testing Library를 활용하여

- Zustand Store 테스트
- 수량 제한 정책 테스트
- 컴포넌트 렌더링 테스트

를 추가할 예정입니다.

### 5. React Query로 전환
프로젝트 초기에 Axios Service Layer를 구성했지만,
실제 상품 목록 조회는 Mock Data를 직접 참조하는 방식으로 구현했습니다.

추후 React Query와 API 연동을 적용하여
서버 상태 관리와 데이터 캐싱을 개선할 계획입니다.
