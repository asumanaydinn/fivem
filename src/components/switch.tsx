import React from "react";

interface SwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  const handleToggle = () => {
    onToggle(!isOn);
  };

  return (
    <button
      onClick={handleToggle}
      className={`${
        isOn ? "bg-green-400" : "bg-gray-400"
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
    >
      <span
        className={`${
          isOn ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
      />
    </button>
  );
};

export default Switch;
