import React from "react";
import Switch from "../../ui/core/switch";

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
    <div
      style={{
        background:
          "linear-gradient(79deg, #090909 5.22%, #161616 50.4%, #0B0B0B 96.49%)",
      }}
      className="flex items-center justify-between px-8 py-4 rounded-[5px] font-['Qanelas Soft']"
    >
      <div className="flex items-center gap-x-8">
        {icon}
        <div className="flex flex-col gap-y-2 items-start justify-start">
          <div className="text-center text-neutral-400 text-[21.25px] font-semibold">
            {title}
          </div>
          <div className="text-center text-zinc-500 text-xs font-semibold">
            {description}
          </div>
        </div>
      </div>
      <Switch isOn={isOn} onToggle={() => handleToggle(!isOn)} />
    </div>
  );
};

export default ListItem;
