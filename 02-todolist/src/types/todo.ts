export interface Todo {
    id: number;
    text: string;
    checked: boolean;
}

export interface TodoState {
    todos: Todo[];
    onAddTodos: (text: string) => void;
    onRemoveTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
    onRemoveAll: () => void;
}