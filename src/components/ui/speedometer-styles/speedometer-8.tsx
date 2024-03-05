const SpeedoMeter8 = () => {
  return (
    <div className="w-[108px] h-[108px] relative">
      <div className="w-[108px] h-[108px] left-0 top-0 absolute">
        <div className="w-[108px] h-[108px] left-0 top-0 absolute bg-gradient-to-b from-black via-stone-950 to-neutral-950 rounded-full border border-white border-opacity-10" />
        <div className="left-[32.89px] top-[35.95px] absolute text-center text-emerald-400 text-base font-medium font-['Orbitron']">
          038
        </div>
        <div className="left-[44.26px] top-[56.03px] absolute text-center text-zinc-600 text-[6.87px] font-medium font-['Orbitron'] tracking-wide">
          KMH
        </div>
        <div className="w-[23.14px] h-[4.76px] left-[41.82px] top-[95.82px] absolute"></div>
      </div>
      <div className="w-[105.97px] h-[105.16px] left-[0.81px] top-[1.22px] absolute">
        <div className="w-[105.97px] h-[105.16px] left-0 top-0 absolute">
          <div className="w-[104.75px] h-[104.75px] left-[0.41px] top-[0.41px] absolute bg-gradient-to-b from-amber-300 to-orange-400 rounded-full" />
        </div>
        <div className="w-[68.08px] h-[58.11px] left-[18.68px] top-[17.05px] absolute"></div>
        <div className="w-[91.40px] h-[81.61px] left-[5.47px] top-[5.30px] absolute"></div>
        <div className="w-[1.77px] h-[0.71px] left-[18.12px] top-[87.06px] absolute origin-top-left rotate-[136.59deg] bg-white" />
        <div className="w-[1.77px] h-[0.71px] left-[8.23px] top-[34.22px] absolute origin-top-left rotate-[-156.52deg] bg-white" />
        <div className="w-[1.77px] h-[0.71px] left-[99.04px] top-[32.70px] absolute origin-top-left rotate-[154.52deg] bg-white" />
        <div className="w-[1.77px] h-[0.71px] left-[32.61px] top-[8.90px] absolute origin-top-left rotate-[-115.23deg] bg-white" />
        <div className="w-[1.77px] h-[0.71px] left-[73.47px] top-[8.95px] absolute origin-top-left rotate-[-64.78deg] bg-white" />
      </div>
      <div className="w-[12.99px] h-[12.99px] left-[47.50px] top-[70.65px] absolute bg-zinc-300 bg-opacity-10 rounded-full shadow-inner border border-white border-opacity-10" />
      <div className="left-[51.97px] top-[73.49px] absolute text-center text-zinc-500 text-[6.14px] font-medium font-['Tomorrow']">
        2
      </div>
    </div>
  );
};

export default SpeedoMeter8;
