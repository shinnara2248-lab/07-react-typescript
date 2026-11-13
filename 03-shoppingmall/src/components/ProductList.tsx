import React, { useState } from 'react'
import { useProductStore } from '../store/useProductStore';
import { ProductItem } from './ProductItem';
import "./scss/ProductList.scss"
import { Link } from 'react-router-dom';

interface Props {
    category?: string;
}
type sortType = "popular" | "priceLow" | "priceHigh" | "name";
export const ProductList = ({ category }: Props) => {
    const { searchWord, onItemsCategory } = useProductStore();
    const cateItems = onItemsCategory(category);

    // 검색어에 맞는 상품만 필터링
    const searchItem = cateItems.filter((product) =>
        product
            .title
            .toLocaleLowerCase()
            .includes(searchWord.trim().toLocaleLowerCase())
    )


    // 정렬기준 변경할 변수
    const [sortType, setSortType] = useState<sortType>("popular");
    // 정렬 기준에 따라 상품 목록을 저장할 변수
    const sortedItems = [...searchItem];

    switch (sortType) {
        case "popular":
            // 평점이 높은 순으로 정렬
            sortedItems.sort((a, b) => b.rating - a.rating);
            break;

        case "priceLow":
            sortedItems.sort((a, b) => a.price - b.price);
            break;

        case "priceHigh":
            sortedItems.sort((a, b) => b.price - a.price);
            break;

        case "name":
            sortedItems.sort((a, b) => a.title.localeCompare(b.title, 'ko'));
            break;
        default:
            break;
    }
    return (
        <div className='sub-goods-wrap'>
            <div className='sort-buttons'>
                <button type='button'
                    className={sortType === "popular" ? "active" : ""}
                    onClick={() => setSortType("popular")}
                >인기순</button>
                <button type='button'
                    className={sortType === "priceLow" ? "active" : ""}
                    onClick={() => setSortType("priceLow")}
                >가격 낮은순</button>
                <button type='button'
                    className={sortType === "priceHigh" ? "active" : ""}
                    onClick={() => setSortType("priceHigh")}
                >가격 높은순</button>
                <button type='button'
                    className={sortType === "name" ? "active" : ""}
                    onClick={() => setSortType("name")}
                >상품명순</button>
            </div>
            <div className='sub-goods-list'>
                {sortedItems.map((product) => (
                    <Link to={`/product/${product.id}`}>
                        <ProductItem sendItem={product} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
