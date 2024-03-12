import { useSettings } from "../../../contexts/SettingsContext";
import { ArmorIcon } from "../../icons/armor-icon";
import { DehydrationIcon } from "../../icons/dehydration-icon";
import { EnergyIcon } from "../../icons/energy-icon";
import { HealthIcon } from "../../icons/health-icon";
import { HideIcon } from "../../icons/hide-icon";
import { HungryIcon } from "../../icons/hungry-icon";
import { StatusStyle1 } from "../../icons/status-style-1";
import { StatusStyle2 } from "../../icons/status-style-2";
import { StatusStyle3 } from "../../icons/status-style-3";
import { StatusStyle4 } from "../../icons/status-style-4";
import { StatusStyle5 } from "../../icons/status-style-5";
import { StatusStyle6 } from "../../icons/status-style-6";
import { StatusStyle7 } from "../../icons/status-style-7";
import { StatusStyle8 } from "../../icons/status-style-8";
import { StatusStyle9 } from "../../icons/status-style-9";
import { StressIcon } from "../../icons/stress-icon";
import StatusStyle10 from "../../ui/status-styles/status-style-10";
import Status10Edit, { Status10 } from "./settings-10-edit";

import ListItem from "./settings-item";
import StatusStyleSettingItem from "./status-style-setting-item";
import StatusStyleVisibilitySetting from "./status-style-visibility-setting";

const StatusSettings = () => {
  const { settings, updateSettings, openSettings } = useSettings();

  const toggleSetting = (settingKey: keyof typeof settings.status) => {
    updateSettings("status", { [settingKey]: !settings.status[settingKey] });
  };

  return (
    <div className="flex flex-col gap-y-2">
      <ListItem
        handleToggle={() => toggleSetting("hideAllStatus")}
        isOn={settings.status.hideAllStatus}
        description="Off-On Settings"
        icon={<HideIcon />}
        title="Hide All Status"
      />

      <div className="grid grid-cols-3 gap-2">
        <ListItem
          handleToggle={() => toggleSetting("hideHealth")}
          isOn={settings.status.hideHealth}
          description="Off-On Settings"
          icon={<HealthIcon />}
          title="Hide Health"
        />
        <ListItem
          handleToggle={() => toggleSetting("hideHydration")}
          isOn={settings.status.hideHydration}
          description="Off-On Settings"
          icon={<DehydrationIcon />}
          title="Hide Hydration"
        />
        <ListItem
          handleToggle={() => toggleSetting("hideHungry")}
          isOn={settings.status.hideHungry}
          description="Off-On Settings"
          icon={<HungryIcon />}
          title="Hide Hungry"
        />
        <ListItem
          handleToggle={() => toggleSetting("hideEnergy")}
          isOn={settings.status.hideEnergy}
          description="Off-On Energy"
          icon={<EnergyIcon />}
          title="Hide Energy"
        />
        <ListItem
          handleToggle={() => toggleSetting("hideArmor")}
          isOn={settings.status.hideArmor}
          description="Off-On Settings"
          icon={<ArmorIcon />}
          title="Hide Armor"
        />
        <ListItem
          handleToggle={() => toggleSetting("hideStress")}
          isOn={settings.status.hideStress}
          description="Off-On Settings"
          icon={<StressIcon />}
          title="Hide Stress"
        />
      </div>

      <div className="grid grid-cols-3 gap-3 justify-between">
        {[
          StatusStyle1,
          StatusStyle2,
          StatusStyle3,
          StatusStyle4,
          StatusStyle5,
          StatusStyle6,
          StatusStyle7,
          StatusStyle8,
          StatusStyle9,
        ].map((StatusStyle, index) =>
          openSettings === (index + 1).toString() ? (
            <StatusStyleVisibilitySetting />
          ) : (
            <StatusStyleSettingItem key={index} statusStyleNumber={index + 1}>
              <StatusStyle />
            </StatusStyleSettingItem>
          )
        )}
        {openSettings === "10" ? (
          <Status10Edit />
        ) : (
          <StatusStyleSettingItem statusStyleNumber={10}>
            <Status10 />
          </StatusStyleSettingItem>
        )}
      </div>
    </div>
  );
};

export default StatusSettings;
