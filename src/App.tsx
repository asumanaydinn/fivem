import React, { useState } from "react";
import SettingsModal from "./components/settings-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      <img
        className="absolute"
        src={`${process.env.PUBLIC_URL}/assets/bg.svg`}
        alt="background"
      />

      <button
        className="absolute px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        Open Settings
      </button>

      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
