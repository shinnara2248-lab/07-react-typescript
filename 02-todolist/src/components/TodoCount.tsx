import React from 'react'
import { useTodoStore } from '../store/UseTodoStore'

export const TodoCount = () => {
    const { todos } = useTodoStore();
    const total = todos.length;
    const remain = todos.filter(todo => !todo.checked).length;

    return (
        <div>
            <p>전체 할일: {total}</p>
            <p>남은 할일: {remain}</p>
        </div>
    )
}
