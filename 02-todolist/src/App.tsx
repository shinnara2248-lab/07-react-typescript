import './App.css'
import { TodoCount } from './components/TodoCount'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {

  return (
    <>
      <div className="todo-list">
        <h2>오늘의 할 일</h2>
        <TodoForm />
        <TodoList />
        <TodoCount />
      </div>
    </>
  )
}

export default App