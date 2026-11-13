import React from 'react'

export const EventKeyboard3 = () => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log("누른키는:", e);
    }
    return (
        <div>
            <h2>keyboard event</h2>
            <input type="text" placeholder='글자를 입력하세요'
                onKeyDown={handleKeyDown} />
        </div>
    )
}
