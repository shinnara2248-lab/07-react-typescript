// 상품 정보에 타입 설정하기
export interface Product {
    id: number;
    category: string;
    subcategory: string;
    title: string;
    price: number;
    image: string;
    description: string;
    rating: number;
}
// 카트 타입 설정하기 기본 상품에 size,count 추가
export interface CartItem extends Product{
    size:string;
    count:number;
}


// menu 타입 설정하기
export interface Menu{
    key:string;
    label:string;
    sub?:{
        key:string;
        lable:string
    }[]
}

// 전역변수에 대한 타입 설정하기
export interface ProductState{
    items:Product[];
    menus:Menu[];
    searchWord:string;
    onSetSearchWord:(word:string)=>void;
    searchWordAll:string;
    onSearchWordAll:(word:string)=>void;

    onFetchItems:()=>void;
    onItemsCategory:(cate?:string)=>Product[];

    cartItems:CartItem[];
    cartCount:number;
    totalPrice:number;
    onAddCart:(product:CartItem)=>void;
    onRemoveCart:(id:number,size:string)=>void;
    onPlusCount:(id:number,size:string)=>void;
    onMinusCount:(id:number,size:string)=>void;
    // onTotal:(cart:CartItem[])=>number;
}