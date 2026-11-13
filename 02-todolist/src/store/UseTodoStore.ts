import { create } from "zustand";
import type { TodoState } from "../types/todo";

export const useTodoStore = create<TodoState>((set, get) => ({
    // 오늘의 할일을 저장할 배열 변수
    todos: [],
    // 할일을 추가할 메서드
    onAddTodos: (text) => {
        const { todos } = get();
        set({
            todos: [...todos, {
                id: Date.now(),
                text: text,
                checked: false
            }]
        })
    },
    // 할 일 삭제
    onRemoveTodo: (id) => {
        // set((state) => ({
        //     todos: state.todos.filter((todo) => todo.id !== id)
        // }))
        const { todos } = get();
        set({
            todos: todos.filter((todo) => todo.id !== id)
        })
    },
    // 할 일 토글
    onToggleTodo: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        }))
    },
    // 전체 삭제
    onRemoveAll: () => {
        set({ todos: [] })
    }
}))