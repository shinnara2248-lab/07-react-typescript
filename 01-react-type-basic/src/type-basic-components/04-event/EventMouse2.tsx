import React, { useState } from 'react'

export const EventMouse2 = () => {

    const [isHover, setIsHover] = useState<boolean>(false);
    // 마우스 호버시 호출
    const handleOver = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.target);
        setIsHover(true);
    }
    // 마우스 아웃시 호출
    const handleOut = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log(e.target);
        setIsHover(false);
    }
    return (
        <div>
            <h2>mouseevent - hover,out</h2>
            <div className={`box ${isHover ? "active" : ""}`} onMouseOver={handleOver} onMouseOut={handleOut}>마우스를 올려보세요</div>
        </div>
    )
}
