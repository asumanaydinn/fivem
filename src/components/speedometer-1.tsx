import React from "react";

const SpeedoMeter1 = () => {
  return (
    <div className="w-[204px] h-[204px] relative">
      <div className="w-[47px] h-[14.99px] relative">
        <div className="w-[47px] h-[14.99px] left-[-0px] top-[14.99px] absolute bg-stone-950 rounded-tl rounded-tr rounded-bl-lg rounded-br-lg shadow border border-white border-opacity-10" />
        <div className="left-[19.86px] top-[1.99px] absolute text-white text-[8.48px] font-medium font-['Orbitron']">
          2
        </div>
        <div className="left-[33.76px] top-[1.99px] absolute text-neutral-600 text-[8.48px] font-medium font-['Orbitron']">
          3
        </div>
        <div className="left-[6.62px] top-[1.99px] absolute text-neutral-600 text-[8.48px] font-medium font-['Orbitron']">
          1
        </div>
      </div>
    </div>
  );
};

export default SpeedoMeter1;
