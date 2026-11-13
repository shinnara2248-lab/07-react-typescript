import React, { useState } from 'react'

export const EventChange6 = () => {

    const [text, setText] = useState<string>("");
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return (
        <div>
            <h2>from event - change</h2>
            {/* 
            input <HTMLInputElement>
            radio, checkbox<HTMLInputElement>
            select <HTMLSelectElement>
            textarea<HTMLAreaElement>
            */}
            <p>입력한 글자는 : {text}</p>
            <input type="text" value={text} onChange={handleInput} />
        </div>
    )
}
