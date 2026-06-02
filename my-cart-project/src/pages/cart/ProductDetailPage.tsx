import { useEffect, useMemo, useState } from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { getProductById, getSaleInfo } from "@/api/productService";
import type { Product, ProductVariant } from '@/shared/types/product';
import type { DiscountPolicyKey, DiscountPolicyValue } from '@/shared/policy/discountPolicy';
import { useParams } from 'react-router-dom';
import { getDiscountedPrice } from '@/shared/utils/priceFunc';
import { CustomSelect } from '@/components/common/CustomSelect';
import type { SelectedItemData } from '@/shared/types/selectedProduct';
import { SelectedItemCard } from '@/components/product/SelectProduct';
import type { PopupProps } from '@/shared/types/popup';
import { BasePopup } from '@/components/common/popup/BasePopup';
import { Image } from '@/components/common/Image';
export default function ProductDetailPage() {
    const { id } = useParams<{id: string}>();
    const [products, setProducts] = useState<Product | null >(null);
    const [sales, setSales] = useState<Record<DiscountPolicyKey, DiscountPolicyValue>>({});
    const [isLoading, setIsLoading] = useState(true);

    const [filters, setFilters] = useState({
    color: undefined as string | undefined,
    size: undefined as ProductVariant | undefined,
});


    // 메인 이미지
    const [mainImg, setMainImg] = useState('');

    // 선택한 아이템
    const [selectedProducts, setSelectedProducts] = useState<SelectedItemData[]>([]);

    // popup 제어
    type PopupConfig = Omit<PopupProps, 'onClose'>;
    const [popupConfig, setPopupConfig] = useState<PopupConfig| null>(null);


    useEffect(() => {
        if (!id) return;

        setIsLoading(true);
        
        Promise.all([
            getProductById(parseInt(id)),
            getSaleInfo()
        ]).then(([productData, saleData]) => {
            if (productData) {
                setProducts(productData);
                setMainImg(productData.detail.images[0]); // 상세 이미지 중 첫 번째를 메인으로 설정, 없으면 기본 이미지
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
        if(selectedProducts.length === 0) return;
        
        selectedProducts.forEach((v) => {
            console.log('in_v',v);
           return  addItem(v)
        });
        // alert("장바구니에 담겼습니다!");
         setPopupConfig({
            type:"alert", state:"success", 
            title:"성공", content:"장바구니에 담겼습니다!"
        });
    };


    const colorOptions = useMemo(() => 
    Array.from(new Set(products?.variants.map((v) =>(v.color))) || []),
    [products?.variants]
    );
console.log(colorOptions);
    const sizeOptions = useMemo(() => {
        if (!filters.color) return [];
        return products?.variants.filter((v) => v.color === filters.color)   ;
    }, [filters.color, products?.variants]);


    // total 가격 및 값
    const discountedPrice = getDiscountedPrice(products, sales ? sales : {});
    if (isLoading) return <div>로딩 중...</div>;
    const {material, thickness, flexibility} = products?.detail?.specs || {};
   // 수량 증가
const handleIncrease = (id: string | number) => {
    setSelectedProducts((prev) =>
        prev.map((item) => {
            if (item.id !== id) return item;
            
            const variant = products?.variants.find(
                (v) => `${products.id}-${v.color}-${v.size}` === id
            );
            
            if (variant && item.quantity >= variant.stock) {
                setPopupConfig({
                    type: "alert",
                    state: "error",
                    title: "재고 부족",
                    content: `선택하신 옵션의 최대 구매 가능 수량은 ${variant.stock}개입니다.`
                });
                return item;
            }
            
            return { ...item, quantity: item.quantity + 1 };
        })
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
    const changeSelect = (selectedOption: ProductVariant | undefined) => {
    if (!products || !selectedOption) return;
    
    if (!filters.color) {
        setPopupConfig({
            type: "alert",
            state: "error",
            title: "확인 필요",
            content: "색상을 선택해주세요."
        });
        return;
    }

    if (selectedOption.stock <= 0) {
        setPopupConfig({
            type: "alert",
            state: "error",
            title: "품절",
            content: "해당 옵션은 품절되었습니다."
        });
        return;
    }

        const curSize = selectedOption.size;
        const curColor = filters.color;
        const targetCombinationId = `${products.id}-${curColor}-${curSize}`;

        const isDuplicate = selectedProducts.some(p => p.id === targetCombinationId);

        if (isDuplicate) {
            const currentItem = selectedProducts.find(p => p.id === targetCombinationId);
            if (currentItem && currentItem.quantity >= selectedOption.stock) {
                setPopupConfig({
                    type: "alert",
                    state: "error",
                    title: "재고 부족",
                    content: "더 이상 수량을 추가할 수 없습니다."
                });
                return;
            }

            setSelectedProducts(prev =>
                prev.map(p => p.id === targetCombinationId ? { ...p, quantity: p.quantity + 1 } : p)
            );
            setFilters({ color: undefined, size: undefined });
            return;
        }

        const optionPrice = discountedPrice + (selectedOption.additionalPrice || 0);

        const newSelectedItem = { id: targetCombinationId,
                title: products.title,
                productId: products.id,
                color: String(curColor),
                size: String(curSize),
                price: optionPrice,
                quantity: 1,
                maxStock: Number(selectedOption?.stock ?? 0)}
        setSelectedProducts(prev => [
            ...prev,
            {
                id: targetCombinationId,
                title: products.title,
                productId: products.id,
                color: String(curColor),
                size: String(curSize),
                price: optionPrice,
                quantity: 1,
                maxStock: Number(selectedOption?.stock ?? 0)
            }
        ]);
        console.log("새로 추가되는 아이템 명세:", newSelectedItem);
        setFilters({ color: undefined, size: undefined });
    };

    // img mapping
    const imgList = [...products?.detail?.images || [], ...products?.detail?.contentImages || []].filter(Boolean);



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
               <Image src={mainImg} alt={mainImg || ''}/>
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
                    <h1>{products?.saleType !== 'NORMAL' && <p className='saleType'>{sales?.[products?.saleType || 'NORMAL'].label}</p>} {products?.title}</h1>
                    
                    <p className='desc'>{products?.detail.description}</p>
                    <div className='ratingWrap'></div>
                    <p>
                        <span className={`originPrice ${ products?.saleType === 'NORMAL' ? 'noSale':''}`}>{products?.basePrice.toLocaleString() ?? 0}원</span>
                    </p>
                    {products?.saleType !== 'NORMAL' && 
                    <p className='salePrice'>
                        <span>{discountedPrice.toLocaleString() ?? 0}원</span>
                        <span>{products?.saleType && sales?.[products?.saleType].rate}%</span>
                    </p>}
                </div>
                <hr/>
                <div className='productEctAction'>
                    <p>배송비</p>
                    <CustomSelect<string>
                   options={colorOptions ?? []}
                value={filters.color || null}
                onChange={(opt) => setFilters((prev) => ({ ...prev, color: opt }))}
                getLabel={(opt) => `${opt}`}
                    />
                    <CustomSelect
                options={sizeOptions ?? []}
                value={filters.size}
                onChange={(opt) => changeSelect(opt)}
                getLabel={(opt) => `${opt?.color} / ${opt?.size}`}
                renderOption={(opt) => {
                    const targetId = `${products?.id}-${opt?.color}-${opt?.size}`;
                    const selectedItem = selectedProducts.find(p => p.id === targetId);
                    const displayStock = (opt?.stock || 0) - (selectedItem?.quantity || 0);
                    return <div style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "10px" }}>
                        <span>{opt?.color} ({opt?.size})</span>
                        <span style={{ fontSize: "12px", color: "#666" }}>
                            {displayStock > 0 ? `${displayStock}개 남음` : '품절'}
                            {(opt?.additionalPrice || 0) > 0 && ` (+${opt?.additionalPrice.toLocaleString()}원)`}
                        </span>
                    </div>
                }}
            />
                   <div className='selectedProduct'>
                    {selectedProducts.map((p) => (
                        <SelectedItemCard
                            key={p.id}
                            id={p.id}
                            color={p.color}
                            size={p.size}
                            productId={p.productId}
                            price={discountedPrice}
                            maxStock={p.maxStock}
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
                        {/* <button className='btn primary lg'>바로구매</button> */}
                        <button className={`btn primary lg ${selectedProducts.length === 0 && 'disabled'}`} onClick={handleAddToCart}>장바구니 추가</button>
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
            {popupConfig && <BasePopup
                type={popupConfig.type}
                state={popupConfig.state}
                title={popupConfig.title}
                content={popupConfig.content}
                onConfirm={popupConfig.onConfirm}
                onClose={() => setPopupConfig(null)} // [닫기] 혹은 [취소] 시 null로 초기화
            />}
        </div>
    )
}