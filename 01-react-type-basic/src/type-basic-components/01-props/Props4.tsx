import React from 'react'

interface UserColor {
    color: string;
    isColor: boolean;
}
export const Props4 = ({ color, isColor }: UserColor) => {
    return (
        <div>
            <h3>좋아하는 색찾기</h3>
            <p>내가 좋아하는 색은 {isColor ? color : "없어요"}</p>
        </div>
    )
}
