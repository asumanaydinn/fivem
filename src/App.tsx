import React, { useState } from "react";
import SettingsModal from "./components/settings-modal";
import { SettingsProvider } from "./contexts/SettingsContext";
// import Speedometer from "./components/ui/speedometer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [speed, setSpeed] = useState(0);

  // const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSpeed(Number(event.target.value));
  // };

  return (
    <SettingsProvider>
      <div className="relative">
        <img
          className="absolute"
          src={`${process.env.PUBLIC_URL}/assets/bg.svg`}
          alt="background"
        />
        <div className="absolute">
          {/* <Speedometer speed={speed} maxSpeed={120} />
          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="120"
              value={speed}
              onChange={handleSpeedChange}
              className="w-full"
            />
          </div>
          <p className="text-center mt-2">Speed: {speed}</p> */}
          <button
            className="absolute px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Open Settings
          </button>
        </div>
        <SettingsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </SettingsProvider>
  );
}

export default App;
