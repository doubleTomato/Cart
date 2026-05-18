import { useEffect, useState } from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { getProductById, getSaleInfo } from "@/api/productService";
import type { Product } from '@/shared/types/product';
import type { DiscountPolicyValue } from '@/constants/discountPolicy';
import { useParams } from 'react-router-dom';
import { getDiscountedPrice } from '@/shared/utils/priceFunc';
import { CustomSelect } from '@/components/common/CustomSelect';
import type { SelectOption } from '@/shared/types/select';
import type { SelectedItemData } from '@/shared/types/selectedProduct';
import { SelectedItemCard } from '@/components/product/SelectProduct';
import { Image } from '@/components/common/Image';
export default function ProductDetailPage() {
    const { id } = useParams<{id: string}>();
    const [products, setProducts] = useState<Product | null >(null);
    const [sales, setSales] = useState<Record<string, DiscountPolicyValue>>({});
    const [isLoading, setIsLoading] = useState(true);

    const [filters, setFilters] = useState({
        color: undefined as SelectOption | undefined,
        size: undefined as SelectOption | undefined,
    });

    // 메인 이미지
    const [mainImg, setMainImg] = useState('');

    // 선택한 아이템
    const [selectedProducts, setSelectedProducts] = useState<SelectedItemData[]>([]);


    // total 가격 및 값

    useEffect(() => {
        if (!id) return;

        setIsLoading(true);
        
        Promise.all([
            getProductById(parseInt(id)),
            getSaleInfo()
        ]).then(([productData, saleData]) => {
            if (productData) {
                setProducts(productData);
                setMainImg(productData.imgUrl);
            }
            if (saleData) {
                setSales(saleData);
            }
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    }, [id]);

        // 장바구니에 추가
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        selectedProducts.map((v) => (
            addItem(v)
        ));        
        alert("장바구니에 담겼습니다!");

    };


    const discountedPrice = getDiscountedPrice(products, sales ? sales : {});
    if (isLoading) return <div>로딩 중...</div>;
    const {material, thickness, flexibility} = products?.detail?.specs || {};
    
    const colorOptions = products?.detail?.colors.map((color) => ({
        label: color,
        value: color
    }));
    const sizeOptions = products?.detail?.sizes.map((size) => ({
        label: size,
        value: size
    }));
    
   // 수량 증가
  const handleIncrease = (id: string | number) => {
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // 수량 감소 (1미만으로 안내려가게)
  const handleDecrease = (id: string | number) => {
    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // 항목 삭제
  const handleRemove = (id: string | number) => {
    setSelectedProducts((prev) => prev.filter((item) => item.id !== id));
  };


 // 사이즈 선택 시 작동
    const changeSelect = (selectedOption:SelectOption) => {
       if(!filters.color){
        alert("색상을 선택해주세요.");
        return;
       }
        const curSize = selectedOption.value;
        const curColor = filters.color.value;
        const targetCombinationId = `${products?.id}-${curColor}-${curSize}`;

        setFilters({...filters, size: selectedOption})
        let isDuplicate = selectedProducts.some(p => p.id === targetCombinationId); // 중복 체크
        // 중복되는 값이 있다면 count를 올리기

        if(isDuplicate){
            setSelectedProducts(prev => 
                prev.map(p => p.id === targetCombinationId ? { ...p, quantity: p.quantity + 1 } : p)
            );
            return;
        }
      setSelectedProducts(prev => {
        const newItem = {
            id: targetCombinationId,
            title: products?.title,
            productId: products?.id,
            color: String(curColor),
            size: String(curSize),
            price: discountedPrice,
            quantity: 1
        };
        return [...prev, newItem];
    });
        setFilters({ color: undefined, size: undefined });
    }

    // img mapping
    const imgList = [products?.imgUrl, ...products?.detail?.images || []].filter(Boolean);



    // total 합계 및 갯수
    const totalRe = selectedProducts.reduce((acc, cur) => {
        return {
            price: acc.price + (cur.price * cur.quantity),
            quantity: acc.quantity + cur.quantity
        };
    }, { price: 0, quantity: 0 });




    return( 
        <div className="detail">
            <div className='leftContent'>
               <div><Image src={mainImg} alt={mainImg || ''}/></div>
               <ul>
                    {imgList.map((x,i) =>(
                        <li className={mainImg === x ? "active" : ''} key={"images-"+i} onClick={() => setMainImg(x)}>
                            <Image src={x} alt={x || ''}/>
                        </li>
                    ))}
               </ul>
            </div>
            <div className='rightContent'>
                <div className='productInfo'>
                    <h1>{products?.title}</h1>
                    {products?.discountPolicy && <p className='saleType'>{products?.discountPolicy && sales?.[products?.discountPolicy].label}</p>}
                    <p className='desc'>{products?.desc}</p>
                    <div className='ratingWrap'></div>
                    <p>
                        <span className={`originPrice ${!products?.discountPolicy && 'noSale'}`}>{products?.price.toLocaleString() ?? 0}원</span>
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
                    <CustomSelect sName="color-sel" 
                    options={colorOptions ?? []}
                    value={filters.color}
                    onChange={(selectedOption)=> {setFilters({...filters, color: selectedOption})}}
                    />
                    <CustomSelect sName="size-sel" 
                    options={sizeOptions ?? []}
                    value={filters.size}
                    onChange={(selectedOption) => {changeSelect(selectedOption)}}
                    />
                   <div className='selectedProduct'>
                    {selectedProducts.map((p) => (
                        <SelectedItemCard
                            key={p.id}
                            id={p.id}
                            color={p.color}
                            size={p.size}
                            price={discountedPrice}
                            quantity={p.quantity}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            onRemove={handleRemove}
                        />
                    ))}
                   </div>
                   <hr/>
                   <div className='totalPrice'>
                        <p>총 {totalRe.quantity}개</p>
                        <p>{totalRe.price.toLocaleString()}원</p>
                   </div>
                    <div className='buttonWrap'>
                        <button className='btn primary lg'>바로구매</button>
                        <button className='btn secondary lg' onClick={handleAddToCart}>장바구니 추가</button>
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