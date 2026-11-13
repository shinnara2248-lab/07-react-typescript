import React from 'react'
import { useTodoStore } from '../store/UseTodoStore'
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todos, onRemoveAll } = useTodoStore();
    return (
        <div>
            <button onClick={onRemoveAll}>전체삭제</button>
            <ul>
                {todos.map((todo) => (
                    <TodoItem sendTodo={todo} />
                ))}
            </ul>
        </div>
    )
}
