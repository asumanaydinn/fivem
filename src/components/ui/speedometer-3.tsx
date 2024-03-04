const SpeedoMeter3 = () => {
  return (
    <div className="w-[109px] h-[104px] justify-center items-center inline-flex">
      <div className="w-[142.99px] h-[142.99px] relative">
        <div className="w-[102.62px] h-[102.62px] left-[20.18px] top-[20.19px] absolute bg-gradient-to-b from-neutral-900 via-neutral-800 to-zinc-950 rounded-full border border-white border-opacity-10" />
        <div className="left-[66.65px] top-[107.86px] absolute text-white text-[8.25px] font-medium font-['Orbitron']">
          2
        </div>
        <div className="left-[78.77px] top-[110.02px] absolute text-neutral-400 text-[4.85px] font-medium font-['Orbitron']">
          3
        </div>
        <div className="left-[59.78px] top-[110.02px] absolute text-neutral-400 text-[4.85px] font-medium font-['Orbitron']">
          1
        </div>
        <div className="w-[62px] h-[39.69px] left-[40.39px] top-[42px] absolute">
          <div className="left-0 top-0 absolute">
            <span className="text-white text-opacity-30 text-2xl font-semibold font-['Orbitron']">
              0
            </span>
            <span className="text-neutral-200 text-2xl font-semibold font-['Orbitron']">
              92
            </span>
          </div>
          <div className="left-[19.80px] top-[28.69px] absolute text-white text-opacity-50 text-[8.74px] font-medium font-['Orbitron']">
            KMH
          </div>
        </div>
        <div className="w-[35.56px] h-[7.32px] left-[53.72px] top-[92.51px] absolute"></div>
        <div className="origin-top-left rotate-180 w-[142.99px] h-[142.99px] left-[142.99px] top-0 absolute">
          <div className="w-[102.62px] h-[102.62px] left-[-20.19px] top-[20.19px] absolute origin-top-left rotate-180 bg-red-400 bg-opacity-20 rounded-full" />
          <div className="w-[102.62px] h-[102.62px] left-[-20.19px] top-[20.19px] absolute origin-top-left rotate-180 bg-red-400 rounded-full shadow" />
          <div className="w-[102.62px] h-[102.62px] left-[-0px] top-[59.10px] absolute origin-top-left rotate-[-144.84deg] bg-white rounded-full shadow" />
        </div>
        <div className="w-[102.62px] h-[102.62px] left-[20.18px] top-[20.19px] absolute">
          <div className="w-[102.62px] h-[102.62px] left-0 top-0 absolute bg-fuchsia-400 bg-opacity-20 rounded-full" />
          <div className="w-[102.62px] h-[102.62px] left-0 top-0 absolute bg-fuchsia-400 rounded-full shadow" />
        </div>
      </div>
    </div>
  );
};

export default SpeedoMeter3;
