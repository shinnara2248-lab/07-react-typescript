import React, { useState } from 'react'

export const StateArray3 = () => {
    // input의 데이터를 저장할 변수
    const [text, setText] = useState<string>("");
    // 추가를 했을때 내용을 저장할 변수
    const [todos, setTodos] = useState<string[]>([]);

    const handleAddText = (e: React.SubmitEvent) => {
        e.preventDefault();
        setTodos([...todos, text]);
        setText("");
    }
    return (
        <div>
            <h2>상태변수 문자 - 배열</h2>
            <form onSubmit={handleAddText}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type='submit'>추가</button>
            </form>
            <ul>
                {todos.map((text, id) => <li key={id}>{text}</li>)}
            </ul>
        </div>
    )
}
