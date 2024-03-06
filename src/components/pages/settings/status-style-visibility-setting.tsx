import { useState, useEffect } from "react";
import { useSettings } from "../../../contexts/SettingsContext";
import { StatusStyle1 } from "../../icons/status-style-1";
import { StatusStyle2 } from "../../icons/status-style-2";
import { StatusStyle3 } from "../../icons/status-style-3";
import { StatusStyle4 } from "../../icons/status-style-4";
import { StatusStyle5 } from "../../icons/status-style-5";
import { StatusStyle6 } from "../../icons/status-style-6";
import { StatusStyle7 } from "../../icons/status-style-7";
import { StatusStyle8 } from "../../icons/status-style-8";
import { StatusStyle9 } from "../../icons/status-style-9";
import { VibisilityThresholds } from "../../../types/settings";

// Define a default visibility threshold for resetting purposes
const defaultVisibilityThresholds = {
  health: 100,
  hydration: 100,
  hunger: 100,
  energy: 100,
  armor: 100,
  stress: 100,
};

const StatusStyleVisibilitySetting = () => {
  const { settings, updateSettings, openSettings, setOpenSettings } =
    useSettings();
  const [visibilityThresholds, setVisibilityThresholds] =
    useState<VibisilityThresholds>(defaultVisibilityThresholds);

  useEffect(() => {
    // Fetch current visibility settings for the openSettings style
    if (openSettings) {
      const currentThresholds =
        settings.styleVisibility[openSettings]?.visibilityThresholds ||
        defaultVisibilityThresholds;
      setVisibilityThresholds(currentThresholds);
    }
  }, [openSettings, settings.styleVisibility]);

  const handleChange = (field: string, value: number) => {
    setVisibilityThresholds((prev) => ({ ...prev, [field]: Number(value) }));
  };

  const handleSave = () => {
    // Update the visibility settings for the selected style
    const updatedVisibilitySettings = {
      ...settings.styleVisibility,
      [openSettings as string]: {
        visibilityThresholds: { ...visibilityThresholds },
      },
    };
    updateSettings("styleVisibility", updatedVisibilitySettings);
  };

  const handleRestore = () => {
    // Restore to default thresholds
    setVisibilityThresholds(defaultVisibilityThresholds);
  };

  const handleCancel = () => {
    // Revert changes by resetting to the last saved state or default
    const currentThresholds =
      settings.styleVisibility[openSettings as string]?.visibilityThresholds ||
      defaultVisibilityThresholds;
    setVisibilityThresholds(currentThresholds);
    setOpenSettings(null);
  };

  if (!openSettings) return null;

  return (
    <div className="w-full flex flex-col justify-between items-center h-[230px] p-4 bg-gradient-to-r from-zinc-800 to-neutral-800 rounded border border-white border-opacity-20">
      <div className="flex items-start w-full justify-between">
        <div className="flex flex-col gap-y-1 items-start justify-start">
          <div className="text-center text-neutral-400 text-base font-semibold font-['Inter']">
            Status Style Settings #1
          </div>
          <div className="text-center text-gray-200 text-[9.65px] font-semibold font-['Inter']">
            Selected Now
          </div>
        </div>
        <div className="flex gap-x-1 items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.80365 0.261841C4.6558 0.261841 3.53372 0.602219 2.57932 1.23993C1.62491 1.87765 0.881044 2.78405 0.441779 3.84453C0.00251463 4.90501 -0.112417 6.07193 0.111518 7.19773C0.335453 8.32353 0.888198 9.35764 1.69985 10.1693C2.51151 10.9809 3.54562 11.5337 4.67142 11.7576C5.79722 11.9816 6.96414 11.8666 8.02462 11.4274C9.08509 10.9881 9.9915 10.2442 10.6292 9.28983C11.2669 8.33542 11.6073 7.21335 11.6073 6.06549C11.6057 4.52677 10.9937 3.05153 9.90566 1.96349C8.81762 0.875442 7.34238 0.263466 5.80365 0.261841ZM5.58044 2.94045C5.71288 2.94045 5.84235 2.97972 5.95248 3.05331C6.0626 3.12689 6.14843 3.23147 6.19911 3.35384C6.2498 3.4762 6.26306 3.61084 6.23722 3.74074C6.21138 3.87064 6.1476 3.98996 6.05395 4.08362C5.9603 4.17727 5.84098 4.24105 5.71108 4.26689C5.58118 4.29273 5.44654 4.27946 5.32417 4.22878C5.20181 4.17809 5.09722 4.09226 5.02364 3.98214C4.95006 3.87202 4.91078 3.74255 4.91078 3.6101C4.91078 3.4325 4.98134 3.26217 5.10692 3.13659C5.23251 3.011 5.40283 2.94045 5.58044 2.94045ZM6.25009 9.19054C6.01329 9.19054 5.78618 9.09647 5.61873 8.92902C5.45129 8.76157 5.35722 8.53447 5.35722 8.29767V6.06549C5.23882 6.06549 5.12527 6.01846 5.04154 5.93473C4.95782 5.85101 4.91078 5.73746 4.91078 5.61906C4.91078 5.50066 4.95782 5.3871 5.04154 5.30338C5.12527 5.21966 5.23882 5.17262 5.35722 5.17262C5.59402 5.17262 5.82113 5.26669 5.98857 5.43414C6.15602 5.60158 6.25009 5.82869 6.25009 6.06549V8.29767C6.36849 8.29767 6.48204 8.3447 6.56577 8.42842C6.64949 8.51215 6.69652 8.6257 6.69652 8.7441C6.69652 8.8625 6.64949 8.97606 6.56577 9.05978C6.48204 9.1435 6.36849 9.19054 6.25009 9.19054Z"
              fill="#969696"
            />
          </svg>
          <div className="text-center flex gap-x-2 items-center text-neutral-400 text-[11.10px] font-semibold font-['Inter']">
            {" "}
            100 = Never Hide
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-2">
          {[
            StatusStyle1,
            StatusStyle2,
            StatusStyle3,
            StatusStyle4,
            StatusStyle5,
            StatusStyle6,
            StatusStyle7,
            StatusStyle8,
            StatusStyle9,
          ].map((StatusStyle, index) =>
            index.toString() === openSettings ? <StatusStyle /> : null
          )}

          <div className="flex items-center w-[311px] pl-1 gap-x-1 justify-between">
            {Object.keys(defaultVisibilityThresholds).map((field, index) => (
              <input
                className="w-10 text-[8.44px] text-center h-[21.44px] text-white bg-neutral-600 bg-opacity-25 rounded-sm border border-zinc-300 border-opacity-40"
                key={index}
                type="number"
                value={
                  visibilityThresholds[field as keyof VibisilityThresholds] ||
                  ""
                }
                onChange={(e) => handleChange(field, Number(e.target.value))}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-x-2 pl-1">
          <button
            onClick={handleSave}
            className="py-2 px-6 bg-neutral-200 rounded-sm border border-neutral-200 flex items-center justify-center"
          >
            <div className="text-black text-[8.44px] font-bold font-['Satoshi'] leading-none tracking-tight">
              Save Settings
            </div>
          </button>
          <button
            onClick={handleRestore}
            className="py-2 px-6 bg-neutral-200 bg-opacity-10 rounded-sm border border-neutral-200 flex items-center justify-center"
          >
            <div className="text-center text-neutral-200 text-[8.44px] font-bold font-['Satoshi'] leading-none tracking-tight">
              Restore Defaults
            </div>
          </button>
          <button
            onClick={handleCancel}
            className="py-2 px-8 bg-neutral-200 bg-opacity-10 rounded-sm border border-neutral-200 flex items-center justify-center"
          >
            <div className="text-center text-neutral-200 text-[8.44px] font-bold font-['Satoshi'] leading-none tracking-tight">
              Cancel
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusStyleVisibilitySetting;
