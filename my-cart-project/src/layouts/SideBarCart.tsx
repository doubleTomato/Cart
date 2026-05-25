import { useState } from "react";
import { useCartStore } from "@/stores/useCartStore";
import { SelectedItemCard } from "@/components/product/SelectProduct";
import { useShallow } from "zustand/shallow";
import { MdDelete, MdArrowForwardIos, MdOutlineClose } from "react-icons/md";
import type { PopupProps } from "@/shared/types/popup";
import { BasePopup } from "@/components/common/popup/BasePopup";
import { Link } from "react-router-dom";

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}



export const SideBarCart = ({isOpen, onClose}:SideBarProps) => {
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

    // 리스트가 3개만 노출
    const mapArr = cartItems.length > 3 ? [...cartItems.slice(0,3)]:[...cartItems];
    return(
        <>
            <nav className={`sideBarCart ${isOpen ? 'open':''}`}>
                <div className="closeWrap">
                    <h2>장바구니</h2>
                    <p className="closeBtn" title="장바구니 닫기" onClick={onClose}>
                        <MdOutlineClose/>
                    </p>
                </div>
                <div className="deleteWrap" >
                    <p title="전부 삭제" onClick={allDelete}><MdDelete/>전부 삭제</p>
                </div>
                <div className="cartWrap">
                    {
                        mapArr.map((p) => (
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
                        ))
                    }
                </div>
                <div className="showViewBtn btn primary full"><Link to='/cart'> 장바구니 전체보기 ({cartItems.length}) <MdArrowForwardIos/></Link></div>
            </nav>
            {popupConfig && <BasePopup
                            key={popupConfig.type}
                            type={popupConfig.type}
                            state={popupConfig.state}
                            title={popupConfig.title}
                            content={popupConfig.content}
                            onConfirm={popupConfig.onConfirm}
                            onClose={() => setPopupConfig(null)} // [닫기] 혹은 [취소] 시 null로 초기화
                        />}
        </>
    )
}