import React, { useState } from "react";
import Tabs from "../../ui/core/menu-tab";
import VehicleMenu from "../settings/vehicle-menu";
import MediaMenu from "../settings/media-menu";

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

        {/* Action button */}
        <ActionButton />
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

// Consider splitting these into separate components or functional chunks if they grow in complexity
const LogoAndLocation: React.FC = () => (
  <div className="flex gap-x-2 items-center">
    {/* Logo */}
    <div className="w-[32.56px] h-[32.56px] flex items-center justify-center bg-gradient-to-b from-violet-300 to-gray-200 rounded-[0.57px]">
      <div className="text-center text-black text-xs font-extrabold">NE</div>
    </div>
    {/* Location Name */}
    <div className="flex flex-col gap-y-2 items-start justify-start">
      <div className="text-center text-white text-xs font-semibold">
        LOCATION NAME
      </div>
      <div className="text-center text-white text-opacity-50 text-[7.95px] font-bold">
        Location Name
      </div>
    </div>
  </div>
);

const ActionButton: React.FC = () => (
  <button>{/* SVG or Image goes here */}</button>
);

const MapImage: React.FC = () => (
  <img
    className="w-[369px] h-[234.95px]"
    src={`${process.env.PUBLIC_URL}/assets/map.png`}
    alt="Map"
  />
);

export default Menu;
