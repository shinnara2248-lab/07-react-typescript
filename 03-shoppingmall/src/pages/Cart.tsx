import React from 'react'
import { SectionTitle } from '../components/SectionTitle'
import { useProductStore } from '../store/useProductStore'
import "./scss/Cart.scss"

export const Cart = () => {
  const { cartItems, onRemoveCart,onPlusCount,onMinusCount } = useProductStore();
  return (
    <div className='sub-page'>
      <div className="inner">
        <SectionTitle title="장바구니" />
        <div className="cart-wrap">
          <div className="cart-title">
            <div className="cart-title-left">
              <label htmlFor="">
                <input type="checkbox" />
              </label>
              <strong>상품정보</strong>
            </div>
            <div className="cart-title-right">
              <strong>주문 금액</strong>
              <strong>수량</strong>
            </div>
          </div>
          <div className="cart-list-wrap">
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.size}`}>
                  <div className="cart-left">
                    <label>
                      <input type="checkbox" />
                    </label>
                    <div>
                      <p><img src={item.image} alt={item.title} /></p>
                      <div className="cart-info">
                        <h3>{item.title}</h3>
                        <p>사이즈 : {item.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className="cart-right">
                    <div>
                      <p>{item.price}</p>
                      <p>{item.price * item.count}</p>
                    </div>
                    <div>
                      <button onClick={()=>onMinusCount(item.id,item.size)}>-</button>
                      <span>{item.count}</span>
                      <button onClick={()=>onPlusCount(item.id,item.size)}>+</button>
                      <button onClick={()=>onRemoveCart(item.id,item.size)}>삭제</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-bottom"></div>
        </div>
      </div>
    </div>
  )
}
