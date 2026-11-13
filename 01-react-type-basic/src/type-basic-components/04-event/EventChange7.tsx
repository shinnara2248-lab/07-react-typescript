import React, { useState } from 'react'

export const EventChange7 = () => {

    // 선택된 과일을 저장할 변수
    const [fruit, setFruit] = useState<string>("토종 다래");
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setFruit(e.target.value);
    }
    return (
        <div>
            <h2>select</h2>
            <p>좋아하는 과일은 : {fruit}</p>
            <select value={fruit} onChange={handleSelect}>
                <option value="토종 다래">토종 다래</option>
                <option value="설아 복숭아">설아 복숭아</option>
                <option value="영암 무화과">영암 무화과</option>
                <option value="허니듀 멜론">허니듀 멜론</option>
                <option value="황금향">황금향</option>
            </select>
        </div>
    )
}
