import { useState } from "react";
import SettingsModal from "../settings/settings-modal";
import StatusStyle1 from "../../ui/status-styles/status-style-1";
import StatusStyle2 from "../../ui/status-styles/status-style-2";
import StatusStyle3 from "../../ui/status-styles/status-style-3";
import StatusStyle4 from "../../ui/status-styles/status-style-4";

const Hud = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-full">
      <img
        className="absolute object-cover"
        src={`${process.env.PUBLIC_URL}/assets/bg.svg`}
        alt="background"
      />

      <button
        className="absolute top-10 left-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        Open Settings
      </button>
      <div className="absolute bottom-10 left-10 h-20 flex items-center justify-center gap-x-10">
        <StatusStyle1
          status={{
            armor: 20,
            energy: 30,
            health: 50,
            hungry: 20,
            hydration: 100,
            stress: 10,
          }}
        />
        <StatusStyle2
          status={{
            armor: 20,
            energy: 30,
            health: 50,
            hungry: 20,
            hydration: 100,
            stress: 10,
          }}
        />
        <StatusStyle3
          status={{
            armor: 20,
            energy: 30,
            health: 50,
            hungry: 20,
            hydration: 100,
            stress: 10,
          }}
        />
        <StatusStyle4
          status={{
            armor: 20,
            energy: 30,
            health: 50,
            hungry: 20,
            hydration: 100,
            stress: 10,
          }}
        />
      </div>

      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hud;
