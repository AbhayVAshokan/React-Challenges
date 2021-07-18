import { useState } from "react";

import { CSVLink } from "react-csv";

interface Props {
  exportData: Array<{
    name: string;
    gender: string;
    dob: string;
    email: string;
  }>;
}

const ExportDropdown: React.FC<Props> = ({ exportData }) => {
  // Toggle show/hide dropdown
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <div className="relative inline-block sm:mx-5 mx-1">
      <button
        className="flex p-2 border-2 border-gray-200 rounded-md shadow-md text-blue-900 bg-white font-bold transform duration-200 hover:scale-105 hover:bg-blue-50 items-center sm:text-base text-xs"
        onClick={() => setShowDropdown((show: boolean) => !show)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="sm:h-6 sm:w-6 h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Export
      </button>
      {showDropdown && (
        <div className="absolute bg-white shadow-md rounded-lg w-24 sm:w-36 h-10 flex items-center justify-center hover:bg-blue-100 font-semibold text-gray-500 text-xs sm:text-base">
          <CSVLink data={exportData}>Export as .csv</CSVLink>
        </div>
      )}
    </div>
  );
};

export default ExportDropdown;
