import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductState } from "../types/product";
import { productsData } from "../data/productsData";

export const useProductStore = create<ProductState>()(
    persist((set, get) => ({
        // 상품목록과 메뉴
        items: productsData,
        menus: [],

        // 검색
        searchWord: "",
        // 검색 실행 메서드
        onSetSearchWord: (word) => set({ searchWord: word }),

        // 전체 검색
        searchWordAll: "",
        // 전체 검색 메서드
        onSearchWordAll: (word) => set({ searchWordAll: word }),

        // 데이터를 불러올 메서드
        onFetchItems: () => {
            const item = get().items;
            const menu = get().menus;

            if (item.length > 0 && menu.length > 0) return;
            // 상품정보를 가져와서 data 변수에 저장하기
            const data = productsData;

            // 메뉴생성
            const labels: { [key: string]: string } = {
                men: "남자",
                women: "여자",
                accessories: "악세서리",
                shoes: "신발",
            }

            // 카테고리 분리하기
            // const categories=["all",data.map(item=>item.category)]
            // 중복되는 값은 한번만 사용하기
            // new Set(배열) 중복되는 요소를 제거하고 새로운 배열만들기
            const categories = ["all", ...new Set(data.map(item => item.category))]
            console.log(categories);
            const menus = categories.map((cate) => {
                if (cate === "all") {
                    return { key: "all", label: "모든", sub: [] }
                }
                return {
                    key: cate,
                    label: labels[cate],
                    sub: []
                }
            })
            set({
                items: data,
                menus
            })
            console.log(item, menus)

        },
        // 카테고리를 불러올 메서드
        onItemsCategory: (cate) => {
            const allItems = get().items;
            if (!cate || cate === "all") { return allItems }
            else {
                return allItems.filter((item) => item.category === cate)
            }
        },
        // 장바구니
        // 장바구니에 담긴 제품 정보
        cartItems: [],
        // 개수
        cartCount: 0,
        // 전체금액
        totalPrice: 0,
        // 장바구니에 삼품 추가할 메서드
        onAddCart: (product) => {
            const cart = get().cartItems;

            const existing = cart.find((item) => item.id === product.id && item.size === product.size)


            let updateCart;
            if (existing) {
                updateCart = cart.map((item) =>
                    item.id === product.id && item.size === product.size ? {
                        ...item, count: item.count + product.count
                    } : item)
            }
            else { updateCart = [...cart, { ...product }] }


            set({
                cartItems: updateCart,
                cartCount: updateCart.length
            })
        },
        onRemoveCart: (id, size) => {
            const cart = get().cartItems;

            const updateCart = cart.filter((item) => !(item.id === id && item.size === size))
            set({
                cartItems: updateCart,
                cartCount: updateCart.length
            })
        },
        onPlusCount: (id, size) => {
            const cart = get().cartItems;

            const updateCart = cart.map((item) => item.id === id && item.size === size ? { ...item, count: item.count + 1 } : item)
            set({ cartItems: updateCart })
        },
        onMinusCount: (id, size) => {
            const cart = get().cartItems;
            
            const updateCart = cart.map((item) => item.id === id && item.size === size ? { ...item, count: Math.max(1, item.count - 1) } : item)
            set({ cartItems: updateCart })
        },


        // 전체금액 계산 메서드
        // onTotal:(cart)=>{return},

    }), {
        name: "product-storage",
        partialize: (state) => ({

        }),
    })
)   