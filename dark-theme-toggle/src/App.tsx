import { useState } from "react";

import Navbar from "./components/Navbar";

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
      className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <Navbar />
    </div>
  );
};

export default App;
