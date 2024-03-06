import React, { useState } from "react";
import Tabs from "../../ui/core/menu-tab";
import VehicleMenu from "./vehicle-menu";
import MediaMenu from "./media-menu";
import LogoAndLocation from "./menu-header";

// Define interfaces for TypeScript (if using TS)
interface Tab {
  label: string;
}

const Menu: React.FC = () => {
  // Define your tabs
  const tabs: Tab[] = [
    { label: "Media" },
    { label: "Vehicle" },
    { label: "Map" },
  ];

  // State management for activeTab
  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  return (
    <div className="flex flex-col">
      <div className="w-[369px] px-2 flex items-center justify-between h-[58px] bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded">
        {/* Logo and location name section */}
        <LogoAndLocation />
      </div>
      {/* Conditional rendering based on the active tab */}
      {activeTab === "Map" && <MapImage />}
      {activeTab === "Vehicle" && <VehicleMenu />}
      {activeTab === "Media" && <MediaMenu />}

      {/* Tabs component */}
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

const MapImage: React.FC = () => (
  <img
    className="w-[369px] h-[234.95px]"
    src={`${process.env.PUBLIC_URL}/assets/map.png`}
    alt="Map"
  />
);

export default Menu;
