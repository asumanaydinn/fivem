import React from "react";

import { useSettings } from "../../../contexts/SettingsContext";
import { FreeFormEditModeIcon } from "../../icons/free-form-edit-mode-icon";
import { HideIcon } from "../../icons/hide-icon";
import { MinimapIcon } from "../../icons/minimap-icon";
import { RestoreDefaultsIcon } from "../../icons/restore-defaults-icon";
import { ShowLocationIcon } from "../../icons/show-location-icon";
import { SinematicModeIcon } from "../../icons/sinematic-mode-icon";
import ListItem from "./settings-item";

const GeneralSettings = () => {
  const { settings, updateSettings } = useSettings();

  const toggleSetting = (settingKey: keyof typeof settings.general) => {
    updateSettings("general", { [settingKey]: !settings.general[settingKey] });
  };

  return (
    <div className="flex flex-col gap-y-2 w-full bg-black">
      <ListItem
        description="Off-On Settings"
        title="Cinematic Mode"
        icon={<SinematicModeIcon />}
        isOn={settings.general.cinematicMode}
        handleToggle={() => toggleSetting("cinematicMode")}
      />
      <ListItem
        description="Off-On Settings"
        title="Show Location"
        icon={<ShowLocationIcon />}
        isOn={settings.general.showLocation}
        handleToggle={() => toggleSetting("showLocation")}
      />
      <ListItem
        description="Off-On Settings"
        title="Minimap"
        icon={<MinimapIcon />}
        isOn={settings.general.minimap}
        handleToggle={() => toggleSetting("minimap")}
      />
      <ListItem
        description="Off-On Settings"
        title="Freeform Edit Mode"
        icon={<FreeFormEditModeIcon />}
        isOn={settings.general.freeformEditMode}
        handleToggle={() => toggleSetting("freeformEditMode")}
      />
      <ListItem
        description="Off-On Settings"
        title="Hide All Hud"
        icon={<HideIcon />}
        isOn={settings.general.hideAllHud}
        handleToggle={() => toggleSetting("hideAllHud")}
      />
      <ListItem
        description="Click to restore all settings to defaults"
        title="Restore Defaults"
        icon={<RestoreDefaultsIcon />}
        isOn={settings.general.restoreDefaults}
        handleToggle={() => {
          toggleSetting("restoreDefaults");
        }}
      />
      <ListItem
        description="Off-On Settings"
        title="Hide User Money"
        icon={<HideIcon />}
        isOn={settings.general.hideUserMoney}
        handleToggle={() => toggleSetting("hideUserMoney")}
      />
      <ListItem
        description="Off-On Settings"
        title="Hide Online Users"
        icon={<HideIcon />}
        isOn={settings.general.hideOnlineUsers}
        handleToggle={() => toggleSetting("hideOnlineUsers")}
      />
      <ListItem
        description="Off-On Settings"
        title="Hide Server Logo"
        icon={<HideIcon />}
        isOn={settings.general.hideServerLogo}
        handleToggle={() => toggleSetting("hideServerLogo")}
      />
    </div>
  );
};

export default GeneralSettings;
