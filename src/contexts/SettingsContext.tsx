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

function clearSettingsInLocalStorage() {
  localStorage.removeItem(localStorageKey);
}

const defaultSettings: AppSettings = {
  general: {
    cinematicMode: false,
    showLocation: true,
    minimap: true,
    freeformEditMode: false,
    hideAllHud: false,
    hideUserMoney: false,
    hideServerLogo: false,
    hideQuickInfo: false,
  },
  speedometers: {
    units: "kmh",
    speedometerType: "6",
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
  styleVisibility: {
    "1": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "2": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "3": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "4": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "5": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "6": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "7": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "8": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "9": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
    "10": {
      visibilityThresholds: {
        armor: 0,
        energy: 0,
        health: 0,
        hunger: 0,
        hydration: 0,
        stress: 0,
      },
    },
  },
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
  restoreDefaults: () => void;
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
  restoreDefaults: function (): void {
    throw new Error("Function not implemented.");
  },
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
        getStatusSettingForStyle,
        updateStatusSettingForStyle,
        updateSettings,
        openSettings,
        setOpenSettings,
        restoreDefaults,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
