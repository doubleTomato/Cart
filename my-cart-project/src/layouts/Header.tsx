import { CiShoppingCart } from "react-icons/ci";
import { Image } from "@/components/common/Image";
import { useCartStore } from "../stores/useCartStore";
export const Header = () => {
    const items = useCartStore((state) => state.items);
    const itemCount = items.length;
    return (
        <header className="headerWrap">
            <div className="logo">
                <Image 
                src="/mogumogu-logo.png" 
                alt="서비스 로고" 
                classN="logo-image"/>
            </div>
            <ul className="rightContent">
                <li>
                    <CiShoppingCart size="1.5rem"/>
                    <span>장바구니</span>
                    <div className="badge notice">{itemCount}</div>
                </li>
            </ul>
        </header>
    )
}