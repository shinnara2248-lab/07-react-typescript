import React from 'react'

// 자식 검포넌트의 props타입선언
interface ChlidProps {
    sendClick: () => void;
}
// 자식 컴포넌트
function ChildCom({ sendClick }: ChlidProps) {
    return (
        <div>
            <h3>나는 자식</h3>
            <button onClick={sendClick}>부모의 메서드 실행</button>
        </div>
    )
}
export const EventProps1 = () => {
    const handleClick = () => {
        alert("자식버튼이 클릭되었습니다")
    }
    return (
        <div>
            <h2>부모</h2>
            <p>부모의 메서드를 자식 컴포넌트에 전달</p>
            <ChildCom sendClick={handleClick} />
        </div>
    )
}
// 부모함수를 자식 컴포넌트에 전달 매개변수 없는