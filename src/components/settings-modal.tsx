import React, { useState } from "react";
import Modal from "./ui/modal";
import GeneralSettings from "./general-settings";
import SpeedometerSettings from "./speedometer-settings";
import StatusSettings from "./status-settings";
import TabBar from "./ui/tab";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>("General");

  const tabs = [
    { id: "General", label: "General Settings" },
    { id: "Speedometers", label: "Speedometers" },
    { id: "Status", label: "Status Settings" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-y-8">
        <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "General" && <GeneralSettings />}
        {activeTab === "Speedometers" && <SpeedometerSettings />}
        {activeTab === "Status" && <StatusSettings />}
      </div>
    </Modal>
  );
};

export default SettingsModal;
