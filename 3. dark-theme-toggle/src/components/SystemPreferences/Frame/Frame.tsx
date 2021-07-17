const Frame: React.FC<{}> = ({ children }) => {
  return (
    <div className="bg-gray-100 rounded-lg w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-1/2 m-auto shadow-lg relative top-20 dark:bg-dark-outerBody dark:border-gray-600 border">
      {/* Top bar */}
      <div className="flex items-center dark:bg-dark-title">
        <div className="flex w-full p-1 items-center">
          <div className="h-3 w-3 rounded-full bg-red-500 mx-1 text-xs flex items-center justify-center text-red-500 hover:text-black cursor-default font-semibold">
            x
          </div>
          <div className="h-3 w-3 rounded-full bg-yellow-400 mx-1 text-xs flex items-center justify-center text-yellow-400 hover:text-black cursor-default font-semibold">
            -
          </div>
          <div className="h-3 w-3 rounded-full bg-gray-500 mx-1"></div>
          <div className="flex items-center mx-2 text-black dark:text-gray-100">
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
            className="h-7 w-7 hover:bg-gray-300 transfition duration-200 rounded-md p-1 text-gray-500 dark:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <p className="font-bold text-gray-600 text-sm cursor-default mx-1 dark:text-white">
            Desktop & Screen Saver
          </p>
          <div className="flex items-center mr-0.5 rounded-sm justify-end flex-1">
            <div className="xs:flex items-center rounded-sm py-0.5 px-1 border border-gray-400 dark:border-gray-600 dark:text-gray-500 hidden">
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
                className="rounded-r-sm outline-none bg-gray-100 text-xs font-medium dark:bg-dark-title dark:text-white"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center top-12 justify-center absolute w-full text-xs font-medium cursor-default">
        <div className="rounded-l-md px-2 bg-white border-l border-t border-b border-gray-300 py-0.5 dark:text-white dark:bg-dark-dropDowns dark:border-gray-600">
          Desktop
        </div>
        <div className="rounded-r-md px-2 bg-gray-200 border-r border-t border-b border-gray-300 py-0.5 dark:text-white dark:bg-dark-innerBody dark:border-gray-600">
          Screen Saver
        </div>
      </div>
      <div className="rounded-md mx-4 mt-6 p-5 bg-gray-200 dark:bg-dark-innerBody">
        {children}
      </div>
      <br />
    </div>
  );
};

export default Frame;
