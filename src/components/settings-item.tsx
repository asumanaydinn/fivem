import React from "react";
import Switch from "./ui/switch";

// Assuming OnOffSwitch is already defined elsewhere and imported
interface ListItemProps {
  title: string;
  description: string;
  icon: JSX.Element; // Allow passing a custom icon as a React element
  isOn: boolean; // State of the switch
  handleToggle: (isOn: boolean) => void; // Function to handle toggle
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  description,
  icon,
  isOn,
  handleToggle,
}) => {
  return (
    <div className="flex items-center justify-between bg-zinc-300 bg-opacity-10 px-8 py-4 rounded-[5px]">
      <div className="flex items-center gap-x-8">
        {icon}
        <div className="flex flex-col gap-y-2 items-start justify-start">
          <div className="text-center text-neutral-400 text-[21.25px] font-semibold font-['Inter']">
            {title}
          </div>
          <div className="text-center text-zinc-500 text-xs font-semibold font-['Inter']">
            {description}
          </div>
        </div>
      </div>
      <Switch isOn={isOn} onToggle={() => handleToggle(!isOn)} />
    </div>
  );
};

export default ListItem;
