const Frame: React.FC<{}> = ({ children }) => {
  return (
    <div className="rounded-2xl w-1/2 m-auto shadow-lg">
      {/* Top bar */}
      <div className="flex items-center">
        <div className="bg-gray-100 flex w-full p-1 items-center">
          <div className="h-3 w-3 rounded-full bg-red-500 mx-1 text-xs flex items-center justify-center text-red-500 hover:text-black cursor-default font-semibold">
            x
          </div>
          <div className="h-3 w-3 rounded-full bg-yellow-400 mx-1 text-xs flex items-center justify-center text-yellow-400 hover:text-black cursor-default font-semibold">
            -
          </div>
          <div className="h-3 w-3 rounded-full bg-gray-500 mx-1"></div>
          <div className="flex items-center mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-1 hover:bg-gray-300 transfition duration-200 rounded-md p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-1 p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#BDBDBD"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 hover:bg-gray-300 transfition duration-200 rounded-md p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#777777"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <p className="font-bold text-gray-600 text-sm cursor-default mx-1">
            Desktop & Screen Saver
          </p>
          <div className="flex items-center mr-0.5 rounded-sm justify-end flex-1">
            <div className="flex items-center rounded-sm py-0.5 px-1 border border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="rounded-r-sm outline-none bg-gray-100 text-xs font-medium"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-5">{children}</div>
    </div>
  );
};

export default Frame;
