// SettingsContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";
import { AppSettings } from "../types/settings";

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
    onlineStatus: true,
  },
};

// Creating the context with default values and an updater function
const SettingsContext = createContext<{
  settings: AppSettings;
  updateSettings: <T extends keyof AppSettings>(
    category: T,
    newSettings: Partial<AppSettings[T]>
  ) => void;
}>({
  settings: defaultSettings,
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

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
