import React, { useState } from "react";
import Modal from "../../ui/core/modal";
import GeneralSettings from "./general-settings";
import SpeedometerSettings from "./speedometer-settings";
import StatusSettings from "./status-settings";
import TabBar from "../../ui/core/tab";

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
      {/* Settings header and instructions remain unchanged */}

      <div className="flex flex-col gap-y-8">
        <TabBar
          tabs={tabs.map(({ id, label }) => ({ id, label }))}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <ActiveTabComponent />
      </div>
    </Modal>
  );
};

export default SettingsModal;
