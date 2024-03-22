import React, { useState } from "react";
import Tabs from "../../ui/core/menu-tab";
import VehicleMenu from "./vehicle/vehicle-menu";
import MediaMenu from "./media/media-menu";
import LogoAndLocation from "./media/menu-header";

interface Tab {
  label: string;
}

const Menu = ({ ref }: { ref: React.MutableRefObject<null> }) => {
  const tabs: Tab[] = [
    { label: "Media" },
    { label: "Vehicle" },
    { label: "Map" },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  return (
    <div className="flex flex-col">
      <div className="w-[369px] px-2 flex items-center justify-between h-[58px] bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded">
        <LogoAndLocation />
      </div>

      {activeTab === "Map" && (
        <img
          className="w-[369px] h-[234.95px]"
          src={`/assets/map.png`}
          alt="Map"
        />
      )}
      {activeTab === "Vehicle" && <VehicleMenu />}
      {activeTab === "Media" && <MediaMenu ref={ref} />}

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Menu;
