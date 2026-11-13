import React, { useState } from 'react'
import { useTodoStore } from '../store/UseTodoStore';

export const TodoForm = () => {
    // input에 글자를 입력하고 value로 적용되도록
    const [text, setText] = useState<string>("");
    const { onAddTodos } = useTodoStore();
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        onAddTodos(text);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type='submit'>추가</button>
        </form>
    )
}
