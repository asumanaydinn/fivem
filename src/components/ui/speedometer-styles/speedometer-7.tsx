interface Props {
  speed: number;
  maxSpeed: number;
  fuel: number;
  maxFuel: number;
  gear: number;
}

const SpeedoMeter7 = (props: Props) => {
  const { fuel, gear, speed } = props;
  const activeBarsCount = Math.round((speed / 100) * 24);

  const generateIndicatorBars = (activeCount: number) => {
    let bars = [];
    for (let i = 0; i < 24; i++) {
      bars.push(
        <div
          key={i}
          className={`w-[4.87px] h-[29.21px] rounded-sm shadow-inner ${
            i < activeCount ? "bg-teal-500" : "bg-neutral-700"
          }`}
        />
      );
    }
    return bars;
  };

  return (
    <div className="w-[158.05px] h-[87.77px] mr-4 mb-10">
      <div className="flex items-center gap-x-2 relative">
        <div className="absolute left-1 top-[18px]">
          <div className="text-emerald-900 text-[12px] font-semibold font-['Orbitron']">
            {gear}
          </div>
        </div>

        <div className="flex items-center justify-start w-8">
          <div className="w-[23.27px] h-[42.05px] relative">
            <div className="w-[23.27px] h-[42.05px] left-0 top-0 absolute bg-teal-500 rounded-sm shadow-inner" />
            <div className="w-[7.51px] h-[25.13px] left-[8.26px] top-[8.26px] absolute">
              <div className="left-0 top-0 absolute text-emerald-900 text-sm font-semibold font-['Orbitron']">
                1
              </div>
            </div>
          </div>
          <div className="w-[23.27px] h-[42.05px] bg-neutral-700 rounded-sm shadow-inner"></div>
        </div>
        <div className="w-[140px] flex items-center justify-end">
          <span className="text-neutral-500 text-5xl font-semibold font-['Orbitron']">
            {speed !== 0 && speed < 100 ? "0" : ""}
          </span>
          <span className=" text-white text-5xl/snug font-semibold font-['Orbitron']">
            {speed}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-1">
        {generateIndicatorBars(activeBarsCount)}
      </div>
    </div>
  );
};

export default SpeedoMeter7;
