import { useState } from "react";

import Navbar from "./components//Navbar/Navbar";
import SystemPreferences from "./components/SystemPreferences/SystemPreferences";

// Importing all wallpapers
import Loki from "./assets/images/loki.jpg";
import Batman from "./assets/images/batman.jpg";

const App: React.FC<{}> = () => {
  // List of all wallpapers
  const wallpapers = [Loki, Batman];

  // Current wallpaper
  const [wallpaper, setWallpaper] = useState(wallpapers[0]);

  return (
    <div
      className="w-screen h-screen bg-cover relative"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Navbar />
      <SystemPreferences />
    </div>
  );
};

export default App;
