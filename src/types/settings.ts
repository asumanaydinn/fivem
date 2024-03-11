export interface GeneralSettings {
  cinematicMode: boolean;
  showLocation: boolean;
  minimap: boolean;
  freeformEditMode: boolean;
  hideAllHud: boolean;
  hideUserMoney: boolean;
  hideServerLogo: boolean;
  hideQuickInfo: boolean;
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

export interface VibisilityThresholds {
  health: number;
  hydration: number;
  hunger: number;
  energy: number;
  armor: number;
  stress: number;
}

export interface AppSettings {
  general: GeneralSettings;
  speedometers: SpeedometerSettings;
  status: StatusSettings;
  styleVisibility: {
    [key: string]: {
      visibilityThresholds?: VibisilityThresholds;
    };
  };
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
  [key: string]: StatusSetting; 
}
