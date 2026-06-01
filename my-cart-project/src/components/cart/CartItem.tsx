// 리스트 아이템
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "../common/Image";
import type { Product } from '@/shared/types/product';
import { getDiscountedPrice } from '@/shared/utils/priceFunc';
import { getSaleInfo } from "@/api/productService";
import  { type DiscountPolicyValue, DISCOUNT_POLICIES } from "@/shared/policy/discountPolicy";


interface ProductProps {
  product: Product; 
}

export const CardItem = ( { product } : ProductProps ) => {
    // console.log(product);
    

    const {id, detail, saleType, title, basePrice} = product;
    const { description, contentImages } = detail;
    const [sales, setSales] = useState<Record<string, DiscountPolicyValue>>({});
     useEffect(() => {
            if (!id) return;
            Promise.all([
                getSaleInfo()
            ]).then(([saleData]) => {

                if (saleData) {
                    setSales(saleData);
                }
            }).catch((e) => {
                console.log(e);
            });
        }, [id]);
    const discountedPrice = getDiscountedPrice(product, sales ? sales : {});
    
    return (
        <div className="cardItem" data-id={id}>
            <Link to={'/detail/' + id}>
                <div className="imgWrap">
                    <Image 
                    src={contentImages[0]} 
                    alt="서비스 로고" 
                    classN="logo-image"/>
                {saleType !== 'NORMAL' && <span className={`badge discountRate ${saleType?.toLowerCase()}`}>{saleType}</span>}
                </div>
                <div className="textWrap">
                    <p className="tit">{title}</p>
                    <p className="desc">{description}</p>
                    <div className="priceBox">
                        {saleType !== 'NORMAL' && <p className="rate">{DISCOUNT_POLICIES[saleType].rate}%</p>}
                        <span className={saleType !== 'NORMAL' ? 'originPrice' : 'price'}>{basePrice.toLocaleString() ?? 0}원</span>
                        {saleType !== 'NORMAL' && <p className="price">{discountedPrice.toLocaleString()}원</p>}
                    </div>
                </div>
            </Link>
        </div>
    )
} 