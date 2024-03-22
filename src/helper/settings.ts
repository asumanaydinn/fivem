import { StatusSettingsMap, StatusStyleType, StatusSetting } from "../types/settings";

export const localStorageKey = "statusSettingsMap";

export function getStatusSettingsMapFromLocalStorage(): StatusSettingsMap {
  const storedData = localStorage.getItem(localStorageKey);
  return storedData ? JSON.parse(storedData) : {};
}

export function setStatusSettingsMapInLocalStorage(settingsMap: StatusSettingsMap) {
  localStorage.setItem(localStorageKey, JSON.stringify(settingsMap));
}

export function getStatusSettingForStyleFromLocalStorage(styleType: StatusStyleType): StatusSetting | null {
  const settingsMap = getStatusSettingsMapFromLocalStorage();
  return settingsMap[styleType] || null;
}

export function updateStatusSettingForStyleInLocalStorage(styleType: StatusStyleType, setting: StatusSetting) {
  const settingsMap = getStatusSettingsMapFromLocalStorage();
  settingsMap[styleType] = setting;
  setStatusSettingsMapInLocalStorage(settingsMap);
}

export function clearSettingsInLocalStorage() {
  localStorage.removeItem(localStorageKey);
}
