import React, { useState } from 'react'

export const StateString2 = () => {
    const [text, setText] = useState<string>("");
    return (
        <div>
            <h2>상태변수 - 문자</h2>
            <p>입력할 글자 : {text}</p>
            <p><input type="text" onChange={(e) => setText(e.target.value)} /></p>
        </div>
    )
}
