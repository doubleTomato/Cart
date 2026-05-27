// home
// swiper   
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Image } from '@/components/common/Image';
import { MAIN_TABS } from '@/constants/tabNav'; // 정의된 탭 가져오기
import { PRODUCTS } from '@/constants/products';
import { CardItem } from '@/components/cart/CartItem';

const banners = [
  { id: 1, imgUrl: "/images/banners/banner1.jpg", link: "/promotion/1" },
  { id: 2, imgUrl: "/images/banners/banner2.jpg", link: "/product/45" }
];

const orderBy = ['인기순','최신순','오래된순','높은 할인순'];
export default function ProductListPage() {
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
                    className="w-full h-[400px]"
                    >
                    {
                        banners.map((x, i) => (
                        <SwiperSlide>
                            <Image src={x.imgUrl} alt="{i+1}" classN="" />
                            {i}
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="bottomContent">
                <nav className="tapWrap">
                    <ul>
                        {
                            MAIN_TABS.map((x) => (
                                x.isActive ? <li key={x.id}>{x.label}</li> : ''
                            ))
                        }
                    </ul>
                    <select>
                        {
                            orderBy.map((x,i) => (
                                <option key={i}>{x}</option>
                            ))
                        }
                    </select>
                </nav>
                {/* 무한 스크롤 */}
                <div className="listWrap">
                    {
                    PRODUCTS.map((x) => (
                        <CardItem key={x.id} product={x}/>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}