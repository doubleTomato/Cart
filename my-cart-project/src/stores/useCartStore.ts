import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: string;
  productId: number;
  price: number;
  imageUrl?: string;
}

interface CartItem extends Product {
  title?: string;
  quantity: number;
  color: string;
  size: string;
  maxStock: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: CartItem) => boolean;
  addItems: (products: CartItem[]) => { success: boolean; exceededItems: string[] };
  updateQuantity: (id: string, type: 'plus' | 'minus') => { success: boolean; reason?: 'STOCK_LIMIT' | 'MIN_LIMIT' };
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalStatus: () => { totalQty: number; totalPrice: number };
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const { items } = get();
        const isExist = items.find((item) => item.id === product.id);

        if (isExist) {
          const nextQty = isExist.quantity + product.quantity;
          if (nextQty > product.maxStock) {
            return false;
          }

          set({
            items: items.map((item) =>
              item.id === product.id ? { ...item, quantity: nextQty } : item
            ),
          });
        } else {
          if (product.quantity > product.maxStock) {
            return false;
          }
          set({ items: [...items, product] });
        }
        return true;
      },

      addItems: (newProducts) => {
        const { items } = get();
        const updatedItems = [...items];
        const exceededItems: string[] = [];

        newProducts.forEach((product) => {
          const existIndex = updatedItems.findIndex((item) => item.id === product.id);
          
          if (existIndex > -1) {
            const nextQty = updatedItems[existIndex].quantity + product.quantity;
            if (nextQty > product.maxStock) {
              exceededItems.push(product.title || product.id);
              updatedItems[existIndex] = { ...updatedItems[existIndex], quantity: product.maxStock };
            } else {
              updatedItems[existIndex] = { ...updatedItems[existIndex], quantity: nextQty };
            }
          } else {
            if (product.quantity > product.maxStock) {
              exceededItems.push(product.title || product.id);
              updatedItems.push({ ...product, quantity: product.maxStock });
            } else {
              updatedItems.push(product);
            }
          }
        });

        set({ items: updatedItems });
        return {
          success: exceededItems.length === 0,
          exceededItems,
        };
      },

     updateQuantity: (id, type) => {
          const { items } = get();
          const targetItem = items.find((item) => item.id === id);
            
          if (!targetItem) {
            return { success: false };
          }
      
          const nextQty = type === 'plus' ? targetItem.quantity + 1 : targetItem.quantity - 1;
      
          if (nextQty < 1) {
            return { success: false, reason: 'MIN_LIMIT' };
          }
      
          if (nextQty > targetItem.maxStock) {
            return { success: false, reason: 'STOCK_LIMIT' };
          }
      
          set({
            items: items.map((item) =>
              item.id === id ? { ...item, quantity: nextQty } : item
            ),
          });
      
          return { success: true };
        },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      clearCart: () => set({ items: [] }),

      getTotalStatus: () => {
        const { items } = get();
        return items.reduce(
          (acc, item) => ({
            totalQty: acc.totalQty + item.quantity,
            totalPrice: acc.totalPrice + item.price * item.quantity,
          }),
          { totalQty: 0, totalPrice: 0 }
        );
      },
    }),
    {
      name: 'guest-cart-storage',
    }
  )
);