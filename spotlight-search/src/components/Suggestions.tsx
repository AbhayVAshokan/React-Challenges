interface Props {
  suggestions: Array<string>;
  onClick: (choice: string) => void;
}

const Suggestions: React.FC<Props> = ({ suggestions, onClick }) => {
  return (
    <ul className="w-2/5 p-3 rounded-b-2xl bg-opacity-75 bg-gray-800 max-h-96 overflow-scroll backdrop-filter backdrop-blur-sm shadow-2xl">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => {
            onClick(suggestion);
          }}
          className="text-white hover:bg-blue-500 cursor-pointer mt-1 rounded-sm pl-2 pr-2"
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
