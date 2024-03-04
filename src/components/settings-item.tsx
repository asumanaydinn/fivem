import React from "react";
import OnOffSwitch from "./ui/on-off-switch";

// Assuming OnOffSwitch is already defined elsewhere and imported

interface ListItemProps {
  title: string;
  description: string;
  icon: JSX.Element; // Allow passing a custom icon as a React element
}

const ListItem: React.FC<ListItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-center justify-between bg-zinc-300 bg-opacity-5 p-8 rounded-[5px]">
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
      <OnOffSwitch />
    </div>
  );
};

export default ListItem;
