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

export interface SpeedometerSettings {
  units: "mph" | "kmh";
  speedometerType: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
}

export interface StatusSettings {
  onlineStatus: boolean;
}

export interface AppSettings {
  general: GeneralSettings;
  speedometers: SpeedometerSettings;
  status: StatusSettings;
}
