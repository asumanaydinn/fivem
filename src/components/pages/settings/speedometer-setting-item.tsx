import React, { ReactNode } from "react";
import { useSettings } from "../../../contexts/SettingsContext";
import { SpeedoMeterType } from "../../../types/settings";

interface SpeedometerSettingsItemProps {
  speedometerNumber: number; // The number of the speedometer
  children: ReactNode; // Children components to be rendered inside
}

const SpeedometerSettingsItem: React.FC<SpeedometerSettingsItemProps> = ({
  speedometerNumber,
  children,
}) => {
  const { settings, updateSettings } = useSettings();

  const handleSelect = () => {
    // Update the speedometerType to the selected speedometerNumber, converting number to string if necessary
    updateSettings("speedometers", {
      speedometerType: speedometerNumber.toString() as SpeedoMeterType,
    });
  };

  return (
    <div className="w-[231.51px] relative h-[231.51px] flex flex-col justify-end bg-zinc-300 bg-opacity-10 rounded border border-white border-opacity-20 ">
      <div className="flex items-center justify-center h-28">{children}</div>

      <div className="flex flex-col items-center gap-y-5 mb-2 h-28">
        <div className="flex flex-col items-center justify-start h-12">
          <div className="text-center text-neutral-400 text-lg font-semibold font-['Inter']">
            Speedometer #{speedometerNumber}
          </div>

          {settings.speedometers.speedometerType ===
            speedometerNumber.toString() && (
            <div className="text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
              Selected Now
            </div>
          )}
        </div>

        {settings.speedometers.speedometerType ===
          speedometerNumber.toString() && (
          <div className="w-[184.70px] h-[32.59px] pl-[70.62px] pr-[19.92px] pt-[5.43px] pb-[4.53px] bg-neutral-200 rounded border-2 border-neutral-200 justify-start items-start inline-flex">
            <div className="text-black text-xs font-bold font-['Satoshi'] leading-snug tracking-tight">
              Selected
            </div>
          </div>
        )}

        {settings.speedometers.speedometerType !==
          speedometerNumber.toString() && (
          <button
            onClick={() => handleSelect()}
            className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex"
          >
            <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
              Select
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default SpeedometerSettingsItem;
