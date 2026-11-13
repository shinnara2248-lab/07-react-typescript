import React from 'react'

export const Props1 = ({ name }: { name: string }) => {
    return (
        <div>
            <h3>부모로부터 props값 전달받기</h3>
            <p>안녕~{name}</p>
        </div>
    )
}
