import { CiShoppingCart } from "react-icons/ci";
import { Image } from "@/components/common/Image";
export const Header = () => {
    return (
        <header className="headerWrap">
            <div className="logo">
                <Image 
                src="/mogumogu-logo.png" 
                alt="서비스 로고" 
                classN="logo-image"/>
            </div>
            <ul className="rightContent">
                <li><CiShoppingCart/>장바구니</li>
            </ul>
        </header>
    )
}