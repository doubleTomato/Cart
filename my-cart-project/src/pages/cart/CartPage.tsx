import { SelectedItemCard } from "@/components/product/SelectProduct";
import type { PopupProps } from "@/shared/types/popup";
import { useCartStore } from "@/stores/useCartStore";
import { useState } from "react";
import { useShallow } from "zustand/shallow";

export default function CartPage() {

      const { updateQuantity, clearCart, removeItem, cartItems } = useCartStore(
            useShallow((state) => ({
                updateQuantity: state.updateQuantity,
                clearCart: state.clearCart,
                removeItem: state.removeItem,
                cartItems: state.items
            }))
        );
            // popup 제어용
        type PopupConfig = Omit<PopupProps, 'onClose'>;
        const [popupConfig, setPopupConfig] = useState<PopupConfig| null>(null);
        const allDelete = () => {
            setPopupConfig({
              type: "confirm",
              state: "confirm",
              title: "장바구니 비우기",
              content: "전체가 삭제됩니다. 진행하시겠습니까?",
              onConfirm: () => {
                clearCart();
                setPopupConfig(null);
                setPopupConfig({
                    type: "alert",
                    state: "success",
                    title: "성공",
                    content: "장바구니가 비워졌습니다."
                });
              }
            });
        }
    
        const handleIncrease = (id:string) => { updateQuantity(id, 'plus'); }
        const handleDecrease = (id:string) => { updateQuantity(id, 'minus'); }
        
        const handleRemove = (id:string) => { removeItem(id); }


    return (
    <div className="cartPage">
        <h1>장바구니</h1>
        <div className="contentWrap">
            <div className="cartList">
                <div className="quantity">전체 20</div>
                <ul className="cartNav">
                    <li>
                        <input type="checkbox" name="" value="allCheck"/>
                        <label>전체 선택</label>
                    </li>
                    <li><button className="btn default">선택 삭제</button></li>
                </ul>
                <ul className="productList">
                    {
                        cartItems.map((p) => (
                            <li>
                                <input type="checkbox" name="cartItem[]" value={p.id}/>
                                <SelectedItemCard
                                key={p.id}
                                id={p.id}
                                title={p.title}
                                variant="sidebar"
                                productId={p.productId}
                                color={p.color}
                                size={p.size}
                                price={p.price}
                                quantity={p.quantity}
                                onIncrease={() => {handleIncrease(p.id)}}
                                onDecrease={() => {handleDecrease(p.id)}}
                                onRemove={() => {handleRemove(p.id)}}
                            />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="orderSummary"></div>
        </div>
    </div>
    )
}