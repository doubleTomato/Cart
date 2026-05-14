import { useEffect, useState } from 'react';
import { getProductById, getSaleInfo } from "@/api/productService";
import type { Product } from '@/shared/types/product';
import type { DiscountPolicyValue } from '@/constants/discountPolicy';
import { useParams } from 'react-router-dom';
import { getDiscountedPrice } from '@/shared/utils/priceFunc';
import { CustomSelect } from '@/components/common/CustomSelect';
import type { SelectOption } from '@/shared/types/select';
import type { SelectedItemData } from '@/shared/types/selectedProduct';
import { SelectedItemCard } from '@/components/product/SelectProduct';
export default function ProductDetailPage() {
    const { id } = useParams<{id: string}>();
    const [products, setProducts] = useState<Product | null >(null);
    const [sales, setSales] = useState<Record<string, DiscountPolicyValue>>({});
    const [isLoading, setIsLoading] = useState(true);

    const [filters, setFilters] = useState({
        color: undefined as SelectOption | undefined,
        size: undefined as SelectOption | undefined,
    });

    // id count AI(Auto Increment)
    const [pId, setPId] = useState(0);

    // 선택한 아이템
    const [selectedProducts, setSelectedProducts] = useState<SelectedItemData[]>([]);

    useEffect(() => {
        if (!id) return;
        getProductById(parseInt(id)).then((data) => {
            if(data) setProducts(data);
            setIsLoading(false);
        },);

        if (!id) return;
            getSaleInfo().then((data) => {
            if(data) setSales(data);
            
        });

  }, [id]);
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


    // 장바구니 클릭 시 작동
    const changeSelect = () => {
       if(!filters.color) alert("색상을 선택해주세요.");
       else if(!filters.size) alert("사이즈 선택해주세요.");
       else{
        let isDuplicate = false; // 중복 체크
        // 중복되는 값이 있다면 count를 올리기
        setSelectedProducts(selectedProducts.map(p =>
            {
                if(p.color === filters.color?.value && p.size === filters.size?.value){
                    console.log('중복 o', selectedProducts);
                    isDuplicate = true;
                   return {...p, quantity: p.quantity + 1 } 
                }else{
                    return p;
                }
            })
        );
        if(isDuplicate) return;
        setPId(pId + 1);
        const newItem = {
            id: String(pId) + filters.color.value + filters.size.value,
            color: filters.color.value as string,
            size: filters.size.value as string,
            price: discountedPrice,
            quantity: 1
        }
        setSelectedProducts([...selectedProducts, newItem]);
        console.log('중복값 x',selectedProducts);
        }
       setFilters({ color: undefined, size: undefined });
    }


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
                    <CustomSelect sName="color-sel" 
                    options={colorOptions ?? []}
                    value={filters.color}
                    onChange={(selectedOption)=> {setFilters({...filters, color: selectedOption})}}
                    />
                    <CustomSelect sName="size-sel" 
                    options={sizeOptions ?? []}
                    value={filters.size}
                    onChange={(selectedOption)=> {setFilters({...filters, size: selectedOption})}}
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
                    <div className='buttonWrap'>
                        <button className='btn primary lg'>바로구매</button>
                        <button className='btn secondary lg' onClick={changeSelect}>장바구니 추가</button>
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