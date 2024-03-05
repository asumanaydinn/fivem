// Types.ts
export interface GeneralSettings {
  cinematicMode: boolean;
  showLocation: boolean;
  minimap: boolean;
  freeformEditMode: boolean;
  hideAllHud: boolean;
  restoreDefaults: boolean;
  hideUserMoney: boolean;
  hideOnlineUsers: boolean;
  hideServerLogo: boolean;
}

export type SpeedoMeterType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10";

export type StatusStyleType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10";

export interface SpeedometerSettings {
  units: "mph" | "kmh";
  speedometerType: SpeedoMeterType;
}

export interface StatusSettings {
  statusStyleType: StatusStyleType;
  hideAllStatus: boolean;
  hideHealth: boolean;
  hideHydration: boolean;
  hideHungry: boolean;
  hideEnergy: boolean;
  hideArmor: boolean;
  hideStress: boolean;
}

export interface AppSettings {
  general: GeneralSettings;
  speedometers: SpeedometerSettings;
  status: StatusSettings;
}

export interface StatusSetting {
  health: { value: number; color: string };
  dehydration: { value: number; color: string };
  hungry: { value: number; color: string };
  energy: { value: number; color: string };
  stress: { value: number; color: string };
  armor: { value: number; color: string };
}

export interface StatusSettingsMap {
  [key: string]: StatusSetting; // key is StatusStyleType
}