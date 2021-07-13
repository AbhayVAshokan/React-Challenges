interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputField: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input value={value} onChange={onChange} placeholder="Spotlight Search" />
  );
};

export default InputField;
