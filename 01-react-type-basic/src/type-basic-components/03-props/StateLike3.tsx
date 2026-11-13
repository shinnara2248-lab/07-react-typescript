import React, { useState } from 'react'

export const StateLike3 = () => {
    const [count, setCount] = useState<number>(0);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const handleLike = () => {
        setCount((prev) => (isLiked ? prev - 1 : prev + 1));
        setIsLiked((prev) => !prev);
    }
    return (
        <div>
            <h2>좋아요 버튼</h2>
            <p>좋아요 : {count}</p>
            <button onClick={handleLike}>{isLiked ? "🧡" : "💙"}</button>
        </div>
    )
}
