interface Props {
  suggestions: Array<string>;
  onClick: (choice: string) => void;
}

const Suggestions: React.FC<Props> = ({ suggestions, onClick }) => {
  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          onClick={() => {
            onClick(suggestion);
          }}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
