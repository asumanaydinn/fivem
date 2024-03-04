import React, { useState } from "react";
import Switch from "./switch";

const OnOffSwitch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleToggle = (isOn: boolean) => {
    setIsSwitchOn(isOn);
  };

  return (
    <div className="p-4">
      <Switch isOn={isSwitchOn} onToggle={handleToggle} />
    </div>
  );
};

export default OnOffSwitch;
