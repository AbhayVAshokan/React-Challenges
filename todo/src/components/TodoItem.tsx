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
    <div
      className={[
        "flex",
        "justify-between",
        "bg-gray-50",
        "rounded-lg",
        "py-2",
        "px-5",
        "my-2",
        "transition",
        "duration-200",
        "hover:scale-105",
        "hover:bg-gray-100",
        "hover:inner-shadow-gray-100",
        "shadow-sm",
        completed ? "opacity-60" : "opacity-100",
      ].join(" ")}
    >
      <div className="flex cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => completedTodo(id)}
          className="h-4 w-4 cursor-pointer mr-2 mt-1"
        />
        <div>
          <h3
            className={[
              completed ? "line-through" : "",
              completed ? "text-gray-400" : "text-black",
              "font-bold",
              "text-lg",
            ].join(" ")}
          >
            {title}
          </h3>
          <p
            className={[
              completed ? "text-gray-300" : "text-gray-700",
              "text-xs",
            ].join(" ")}
          >
            {description}
          </p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 my-auto cursor-pointer transition duration-200 hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#BDBDBD"
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
