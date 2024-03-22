import React, { createContext, useContext, ReactNode, useState } from "react";
import {
  AppSettings,
  CarSettings,
  StatusSetting,
  StatusStyleType,
} from "../types/settings";
import {
  getStatusSettingForStyleFromLocalStorage,
  updateStatusSettingForStyleInLocalStorage,
  clearSettingsInLocalStorage,
} from "../helper/settings";
import { defaultSettings } from "./default";

interface SettingsContextType {
  settings: AppSettings;
  openSettings: StatusStyleType | null;

  getStatusSettingForStyle: (
    styleType: StatusStyleType
  ) => StatusSetting | null;
  updateStatusSettingForStyle: (
    styleType: StatusStyleType,
    setting: StatusSetting
  ) => void;
  updateSettings: <T extends keyof AppSettings>(
    category: T,
    newSettings: Partial<AppSettings[T]>
  ) => void;
  setOpenSettings: React.Dispatch<React.SetStateAction<StatusStyleType | null>>;
  restoreDefaults: () => void;
  updateCarSettings: (newCarSettings: Partial<CarSettings>) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  openSettings: null,

  getStatusSettingForStyle: () => null,
  updateStatusSettingForStyle: () => {},
  updateSettings: () => {},
  setOpenSettings: (
    value: React.SetStateAction<StatusStyleType | null>
  ): void => {
    throw new Error("Function not implemented.");
  },
  restoreDefaults: function (): void {
    throw new Error("Function not implemented.");
  },
  updateCarSettings: function (newCarSettings: Partial<CarSettings>): void {
    throw new Error("Function not implemented.");
  },
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [openSettings, setOpenSettings] = useState<StatusStyleType | null>(
    null
  );

  const updateCarSettings = (newCarSettings: Partial<CarSettings>) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      carSettings: {
        ...prevSettings.carSettings,
        ...newCarSettings,
      },
    }));
  };

  const updateSettings = <T extends keyof AppSettings>(
    category: T,
    newSettings: Partial<AppSettings[T]>
  ) => {
    if (category === "styleVisibility") {
      const updatedVisibility = {
        ...settings.styleVisibility,
        ...newSettings,
      };
      setSettings((prevSettings) => ({
        ...prevSettings,
        styleVisibility: updatedVisibility,
      }));
    } else {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [category]: {
          ...prevSettings[category],
          ...newSettings,
        },
      }));
    }
  };

  const getStatusSettingForStyle = (
    styleType: StatusStyleType
  ): StatusSetting | null => {
    return getStatusSettingForStyleFromLocalStorage(styleType);
  };

  const updateStatusSettingForStyle = (
    styleType: StatusStyleType,
    setting: StatusSetting
  ) => {
    updateStatusSettingForStyleInLocalStorage(styleType, setting);
  };

  const restoreDefaults = () => {
    setSettings(defaultSettings);
    clearSettingsInLocalStorage();
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        openSettings,

        getStatusSettingForStyle,
        updateStatusSettingForStyle,
        updateSettings,
        updateCarSettings,
        setOpenSettings,
        restoreDefaults,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
