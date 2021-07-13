import { useState } from "react";

import words from "./resources/words";
import InputField from "./components/InputField";
import Suggestions from "./components/Suggestions";

const App: React.FC<{}> = () => {
  // Input value
  const [value, setValue] = useState<string>("");

  // Suggestions
  const [suggestions, setSuggestions] = useState<Array<string>>([]);

  // Function to filter the suggestions according to the current input value
  const getSuggestions = (value: string) => {
    if (value.length === 0) setSuggestions([]);
    else
      setSuggestions(
        words.filter((word) => word.toLowerCase().includes(value.toLowerCase()))
      );
  };

  // Function to perform onChange event in input
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    getSuggestions(e.target.value);
  };

  // Function to perform onClick function on individual suggestions
  const onSuggestionClick = (choice: string) => {
    setValue(choice);
  };

  return (
    <div className="h-screen bg-background bg-cover bg-no-repeat flex flex-col items-center">
      <InputField value={value} onChange={onInputChange} />
      <Suggestions suggestions={suggestions} onClick={onSuggestionClick} />
    </div>
  );
};

export default App;
