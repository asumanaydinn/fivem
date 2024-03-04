import React from "react";
import { useSettings } from "../contexts/SettingsContext";
import { SpeedTypeIcon } from "./icons/speed-type-icon";
import ListItem from "./settings-item";
import SpeedometerSettingsItem from "./speedometer-setting-item";

// Import all speedometer components
import SpeedoMeter1 from "./ui/speedometer-1";
import SpeedoMeter2 from "./ui/speedometer-2";
import SpeedoMeter3 from "./ui/speedometer-3";
import SpeedoMeter4 from "./ui/speedometer-4";
import SpeedoMeter5 from "./ui/speedometer-5";
import SpeedoMeter6 from "./ui/speedometer-6";
import SpeedoMeter7 from "./ui/speedometer-7";
import SpeedoMeter8 from "./ui/speedometer-8";
import SpeedoMeter9 from "./ui/speedometer-9";
import SpeedoMeter10 from "./ui/speedometer-10";
import SpeedUnitSwitch from "./ui/speed-unit-switch";

const speedometerComponents = [
  SpeedoMeter1,
  SpeedoMeter2,
  SpeedoMeter3,
  SpeedoMeter4,
  SpeedoMeter5,
  SpeedoMeter6,
  SpeedoMeter7,
  SpeedoMeter8,
  SpeedoMeter9,
  SpeedoMeter10,
];

const SpeedometerSettings = () => {
  const { settings, updateSettings } = useSettings();

  const toggleUnits = () => {
    // Assuming you want to toggle between "kmh" and "mph"
    const newUnit = settings.speedometers.units === "kmh" ? "mph" : "kmh";
    updateSettings("speedometers", { units: newUnit });
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex items-center justify-between bg-zinc-300 bg-opacity-5 px-8 py-4 rounded-[5px]">
        <div className="flex items-center gap-x-8">
          <SpeedTypeIcon />
          <div className="flex flex-col gap-y-2 items-start justify-start">
            <div className="text-center text-neutral-400 text-[21.25px] font-semibold font-['Inter']">
              Speed Type (KMH/MPH){" "}
            </div>
            <div className="text-center text-zinc-500 text-xs font-semibold font-['Inter']">
              Off-On Settings{" "}
            </div>
          </div>
        </div>
        <SpeedUnitSwitch
          isOn={settings.speedometers.units === "kmh"}
          onToggle={() => toggleUnits()}
        />
      </div>

      <div className="grid grid-cols-5 gap-4">
        {speedometerComponents.map((SpeedometerComponent, index) => (
          <SpeedometerSettingsItem key={index} speedometerNumber={index + 1}>
            <SpeedometerComponent />
          </SpeedometerSettingsItem>
        ))}
      </div>
    </div>
  );
};

export default SpeedometerSettings;
