import { useEffect, useState } from 'react';
import { getProductById, getSaleInfo } from "@/api/productService";
import type { Product } from '@/shared/types/product';
import type { DiscountPolicyValue } from '@/constants/discountPolicy';
import { useParams } from 'react-router-dom';
import { getDiscountedPrice } from '@/shared/utils/priceFunc';
export default function ProductDetailPage() {
    const { id } = useParams<{id: string}>();
    const [products, setProducts] = useState<Product | null >(null);
    const [sales, setSales] = useState<Record<string, DiscountPolicyValue>>({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    if (!id) return;
    getProductById(parseInt(id)).then((data) => {
        if(data) setProducts(data);
        setIsLoading(false);
    });

    if (!id) return;
        getSaleInfo().then((data) => {
        if(data) setSales(data);
       
    });

  }, []);
    const discountedPrice = getDiscountedPrice(products, sales ? sales : {});
    if (isLoading) return <div>로딩 중...</div>;
    const {material, thickness, flexibility} = products?.detail?.specs || {};
    return( 
        <div className="detail">
            <div className='leftContent'>
               <div>메인 이미지</div>
               <ul>
                    {products?.detail?.images.map((x,i) =>(
                        <li key={"images-"+i} value={x}>{x}</li>
                    ))}
               </ul>
            </div>
            <div className='rightContent'>
                <div className='productInfo'>
                    <h1>{products?.title}</h1>
                    <p className='saleType'>{products?.discountPolicy && sales?.[products?.discountPolicy].label}</p>
                    <p className='desc'>{products?.desc}</p>
                    <div className='ratingWrap'></div>
                    <p>
                        <span className='originPrice'>{products?.price.toLocaleString() ?? 0}원</span>
                    </p>
                    {products?.discountPolicy && 
                    <p className='salePrice'>
                        <span>{discountedPrice.toLocaleString() ?? 0}원</span>
                        <span>{sales?.[products?.discountPolicy].rate}%</span>
                    </p>}
                </div>
                <hr/>
                <div className='productEctAction'>
                    <p>배송정보</p>
                    <p>배송비</p>
                    <select name="color-sel">
                        {products?.detail?.colors.map((x,i) =>(
                            <option key={"color-"+i} value={x}>{x}</option>
                        ))}
                    </select>
                    <select name="size-sel">
                        {products?.detail?.sizes.map((x,i) =>(
                            <option key={"sizes-"+i} value={x}>{x}</option>
                        ))}
                    </select>
                    <div className='buttonWrap'>
                        <button className='btn'>바로구매</button>
                        <button className='btn cta'>장바구니 추가</button>
                    </div>
                </div>
                <hr/>
                <div className='add-onInfo'>
                    <p>{products?.detail?.description}</p>
                    <p>{products?.detail?.info}</p>
                    <ul>
                        <li>소재 {material}</li>
                        <li>두께감 {thickness}</li>
                        <li>신축성 {flexibility? '있음':'없음'}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}