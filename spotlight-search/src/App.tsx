import { useState } from "react";
import InputField from "./components/InputField";
import Suggestions from "./components/Suggestions";
import words from "./resources/words";

const App = () => {
  // Input value
  const [value, setValue] = useState<string>("");

  // Input placeholder
  const [placeholder, setPlaceholder] = useState<string>("");

  // Function to filter the suggestions according to the current input value
  const getSuggestions = () => {};

  return (
    <>
      <InputField />
      <Suggestions />
    </>
  );
};

export default App;
