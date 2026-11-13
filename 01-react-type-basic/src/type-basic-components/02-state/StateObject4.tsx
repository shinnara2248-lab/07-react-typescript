import React, { useState } from 'react'

interface UserType {
    name: string;
    age: number;
}
export const StateObject4 = () => {
    // 사용자 정보를 저장할 변수, 이름, 나이
    // const [user, setUser] = useState<{ name: string; age: number }>({ name: "", age: 0 });
    const [user, setUser] = useState<UserType>({
        name: "",
        age: 0
    })
    return (
        <div>
            <h2>상태변수 - 오브젝트</h2>
            <p>{user.name} / {user.age}</p>
        </div>
    )
}
