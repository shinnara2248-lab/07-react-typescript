import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductStore } from '../store/useProductStore';
import { CartPopup } from '../components/CartPopup';

import "./scss/ProductDetail.scss";
import "../components/scss/CartPopup.scss"

const sizes = ["S", "M", "L"];

export const ProductDetail = () => {
  // 주소줄에 넘어온 파라메터값을 받아서 저장
  const { id } = useParams();
  // 
  const { items, onFetchItems, onAddCart } = useProductStore();

  // 상태변수
  // 갯수, 선택한 사이즈를 저장할 변수
  const [count, setCount] = useState<number>(1);
  const [selectSize, setSelectSize] = useState("");
  // 장바구니 담기 성공을 체크할 변수
  const [showCart, setShowCart] = useState(false);

  // 파라메터로 넘어온 id와 제품의 id를 비교해서 같은 제품찾기
  const product = items.find(item => item.id === Number(id));

  // 장바구니 버튼 클릭시 실행할 메서드
  const handleAddCart = () => {
    if (!product) return;
    if (!selectSize) {
      alert("사이즈를 선택해 주세요!")
      return;
    }
    const productCart = {
      ...product,
      size: selectSize,
      count: count
    }
    onAddCart(productCart);
    setShowCart(true);
  }
  // 팝업에서 계속 쇼핑하기를 클릭하면 팝업 사라지게
  const handleClosePopup = ()=>{
    setShowCart(false);
  }

  return (
    <div className='sub-page'>
      <div className="inner">
        <div className="product-wrap">
          <div className="product-img">
            <img src={product?.image} alt="" />
          </div>
          <div className="product-text">
            <h3>{product?.title}</h3>
            <p>{product?.description}</p>
            <p>{product?.price}</p>
            <div className='product-size'>
              <strong>사이즈</strong>
              <ul>
                {sizes.map((size, id) => (
                  <li key={id}><button
                    className={selectSize === size ? "active" : ""}
                    onClick={() => setSelectSize(size)}
                  >{size}</button></li>
                ))}
              </ul>
            </div>
            <div className='product-count'>
              <strong>수량</strong>
              <div className="count-wrap">
                <button onClick={() => setCount((c) => Math.max(1, c - 1))}>-</button>
                <span>{count}</span>
                <button onClick={() => setCount((c) => c + 1)}>+</button>
              </div>
            </div>
            <div className='cart-btn'>
              <button>찜하기</button>
              <button onClick={handleAddCart}>장바구니</button>
            </div>
          </div>
        </div>
      </div>
      {showCart && <CartPopup onClose={handleClosePopup}/>}
    </div>
  )
}
