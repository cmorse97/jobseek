import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const response = await fetch('http://localhost:3000/api/todos');
        const todoData = await response.json();

        setTodos(todoData.todos);
      };

      fetchTodos();
    } catch (error) {
      console.error('Error fetching todo list', error);
    }
  }, []);

  const todoList = todos.map((todo) => {
    return (
      <div key={todo.id}>
        <h4>{todo.title}</h4>
      </div>
    );
  });

  const handleAddTodo = async (title) => {
    try {
      const response = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      });

      const todoData = response.json();
      setTodos(todoData.todos);
    } catch (error) {
      console.error('Failed to add todo:', error);
    }
  };

  return (
    <>
      <div>
        <TodoForm onAdd={handleAddTodo} />
      </div>
      <div>
        <h2>Todo List</h2>
        <div>{todoList}</div>
      </div>
    </>
  );
}
