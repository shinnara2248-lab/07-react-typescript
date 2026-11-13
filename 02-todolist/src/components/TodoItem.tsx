import React from 'react'
import type { Todo } from '../types/todo'
import { useTodoStore } from '../store/UseTodoStore'

interface Props {
    sendTodo: Todo
}
export const TodoItem = ({ sendTodo }: Props) => {
    const { onToggleTodo, onRemoveTodo } = useTodoStore();
    return (
        <li>
            <span className={`${sendTodo.checked ? "toggle" : ""}`} onClick={() => onToggleTodo(sendTodo.id)}>
                {sendTodo.text}
            </span>
            <button onClick={() => onRemoveTodo(sendTodo.id)}>삭제</button>
        </li>
    )
}
