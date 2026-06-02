import { useState } from "react";
import { useCartStore } from "@/stores/useCartStore";
import { SelectedItemCard } from "@/components/product/SelectProduct";
import { useShallow } from "zustand/shallow";
import { MdDelete, MdOutlineClose } from "react-icons/md";
import type { PopupProps } from "@/shared/types/popup";
import { BasePopup } from "@/components/common/popup/BasePopup";
// import { Link } from "react-router-dom";

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SideBarCart = ({ isOpen, onClose }: SideBarProps) => {
    const { updateQuantity, clearCart, removeItem, cartItems } = useCartStore(
        useShallow((state) => ({
            updateQuantity: state.updateQuantity,
            clearCart: state.clearCart,
            removeItem: state.removeItem,
            cartItems: state.items
        }))
    );

    type PopupConfig = Omit<PopupProps, 'onClose'>;
    const [popupConfig, setPopupConfig] = useState<PopupConfig | null>(null);

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
    };

    const handleIncrease = (id: string) => {
        const res = updateQuantity(id, 'plus');
        console.log(res);
        if (!res.success && res.reason === 'STOCK_LIMIT') {
            setPopupConfig({
                type: "alert",
                state: "error",
                title: "재고 제한",
                content: "더 이상 수량을 늘릴 수 없습니다. 잔여 재고가 부족합니다."
            });
        }
    };

    const handleDecrease = (id: string) => {
        const res = updateQuantity(id, 'minus');
        if (!res.success && res.reason === 'MIN_LIMIT') {
            setPopupConfig({
                type: "alert",
                state: "error",
                title: "수량 제한",
                content: "최소 수량은 1개입니다. 삭제를 원하시면 삭제 버튼을 눌러주세요."
            });
        }
    };

    const handleRemove = (id: string) => {
        removeItem(id);
    };

    // const mapArr = cartItems.length > 3 ? [...cartItems.slice(0, 3)] : [...cartItems];

    return (
        <>
            <nav className={`sideBarCart ${isOpen ? 'open' : ''}`}>
                <div className="closeWrap">
                    <h2>장바구니</h2>
                    <p className="closeBtn" title="장바구니 닫기" onClick={onClose}>
                        <MdOutlineClose />
                    </p>
                </div>
                <div className="deleteWrap" >
                    <p title="전부 삭제" onClick={allDelete}><MdDelete />전부 삭제</p>
                </div>
                <div className="cartWrap">
                    {cartItems.map((p) => (
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
                            maxStock={p.maxStock}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            onRemove={handleRemove}
                        />
                    ))}
                </div>
                {/* <div className="showViewBtn btn primary full">
                    <Link to='/cart'>
                        장바구니 전체보기 ({cartItems.length}) <MdArrowForwardIos />
                    </Link>
                </div> */}
            </nav>
            {popupConfig && (
                <BasePopup
                    key={popupConfig.type}
                    type={popupConfig.type}
                    state={popupConfig.state}
                    title={popupConfig.title}
                    content={popupConfig.content}
                    onConfirm={popupConfig.onConfirm}
                    onClose={() => setPopupConfig(null)}
                />
            )}
        </>
    );
};