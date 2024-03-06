import React from "react";

interface TabProps {
  label: string;
  isActive: boolean;
  setActiveTab: (label: string) => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, setActiveTab }) => (
  <div
    onClick={() => setActiveTab(label)}
    className={`grow flex cursor-pointer p-1 items-center justify-center shrink basis-0 self-stretch relative ${
      isActive ? "bg-gradient-to-l from-stone-300 to-stone-300" : ""
    } rounded`}
  >
    <div
      className={`w-[80.88px] text-center ${
        isActive ? "text-gray-950 font-bold" : "text-neutral-400 font-medium"
      } text-[10.34px] font-['Inter']`}
    >
      {label}
    </div>
  </div>
);

export default Tab;
