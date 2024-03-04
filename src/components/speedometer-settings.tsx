const SpeedometerSettings = () => {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <div className="w-[1197px] h-[87px] relative">
          <div className="w-[1197px] h-[87px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-[5px]" />
          <div className="w-[149.58px] h-[49.03px] pl-[9px] pr-4 py-[5.01px] left-[1034.14px] top-[18.31px] absolute bg-white bg-opacity-0 rounded-lg border border-white border-opacity-10 backdrop-blur-[12.71px] justify-start items-center gap-[26.04px] inline-flex">
            <div className="pl-[17.02px] pr-[18.53px] py-[7.01px] bg-neutral-200 bg-opacity-10 rounded-lg shadow border-2 border-neutral-200 justify-start items-start flex">
              <div className="text-neutral-200 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                KMH
              </div>
            </div>
            <div className="text-zinc-500 text-sm font-medium font-['Satoshi'] leading-[14.02px] tracking-tight">
              MPH
            </div>
          </div>
          <div className="w-[244px] h-[45px] left-[114px] top-[21px] absolute">
            <div className="left-0 top-0 absolute text-neutral-400 text-[21.25px] font-semibold font-['Inter']">
              Speed Type (KMH/MPH)
            </div>
            <div className="left-0 top-[30px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter']">
              Off-On Settings
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5">
          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[184.70px] h-[32.59px] pl-[70.62px] pr-[19.92px] pt-[5.43px] pb-[4.53px] left-[23.69px] top-[188.33px] absolute bg-neutral-200 rounded border-2 border-neutral-200 justify-start items-start inline-flex">
              <div className="text-black text-xs font-bold font-['Satoshi'] leading-snug tracking-tight">
                Selected
              </div>
            </div>
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
            <div className="w-[141px] h-[38.74px] left-[45.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #1
              </div>
              <div className="left-[36.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[92px] h-[88.48px] left-[69.56px] top-[24px] absolute">
              <div className="w-[91px] h-[88.03px] left-0 top-0 absolute">
                <div className="left-[12.63px] top-[27.22px] absolute">
                  <span className="text-black text-opacity-30 text-[26.24px] font-extrabold font-['Orbitron']">
                    0
                  </span>
                  <span className="text-black text-[26.24px] font-extrabold font-['Orbitron']">
                    99
                  </span>
                </div>
                <div className="left-[55.43px] top-[56.01px] absolute text-black text-[7.54px] font-extrabold font-['Orbitron']">
                  KMH
                </div>
                <div className="left-[4.07px] top-[75.46px] absolute text-center text-zinc-500 text-[7.41px] font-extrabold font-['Orbitron']">
                  1
                </div>
                <div className="left-[14.18px] top-[75.46px] absolute text-center text-zinc-500 text-[7.41px] font-extrabold font-['Orbitron']">
                  2
                </div>
                <div className="left-[25.86px] top-[75.46px] absolute text-center text-black text-[7.41px] font-extrabold font-['Orbitron']">
                  3
                </div>
                <div className="left-[38.31px] top-[75.46px] absolute text-center text-zinc-500 text-[7.41px] font-extrabold font-['Orbitron']">
                  4
                </div>
                <div className="left-[49.20px] top-[75.46px] absolute text-center text-zinc-500 text-[7.41px] font-extrabold font-['Orbitron']">
                  5
                </div>
                <div className="left-[60.87px] top-[75.46px] absolute text-center text-zinc-500 text-[7.41px] font-extrabold font-['Orbitron']">
                  6
                </div>
              </div>
            </div>
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[185px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-36 h-[38.74px] left-[43.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #2
              </div>
              <div className="left-[38.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[109px] h-[104px] left-[62px] top-[15px] absolute justify-center items-center inline-flex">
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
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[185px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-36 h-[38.74px] left-[43.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #3
              </div>
              <div className="left-[38.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
          <div className="w-[231.51px] h-[237.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-[6px] absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[146px] h-[146px] left-[42.44px] top-0 absolute">
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
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[191px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-36 h-[38.74px] left-[43.84px] top-[132.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #4
              </div>
              <div className="left-[38.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[104px] h-[104px] left-[63.88px] top-[15px] absolute">
              <div className="w-[98.56px] h-[98.56px] left-[2.72px] top-[2.72px] absolute bg-gradient-to-b from-black via-stone-950 to-neutral-800 rounded-full border border-white border-opacity-10" />
              <div className="w-[104px] h-[104px] left-0 top-0 absolute">
                <div className="w-[104px] h-[104px] left-0 top-0 absolute bg-gradient-to-b from-neutral-950 to-neutral-900 rounded-full" />
                <div className="w-[99.05px] h-[99.05px] left-[2.48px] top-[1.70px] absolute bg-gradient-to-b from-red-500 to-rose-600 rounded-full" />
                <div className="w-[99.05px] h-[99.05px] left-[2.48px] top-[1.70px] absolute bg-gradient-to-b from-pink-300 to-orange-500 rounded-full" />
              </div>
              <div className="opacity-30 w-[85.67px] h-[85.67px] left-[9.15px] top-[9.15px] absolute">
                <div className="w-[0.26px] h-[4.23px] left-[42.62px] top-0 absolute">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[59.03px] top-[3.18px] absolute origin-top-left rotate-[22.50deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[72.97px] top-[12.39px] absolute origin-top-left rotate-45">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[82.33px] top-[26.24px] absolute origin-top-left rotate-[67.50deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[85.67px] top-[42.62px] absolute origin-top-left rotate-90">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[82.49px] top-[59.03px] absolute origin-top-left rotate-[112.50deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[73.28px] top-[72.97px] absolute origin-top-left rotate-[135deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[59.43px] top-[82.33px] absolute origin-top-left rotate-[157.50deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[43.05px] top-[85.67px] absolute origin-top-left rotate-180">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[26.64px] top-[82.49px] absolute origin-top-left rotate-[-157.50deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[12.70px] top-[73.28px] absolute origin-top-left rotate-[-135deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[3.34px] top-[59.43px] absolute origin-top-left rotate-[-112.50deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-0 top-[43.05px] absolute origin-top-left -rotate-90">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[3.18px] top-[26.64px] absolute origin-top-left rotate-[-67.50deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[12.39px] top-[12.70px] absolute origin-top-left -rotate-45">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[0.26px] h-[4.23px] left-[26.24px] top-[3.34px] absolute origin-top-left rotate-[-22.50deg]">
                  <div className="w-[0.26px] h-[4.23px] left-0 top-0 absolute bg-white" />
                </div>
              </div>
              <div className="left-[50.48px] top-[82.34px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
                0
              </div>
              <div className="left-[25.84px] top-[73.99px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
                30
              </div>
              <div className="left-[16.36px] top-[49.73px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
                50
              </div>
              <div className="left-[25.84px] top-[25.46px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
                80
              </div>
              <div className="left-[47.83px] top-[16.36px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
                100
              </div>
              <div className="left-[70.20px] top-[24.70px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
                120
              </div>
              <div className="left-[80.82px] top-[49.73px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
                155
              </div>
              <div className="left-[70.20px] top-[74.75px] absolute text-zinc-100 text-[3.59px] font-medium font-['Orbitron']">
                180
              </div>
              <div className="w-[28.55px] h-[28.55px] left-[37.05px] top-[32.63px] absolute">
                <div className="w-[28.55px] h-[28.55px] left-0 top-0 absolute bg-gradient-to-b from-zinc-800 to-neutral-800 rounded-full shadow border border-white border-opacity-10" />
                <div className="left-[6.96px] top-[7.66px] absolute text-white text-[7.04px] font-medium font-['Orbitron']">
                  125
                </div>
                <div className="left-[9.75px] top-[16.36px] absolute text-neutral-400 text-[3.58px] font-medium font-['Orbitron']">
                  KMH
                </div>
              </div>
              <div className="w-[24.81px] h-[7.91px] left-[39.08px] top-[64.70px] absolute">
                <div className="w-[24.81px] h-[7.91px] left-0 top-0 absolute bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-sm shadow border border-white border-opacity-10" />
                <div className="w-[15.46px] h-[3.18px] left-[4.68px] top-[2.52px] absolute"></div>
              </div>
            </div>
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[185px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-36 h-[38.74px] left-[43.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #5
              </div>
              <div className="left-[38.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>

          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[105.97px] h-[105.97px] left-[64px] top-[15px] absolute">
              <div className="w-[98.50px] h-[98.50px] left-[4.42px] top-[3.40px] absolute">
                <div className="w-[98.50px] h-[98.50px] left-0 top-0 absolute bg-gradient-to-b from-black via-stone-950 to-neutral-800 rounded-full border border-white border-opacity-10" />
                <div className="w-[95.10px] h-[92.59px] left-[1.70px] top-[2.90px] absolute">
                  <div className="w-[95.10px] h-[91.06px] left-0 top-0 absolute"></div>
                  <div className="left-[44.83px] top-[11.70px] absolute text-white text-opacity-30 text-[3.72px] font-medium font-['Poppins']">
                    100
                  </div>
                  <div className="left-[46.87px] top-[75.22px] absolute text-white text-[3.72px] font-medium font-['Poppins']">
                    0
                  </div>
                  <div className="left-[29.89px] top-[72.16px] absolute origin-top-left rotate-[30deg] text-white text-[3.72px] font-medium font-['Poppins']">
                    20
                  </div>
                  <div className="left-[64.49px] top-[72.16px] absolute origin-top-left rotate-[30deg] text-white text-opacity-30 text-[3.72px] font-medium font-['Poppins']">
                    20
                  </div>
                  <div className="left-[14.95px] top-[61.59px] absolute origin-top-left rotate-[-15deg] text-white text-[3.72px] font-medium font-['Poppins']">
                    40
                  </div>
                  <div className="left-[74.51px] top-[61.59px] absolute origin-top-left rotate-[-15deg] text-white text-opacity-30 text-[3.72px] font-medium font-['Poppins']">
                    40
                  </div>
                  <div className="left-[11.15px] top-[44.54px] absolute text-white text-[3.72px] font-medium font-['Poppins']">
                    60
                  </div>
                  <div className="left-[79.54px] top-[44.54px] absolute text-white text-opacity-30 text-[3.72px] font-medium font-['Poppins']">
                    60
                  </div>
                  <div className="left-[16.64px] top-[26.31px] absolute text-white text-[3.72px] font-medium font-['Poppins']">
                    60
                  </div>
                  <div className="left-[74.04px] top-[26.31px] absolute text-white text-opacity-30 text-[3.72px] font-medium font-['Poppins']">
                    60
                  </div>
                  <div className="left-[27.51px] top-[16.97px] absolute origin-top-left rotate-[-30deg] text-white text-opacity-30 text-[3.72px] font-medium font-['Poppins']">
                    80
                  </div>
                  <div className="left-[58.76px] top-[18.16px] absolute origin-top-left rotate-[-30deg] text-white text-opacity-30 text-[3.72px] font-medium font-['Poppins']">
                    120
                  </div>
                </div>
                <div className="w-[59.56px] h-[59.56px] left-[19.47px] top-[19.47px] absolute">
                  <div className="w-[33.97px] h-[33.97px] left-[12.80px] top-[12.80px] absolute bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-10" />
                  <div className="w-[42.12px] h-[42.12px] left-[8.72px] top-[8.72px] absolute bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-10" />
                  <div className="w-[42.12px] h-[42.12px] left-[59.56px] top-[29.78px] absolute origin-top-left rotate-[135deg] bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-10" />
                  <div className="w-[48.56px] h-[48.56px] left-[59.52px] top-[46.95px] absolute origin-top-left rotate-[165deg] bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-10" />
                  <div className="w-[48.56px] h-[48.56px] left-[5.50px] top-[5.50px] absolute bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-10" />
                  <div className="left-[19.93px] top-[22.99px] absolute text-white text-[9.49px] font-medium font-['Orbitron']">
                    125
                  </div>
                </div>
                <div className="w-[24.12px] h-[7.69px] left-[37.36px] top-[58.42px] absolute">
                  <div className="w-[24.12px] h-[7.69px] left-0 top-0 absolute bg-stone-950 rounded-tl-sm rounded-tr-sm rounded-bl rounded-br shadow border border-white border-opacity-10" />
                  <div className="w-[15.45px] h-[3.18px] left-[3.99px] top-[2.41px] absolute"></div>
                </div>
              </div>
              <div className="w-[105.97px] h-[105.97px] left-0 top-0 absolute">
                <div className="w-[105.97px] h-[105.97px] left-0 top-0 absolute bg-zinc-700 rounded-full" />
                <div className="w-[105.97px] h-[105.97px] left-[105.97px] top-0 absolute origin-top-left rotate-180 bg-gradient-to-b from-red-300 to-orange-400 rounded-full" />
              </div>
              <div className="w-[24.12px] h-[7.69px] left-[41.78px] top-[31.93px] absolute">
                <div className="w-[24.12px] h-[7.69px] left-[-0px] top-[7.69px] absolute bg-stone-950 rounded-tl-sm rounded-tr-sm rounded-bl rounded-br shadow border border-white border-opacity-10" />
                <div className="left-[10.19px] top-[1.02px] absolute text-white text-[4.35px] font-medium font-['Orbitron']">
                  2
                </div>
                <div className="left-[17.32px] top-[1.02px] absolute text-neutral-600 text-[4.35px] font-medium font-['Orbitron']">
                  3
                </div>
                <div className="left-[3.40px] top-[1.02px] absolute text-neutral-600 text-[4.35px] font-medium font-['Orbitron']">
                  1
                </div>
              </div>
            </div>
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[185px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-36 h-[38.74px] left-[43.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #6
              </div>
              <div className="left-[38.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[151.05px] h-[87.77px] left-[40px] top-[20px] absolute">
              <div className="left-[51.05px] top-0 absolute">
                <span className="text-neutral-500 text-5xl font-semibold font-['Orbitron']">
                  0
                </span>
                <span className="text-white text-5xl font-semibold font-['Orbitron']">
                  18
                </span>
              </div>
              <div className="w-[4.87px] h-[29.21px] left-0 top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[23.27px] h-[42.05px] left-0 top-[11.26px] absolute">
                <div className="w-[23.27px] h-[42.05px] left-0 top-0 absolute bg-teal-500 rounded-sm shadow-inner" />
                <div className="w-[7.51px] h-[25.13px] left-[8.26px] top-[8.26px] absolute">
                  <div className="left-0 top-0 absolute text-emerald-900 text-sm font-semibold font-['Orbitron']">
                    1
                  </div>
                </div>
              </div>
              <div className="w-[4.87px] h-[29.21px] left-[6.09px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[12.17px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[18.26px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[24.34px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[30.43px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[36.51px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[42.60px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[48.68px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[54.77px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[60.85px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[66.94px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[73.02px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[79.11px] top-[58.53px] absolute bg-teal-500 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[84.84px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[23.27px] h-[42.05px] left-[25.53px] top-[11.26px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[90.85px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[96.85px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[102.86px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[108.87px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[114.87px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[120.88px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[126.89px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[132.89px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[138.90px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[4.87px] h-[29.21px] left-[144.91px] top-[58.56px] absolute bg-neutral-700 rounded-sm shadow-inner" />
              <div className="w-[23.27px] h-[23.79px] left-[25.53px] top-[29.52px] absolute"></div>
            </div>
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[185px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[143px] h-[38.74px] left-[44.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #7
              </div>
              <div className="left-[37.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[108px] h-[108px] left-[61px] top-[11px] absolute">
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
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[185px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-36 h-[38.74px] left-[43.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #8
              </div>
              <div className="left-[38.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[119px] h-[119px] left-[51px] top-[12px] absolute">
              <div className="w-[110.06px] h-[106.75px] left-[8.94px] top-[-0px] absolute">
                <div className="w-[106.75px] h-[106.75px] left-[3.31px] top-[-0px] absolute bg-gradient-to-b from-black via-stone-950 to-neutral-800 rounded-full border border-white border-opacity-10" />
                <div className="w-[27.42px] h-[8.74px] left-[42.40px] top-[31.13px] absolute">
                  <div className="w-[27.42px] h-[8.74px] left-0 top-[8.74px] absolute bg-stone-950 rounded-tl-sm rounded-tr-sm rounded-bl rounded-br shadow border border-white border-opacity-10" />
                  <div className="left-[11.58px] top-[1.16px] absolute text-white text-[4.95px] font-medium font-['Orbitron']">
                    2
                  </div>
                  <div className="left-[19.69px] top-[1.16px] absolute text-neutral-600 text-[4.95px] font-medium font-['Orbitron']">
                    3
                  </div>
                  <div className="left-[3.86px] top-[1.16px] absolute text-neutral-600 text-[4.95px] font-medium font-['Orbitron']">
                    1
                  </div>
                </div>
                <div className="w-[26.54px] h-[5.46px] left-[42.98px] top-[92.75px] absolute"></div>
                <div className="w-[58.33px] h-[58.33px] left-[27.23px] top-[24.50px] absolute bg-zinc-300 bg-opacity-0 rounded-full border border-white border-opacity-10" />
                <div className="w-[58.33px] h-[58.33px] left-[27.23px] top-[24.50px] absolute bg-gradient-to-bl from-purple-50 via-purple-400 to-zinc-400 rounded-full shadow border border-white border-opacity-10" />
                <div className="left-[38.31px] top-[40.43px] absolute text-center text-zinc-400 text-sm font-medium font-['Orbitron']">
                  038
                </div>
                <div className="w-[99.75px] h-[99.75px] left-[-0px] top-[6.97px] absolute origin-top-left rotate-[-3.23deg] bg-gradient-to-l from-stone-600 to-stone-700 rounded-full border-8 border-purple-500 backdrop-blur-[37.10px]" />
                <div className="left-[49.40px] top-[61.83px] absolute text-center text-neutral-400 text-[5.92px] font-medium font-['Orbitron']">
                  mph
                </div>
                <div className="left-[24.78px] top-[77.90px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  0
                </div>
                <div className="left-[13.10px] top-[58.33px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  20
                </div>
                <div className="left-[17.05px] top-[34.90px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  40
                </div>
                <div className="left-[29.56px] top-[19.25px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  40
                </div>
                <div className="left-[53.48px] top-[12.83px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  40
                </div>
                <div className="left-[79.15px] top-[19.25px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  40
                </div>
                <div className="left-[90.81px] top-[35px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  40
                </div>
                <div className="left-[92.56px] top-[57.75px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  40
                </div>
                <div className="left-[85.56px] top-[78.17px] absolute text-center text-white text-[4.10px] font-normal font-['Orbitron']">
                  40
                </div>
              </div>
              <div className="w-[111.42px] h-[111.42px] left-[-0px] top-[7.58px] absolute">
                <div className="w-[93.91px] h-[93.91px] left-[19.57px] top-0 absolute origin-top-left rotate-12 rounded-full border-2 border-neutral-500 backdrop-blur-[32.02px]" />
                <div className="w-[93.91px] h-[93.91px] left-[19.57px] top-0 absolute origin-top-left rotate-12 rounded-full border-2 border-amber-300 backdrop-blur-[32.02px]" />
                <div className="origin-top-left rotate-[3.38deg] w-[5.64px] h-[6.34px] left-[21.39px] top-[96.14px] absolute">
                  <div className="w-[0.71px] h-[1.41px] left-[4.83px] top-[1.93px] absolute origin-top-left rotate-[3.38deg] bg-amber-300 rounded-[0.12px] border border-amber-300" />
                  <div className="w-[4.70px] h-[0.47px] left-[-0.35px] top-[5.86px] absolute origin-top-left rotate-[3.38deg] bg-amber-300 rounded-[3.06px]" />
                  <img
                    className="w-[3.76px] h-[6.11px] left-[0.47px] top-[0.03px] absolute origin-top-left rotate-[3.38deg] border border-amber-300"
                    src="https://via.placeholder.com/4x6"
                  />
                </div>
              </div>
            </div>
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[185px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-36 h-[38.74px] left-[43.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #9
              </div>
              <div className="left-[38.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
          <div className="w-[231.51px] h-[231.51px] relative">
            <div className="w-[231.51px] h-[231.51px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
            <div className="w-[216px] h-[79.62px] left-[8px] top-[25px] absolute">
              <img
                className="w-[214.42px] h-[79.73px] left-[0.39px] top-[-0px] absolute rounded-[2.84px] border border-white border-opacity-10"
                src="https://via.placeholder.com/214x80"
              />
              <div className="w-[54px] h-[53.96px] left-[79.62px] top-[13.01px] absolute">
                <div className="w-[53.96px] h-[53.96px] left-0 top-0 absolute opacity-20 bg-white bg-opacity-20 rounded-full border border-white" />
                <div className="w-[35.50px] h-[35.50px] left-[9.23px] top-[9.23px] absolute opacity-20 bg-white bg-opacity-40 rounded-full border border-white" />
                <div className="opacity-20 w-[53.96px] h-[53.96px] left-[0.04px] top-0 absolute">
                  <div className="w-[0.08px] h-[0.56px] left-[26.94px] top-0 absolute">
                    <div className="w-[0.08px] h-[0.56px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[27.88px] top-[0.02px] absolute origin-top-left rotate-2">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[28.82px] top-[0.06px] absolute origin-top-left rotate-[4deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[29.76px] top-[0.14px] absolute origin-top-left rotate-6">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[30.70px] top-[0.26px] absolute origin-top-left rotate-[8deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[31.63px] top-[0.40px] absolute origin-top-left rotate-[10deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[32.55px] top-[0.58px] absolute origin-top-left rotate-12">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[33.47px] top-[0.79px] absolute origin-top-left rotate-[14deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[34.38px] top-[1.03px] absolute origin-top-left rotate-[16deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[35.28px] top-[1.31px] absolute origin-top-left rotate-[18deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[36.17px] top-[1.61px] absolute origin-top-left rotate-[20deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[37.05px] top-[1.95px] absolute origin-top-left rotate-[22deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[37.92px] top-[2.32px] absolute origin-top-left rotate-[24deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[38.77px] top-[2.71px] absolute origin-top-left rotate-[26deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[39.61px] top-[3.14px] absolute origin-top-left rotate-[28deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[40.44px] top-[3.59px] absolute origin-top-left rotate-[30deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[41.24px] top-[4.08px] absolute origin-top-left rotate-[32deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[42.03px] top-[4.59px] absolute origin-top-left rotate-[34deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[42.81px] top-[5.13px] absolute origin-top-left rotate-[36deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[43.56px] top-[5.70px] absolute origin-top-left rotate-[38deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[44.29px] top-[6.29px] absolute origin-top-left rotate-[40deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[45px] top-[6.90px] absolute origin-top-left rotate-[42deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[45.69px] top-[7.54px] absolute origin-top-left rotate-[44deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[46.36px] top-[8.21px] absolute origin-top-left rotate-[46deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[47px] top-[8.90px] absolute origin-top-left rotate-[48deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[47.62px] top-[9.61px] absolute origin-top-left rotate-[50deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[48.22px] top-[10.34px] absolute origin-top-left rotate-[52deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[48.78px] top-[11.09px] absolute origin-top-left rotate-[54deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[49.33px] top-[11.86px] absolute origin-top-left rotate-[56deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[49.84px] top-[12.65px] absolute origin-top-left rotate-[58deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[50.33px] top-[13.46px] absolute origin-top-left rotate-[60deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[50.78px] top-[14.28px] absolute origin-top-left rotate-[62deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[51.21px] top-[15.12px] absolute origin-top-left rotate-[64deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[51.61px] top-[15.97px] absolute origin-top-left rotate-[66deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[51.98px] top-[16.84px] absolute origin-top-left rotate-[68deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[52.32px] top-[17.72px] absolute origin-top-left rotate-[70deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[52.63px] top-[18.61px] absolute origin-top-left rotate-[72deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[52.90px] top-[19.51px] absolute origin-top-left rotate-[74deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.15px] top-[20.41px] absolute origin-top-left rotate-[76deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.36px] top-[21.33px] absolute origin-top-left rotate-[78deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.54px] top-[22.26px] absolute origin-top-left rotate-[80deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.69px] top-[23.19px] absolute origin-top-left rotate-[82deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.81px] top-[24.12px] absolute origin-top-left rotate-[84deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.89px] top-[25.06px] absolute origin-top-left rotate-[86deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.94px] top-[26px] absolute origin-top-left rotate-[88deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.96px] top-[26.94px] absolute origin-top-left rotate-90">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.95px] top-[27.88px] absolute origin-top-left rotate-[92deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.90px] top-[28.82px] absolute origin-top-left rotate-[94deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.82px] top-[29.76px] absolute origin-top-left rotate-[96deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.70px] top-[30.70px] absolute origin-top-left rotate-[98deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.56px] top-[31.63px] absolute origin-top-left rotate-[100deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.38px] top-[32.55px] absolute origin-top-left rotate-[102deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[53.17px] top-[33.47px] absolute origin-top-left rotate-[104deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[52.93px] top-[34.38px] absolute origin-top-left rotate-[106deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[52.65px] top-[35.28px] absolute origin-top-left rotate-[108deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[52.35px] top-[36.17px] absolute origin-top-left rotate-[110deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[52.01px] top-[37.05px] absolute origin-top-left rotate-[112deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[51.64px] top-[37.92px] absolute origin-top-left rotate-[114deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[51.25px] top-[38.77px] absolute origin-top-left rotate-[116deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[50.82px] top-[39.61px] absolute origin-top-left rotate-[118deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[50.37px] top-[40.44px] absolute origin-top-left rotate-[120deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[49.88px] top-[41.24px] absolute origin-top-left rotate-[122deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[49.37px] top-[42.03px] absolute origin-top-left rotate-[124deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[48.83px] top-[42.81px] absolute origin-top-left rotate-[126deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[48.26px] top-[43.56px] absolute origin-top-left rotate-[128deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[47.67px] top-[44.29px] absolute origin-top-left rotate-[130deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[47.06px] top-[45px] absolute origin-top-left rotate-[132deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[46.42px] top-[45.69px] absolute origin-top-left rotate-[134deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[45.75px] top-[46.36px] absolute origin-top-left rotate-[136deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[45.06px] top-[47px] absolute origin-top-left rotate-[138deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[44.35px] top-[47.62px] absolute origin-top-left rotate-[140deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[43.62px] top-[48.22px] absolute origin-top-left rotate-[142deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[42.87px] top-[48.78px] absolute origin-top-left rotate-[144deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[42.10px] top-[49.33px] absolute origin-top-left rotate-[146deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[41.31px] top-[49.84px] absolute origin-top-left rotate-[148deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[40.50px] top-[50.33px] absolute origin-top-left rotate-[150deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[39.68px] top-[50.78px] absolute origin-top-left rotate-[152deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[38.84px] top-[51.21px] absolute origin-top-left rotate-[154deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[37.99px] top-[51.61px] absolute origin-top-left rotate-[156deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[37.12px] top-[51.98px] absolute origin-top-left rotate-[158deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[36.25px] top-[52.32px] absolute origin-top-left rotate-[160deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[35.35px] top-[52.63px] absolute origin-top-left rotate-[162deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[34.45px] top-[52.90px] absolute origin-top-left rotate-[164deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[33.55px] top-[53.15px] absolute origin-top-left rotate-[166deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[32.63px] top-[53.36px] absolute origin-top-left rotate-[168deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[31.71px] top-[53.54px] absolute origin-top-left rotate-[170deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[30.77px] top-[53.69px] absolute origin-top-left rotate-[172deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[29.84px] top-[53.81px] absolute origin-top-left rotate-[174deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[28.90px] top-[53.89px] absolute origin-top-left rotate-[176deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[27.96px] top-[53.94px] absolute origin-top-left rotate-[178deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[27.02px] top-[53.96px] absolute origin-top-left rotate-180">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[26.08px] top-[53.95px] absolute origin-top-left rotate-[-178deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[25.14px] top-[53.90px] absolute origin-top-left rotate-[-176deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[24.20px] top-[53.82px] absolute origin-top-left rotate-[-174deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[23.26px] top-[53.70px] absolute origin-top-left rotate-[-172deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[22.33px] top-[53.56px] absolute origin-top-left rotate-[-170deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[21.41px] top-[53.38px] absolute origin-top-left rotate-[-168deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[20.49px] top-[53.17px] absolute origin-top-left rotate-[-166deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[19.58px] top-[52.93px] absolute origin-top-left rotate-[-164deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[18.68px] top-[52.65px] absolute origin-top-left rotate-[-162deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[17.79px] top-[52.35px] absolute origin-top-left rotate-[-160deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[16.91px] top-[52.01px] absolute origin-top-left rotate-[-158deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[16.04px] top-[51.64px] absolute origin-top-left rotate-[-156deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[15.19px] top-[51.25px] absolute origin-top-left rotate-[-154deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[14.35px] top-[50.82px] absolute origin-top-left rotate-[-152deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[13.53px] top-[50.37px] absolute origin-top-left rotate-[-150deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[12.72px] top-[49.88px] absolute origin-top-left rotate-[-148deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[11.93px] top-[49.37px] absolute origin-top-left rotate-[-146deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[11.15px] top-[48.83px] absolute origin-top-left rotate-[-144deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[10.40px] top-[48.27px] absolute origin-top-left rotate-[-142deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[9.67px] top-[47.67px] absolute origin-top-left rotate-[-140deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[8.96px] top-[47.06px] absolute origin-top-left rotate-[-138deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[8.27px] top-[46.42px] absolute origin-top-left rotate-[-136deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[7.60px] top-[45.75px] absolute origin-top-left rotate-[-134deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[6.96px] top-[45.06px] absolute origin-top-left rotate-[-132deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[6.34px] top-[44.35px] absolute origin-top-left rotate-[-130deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[5.74px] top-[43.62px] absolute origin-top-left rotate-[-128deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[5.18px] top-[42.87px] absolute origin-top-left rotate-[-126deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[4.63px] top-[42.10px] absolute origin-top-left rotate-[-124deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[4.12px] top-[41.31px] absolute origin-top-left rotate-[-122deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[3.63px] top-[40.50px] absolute origin-top-left rotate-[-120deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[3.18px] top-[39.68px] absolute origin-top-left rotate-[-118deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[2.75px] top-[38.84px] absolute origin-top-left rotate-[-116deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[2.35px] top-[37.99px] absolute origin-top-left rotate-[-114deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[1.98px] top-[37.12px] absolute origin-top-left rotate-[-112deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[1.64px] top-[36.25px] absolute origin-top-left rotate-[-110deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[1.33px] top-[35.36px] absolute origin-top-left rotate-[-108deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[1.06px] top-[34.45px] absolute origin-top-left rotate-[-106deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.81px] top-[33.55px] absolute origin-top-left rotate-[-104deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.60px] top-[32.63px] absolute origin-top-left rotate-[-102deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.42px] top-[31.70px] absolute origin-top-left rotate-[-100deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.27px] top-[30.77px] absolute origin-top-left rotate-[-98deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.15px] top-[29.84px] absolute origin-top-left rotate-[-96deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.07px] top-[28.90px] absolute origin-top-left rotate-[-94deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.02px] top-[27.96px] absolute origin-top-left rotate-[-92deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-0 top-[27.02px] absolute origin-top-left -rotate-90">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.01px] top-[26.08px] absolute origin-top-left rotate-[-88deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.06px] top-[25.14px] absolute origin-top-left rotate-[-86deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.14px] top-[24.20px] absolute origin-top-left rotate-[-84deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.26px] top-[23.26px] absolute origin-top-left rotate-[-82deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.40px] top-[22.33px] absolute origin-top-left rotate-[-80deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.58px] top-[21.41px] absolute origin-top-left rotate-[-78deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[0.79px] top-[20.49px] absolute origin-top-left rotate-[-76deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[1.03px] top-[19.58px] absolute origin-top-left rotate-[-74deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[1.31px] top-[18.68px] absolute origin-top-left rotate-[-72deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[1.61px] top-[17.79px] absolute origin-top-left rotate-[-70deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[1.95px] top-[16.91px] absolute origin-top-left rotate-[-68deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[2.32px] top-[16.04px] absolute origin-top-left rotate-[-66deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[2.71px] top-[15.19px] absolute origin-top-left rotate-[-64deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[3.14px] top-[14.35px] absolute origin-top-left rotate-[-62deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[3.59px] top-[13.52px] absolute origin-top-left rotate-[-60deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[4.08px] top-[12.72px] absolute origin-top-left rotate-[-58deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[4.59px] top-[11.93px] absolute origin-top-left rotate-[-56deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[5.13px] top-[11.15px] absolute origin-top-left rotate-[-54deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[5.70px] top-[10.40px] absolute origin-top-left rotate-[-52deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[6.29px] top-[9.67px] absolute origin-top-left rotate-[-50deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[6.90px] top-[8.96px] absolute origin-top-left rotate-[-48deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[7.54px] top-[8.27px] absolute origin-top-left rotate-[-46deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[8.21px] top-[7.60px] absolute origin-top-left rotate-[-44deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[8.90px] top-[6.96px] absolute origin-top-left rotate-[-42deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[9.61px] top-[6.34px] absolute origin-top-left rotate-[-40deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[10.34px] top-[5.74px] absolute origin-top-left rotate-[-38deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[11.09px] top-[5.18px] absolute origin-top-left rotate-[-36deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[11.86px] top-[4.63px] absolute origin-top-left rotate-[-34deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[12.65px] top-[4.12px] absolute origin-top-left rotate-[-32deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[13.46px] top-[3.63px] absolute origin-top-left rotate-[-30deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[14.28px] top-[3.18px] absolute origin-top-left rotate-[-28deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[15.12px] top-[2.75px] absolute origin-top-left rotate-[-26deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[15.97px] top-[2.35px] absolute origin-top-left rotate-[-24deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[16.84px] top-[1.98px] absolute origin-top-left rotate-[-22deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[17.71px] top-[1.64px] absolute origin-top-left rotate-[-20deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[18.61px] top-[1.33px] absolute origin-top-left rotate-[-18deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[19.51px] top-[1.06px] absolute origin-top-left rotate-[-16deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[20.42px] top-[0.81px] absolute origin-top-left rotate-[-14deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[21.33px] top-[0.60px] absolute origin-top-left -rotate-12">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[22.26px] top-[0.42px] absolute origin-top-left rotate-[-10deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[23.19px] top-[0.27px] absolute origin-top-left rotate-[-8deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[24.12px] top-[0.15px] absolute origin-top-left -rotate-6">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[25.06px] top-[0.07px] absolute origin-top-left rotate-[-4deg]">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.03px] h-[0.20px] left-[26px] top-[0.02px] absolute origin-top-left -rotate-2">
                    <div className="w-[0.03px] h-[0.20px] left-0 top-0 absolute bg-white" />
                  </div>
                </div>
              </div>
              <div className="w-[72.92px] h-[72.87px] left-[70.16px] top-[3.55px] absolute">
                <div className="w-[47.93px] h-[47.93px] left-[12.47px] top-[12.47px] absolute opacity-20 bg-white bg-opacity-40 rounded-full border border-white" />
                <div className="opacity-20 w-[72.87px] h-[72.87px] left-[0.05px] top-0 absolute">
                  <div className="w-[0.11px] h-[0.75px] left-[36.38px] top-0 absolute">
                    <div className="w-[0.11px] h-[0.75px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[37.65px] top-[0.02px] absolute origin-top-left rotate-2">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[38.92px] top-[0.09px] absolute origin-top-left rotate-[4deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[40.19px] top-[0.19px] absolute origin-top-left rotate-6">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[41.45px] top-[0.35px] absolute origin-top-left rotate-[8deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[42.71px] top-[0.54px] absolute origin-top-left rotate-[10deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[43.96px] top-[0.79px] absolute origin-top-left rotate-12">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[45.20px] top-[1.07px] absolute origin-top-left rotate-[14deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[46.42px] top-[1.40px] absolute origin-top-left rotate-[16deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[47.64px] top-[1.77px] absolute origin-top-left rotate-[18deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[48.84px] top-[2.18px] absolute origin-top-left rotate-[20deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[50.03px] top-[2.63px] absolute origin-top-left rotate-[22deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[51.20px] top-[3.13px] absolute origin-top-left rotate-[24deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[52.36px] top-[3.66px] absolute origin-top-left rotate-[26deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[53.49px] top-[4.24px] absolute origin-top-left rotate-[28deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[54.60px] top-[4.85px] absolute origin-top-left rotate-[30deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[55.69px] top-[5.51px] absolute origin-top-left rotate-[32deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[56.76px] top-[6.20px] absolute origin-top-left rotate-[34deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[57.80px] top-[6.93px] absolute origin-top-left rotate-[36deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[58.82px] top-[7.69px] absolute origin-top-left rotate-[38deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[59.81px] top-[8.49px] absolute origin-top-left rotate-[40deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[60.77px] top-[9.32px] absolute origin-top-left rotate-[42deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[61.70px] top-[10.19px] absolute origin-top-left rotate-[44deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[62.60px] top-[11.09px] absolute origin-top-left rotate-[46deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[63.47px] top-[12.01px] absolute origin-top-left rotate-[48deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[64.31px] top-[12.97px] absolute origin-top-left rotate-[50deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[65.11px] top-[13.96px] absolute origin-top-left rotate-[52deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[65.88px] top-[14.97px] absolute origin-top-left rotate-[54deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[66.61px] top-[16.02px] absolute origin-top-left rotate-[56deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[67.30px] top-[17.08px] absolute origin-top-left rotate-[58deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[67.96px] top-[18.17px] absolute origin-top-left rotate-[60deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[68.58px] top-[19.28px] absolute origin-top-left rotate-[62deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[69.16px] top-[20.41px] absolute origin-top-left rotate-[64deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[69.69px] top-[21.57px] absolute origin-top-left rotate-[66deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[70.19px] top-[22.74px] absolute origin-top-left rotate-[68deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[70.65px] top-[23.92px] absolute origin-top-left rotate-[70deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[71.07px] top-[25.12px] absolute origin-top-left rotate-[72deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[71.44px] top-[26.34px] absolute origin-top-left rotate-[74deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[71.77px] top-[27.57px] absolute origin-top-left rotate-[76deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.06px] top-[28.81px] absolute origin-top-left rotate-[78deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.30px] top-[30.05px] absolute origin-top-left rotate-[80deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.50px] top-[31.31px] absolute origin-top-left rotate-[82deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.66px] top-[32.57px] absolute origin-top-left rotate-[84deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.77px] top-[33.84px] absolute origin-top-left rotate-[86deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.84px] top-[35.11px] absolute origin-top-left rotate-[88deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.87px] top-[36.38px] absolute origin-top-left rotate-90">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.85px] top-[37.65px] absolute origin-top-left rotate-[92deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.78px] top-[38.92px] absolute origin-top-left rotate-[94deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.67px] top-[40.19px] absolute origin-top-left rotate-[96deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.52px] top-[41.45px] absolute origin-top-left rotate-[98deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.32px] top-[42.71px] absolute origin-top-left rotate-[100deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[72.08px] top-[43.95px] absolute origin-top-left rotate-[102deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[71.80px] top-[45.19px] absolute origin-top-left rotate-[104deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[71.47px] top-[46.42px] absolute origin-top-left rotate-[106deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[71.10px] top-[47.64px] absolute origin-top-left rotate-[108deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[70.69px] top-[48.84px] absolute origin-top-left rotate-[110deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[70.23px] top-[50.03px] absolute origin-top-left rotate-[112deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[69.74px] top-[51.20px] absolute origin-top-left rotate-[114deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[69.20px] top-[52.36px] absolute origin-top-left rotate-[116deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[68.63px] top-[53.49px] absolute origin-top-left rotate-[118deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[68.01px] top-[54.60px] absolute origin-top-left rotate-[120deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[67.36px] top-[55.69px] absolute origin-top-left rotate-[122deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[66.67px] top-[56.76px] absolute origin-top-left rotate-[124deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[65.94px] top-[57.80px] absolute origin-top-left rotate-[126deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[65.17px] top-[58.82px] absolute origin-top-left rotate-[128deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[64.38px] top-[59.81px] absolute origin-top-left rotate-[130deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[63.54px] top-[60.77px] absolute origin-top-left rotate-[132deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[62.68px] top-[61.70px] absolute origin-top-left rotate-[134deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[61.78px] top-[62.60px] absolute origin-top-left rotate-[136deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[60.85px] top-[63.47px] absolute origin-top-left rotate-[138deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[59.89px] top-[64.31px] absolute origin-top-left rotate-[140deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[58.91px] top-[65.11px] absolute origin-top-left rotate-[142deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[57.89px] top-[65.88px] absolute origin-top-left rotate-[144deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[56.85px] top-[66.61px] absolute origin-top-left rotate-[146deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[55.78px] top-[67.30px] absolute origin-top-left rotate-[148deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[54.70px] top-[67.96px] absolute origin-top-left rotate-[150deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[53.58px] top-[68.58px] absolute origin-top-left rotate-[152deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[52.45px] top-[69.15px] absolute origin-top-left rotate-[154deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[51.30px] top-[69.69px] absolute origin-top-left rotate-[156deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[50.13px] top-[70.19px] absolute origin-top-left rotate-[158deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[48.94px] top-[70.65px] absolute origin-top-left rotate-[160deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[47.74px] top-[71.07px] absolute origin-top-left rotate-[162deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[46.53px] top-[71.44px] absolute origin-top-left rotate-[164deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[45.30px] top-[71.77px] absolute origin-top-left rotate-[166deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[44.06px] top-[72.06px] absolute origin-top-left rotate-[168deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[42.81px] top-[72.30px] absolute origin-top-left rotate-[170deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[41.56px] top-[72.50px] absolute origin-top-left rotate-[172deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[40.29px] top-[72.66px] absolute origin-top-left rotate-[174deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[39.03px] top-[72.77px] absolute origin-top-left rotate-[176deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[37.76px] top-[72.84px] absolute origin-top-left rotate-[178deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[36.49px] top-[72.87px] absolute origin-top-left rotate-180">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[35.21px] top-[72.85px] absolute origin-top-left rotate-[-178deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[33.95px] top-[72.78px] absolute origin-top-left rotate-[-176deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[32.68px] top-[72.67px] absolute origin-top-left rotate-[-174deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[31.42px] top-[72.52px] absolute origin-top-left rotate-[-172deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[30.16px] top-[72.32px] absolute origin-top-left rotate-[-170deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[28.91px] top-[72.08px] absolute origin-top-left rotate-[-168deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[27.67px] top-[71.80px] absolute origin-top-left rotate-[-166deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[26.44px] top-[71.47px] absolute origin-top-left rotate-[-164deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[25.23px] top-[71.10px] absolute origin-top-left rotate-[-162deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[24.02px] top-[70.69px] absolute origin-top-left rotate-[-160deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[22.83px] top-[70.23px] absolute origin-top-left rotate-[-158deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[21.66px] top-[69.74px] absolute origin-top-left rotate-[-156deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[20.51px] top-[69.20px] absolute origin-top-left rotate-[-154deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[19.38px] top-[68.63px] absolute origin-top-left rotate-[-152deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[18.26px] top-[68.01px] absolute origin-top-left rotate-[-150deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[17.17px] top-[67.36px] absolute origin-top-left rotate-[-148deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[16.10px] top-[66.67px] absolute origin-top-left rotate-[-146deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[15.06px] top-[65.94px] absolute origin-top-left rotate-[-144deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[14.04px] top-[65.18px] absolute origin-top-left rotate-[-142deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[13.05px] top-[64.38px] absolute origin-top-left rotate-[-140deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[12.09px] top-[63.54px] absolute origin-top-left rotate-[-138deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[11.16px] top-[62.68px] absolute origin-top-left rotate-[-136deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[10.26px] top-[61.78px] absolute origin-top-left rotate-[-134deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[9.39px] top-[60.85px] absolute origin-top-left rotate-[-132deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[8.56px] top-[59.89px] absolute origin-top-left rotate-[-130deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[7.76px] top-[58.91px] absolute origin-top-left rotate-[-128deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[6.99px] top-[57.89px] absolute origin-top-left rotate-[-126deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[6.26px] top-[56.85px] absolute origin-top-left rotate-[-124deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[5.56px] top-[55.78px] absolute origin-top-left rotate-[-122deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[4.91px] top-[54.70px] absolute origin-top-left rotate-[-120deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[4.29px] top-[53.58px] absolute origin-top-left rotate-[-118deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[3.71px] top-[52.45px] absolute origin-top-left rotate-[-116deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[3.17px] top-[51.30px] absolute origin-top-left rotate-[-114deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[2.67px] top-[50.13px] absolute origin-top-left rotate-[-112deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[2.21px] top-[48.94px] absolute origin-top-left rotate-[-110deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[1.80px] top-[47.74px] absolute origin-top-left rotate-[-108deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[1.43px] top-[46.53px] absolute origin-top-left rotate-[-106deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[1.10px] top-[45.30px] absolute origin-top-left rotate-[-104deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.81px] top-[44.06px] absolute origin-top-left rotate-[-102deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.56px] top-[42.81px] absolute origin-top-left rotate-[-100deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.36px] top-[41.56px] absolute origin-top-left rotate-[-98deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.21px] top-[40.29px] absolute origin-top-left rotate-[-96deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.09px] top-[39.03px] absolute origin-top-left rotate-[-94deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.02px] top-[37.76px] absolute origin-top-left rotate-[-92deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-0 top-[36.49px] absolute origin-top-left -rotate-90">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.02px] top-[35.21px] absolute origin-top-left rotate-[-88deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.08px] top-[33.95px] absolute origin-top-left rotate-[-86deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.19px] top-[32.68px] absolute origin-top-left rotate-[-84deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.35px] top-[31.42px] absolute origin-top-left rotate-[-82deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.54px] top-[30.16px] absolute origin-top-left rotate-[-80deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[0.79px] top-[28.91px] absolute origin-top-left rotate-[-78deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[1.07px] top-[27.67px] absolute origin-top-left rotate-[-76deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[1.40px] top-[26.44px] absolute origin-top-left rotate-[-74deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[1.77px] top-[25.23px] absolute origin-top-left rotate-[-72deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[2.18px] top-[24.02px] absolute origin-top-left rotate-[-70deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[2.63px] top-[22.84px] absolute origin-top-left rotate-[-68deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[3.13px] top-[21.66px] absolute origin-top-left rotate-[-66deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[3.66px] top-[20.51px] absolute origin-top-left rotate-[-64deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[4.24px] top-[19.38px] absolute origin-top-left rotate-[-62deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[4.85px] top-[18.26px] absolute origin-top-left rotate-[-60deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[5.51px] top-[17.17px] absolute origin-top-left rotate-[-58deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[6.20px] top-[16.10px] absolute origin-top-left rotate-[-56deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[6.93px] top-[15.06px] absolute origin-top-left rotate-[-54deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[7.69px] top-[14.04px] absolute origin-top-left rotate-[-52deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[8.49px] top-[13.06px] absolute origin-top-left rotate-[-50deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[9.32px] top-[12.09px] absolute origin-top-left rotate-[-48deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[10.19px] top-[11.16px] absolute origin-top-left rotate-[-46deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[11.08px] top-[10.26px] absolute origin-top-left rotate-[-44deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[12.01px] top-[9.39px] absolute origin-top-left rotate-[-42deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[12.97px] top-[8.56px] absolute origin-top-left rotate-[-40deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[13.96px] top-[7.76px] absolute origin-top-left rotate-[-38deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[14.97px] top-[6.99px] absolute origin-top-left rotate-[-36deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[16.02px] top-[6.26px] absolute origin-top-left rotate-[-34deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[17.08px] top-[5.56px] absolute origin-top-left rotate-[-32deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[18.17px] top-[4.91px] absolute origin-top-left rotate-[-30deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[19.28px] top-[4.29px] absolute origin-top-left rotate-[-28deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[20.41px] top-[3.71px] absolute origin-top-left rotate-[-26deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[21.57px] top-[3.17px] absolute origin-top-left rotate-[-24deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[22.74px] top-[2.67px] absolute origin-top-left rotate-[-22deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[23.92px] top-[2.22px] absolute origin-top-left rotate-[-20deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[25.12px] top-[1.80px] absolute origin-top-left rotate-[-18deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[26.34px] top-[1.43px] absolute origin-top-left rotate-[-16deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[27.57px] top-[1.10px] absolute origin-top-left rotate-[-14deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[28.80px] top-[0.81px] absolute origin-top-left -rotate-12">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[30.05px] top-[0.56px] absolute origin-top-left rotate-[-10deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[31.31px] top-[0.36px] absolute origin-top-left rotate-[-8deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[32.57px] top-[0.21px] absolute origin-top-left -rotate-6">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[33.84px] top-[0.09px] absolute origin-top-left rotate-[-4deg]">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                  <div className="w-[0.04px] h-[0.27px] left-[35.11px] top-[0.02px] absolute origin-top-left -rotate-2">
                    <div className="w-[0.04px] h-[0.27px] left-0 top-0 absolute bg-white" />
                  </div>
                </div>
                <div className="w-[36.26px] h-[36.26px] left-[18.13px] top-[18.91px] absolute bg-gradient-to-l from-orange-400 to-orange-400 rounded-full" />
                <div className="w-[22.22px] h-[51.41px] left-[25.62px] top-[10.64px] absolute" />
                <div className="w-[2.18px] h-[2.45px] left-[55.58px] top-[34.68px] absolute">
                  <div className="w-[0.27px] h-[0.54px] left-[1.90px] top-[0.64px] absolute bg-orange-400 rounded-[0.05px] border border-orange-400" />
                  <div className="w-[1.81px] h-[0.18px] left-[-0px] top-[2.27px] absolute bg-orange-400 rounded-[1.18px]" />
                  <img
                    className="w-[1.45px] h-[2.36px] left-[0.18px] top-0 absolute border border-orange-400"
                    src="https://via.placeholder.com/1x2"
                  />
                </div>
                <div className="w-[124.16px] h-[9.85px] left-[-25.62px] top-[65.82px] absolute">
                  <img
                    className="w-[124.16px] h-[9.85px] left-0 top-0 absolute shadow border border-zinc-400"
                    src="https://via.placeholder.com/124x10"
                  />
                  <div className="w-[16.16px] h-[3.33px] left-[54px] top-[3.41px] absolute"></div>
                </div>
              </div>
              <div className="w-[47.69px] h-[51.81px] left-[10.25px] top-[13.80px] absolute">
                <div className="w-[47.69px] h-[51.81px] left-0 top-0 absolute"></div>
                <div className="left-[45.68px] top-[46.85px] absolute text-center text-white text-[2.36px] font-semibold font-['Orbitron']">
                  0
                </div>
                <div className="left-[29.96px] top-[46.85px] absolute text-center text-white text-[2.36px] font-semibold font-['Orbitron']">
                  20
                </div>
                <div className="left-[18.13px] top-[44.93px] absolute text-center text-white text-[2.36px] font-semibold font-['Orbitron']">
                  40
                </div>
                <div className="left-[13.01px] top-[37.84px] absolute text-center text-white text-[2.36px] font-semibold font-['Orbitron']">
                  60
                </div>
                <div className="left-[9.46px] top-[31.93px] absolute text-center text-white text-[2.36px] font-semibold font-['Orbitron']">
                  80
                </div>
                <div className="left-[5.12px] top-[24.44px] absolute text-center text-sky-400 text-[2.36px] font-semibold font-['Orbitron']">
                  100
                </div>
                <div className="left-[11.43px] top-[14.98px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  120
                </div>
                <div className="left-[18.13px] top-[6.31px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  140
                </div>
                <div className="left-[28.38px] top-[4.73px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  160
                </div>
                <div className="left-[38.63px] top-[3.15px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  180
                </div>
              </div>
              <div className="w-[1.18px] h-[1.58px] left-[44.54px] top-[39.02px] absolute bg-slate-500 rounded-[0.39px]" />
              <div className="w-[47.69px] h-[51.81px] left-[155.30px] top-[13.80px] absolute">
                <div className="origin-top-left rotate-180 w-[47.69px] h-[51.81px] left-[47.69px] top-0 absolute"></div>
                <div className="left-0 top-[46.91px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  0
                </div>
                <div className="left-[28.77px] top-[46.12px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  1
                </div>
                <div className="left-[38.63px] top-[24.44px] absolute text-center text-orange-400 text-[2.36px] font-semibold font-['Orbitron']">
                  2
                </div>
                <div className="left-[30.35px] top-[8.67px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  3
                </div>
                <div className="left-[14.58px] top-[4.34px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  4
                </div>
                <div className="left-0 top-[2.37px] absolute text-center text-neutral-500 text-[2.36px] font-semibold font-['Orbitron']">
                  5
                </div>
                <div className="w-[20.89px] h-[1.58px] left-[10.64px] top-[25.23px] absolute">
                  <div className="w-[1.18px] h-[1.58px] left-[1.18px] top-[-0px] absolute origin-top-left rotate-180 bg-yellow-700 rounded-[0.39px]" />
                </div>
              </div>
            </div>
            <div className="w-[204px] h-9 pl-[78px] pr-[22px] pt-1.5 pb-[5px] left-[13.56px] top-[185px] absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-start items-start inline-flex">
              <div className="text-neutral-400 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[153px] h-[38.74px] left-[39.84px] top-[126.76px] absolute">
              <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
                Speedometer #10
              </div>
              <div className="left-[42.60px] top-[25.74px] absolute text-center text-gray-200 text-[10.54px] font-semibold font-['Inter']">
                Selected Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeedometerSettings;
