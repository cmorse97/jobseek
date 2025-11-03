import { useEffect, useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const response = await fetch('http://localhost:3000/todos');
        const todoData = await response.json();
        console.log('Todo list: ', todoData.data);
        setTodos(todoData.data);
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
        <p>{todo.description}</p>
      </div>
    );
  });

  return (
    <>
      <h2>Todo List</h2>
      <div>{todoList}</div>
    </>
  );
}
