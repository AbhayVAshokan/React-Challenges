import AppleLogo from "../../assets/icons/apple.svg";
import BatteryIcon from "../../assets/icons/battery.svg";

// Get current date and time
const getDateAndTime = () => {
  const date = new Date();
  return `${date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
    weekday: "short",
  })}`;
};

const Navbar: React.FC<{}> = () => {
  const menuItems: Array<string> = ["Edit", "View", "Window", "Help"];

  return (
    <nav className="flex w-full backdrop-blur-lg text-white text-sm font-medium items-center justify-between">
      {/* Menu bar */}
      <div className="flex items-center">
        <img
          src={AppleLogo}
          alt="Apple Logo"
          className="w-8 h-6 ml-1 -mr-1 cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm"
        />
        <p className="px-2 rounded-xm font-bold cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm">
          System Preferences
        </p>
        {menuItems.map((item, index) => (
          <p
            className="px-2 cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>

      {/* Icons */}
      <div className="flex items-center">
        <div className="flex items-center px-2 cursor-default hover:bg-white hover:bg-opacity-25 rounded-sm">
          <p className="text-xs font-medium">100%</p>
          <img src={BatteryIcon} alt="Battery Icon" className="w-8 h-6" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-8 px-2 cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-8 cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm px-2"
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
        <div className="cursor-default hover:bg-white hover:bg-opacity-25 py-0.5 rounded-sm px-2 mr-1">
          {getDateAndTime()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
