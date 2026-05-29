export interface  SelectedItemData {
    id: string;
  productId: number;
  color: string;
  size: string;
  price: number;
  quantity: number;
  maxStock: number;
  variant?: 'detail' | 'sidebar';
  title?: string; // 상세페이지에선 생략 장바구니에선 전달
}

export interface SelectedItemProps extends SelectedItemData{
    onIncrease: (id: string) => void;
    onDecrease: (id: string) => void;
    onRemove: (id: string) => void;
    variant?: 'detail' | 'sidebar';
}