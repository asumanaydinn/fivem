import React from "react";

const SpeedoMeter1 = () => {
  return (
    <div className="w-[161.16px] h-[57.99px] left-[35.15px] top-[33.50px] absolute">
      <div className="left-[11px] top-0 absolute text-center">
        <span className="text-white text-opacity-40 text-[36.82px] font-normal font-['Michroma']">
          0
        </span>
        <span className="text-white text-[36.82px] font-normal font-['Michroma']">
          45
        </span>
      </div>
      <div className="w-[161.16px] h-[10.63px] left-[-0px] top-[47.37px] absolute">
        <div className="w-[147.92px] h-[5.48px] left-[13.24px] top-[3.09px] absolute bg-yellow-700 bg-opacity-50 rounded-[1.10px]" />
        <div className="w-[96.42px] h-[5.48px] left-[13.24px] top-[3.09px] absolute bg-orange-300 rounded-[1.10px]" />
      </div>
      <div className="w-[16.12px] h-[16.12px] left-[125.04px] top-[31.62px] absolute">
        <div className="w-[16.12px] h-[16.12px] left-0 top-0 absolute bg-cyan-300 bg-opacity-20 rounded-sm" />
      </div>
      <div className="w-[16.12px] h-[16.12px] left-[144.77px] top-[13.10px] absolute">
        <div className="w-[16.12px] h-[16.12px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-sm" />
      </div>
      <div className="w-[16.12px] h-[16.12px] left-[125.04px] top-[13.10px] absolute">
        <div className="w-[16.12px] h-[16.12px] left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-sm" />
      </div>
      <div className="w-[16.12px] h-[16.12px] left-[144.49px] top-[31.62px] absolute">
        <div className="w-[16.12px] h-[16.12px] left-0 top-0 absolute bg-cyan-300 bg-opacity-20 rounded-sm" />
      </div>
    </div>
  );
};

export default SpeedoMeter1;
