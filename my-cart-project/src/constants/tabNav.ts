export interface TabItem {
  id: string;
  label: string;
  isActive: boolean;
}

export const MAIN_TABS: TabItem[] = [
  { id: 'new', label: '신상품', isActive: true },
  { id: 'best', label: '베스트', isActive: true },
  { id: 'sale', label: '세일', isActive: true },
  { id: 'brand', label: '브랜드',isActive: true },
];