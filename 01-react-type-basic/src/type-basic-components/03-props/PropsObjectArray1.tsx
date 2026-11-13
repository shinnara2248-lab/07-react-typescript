
import React from 'react'

interface ProfileType {
    sName: string;
    sAge: number;
    sGender: boolean;
}

function Profile({ sName, sAge, sGender }: ProfileType) {
    return (
        <div>
            <h2>이름: {sName}</h2>
            <p><strong>나이: {sAge}</strong></p>
            <p>
                <strong>성별: {sGender ? '여성' : '남성'}</strong>
            </p>
        </div>
    )
}

const persons = [
    { id: 1, name: "신나라", age: 25, gender: true },
    { id: 2, name: "정보미", age: 28, gender: true },
    { id: 3, name: "변다솜", age: 23, gender: true },
    { id: 4, name: "도로롱", age: 29, gender: false },
]

export const PropsObjectArray1 = () => {
    return (
        <div>
            <h2>컴포넌트 합성</h2>

            {/* <Profile
                sName={persons[0].name}
                sAge={persons[0].age}
                sGender={persons[0].gender}
            />

            <Profile
                sName={persons[1].name}
                sAge={persons[1].age}
                sGender={persons[1].gender}
            /> */}

            {persons.map((p) => (
                <Profile
                    key={p.id}
                    sName={p.name}
                    sAge={p.age}
                    sGender={p.gender}
                />
            ))}
        </div>
    )
}
