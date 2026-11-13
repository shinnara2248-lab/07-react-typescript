import React from 'react'

export const Props2 = ({ name, age, tel }: { name: string, age: number, tel: string }) => {
    return (
        <div>
            <h3>속성변수가 여러개인 경우</h3>
            <p></p>
            <p>안녕 {name}야, 너는 {age}나이가 전화는 {tel}</p>
        </div>
    )
}
