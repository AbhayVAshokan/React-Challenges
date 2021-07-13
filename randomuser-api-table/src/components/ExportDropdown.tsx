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
    <div className="relative inline-block">
      <button
        className="flex"
        onClick={() => setShowDropdown((show: boolean) => !show)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
        <div className="absolute">
          <CSVLink data={exportData}>Export as .csv</CSVLink>
        </div>
      )}
    </div>
  );
};

export default ExportDropdown;
