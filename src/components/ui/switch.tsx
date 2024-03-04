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
      className="flex items-center cursor-pointer justify-center px-3 py-2 bg-white bg-opacity-0 rounded-lg border border-white border-opacity-10 backdrop-blur-[12.71px] "
    >
      <div
        className={
          isOn
            ? "w-16 pl-[17.02px] pr-[18.53px] py-[7.01px] bg-neutral-200 bg-opacity-10 rounded-lg shadow border-2 border-neutral-200 justify-start items-start inline-flex"
            : "w-16 border-transparent pl-[17.02px] pr-[18.53px]"
        }
      >
        <div
          className={
            isOn
              ? "text-neutral-200 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight"
              : "text-zinc-500 text-sm font-medium font-['Satoshi'] leading-[14.02px] tracking-tight"
          }
        >
          ON
        </div>
      </div>
      <div
        className={
          !isOn
            ? "w-16 pl-[17.02px] pr-[18.53px] py-[7.01px] bg-neutral-200 bg-opacity-10 rounded-lg shadow border-2 border-neutral-200 justify-start items-start inline-flex"
            : "w-16 border-transparent pl-[17.02px] pr-[18.53px]"
        }
      >
        <div
          className={
            !isOn
              ? "text-neutral-200 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight"
              : "text-zinc-500 text-sm font-medium font-['Satoshi'] leading-[14.02px] tracking-tight"
          }
        >
          OFF
        </div>
      </div>
    </button>
  );
};

export default Switch;
