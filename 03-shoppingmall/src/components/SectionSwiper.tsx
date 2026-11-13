import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useProductStore } from '../store/useProductStore';
import { Link } from 'react-router-dom';
import "swiper/css"
import { ProductItem } from './ProductItem';

interface Props {
    category: string;
    count: number;
}
export const SectionSwiper = ({ category, count }: Props) => {
    const { onItemsCategory } = useProductStore();
    const cateItem = onItemsCategory(category);
    return (
        <div>
            <Swiper
                spaceBetween={40}
                slidesPerView={count}
            >
                {cateItem.map((cate, id) => (
                    <SwiperSlide>
                        <Link to={`/product/${cate.id}`}>
                            <ProductItem sendItem={cate}/>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
