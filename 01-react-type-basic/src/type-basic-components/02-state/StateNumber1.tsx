import React, { useState } from 'react'

export const StateNumber1 = () => {
    // 숫자를 저장할 변수
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>상태변수 - 숫자</h2>
            <p>숫자보이기, 증가 버튼을 클릭하면 숫자 1씩 증가</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>증가</button>
        </div>
    )
}
