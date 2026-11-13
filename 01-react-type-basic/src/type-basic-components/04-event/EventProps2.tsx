import React, { useState } from 'react'

interface ChildProps {
    sendMsg: (m: string) => void;
}
// 자식컴포넌트
function Child({ sendMsg }: ChildProps) {
    return (
        <div>
            <h3>나는 자식</h3>
            <button onClick={()=>sendMsg("안녕하세요")}>부모에게 메세지 전달</button>
        </div>
    )
}
export const EventProps2 = () => {

    // 메세지를 저수할 변수
    const [msg, setMsg] = useState<string>("");
    // 변경할 메서드
    const handleMsg = (m: string) => {
        setMsg(m);
    }
    return (
        <div>
            <h2>부모</h2>
            <p>전달받은 메세지: {msg}</p>
            <Child sendMsg={handleMsg} />
        </div>
    )
}
// 자식이 부모함수에 문자를 전달하고, 부모가 전달받은 값을 state에 저장하기
