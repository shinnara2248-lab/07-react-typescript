import React, { useEffect, useState } from 'react'

interface Post {
    id: number;
    title: string;
}
export const StateObjectArrayFetch6 = () => {
    const [posts, setPost] = useState<Post[]>([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => {
                console.log("외부데이터", json);
                setPost(json);
            })
    }, [])
    return (
        <div>
            <h2>상태변수 - 오브젝트배열</h2>
            <p>외부 데이터 연동하기</p>
            <p></p>
            <ul>
                {posts.map((p) => <li key={p.id}>{p.title}</li>)}
            </ul>
        </div>
    )
}
