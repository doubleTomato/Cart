import { CiShoppingCart } from "react-icons/ci";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { useShallow } from "zustand/shallow";

interface HeaderProps {
  onToggle: () => void;
}

export const Header = ({onToggle}:HeaderProps) => {
      const { items } = useCartStore(
            useShallow((state) => ({
                items: state.items
            }))
        );
    const itemCount = items.length;
    return (
        <header className="headerWrap">
            <div className="logo">
                <Link to="/">
                    <img
                    src="/images/mogumogu-logo_.png" 
                    alt="서비스 로고" 
                    className="logo-image"/>
                </Link>
            </div>
            <ul className="rightContent">
                <li onClick={onToggle}>
                    <CiShoppingCart size="1.5rem"/>
                    <span>장바구니</span>
                    <div className="badge notice">{itemCount}</div>
                </li>
            </ul>
        </header>
    )
}