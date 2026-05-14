export interface  SelectedItemData {
    id: string | number;
  color: string;
  size: string;
  price: number;
  quantity: number;
  variant?: 'detail' | 'sidebar';
  title?: string; // 상세페이지에선 생략 장바구니에선 전달
}

export interface SelectedItemProps extends SelectedItemData{
    onIncrease: (id: string | number) => void;
    onDecrease: (id: string | number) => void;
    onRemove: (id: string | number) => void;
    variant?: 'detail' | 'sidebar';
}