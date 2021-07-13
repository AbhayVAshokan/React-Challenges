interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex bg-gradient-to-b from-black via-gray-800 to-black opacity-75 pl-2 pr-2 pt-1 pb-1 rounded-xl mt-52 w-2/5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 mt-auto mb-auto ml-2 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        value={value}
        onChange={onChange}
        placeholder="Spotlight Search"
        className="top-5 bg-gradient-to-b from-black via-gray-800 to-black opacity-75 text-4xl font-light text-white outline-none"
      />
    </div>
  );
};

export default InputField;
