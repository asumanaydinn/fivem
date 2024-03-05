// SettingsContext.tsx
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

// Initial settings
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
    speedometerType: "1",
  },
  status: {
    statusStyleType: "1",
    hideAllStatus: false,
    hideHealth: false,
    hideHydration: false,
    hideHungry: false,
    hideEnergy: false,
    hideArmor: false,
    hideStress: false,
  },
};

// Define the structure for the context's value
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
}

// Initialize the context with default values
const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  getStatusSettingForStyle: () => null,
  updateStatusSettingForStyle: () => {},
  updateSettings: () => {},
});

// Custom hook to use the settings context
export const useSettings = () => useContext(SettingsContext);

// Provider component
interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);

  // Method to update settings for any category
  const updateSettings = <T extends keyof AppSettings>(
    category: T,
    newSettings: Partial<AppSettings[T]>
  ) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [category]: {
        ...prevSettings[category],
        ...newSettings,
      },
    }));
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
    // Optionally trigger a context update or re-fetch of settings if needed
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        getStatusSettingForStyle,
        updateStatusSettingForStyle,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};