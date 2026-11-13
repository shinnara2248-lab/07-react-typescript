import React, { useState } from 'react'

interface Todo {
    id: number;
    text: string;
    checked: boolean;
}
export const StateObjectArray5 = () => {
    const [text, setText] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = () => {
        setTodos((prev) => [...prev, { id: Date.now(), text: text, checked: false }])
    }
    return (
        <div>
            <h2>상태변수 - 오브젝트 배열</h2>
            <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={handleAddTodo}>추가</button>
            </p>
            <ul>
                {todos.map((todos, id) => (
                    <li key={id}>{todos.text}</li>
                ))}
            </ul>
        </div>
    )
}
