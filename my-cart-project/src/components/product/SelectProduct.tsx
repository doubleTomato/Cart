import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import type { SelectedItemProps } from "@/shared/types/selectedProduct";

export const SelectedItemCard = ({
    id,
    color,
    size,
    price,
    quantity,
    variant = 'detail',
    title,
    onIncrease,
    onDecrease,
    onRemove
}: SelectedItemProps) => {
    return (
        <dl className="selectProductWrap">
            <dt>
                {variant !== 'detail' && <div>{title}</div>}
                <div className="color"><span>색상</span> {color}</div>
                <div className="size"><span>사이즈</span> {size}</div>
                <button className="closeBtn" onClick={() => onRemove(id)}><MdOutlineClose/></button>
            </dt>
            <dd>
                <div className="countBox">
                    <div className={`btn inherit ${quantity === 1 ? 'disabled' : ''}`} onClick={() => onDecrease(id)}><FaMinus /></div>
                    <div>{quantity}</div>
                    <div className="btn inherit" onClick={() => onIncrease(id)}><FaPlus /></div>
                </div>
                <p className="price">{(price * quantity).toLocaleString()}원</p>
            </dd>
        </dl>
    )
}