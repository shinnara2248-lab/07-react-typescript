import React from 'react'
// type interface로 선언하기
interface UserProps {
    name: string;
    age: number;
    isAdult: boolean;
}
export const Props3 = ({ name, age, isAdult }: UserProps) => {
    return (
        <div>
            <h3>속성 변수가 여러개인 경우</h3>
            <p>interface 타입 선언해서 사용하기</p>
            <p> {name}는 /나이가 {age} 얼마이고, {isAdult ? "성인" : "이린이"}입니다.</p>
        </div>
    )
}
