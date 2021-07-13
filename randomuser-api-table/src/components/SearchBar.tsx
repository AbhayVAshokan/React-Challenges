import ExportDropdown from "./ExportDropdown";

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  exportData: Array<{
    name: string;
    gender: string;
    dob: string;
    email: string;
  }>;
}

const SearchBar: React.FC<Props> = ({ value, onChange, exportData }) => {
  return (
    <div className="flex justify-between bg-gray-50 p-2 rounded-2xl my-5 w-full">
      <div className="flex bg-white border-gray-200 rounded-xl shadow-md px-3 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-blue-900 my-auto mr-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          autoFocus
          placeholder="Search by name, gender, or email"
          onChange={onChange}
          className="outline-none text-sm w-full"
        />
      </div>
      <ExportDropdown exportData={exportData} />
    </div>
  );
};

export default SearchBar;
