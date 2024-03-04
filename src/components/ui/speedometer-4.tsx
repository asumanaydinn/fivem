const SpeedoMeter4 = () => {
  return (
    <div className="w-[146px] h-[146px] relative">
      <div className="w-[104.78px] h-[104.78px] left-[146px] top-[60.34px] absolute origin-top-left rotate-[-144.84deg] bg-white rounded-full" />
      <div className="w-[104.78px] h-[104.78px] left-[20.61px] top-[20.61px] absolute">
        <div className="w-[104.78px] h-[104.78px] left-0 top-0 absolute bg-gradient-to-b from-neutral-900 via-neutral-800 to-zinc-950 rounded-full border border-white border-opacity-10" />
        <div className="left-[47.44px] top-[89.51px] absolute text-white text-[8.43px] font-medium font-['Orbitron']">
          2
        </div>
        <div className="left-[59.81px] top-[91.72px] absolute text-neutral-400 text-[4.96px] font-medium font-['Orbitron']">
          3
        </div>
        <div className="left-[40.43px] top-[91.72px] absolute text-neutral-400 text-[4.96px] font-medium font-['Orbitron']">
          1
        </div>
        <div className="w-[63px] h-[40.29px] left-[20.63px] top-[22.28px] absolute">
          <div className="left-0 top-0 absolute">
            <span className="text-white text-opacity-30 text-[25.17px] font-semibold font-['Orbitron']">
              0
            </span>
            <span className="text-neutral-200 text-[25.17px] font-semibold font-['Orbitron']">
              92
            </span>
          </div>
          <div className="left-[20.21px] top-[29.29px] absolute text-white text-opacity-50 text-[8.92px] font-medium font-['Orbitron']">
            KMH
          </div>
        </div>
        <div className="w-[36.30px] h-[7.47px] left-[34.24px] top-[73.84px] absolute"></div>
        <div className="w-[104.78px] h-[104.78px] left-[104.78px] top-0 absolute origin-top-left rotate-180 bg-white bg-opacity-20 rounded-full" />
        <div className="w-[104.78px] h-[104.78px] left-[104.78px] top-0 absolute origin-top-left rotate-180 bg-white rounded-full" />
        <div className="w-[104.78px] h-[104.78px] left-0 top-0 absolute">
          <div className="w-[104.78px] h-[104.78px] left-0 top-0 absolute bg-white bg-opacity-20 rounded-full" />
          <div className="w-[104.78px] h-[104.78px] left-0 top-0 absolute bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SpeedoMeter4;
