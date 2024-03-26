import React from "react";
import { useSettings } from "../../../contexts/SettingsContext";
import { SpeedTypeIcon } from "../../icons/speed-type-icon";
import SpeedometerSettingsItem from "./speedometer-setting-item";

import SpeedUnitSwitch from "../../ui/core/speed-unit-switch";
import { Speedometer2 } from "../../icons/speedometer-2";
import { Speedometer1 } from "../../icons/speedometer-1";
import { Speedometer3 } from "../../icons/speedometer-3";
import { Speedometer4 } from "../../icons/speedometer-4";
import { Speedometer5 } from "../../icons/speedometer-5";
import { Speedometer7 } from "../../icons/speedometer-7";
import { Speedometer8 } from "../../icons/speedometer-8";
import { SpeedoMeter6 } from "../../icons/speedometer-6";
import { Speedometer9 } from "../../icons/speedometer-9";
import { Speedometer10 } from "../../icons/speedometer-10";


const speedometerComponents = [
  Speedometer1,
  Speedometer2,
  Speedometer3,
  Speedometer4,
  Speedometer5,
  SpeedoMeter6,
  Speedometer7,
  Speedometer8,
  Speedometer9,
  Speedometer10,
];

const SpeedometerSettings = () => {
  const { settings, updateSettings } = useSettings();

  const toggleUnits = () => {
    const newUnit = settings.speedometers.units === "kmh" ? "mph" : "kmh";
    updateSettings("speedometers", { units: newUnit });
  };

  const SpeedoMeterComponent =
  speedometerComponents[
    parseInt(settings.speedometers.speedometerType, 10) - 1
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <div
        style={{
          background:
            "linear-gradient(79deg, #090909 5.22%, #161616 50.4%, #0B0B0B 96.49%)",
        }}
        className="flex items-center justify-between px-8 py-4 rounded-[5px]"
      >
        <div className="flex items-center gap-x-8">
          <SpeedTypeIcon />
          <div className="flex flex-col gap-y-2 items-start justify-start">
            <div className="text-center text-neutral-400 text-[21.25px] font-semibold font-['Qanelas Soft']">
              Speed Type (KMH/MPH)
            </div>
            <div className="text-center text-zinc-500 text-xs font-semibold font-['Qanelas Soft']">
              Off-On Settings
            </div>
          </div>
        </div>

        <SpeedUnitSwitch
          isOn={settings.speedometers.units === "kmh"}
          onToggle={() => toggleUnits()}
        />
      </div>

      <div className="lg:flex lg:flex-col lg:items-center lg:justify-between w-full lg:gap-y-10">
      <div className="lg:block hidden relative h-96 w-[720px]">
          <img
            className="object-cover w-[720px] h-96"
            src={`/assets/bg.svg`}
            alt="background"
          />
          <div className="absolute right-4 bottom-4 z-10">  {SpeedoMeterComponent && (
                <SpeedoMeterComponent
                
                />
              )}</div>
        </div>
        <div className="grid grid-cols-5 gap-4  lg:grid-cols-5 max-lg:grid-cols-8 mega-lg:grid-cols-10">
          {[
            Speedometer1,
            Speedometer2,
            Speedometer3,
            Speedometer4,
            Speedometer5,
            SpeedoMeter6,
            Speedometer7,
            Speedometer8,
            Speedometer9,
            Speedometer10,
          ].map((SpeedometerComponent, index) => (
            <SpeedometerSettingsItem key={index} speedometerNumber={index + 1}>
              <SpeedometerComponent />
            </SpeedometerSettingsItem>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default SpeedometerSettings;
