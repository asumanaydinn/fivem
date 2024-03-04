import { FreeFormEditModeIcon } from "./icons/free-form-edit-mode-icon";
import { HideIcon } from "./icons/hide-icon";
import { MinimapIcon } from "./icons/minimap-icon";
import { RestoreDefaultsIcon } from "./icons/restore-defaults-icon";
import { ShowLocationIcon } from "./icons/show-location-icon";
import { SinematicModeIcon } from "./icons/sinematic-mode-icon";
import ListItem from "./settings-item";

const GeneralSettings = () => {
  return (
    <div className="flex flex-col gap-y-2 w-full bg-black">
      <ListItem
        description="Off-On Settings"
        title="Cinematic Mode"
        icon={<SinematicModeIcon />}
      />
      <ListItem
        description="Off-On Settings"
        title="Show Location"
        icon={<ShowLocationIcon />}
      />
      <ListItem
        description="Off-On Settings"
        title="Minimap"
        icon={<MinimapIcon />}
      />
      <ListItem
        description="Off-On Settings"
        title="Freeform Edit Mode"
        icon={<FreeFormEditModeIcon />}
      />
      <ListItem
        description="Off-On Settings"
        title="Hide All Hud"
        icon={<HideIcon />}
      />
      <ListItem
        description="Off-On Settings"
        title="Restore Defaults"
        icon={<RestoreDefaultsIcon />}
      />
      <ListItem
        description="Off-On Settings"
        title="Hide User Money"
        icon={<HideIcon />}
      />
      <ListItem
        description="Off-On Settings"
        title="Hide Online Users"
        icon={<HideIcon />}
      />
      <ListItem
        description="Off-On Settings"
        title="Hide Server Logo"
        icon={<HideIcon />}
      />
    </div>
  );
};

export default GeneralSettings;
