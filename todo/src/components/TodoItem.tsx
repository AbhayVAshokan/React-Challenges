interface Props {
  title: string;
  description: string;
  completed: boolean;
  completedTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({
  title,
  description,
  completed,
  completedTodo,
  removeTodo,
}) => {
  return (
    <li className="flex">
      <p>{title}</p> <p>{description}</p>
    </li>
  );
};

export default TodoItem;
