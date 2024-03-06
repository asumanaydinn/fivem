import React from "react";
import clsx from "clsx";

// Define interfaces for the props
interface TabProps {
  label: string;
  isActive: boolean;
}

const Tab: React.FC<TabProps> = ({ label, isActive }) => (
  <div
    className={clsx(
      "grow w-full cursor-pointer shrink basis-0 p-[5.17px] flex-col justify-start items-start gap-[5.17px] inline-flex",
      isActive &&
        "bg-gradient-to-l from-gray-200 to-violet-300 rounded shadow-violet-300 shadow"
    )}
  >
    <div
      className={clsx(
        "self-stretch text-center text-[10.34px] font-medium font-['Inter']",
        {
          "text-gray-950 font-bold": isActive,
          "text-neutral-400": !isActive,
        }
      )}
    >
      {label}
    </div>
  </div>
);

interface TabsProps {
  tabs: { label: string }[];
  activeTab: string;
  setActiveTab: (label: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-[369px] p-[2.07px] bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded justify-start items-start inline-flex">
      {tabs.map((tab, index) => (
        <div
          className="w-1/3"
          key={index}
          onClick={() => setActiveTab(tab.label)}
        >
          <Tab label={tab.label} isActive={tab.label === activeTab} />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
