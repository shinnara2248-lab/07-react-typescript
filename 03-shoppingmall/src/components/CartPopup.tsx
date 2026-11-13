import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    onClose: () =>void;
}
export const CartPopup = ({ onClose }: Props) => {
    return (
        <div className='popup-wrap'>
            <div className="popup">
                <h2>장바구니에 추가되었습니다</h2>
                <div>
                    <button onClick={onClose}>게속기쇼핑하기</button>
                    <Link to="/cart">카트보기</Link>
                </div>
            </div>
        </div>
    )
}
