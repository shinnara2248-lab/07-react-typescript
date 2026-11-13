import React, { useState } from 'react'

interface ItemProps {
    kind: string;
    sendSelect: (kind: string) => void;
}
// 자식
function ItemList({ kind, sendSelect }: ItemProps) {
    return (
        <li>
            <span>{kind}</span>
            <button onClick={() => sendSelect(kind)}>선택</button>
        </li>
    )
}
export const EventProps3 = () => {
    // 선택한 과일의 종류를 저장할 변수
    const [fruit, setFruit] = useState<string>("")
    // 과일의 종류
    const fruits = ["사과", "딸기", "체리", "석류"];
    // 선택한 과일 변경하기 메서드
    const handleSelect = (f: string) => {
        setFruit(f);
    }
    return (
        <div>
            <h2>부모</h2>
            <p>선택한 과일은: {fruit}</p>
            <ul>
                {/* <ItemList kind="사과" sendSelect={handleSelect} />
                <ItemList kind="석류" sendSelect={handleSelect} /> */}
                {fruits.map((f) => (
                    <ItemList key={f} kind={f} sendSelect={handleSelect} />
                ))}
            </ul>
        </div>
    )
}
