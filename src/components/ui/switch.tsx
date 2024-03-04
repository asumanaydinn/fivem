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
      className="w-[139.86px] h-[49.03px] pl-[19.03px] pr-[11.25px] py-[5.01px] left-[1039px] top-[18.31px] bg-white bg-opacity-0 rounded-lg border border-white border-opacity-10 backdrop-blur-[12.71px] justify-start items-center gap-[26.04px] inline-flex"
    >
      {isOn ? <>  <div className="text-zinc-500 text-sm font-medium font-['Satoshi'] leading-[14.02px] tracking-tight">
        ON
      </div>
      <div className="pl-[17.02px] pr-[18.53px] py-[7.01px] bg-neutral-200 bg-opacity-10 rounded-lg shadow border-2 border-neutral-200 justify-start items-start flex">
        <div className="text-neutral-200 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
          OFF
        </div>
      </div></> :<> <div className="text-zinc-500 text-sm font-medium font-['Satoshi'] leading-[14.02px] tracking-tight">
        ON
      </div>
      <div className="pl-[17.02px] pr-[18.53px] py-[7.01px] bg-neutral-200 bg-opacity-10 rounded-lg shadow border-2 border-neutral-200 justify-start items-start flex">
        <div className="text-neutral-200 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
          OFF
        </div>
      </div></>  }
     
    </button>
  );
};

export default Switch;
