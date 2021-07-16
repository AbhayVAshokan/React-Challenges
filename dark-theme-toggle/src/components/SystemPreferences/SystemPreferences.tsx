import Frame from "./Frame/Frame";
import SideBar from "./SideBar/SideBar";

interface Props {
  wallpaper: string;
  wallpapers: Array<string>;
  onWallpaperChange: (wallpaper: string) => void;
}

const SystemPreferences: React.FC<Props> = ({
  wallpaper,
  wallpapers,
  onWallpaperChange,
}) => {
  return (
    <Frame>
      {/* Wallpaper Preview */}
      <div className="flex items-center">
        <img
          src={wallpaper}
          alt="Wallpaper preview"
          className="cover h-20 w-32 p-2 border-white border rounded-lg bg-gray-300"
        />
        <div className="flex items-center justify-between">
          <div className="text-sm bg-white rounded-sm pl-1 pr-0.5 flex items-center shadow-md ml-5 font-medium">
            <p className="w-40">Fill Screen</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-3 text-white bg-blue-500 rounded-t-sm px-0.5 cursor-default"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-3 text-white bg-blue-500 rounded-b-sm px-0.5 cursor-default"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Wallpaper Select */}
      <div className="flex bg-white w-full">
        <SideBar />
        <div className="border border-gray-300 flex flex-wrap justfy-start w-full pt-1 pb-2 pl-1">
          {wallpapers.map((wallpaper, index) => (
            <img
              src={wallpaper}
              alt="Wallpaper Thumbnail"
              key={index}
              className="cover w-13 h-16 mt-1 mx-1"
              onClick={() => onWallpaperChange(wallpaper)}
            />
          ))}
        </div>
      </div>

      <div className="flex mt-2">
        <div className="flex bg-white text-sm rounded-md shadow-md border border-gray-300 cursor-default">
          <p className="px-2 border-r border-gray-300">+</p>
          <p className="px-2">-</p>
        </div>
      </div>
    </Frame>
  );
};

export default SystemPreferences;
