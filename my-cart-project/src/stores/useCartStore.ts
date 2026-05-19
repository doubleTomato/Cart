import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface Product {
  id: string;
  productId: number;
  price: number;
  imageUrl?: string;
}

interface CartItem extends Product {
  title?: string | undefined;
  quantity: number;
  color: string;
  size: string;
}

interface CartState{
    items: CartItem[];
    addItem: (product: CartItem) => void;
    updateQuantity: (id: string, type: 'plus' | 'minus') => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    getTotalStatus: () => { totalQty: number; totalPrice: number}
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                const {items} = get();
                const isExist = items.find((item) => item.id === product.id);
                if(isExist){
                    set({
                        items: items.map((item) => 
                            item.id === product.id
                            ? {...item, quantity: product.quantity}
                            : item
                        ),
                    });
                }else{
                    set({items: [...items, {...product, color: product.color, size: product.size, quantity: product.quantity}]});
                }
            },

            updateQuantity(id, type) {
                const { items } = get();
                set({
                    items: items.map((item) => {
                        if(item.id === id){
                            const newQty = type === 'plus' ? item.quantity + 1 : item.quantity - 1
                            return {...item, quantity: Math.max(1, newQty) };
                        }
                        return item;
                    }),
                });
            },

            removeItem: (id) => {
                set({ items: get().items.filter((item) => item.id !== id )});
            },

            clearCart: () => set({ items: [] }),

            getTotalStatus: () => {
                const { items } = get();
                const totalQty = items.reduce((acc, item) => acc + item.quantity, 0);
                const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                return { totalQty, totalPrice };
            },
        }),
        {
            name: 'guest-cart-storage',
        }
    )
)