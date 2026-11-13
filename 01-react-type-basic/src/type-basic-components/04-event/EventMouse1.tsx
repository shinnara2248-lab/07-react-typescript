import React from 'react'

export const EventMouse1 = () => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("클릭", e);
    }
    return (
        <div>
            <h2>mouseevent - click</h2>
            <button onClick={handleClick}>클릭</button>
        </div>
    )
}
