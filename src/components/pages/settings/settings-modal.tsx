import React, { useState } from "react";
import Modal from "../../ui/core/modal";
import GeneralSettings from "./general-settings";
import SpeedometerSettings from "./speedometer-settings";
import StatusSettings from "./status-settings";
import TabBar from "../../ui/core/tab";
import SettingsHeader from "./settings-header";
import { useSettings } from "../../../contexts/SettingsContext";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define a type for tabs to ensure type checking
type TabType = {
  id: string;
  label: string;
  component: React.FC; // Associate each tab with its component
};

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("General");

  const { restoreDefaults } = useSettings();

  // Associate each tab with its component to render dynamically
  const tabs: TabType[] = [
    { id: "General", label: "General Settings", component: GeneralSettings },
    {
      id: "Speedometers",
      label: "Speedometers",
      component: SpeedometerSettings,
    },
    { id: "Status", label: "Status Settings", component: StatusSettings },
  ];

  // Dynamically get the active tab's component
  const ActiveTabComponent =
    tabs.find((tab) => tab.id === activeTab)?.component || GeneralSettings;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full">
        <div className="sticky top-0 z-10 mb-2 bg-black">
          <SettingsHeader />

          <TabBar
            tabs={tabs.map(({ id, label }) => ({ id, label }))}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className="flex flex-col px-4 gap-y-8 max-h-[64vh] min-h-[64vh] overflow-y-auto">
          <ActiveTabComponent />
        </div>
        <div className="sticky bottom-0 bg-black py-4 px-4">
          <div className="flex items-center w-full justify-end h-full">
            <button
              onClick={() => restoreDefaults()}
              className="py-2 px-6 bg-neutral-200 bg-opacity-10 rounded-sm border border-neutral-200 flex items-center justify-center"
            >
              <div className="text-center text-neutral-200 text-sm font-bold leading-none tracking-tight">
                Restore Defaults
              </div>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
