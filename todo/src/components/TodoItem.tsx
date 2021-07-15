interface Props {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  completedTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({
  id,
  title,
  description,
  completed,
  completedTodo,
  removeTodo,
}) => {
  return (
    <div className="flex justify-between">
      <div className="flex cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => completedTodo(id)}
        />
        <div>
          <h3 className={[completed ? "strike" : ""].join(" ")}>{title}</h3>
          <p className={[completed ? "" : ""].join(" ")}>{description}</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => removeTodo(id)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  );
};

export default TodoItem;
