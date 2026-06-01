// home
import { useState } from 'react';

// swiper   
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CustomSelect } from '@/components/common/CustomSelect';
import { DISCOUNT_POLICIES } from '@/shared/policy/discountPolicy';
// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Image } from '@/components/common/Image';
// import { MAIN_TABS } from '@/constants/tabNav'; // 정의된 탭 가져오기
import { PRODUCTS } from '@/constants/products';
import { CardItem } from '@/components/cart/CartItem';
import { SALE_TYPES, type SaleType } from '@/shared/types/product';


export default function ProductListPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // 페이지 별 노출 갯수
    const totalPages = Math.ceil(PRODUCTS.length / itemsPerPage); // 전체 페이지 갯수

    const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = PRODUCTS.slice(indexOfFirstItem, indexOfLastItem);
    
    
    const orderBy = ['높은 할인 순','높은 가격 순','낮은 가격 순'];
    const banners = [
    { 
      id: 1, 
      imgUrl: "/images/banners/banner1.jpg", 
      link: "/promotion/1",
      badge: "NEW ARRIVALS",
      title: "익숙함에 특별함을 더한, 우리의 매일",
      highlight: "우리의 매일",
      description: "탄탄한 소재와 정제된 실루엣으로 완성하는 데일리 룩 리스트를 만나보세요."
    },
    { 
      id: 2, 
      imgUrl: "/images/banners/banner2.jpg", 
      link: "/product/45",
      badge: "SEASON OFF",
      title: "계절을 닮은 단정함에 대하여",
      highlight: "단정함에 대하여",
      description: "가볍게 걸치기 좋은 오버핏 셔츠부터 트렌디한 와이드 데님까지"
    }
  ];
    const [order, setOrder] = useState('높은 할인 순');
    const [tab, setTab] = useState<SaleType | 'ALL'>('ALL');

    return (    
        <div className="home">
            <div className="sliderWrap">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="w-full"
              >
                {banners.map((banner) => (
                  <SwiperSlide key={banner.id}>
                    <div className="sliderWrap">
                      <div className="sliderImage">
                        <Image 
                          src={banner.imgUrl} 
                          alt={banner.title} 
                        />
                      </div>

                      <div className="mainBannerBg" />
                
                      <div className="mainBannerWrap">
                        <span className="mainBannerBadge">{banner.badge}</span>

                        <h2 className="mainBannerTitle">
                          {banner.title.split(banner.highlight)[0]}
                          <span className="mainBannerH">{banner.highlight}</span>
                        </h2>

                        <p className="mainBannerDesc">{banner.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="bottomContent">
                <nav className="tabWrap">
                    <ul className='tabCon'>
                        <li className={'ALL' === tab ? 'active':''} onClick={() => setTab('ALL')}>ALL</li>
                        {
                            SALE_TYPES.map((x) => (
                                <li onClick={() => setTab(x)} className={x === tab ? 'active':''} key={x}>{x}</li>
                            ))
                        }
                    </ul>
                    {/* <select>
                        {
                            orderBy.map((x,i) => (
                                <option key={i}>{x}</option>
                            ))
                        }
                    </select> */}
                    <CustomSelect<string>
                   options={orderBy ?? []}
                value={order || ''}
                onChange={(opt) => setOrder(opt)}
                getLabel={(opt) => `${opt}`}
                    />
                </nav>
                <div className="listWrap">
                    {
                    currentProducts
                    .filter((x) => tab === 'ALL' || x.saleType === tab)
                    .sort((a, b) => {
                        console.log(order);
                      if (order === '높은 가격 순') return (b.basePrice * (1 - (DISCOUNT_POLICIES[b.saleType].rate / 100))) - (a.basePrice * (1 - (DISCOUNT_POLICIES[a.saleType].rate / 100)));
                      if (order === '낮은 가격 순') return (a.basePrice * (1 - (DISCOUNT_POLICIES[a.saleType].rate / 100))) - (b.basePrice * (1 - (DISCOUNT_POLICIES[b.saleType].rate / 100)));
                      if (order === '높은 할인 순') return DISCOUNT_POLICIES[b.saleType].rate - DISCOUNT_POLICIES[a.saleType].rate;
                      return 0;
                    }).map((x) => <CardItem key={x.id} product={x} />)  
                    }
                </div>
            </div>
            {/* pagination */}
            <div className="paginationWrap">
                <button 
                className="pageBtn prevBtn"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                >
                &lt;
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`pageBtn ${currentPage === pageNumber ? 'active' : ''}`}
                    onClick={() => setCurrentPage(pageNumber)}
                >
                    {pageNumber}
                </button>
                ))}

                <button 
                className="pageBtn nextBtn"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                >
                &gt;
                </button>
            </div>
            {/*== pagination end */}
        </div>
    )
}