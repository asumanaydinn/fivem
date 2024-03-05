import { useState } from "react";
import SettingsModal from "../settings/settings-modal";
import StatusStyle1 from "../../ui/status-styles/status-style-1";
import StatusStyle2 from "../../ui/status-styles/status-style-2";
import StatusStyle3 from "../../ui/status-styles/status-style-3";
import StatusStyle4 from "../../ui/status-styles/status-style-4";
import StatusStyle5 from "../../ui/status-styles/status-style-5";
import StatusStyle6 from "../../ui/status-styles/status-style-6";
import StatusStyle7 from "../../ui/status-styles/status-style-7";
import Menu from "../menu";
import { useSettings } from "../../../contexts/SettingsContext";
import SpeedoMeter1 from "../../ui/speedometer-styles/speedometer-1";
import SpeedoMeter2 from "../../ui/speedometer-styles/speedometer-2";
import SpeedoMeter3 from "../../ui/speedometer-styles/speedometer-3";
import SpeedoMeter4 from "../../ui/speedometer-styles/speedometer-4";
import SpeedoMeter5 from "../../ui/speedometer-styles/speedometer-5";
import SpeedoMeter6 from "../../ui/speedometer-styles/speedometer-6";
import SpeedoMeter7 from "../../ui/speedometer-styles/speedometer-7";
import SpeedoMeter8 from "../../ui/speedometer-styles/speedometer-8";
import SpeedoMeter9 from "../../ui/speedometer-styles/speedometer-9";
import SpeedoMeter10 from "../../ui/speedometer-styles/speedometer-10";

const Hud = () => {
  const { settings } = useSettings();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-full">
      <img
        className="absolute object-cover"
        src={`${process.env.PUBLIC_URL}/assets/bg.svg`}
        alt="background"
      />
      <div className="absolute bottom-10 left-10 flex flex-col gap-y-2">
        <Menu />
        {settings.status.statusStyleType === "1" && (
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
        )}{" "}
        {settings.status.statusStyleType === "2" && (
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
        )}{" "}
        {settings.status.statusStyleType === "3" && (
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
        )}{" "}
        {settings.status.statusStyleType === "4" && (
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
        )}{" "}
        {settings.status.statusStyleType === "5" && (
          <StatusStyle5
            status={{
              armor: 20,
              energy: 30,
              health: 50,
              hungry: 20,
              hydration: 100,
              stress: 10,
            }}
          />
        )}
        {settings.status.statusStyleType === "6" && (
          <StatusStyle6
            status={{
              armor: 20,
              energy: 30,
              health: 50,
              hungry: 20,
              hydration: 100,
              stress: 10,
            }}
          />
        )}
        {settings.status.statusStyleType === "7" && (
          <StatusStyle7
            status={{
              armor: 20,
              energy: 30,
              health: 50,
              hungry: 20,
              hydration: 100,
              stress: 10,
            }}
          />
        )}
      </div>

      <button
        className="absolute top-10 left-10 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        Open Settings
      </button>

      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="absolute bottom-10 right-10">
        {settings.speedometers.speedometerType === "1" && <SpeedoMeter1 />}{" "}
        {settings.speedometers.speedometerType === "2" && <SpeedoMeter2 />}
        {settings.speedometers.speedometerType === "3" && <SpeedoMeter3 />}
        {settings.speedometers.speedometerType === "4" && <SpeedoMeter4 />}
        {settings.speedometers.speedometerType === "5" && <SpeedoMeter5 />}
        {settings.speedometers.speedometerType === "6" && <SpeedoMeter6 />}
        {settings.speedometers.speedometerType === "7" && <SpeedoMeter7 />}
        {settings.speedometers.speedometerType === "8" && <SpeedoMeter8 />}
        {settings.speedometers.speedometerType === "9" && <SpeedoMeter9 />}
        {settings.speedometers.speedometerType === "10" && <SpeedoMeter10 />}
      </div>
    </div>
  );
};

export default Hud;
