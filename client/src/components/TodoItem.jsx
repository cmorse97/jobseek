export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.is_completed}
        onChange={() => onToggle(todo.id, !todo.is_completed)}
      />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
