import React, { createContext, useContext, ReactNode, useState } from "react";
import {
  AppSettings,
  StatusSetting,
  StatusSettingsMap,
  StatusStyleType,
} from "../types/settings";

const localStorageKey = "statusSettingsMap";

function getStatusSettingsMapFromLocalStorage(): StatusSettingsMap {
  const storedData = localStorage.getItem(localStorageKey);
  return storedData ? JSON.parse(storedData) : {};
}

function setStatusSettingsMapInLocalStorage(settingsMap: StatusSettingsMap) {
  localStorage.setItem(localStorageKey, JSON.stringify(settingsMap));
}

function getStatusSettingForStyleFromLocalStorage(
  styleType: StatusStyleType
): StatusSetting | null {
  const settingsMap = getStatusSettingsMapFromLocalStorage();
  return settingsMap[styleType] || null;
}

function updateStatusSettingForStyleInLocalStorage(
  styleType: StatusStyleType,
  setting: StatusSetting
) {
  const settingsMap = getStatusSettingsMapFromLocalStorage();
  settingsMap[styleType] = setting;
  setStatusSettingsMapInLocalStorage(settingsMap);
}

const defaultSettings: AppSettings = {
  general: {
    cinematicMode: false,
    showLocation: true,
    minimap: true,
    freeformEditMode: false,
    hideAllHud: false,
    restoreDefaults: false,
    hideUserMoney: false,
    hideOnlineUsers: false,
    hideServerLogo: false,
  },
  speedometers: {
    units: "kmh",
    speedometerType: "9",
  },
  status: {
    statusStyleType: "9",
    hideAllStatus: false,
    hideHealth: false,
    hideHydration: false,
    hideHungry: false,
    hideEnergy: false,
    hideArmor: false,
    hideStress: false,
  },
  styleVisibility: {}, // Initialize as empty; assume dynamic addition based on UI interactions
};

interface SettingsContextType {
  settings: AppSettings;
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
  openSettings: StatusStyleType | null;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  getStatusSettingForStyle: () => null,
  updateStatusSettingForStyle: () => {},
  updateSettings: () => {},
  setOpenSettings: (
    value: React.SetStateAction<StatusStyleType | null>
  ): void => {
    throw new Error("Function not implemented.");
  },
  openSettings: null,
});

export const useSettings = () => useContext(SettingsContext);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [openSettings, setOpenSettings] = useState<StatusStyleType | null>(
    null
  );

  const updateSettings = <T extends keyof AppSettings>(
    category: T,
    newSettings: Partial<AppSettings[T]>
  ) => {
    // Handle styleVisibility updates separately to merge properly
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

  return (
    <SettingsContext.Provider
      value={{
        settings,
        getStatusSettingForStyle,
        updateStatusSettingForStyle,
        updateSettings,
        openSettings,
        setOpenSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
