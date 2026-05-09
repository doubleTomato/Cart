// 리스트 아이템
import { Image } from "../common/Image";
import type { Product, CartItem } from '@/shared/types/product';

interface ProductProps {
  product: Product; 
}

export const CardItem = ( { product } : ProductProps ) => {
    const {id, imgUrl, saleType, title, desc, price} = product;
    console.log(saleType);
    return (
        <div className="cardItem" data-id={id}>
            <div className="imgWrap">
                <Image 
                src={imgUrl} 
                alt="서비스 로고" 
                classN="logo-image"/>
                <span className="badge sale"></span>
            </div>
            <div className="textWrap">
                <p className="tit">{title}</p>
                <p className="desc">{desc}</p>
                <div className="priceBox">
                    {saleType && <span className="discountRate">{saleType}</span>}
                    <span className="price">{price.toLocaleString() ?? 0}원</span>
                </div>
            </div>
        </div>
    )
} 