const StatusSettings = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="w-[1197px] h-[87px] relative">
        <div className="w-[1197px] h-[87px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-[5px]" />
        <div className="w-[139.86px] h-[49.03px] pl-[19.03px] pr-[11.25px] py-[5.01px] left-[1039px] top-[18.31px] absolute bg-white bg-opacity-0 rounded-lg border border-white border-opacity-10 backdrop-blur-[12.71px] justify-start items-center gap-[26.04px] inline-flex">
          <div className="text-zinc-500 text-sm font-medium font-['Satoshi'] leading-[14.02px] tracking-tight">
            ON
          </div>
          <div className="pl-[17.02px] pr-[18.53px] py-[7.01px] bg-neutral-200 bg-opacity-10 rounded-lg shadow border-2 border-neutral-200 justify-start items-start flex">
            <div className="text-neutral-200 text-[13.02px] font-bold font-['Satoshi'] leading-normal tracking-tight">
              OFF
            </div>
          </div>
        </div>
        <div className="w-[146px] h-[43px] left-[114px] top-[23px] absolute">
          <div className="left-0 top-0 absolute text-neutral-400 text-[21.25px] font-semibold font-['Inter']">
            Hide All Status
          </div>
          <div className="left-0 top-[28px] absolute text-center text-zinc-500 text-xs font-semibold font-['Inter']">
            Off-On Settings
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[227.46px] h-[55.68px] left-[83px] top-[34px] absolute">
            <div className="w-[28.18px] h-[28.18px] left-0 top-0 absolute">
              <div className="w-[28.18px] h-[28.18px] left-0 top-0 absolute bg-black bg-opacity-30 rounded-[0.50px]" />
              <div className="w-[28.18px] h-[24.16px] left-0 top-[4.03px] absolute bg-rose-600 rounded-[0.50px]" />
            </div>
            <div className="origin-top-left rotate-180 w-[112.46px] h-[16.68px] left-[227.46px] top-[38.93px] absolute">
              <div className="w-[112.46px] h-[16.68px] left-0 top-0 absolute origin-top-left -rotate-180 bg-black bg-opacity-30 rounded-[0.62px]" />
              <div className="w-[88.98px] h-[16.68px] left-0 top-0 absolute origin-top-left -rotate-180 bg-blue-600 rounded-[0.62px]" />
            </div>
            <div className="w-[112.46px] h-[16.68px] left-0 top-[39px] absolute">
              <div className="w-[112.46px] h-[16.68px] left-0 top-0 absolute bg-black bg-opacity-30 rounded-[0.62px]" />
              <div className="w-[67.97px] h-[16.68px] left-0 top-0 absolute bg-green-500 rounded-[0.62px]" />
            </div>
            <div className="w-[28.18px] h-[28.18px] left-[32.21px] top-0 absolute">
              <div className="w-[28.18px] h-[28.18px] left-0 top-0 absolute bg-black bg-opacity-30 rounded-[0.50px]" />
              <div className="w-[28.18px] h-[13.09px] left-[-0px] top-[15.10px] absolute bg-purple-600 rounded-[0.50px]" />
            </div>
            <div className="w-[28.18px] h-[28.18px] left-[64.42px] top-0 absolute">
              <div className="w-[28.18px] h-[28.18px] left-0 top-0 absolute bg-black bg-opacity-30 rounded-[0.50px]" />
              <div className="w-[28.18px] h-[18.62px] left-0 top-[9.56px] absolute bg-fuchsia-500 rounded-[0.50px]" />
            </div>
            <div className="w-[28.18px] h-[28.18px] left-[96.63px] top-0 absolute">
              <div className="w-[28.18px] h-[28.18px] left-0 top-0 absolute bg-black bg-opacity-30 rounded-[0.50px]" />
              <div className="w-[28.18px] h-[3.52px] left-0 top-[24.66px] absolute bg-red-600 rounded-[0.50px]" />
            </div>
            <div className="w-[28.18px] h-[28.18px] left-[129.14px] top-0 absolute">
              <div className="w-[28.18px] h-[28.18px] left-0 top-0 absolute bg-black bg-opacity-30 rounded-[0.50px]" />
              <div className="w-[28.18px] h-[3.52px] left-0 top-[24.66px] absolute bg-red-600 rounded-[0.50px]" />
            </div>
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
          <div className="w-[180.02px] h-[32.82px] left-[106px] top-[179.03px] absolute">
            <div className="w-[142.23px] h-[32.82px] pl-[48.74px] pr-[19.81px] pt-[5.40px] pb-[4.50px] left-0 top-0 absolute bg-neutral-200 rounded border-2 border-neutral-200 justify-start items-start inline-flex">
              <div className="text-black text-xs font-bold font-['Satoshi'] leading-snug tracking-tight">
                Selected
              </div>
            </div>
            <div className="w-[32.82px] h-[32.82px] left-[147.20px] top-0 absolute bg-neutral-200 rounded border-2 border-neutral-200 flex-col justify-start items-start inline-flex" />
          </div>
        </div>
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[183.01px] h-[35.81px] left-[105px] top-[171px] absolute">
            <div className="w-[142.23px] h-[35.81px] pt-1.5 pb-[5.84px] left-0 top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-center items-center inline-flex">
              <div className="text-neutral-400 text-[12.95px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[35.81px] h-[35.81px] left-[147.20px] top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
          <div className="w-[315.47px] h-[43.59px] left-[39px] top-[46px] absolute">
            <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-white rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[54.34px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-white rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[108.68px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-white rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[217.35px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-white rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[271.88px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-white rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[163.01px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-white rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[315.47px] h-[43.59px] left-[39px] top-[44px] absolute">
            <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-black rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[54.34px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-black rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[108.68px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-black rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[217.35px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-black rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[271.88px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-black rounded-full" />
            </div>
            <div className="w-[43.59px] h-[43.59px] left-[163.01px] top-0 absolute">
              <div className="w-[43.59px] h-[43.59px] left-0 top-0 absolute bg-white bg-opacity-25 rounded-full" />
              <div className="w-[41.03px] h-[41.03px] left-[1.28px] top-[1.28px] absolute bg-white rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-neutral-400 rounded-full" />
              <div className="w-[36.75px] h-[36.75px] left-[3.42px] top-[3.42px] absolute bg-black rounded-full" />
            </div>
          </div>
          <div className="w-[183.01px] h-[35.81px] left-[105px] top-[171px] absolute">
            <div className="w-[142.23px] h-[35.81px] pt-1.5 pb-[5.84px] left-0 top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-center items-center inline-flex">
              <div className="text-neutral-400 text-[12.95px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[35.81px] h-[35.81px] left-[147.20px] top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
        </div>
        <div className="w-[392.91px] h-[70.63px] relative">
          <div className="w-[392.91px] h-[70.63px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded" />
          <div className="w-[113.54px] h-[39.80px] pl-[15.45px] pr-[9.13px] py-[4.06px] left-[263.83px] top-[14.86px] absolute bg-white bg-opacity-0 rounded-md border border-white border-opacity-10 backdrop-blur-[10.32px] justify-start items-center gap-[21.14px] inline-flex">
            <div className="text-zinc-500 text-xs font-medium font-['Satoshi'] leading-3 tracking-tight">
              ON
            </div>
            <div className="pl-[13.82px] pr-[15.04px] py-[5.69px] bg-neutral-200 bg-opacity-10 rounded-md shadow border-2 border-neutral-200 justify-start items-start flex">
              <div className="text-neutral-200 text-[10.57px] font-bold font-['Satoshi'] leading-tight tracking-tight">
                OFF
              </div>
            </div>
          </div>
          <div className="w-[95px] h-[34.73px] left-[92.54px] top-[18.67px] absolute">
            <div className="left-0 top-0 absolute text-neutral-400 text-lg font-semibold font-['Inter']">
              Hide Health
            </div>
            <div className="left-0 top-[22.73px] absolute text-center text-zinc-500 text-[9.97px] font-semibold font-['Inter']">
              Off-On Settings
            </div>
          </div>
        </div>
        <div className="w-[392.91px] h-[70.63px] relative">
          <div className="w-[392.91px] h-[70.63px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded" />
          <div className="w-[113.54px] h-[39.80px] pl-[15.45px] pr-[9.13px] py-[4.06px] left-[263.83px] top-[14.86px] absolute bg-white bg-opacity-0 rounded-md border border-white border-opacity-10 backdrop-blur-[10.32px] justify-start items-center gap-[21.14px] inline-flex">
            <div className="text-zinc-500 text-xs font-medium font-['Satoshi'] leading-3 tracking-tight">
              ON
            </div>
            <div className="pl-[13.82px] pr-[15.04px] py-[5.69px] bg-neutral-200 bg-opacity-10 rounded-md shadow border-2 border-neutral-200 justify-start items-start flex">
              <div className="text-neutral-200 text-[10.57px] font-bold font-['Satoshi'] leading-tight tracking-tight">
                OFF
              </div>
            </div>
          </div>
          <div className="w-[141px] h-[34.73px] left-[92.54px] top-[18.67px] absolute">
            <div className="left-0 top-0 absolute text-neutral-400 text-lg font-semibold font-['Inter']">
              Hide Dehydration
            </div>
            <div className="left-0 top-[22.73px] absolute text-center text-zinc-500 text-[9.97px] font-semibold font-['Inter']">
              Off-On Settings
            </div>
          </div>
        </div>
        <div className="w-[392.91px] h-[70.63px] relative">
          <div className="w-[392.91px] h-[70.63px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded" />
          <div className="w-[113.54px] h-[39.80px] pl-[15.45px] pr-[9.13px] py-[4.06px] left-[263.83px] top-[14.86px] absolute bg-white bg-opacity-0 rounded-md border border-white border-opacity-10 backdrop-blur-[10.32px] justify-start items-center gap-[21.14px] inline-flex">
            <div className="text-zinc-500 text-xs font-medium font-['Satoshi'] leading-3 tracking-tight">
              ON
            </div>
            <div className="pl-[13.82px] pr-[15.04px] py-[5.69px] bg-neutral-200 bg-opacity-10 rounded-md shadow border-2 border-neutral-200 justify-start items-start flex">
              <div className="text-neutral-200 text-[10.57px] font-bold font-['Satoshi'] leading-tight tracking-tight">
                OFF
              </div>
            </div>
          </div>
          <div className="w-[102px] h-[34.73px] left-[92.54px] top-[18.67px] absolute">
            <div className="left-0 top-0 absolute text-neutral-400 text-lg font-semibold font-['Inter']">
              Hide Hungry
            </div>
            <div className="left-[-0px] top-[22.73px] absolute text-center text-zinc-500 text-[9.97px] font-semibold font-['Inter']">
              Off-On Settings
            </div>
          </div>
        </div>
        <div className="w-[392.91px] h-[70.63px] relative">
          <div className="w-[392.91px] h-[70.63px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded" />
          <div className="w-[113.54px] h-[39.80px] pl-[15.45px] pr-[9.13px] py-[4.06px] left-[263.83px] top-[14.86px] absolute bg-white bg-opacity-0 rounded-md border border-white border-opacity-10 backdrop-blur-[10.32px] justify-start items-center gap-[21.14px] inline-flex">
            <div className="text-zinc-500 text-xs font-medium font-['Satoshi'] leading-3 tracking-tight">
              ON
            </div>
            <div className="pl-[13.82px] pr-[15.04px] py-[5.69px] bg-neutral-200 bg-opacity-10 rounded-md shadow border-2 border-neutral-200 justify-start items-start flex">
              <div className="text-neutral-200 text-[10.57px] font-bold font-['Satoshi'] leading-tight tracking-tight">
                OFF
              </div>
            </div>
          </div>
          <div className="w-[99px] h-[34.73px] left-[92.54px] top-[18.67px] absolute">
            <div className="left-0 top-0 absolute text-neutral-400 text-lg font-semibold font-['Inter']">
              Hide Energy
            </div>
            <div className="left-[-0px] top-[22.73px] absolute text-center text-zinc-500 text-[9.97px] font-semibold font-['Inter']">
              Off-On Settings
            </div>
          </div>
        </div>
        <div className="w-[392.91px] h-[70.63px] relative">
          <div className="w-[392.91px] h-[70.63px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded" />
          <div className="w-[113.54px] h-[39.80px] pl-[15.45px] pr-[9.13px] py-[4.06px] left-[263.83px] top-[14.86px] absolute bg-white bg-opacity-0 rounded-md border border-white border-opacity-10 backdrop-blur-[10.32px] justify-start items-center gap-[21.14px] inline-flex">
            <div className="text-zinc-500 text-xs font-medium font-['Satoshi'] leading-3 tracking-tight">
              ON
            </div>
            <div className="pl-[13.82px] pr-[15.04px] py-[5.69px] bg-neutral-200 bg-opacity-10 rounded-md shadow border-2 border-neutral-200 justify-start items-start flex">
              <div className="text-neutral-200 text-[10.57px] font-bold font-['Satoshi'] leading-tight tracking-tight">
                OFF
              </div>
            </div>
          </div>
          <div className="w-[93px] h-[34.73px] left-[92.54px] top-[18.67px] absolute">
            <div className="left-0 top-0 absolute text-neutral-400 text-lg font-semibold font-['Inter']">
              Hide Armor
            </div>
            <div className="left-[-0px] top-[22.73px] absolute text-center text-zinc-500 text-[9.97px] font-semibold font-['Inter']">
              Off-On Settings
            </div>
          </div>
        </div>
        <div className="w-[392.91px] h-[70.63px] relative">
          <div className="w-[392.91px] h-[70.63px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded" />
          <div className="w-[113.54px] h-[39.80px] pl-[15.45px] pr-[9.13px] py-[4.06px] left-[263.83px] top-[14.86px] absolute bg-white bg-opacity-0 rounded-md border border-white border-opacity-10 backdrop-blur-[10.32px] justify-start items-center gap-[21.14px] inline-flex">
            <div className="text-zinc-500 text-xs font-medium font-['Satoshi'] leading-3 tracking-tight">
              ON
            </div>
            <div className="pl-[13.82px] pr-[15.04px] py-[5.69px] bg-neutral-200 bg-opacity-10 rounded-md shadow border-2 border-neutral-200 justify-start items-start flex">
              <div className="text-neutral-200 text-[10.57px] font-bold font-['Satoshi'] leading-tight tracking-tight">
                OFF
              </div>
            </div>
          </div>
          <div className="w-[94px] h-[34.73px] left-[92.54px] top-[18.67px] absolute">
            <div className="left-0 top-0 absolute text-neutral-400 text-lg font-semibold font-['Inter']">
              Hide Stress
            </div>
            <div className="left-[-0px] top-[22.73px] absolute text-center text-zinc-500 text-[9.97px] font-semibold font-['Inter']">
              Off-On Settings
            </div>
          </div>
        </div>
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[45.47px] h-[45.21px] left-[38px] top-[42px] absolute">
            <div className="w-[43.16px] h-[43.16px] left-[0.69px] top-[44.53px] absolute origin-top-left -rotate-90 bg-violet-500 bg-opacity-25 rounded-[34.42px]" />
            <div className="w-[31.49px] h-[31.49px] left-[22.26px] top-[45.21px] absolute origin-top-left rotate-[-135deg] bg-violet-500 bg-opacity-95 rounded-[0.92px]" />
          </div>
          <div className="w-[44.53px] h-[44.53px] left-[92.29px] top-[42.68px] absolute">
            <div className="w-[43.16px] h-[43.16px] left-[0.69px] top-[43.84px] absolute origin-top-left -rotate-90 bg-pink-400 bg-opacity-25 rounded-[34.42px]" />
            <div className="w-[31.49px] h-[31.49px] left-[22.26px] top-[44.53px] absolute origin-top-left rotate-[-135deg] bg-pink-400 rounded-[0.92px]" />
          </div>
          <div className="w-[44.53px] h-[44.53px] left-[255.51px] top-[42.68px] absolute">
            <div className="w-[43.16px] h-[43.16px] left-[0.69px] top-[43.84px] absolute origin-top-left -rotate-90 bg-pink-400 bg-opacity-25 rounded-[34.42px]" />
            <div className="w-[31.49px] h-[31.49px] left-[22.26px] top-[44.53px] absolute origin-top-left rotate-[-135deg] bg-pink-400 rounded-[0.92px]" />
          </div>
          <div className="w-[44.53px] h-[44.53px] left-[146.58px] top-[42.68px] absolute">
            <div className="w-[43.16px] h-[43.16px] left-[0.69px] top-[43.84px] absolute origin-top-left -rotate-90 bg-orange-400 bg-opacity-25 rounded-[34.42px]" />
            <div className="w-[31.49px] h-[31.49px] left-[22.26px] top-[44.53px] absolute origin-top-left rotate-[-135deg] bg-orange-400 rounded-[0.92px]" />
          </div>
          <div className="w-[44.53px] h-[44.53px] left-[309.47px] top-[42.68px] absolute">
            <div className="w-[43.16px] h-[43.16px] left-[0.69px] top-[43.84px] absolute origin-top-left -rotate-90 bg-orange-400 bg-opacity-25 rounded-[34.42px]" />
            <div className="w-[31.49px] h-[31.49px] left-[22.26px] top-[44.53px] absolute origin-top-left rotate-[-135deg] bg-orange-400 rounded-[0.92px]" />
          </div>
          <div className="w-[44.53px] h-[44.53px] left-[200.87px] top-[42.68px] absolute">
            <div className="w-[43.16px] h-[43.16px] left-[0.69px] top-[43.84px] absolute origin-top-left -rotate-90 bg-rose-500 bg-opacity-25 rounded-[34.42px]" />
            <div className="w-[31.49px] h-[31.49px] left-[22.26px] top-[44.53px] absolute origin-top-left rotate-[-135deg] bg-rose-500 rounded-[0.92px]" />
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
          <div className="w-[180.02px] h-[32.82px] left-[106px] top-[179.03px] absolute">
            <div className="w-[142.23px] h-[32.82px] pl-[48.74px] pr-[19.81px] pt-[5.40px] pb-[4.50px] left-0 top-0 absolute bg-neutral-200 rounded border-2 border-neutral-200 justify-start items-start inline-flex">
              <div className="text-black text-xs font-bold font-['Satoshi'] leading-snug tracking-tight">
                Selected
              </div>
            </div>
            <div className="w-[32.82px] h-[32.82px] left-[147.20px] top-0 absolute bg-neutral-200 rounded border-2 border-neutral-200 flex-col justify-start items-start inline-flex" />
          </div>
        </div>
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[309px] h-[45.19px] left-[40px] top-[42px] absolute">
            <div className="w-[45.19px] h-[45.19px] left-0 top-0 absolute">
              <div className="w-[45.19px] h-[45.19px] left-0 top-0 absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[42.53px] h-[42.53px] left-[1.33px] top-[1.33px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-violet-500 rounded-full" />
            </div>
            <div className="w-[45.19px] h-[45.19px] left-[52.76px] top-0 absolute">
              <div className="w-[45.19px] h-[45.19px] left-0 top-0 absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[42.53px] h-[42.53px] left-[1.33px] top-[1.33px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-pink-400 rounded-full" />
            </div>
            <div className="w-[45.19px] h-[45.19px] left-[211.05px] top-0 absolute">
              <div className="w-[45.19px] h-[45.19px] left-0 top-0 absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[42.53px] h-[42.53px] left-[1.33px] top-[1.33px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-pink-400 rounded-full" />
            </div>
            <div className="w-[45.19px] h-[45.19px] left-[105.52px] top-0 absolute">
              <div className="w-[45.19px] h-[45.19px] left-0 top-0 absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[42.53px] h-[42.53px] left-[1.33px] top-[1.33px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-orange-400 rounded-full" />
            </div>
            <div className="w-[45.19px] h-[45.19px] left-[263.81px] top-0 absolute">
              <div className="w-[45.19px] h-[45.19px] left-0 top-0 absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[42.53px] h-[42.53px] left-[1.33px] top-[1.33px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-orange-400 rounded-full" />
            </div>
            <div className="w-[45.19px] h-[45.19px] left-[158.29px] top-0 absolute">
              <div className="w-[45.19px] h-[45.19px] left-0 top-0 absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[42.53px] h-[42.53px] left-[1.33px] top-[1.33px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-white bg-opacity-10 rounded-full" />
              <div className="w-[38.10px] h-[38.10px] left-[3.54px] top-[3.54px] absolute bg-emerald-300 rounded-full" />
            </div>
          </div>
          <div className="w-[183.01px] h-[35.81px] left-[105px] top-[171px] absolute">
            <div className="w-[142.23px] h-[35.81px] pt-1.5 pb-[5.84px] left-0 top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-center items-center inline-flex">
              <div className="text-neutral-400 text-[12.95px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[35.81px] h-[35.81px] left-[147.20px] top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
        </div>
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[295px] h-[44.49px] left-[47px] top-[37.49px] absolute">
            <div className="w-[44.49px] h-[44.49px] left-0 top-0 absolute">
              <div className="w-[31.46px] h-[31.46px] left-[22.24px] top-[44.49px] absolute origin-top-left rotate-[-135deg] bg-white bg-opacity-25" />
              <div className="w-[17.67px] h-[16.26px] left-[12.50px] top-[34.74px] absolute origin-top-left rotate-[-135deg] bg-white" />
              <div className="w-[26.71px] h-[26.71px] left-[41.13px] top-[22.24px] absolute origin-top-left rotate-[135deg] bg-black rounded-[0.78px]" />
            </div>
            <div className="w-[44.49px] h-[44.49px] left-[50.10px] top-0 absolute">
              <div className="w-[31.46px] h-[31.46px] left-[22.24px] top-[44.49px] absolute origin-top-left rotate-[-135deg] bg-white bg-opacity-25" />
              <div className="w-7 h-[26.92px] left-[19.79px] top-[42.03px] absolute origin-top-left rotate-[-135deg] bg-white" />
              <div className="w-[26.71px] h-[26.71px] left-[41.13px] top-[22.24px] absolute origin-top-left rotate-[135deg] bg-black rounded-[0.78px]" />
            </div>
            <div className="w-[44.49px] h-[44.49px] left-[100.20px] top-0 absolute">
              <div className="w-[31.46px] h-[31.46px] left-[22.24px] top-[44.49px] absolute origin-top-left rotate-[-135deg] bg-white bg-opacity-25" />
              <div className="w-[17.67px] h-[16.26px] left-[12.50px] top-[34.74px] absolute origin-top-left rotate-[-135deg] bg-white" />
              <div className="w-[26.71px] h-[26.71px] left-[41.13px] top-[22.24px] absolute origin-top-left rotate-[135deg] bg-black rounded-[0.78px]" />
            </div>
            <div className="w-[44.49px] h-[44.49px] left-[150.31px] top-0 absolute">
              <div className="w-[31.46px] h-[31.46px] left-[22.24px] top-[44.49px] absolute origin-top-left rotate-[-135deg] bg-white bg-opacity-25" />
              <div className="w-[17.67px] h-[16.26px] left-[12.50px] top-[34.74px] absolute origin-top-left rotate-[-135deg] bg-white" />
              <div className="w-[26.71px] h-[26.71px] left-[41.13px] top-[22.24px] absolute origin-top-left rotate-[135deg] bg-black rounded-[0.78px]" />
            </div>
            <div className="w-[44.49px] h-[44.49px] left-[200.41px] top-0 absolute">
              <div className="w-[31.46px] h-[31.46px] left-[22.24px] top-[44.49px] absolute origin-top-left rotate-[-135deg] bg-white bg-opacity-25" />
              <div className="w-[17.67px] h-[16.26px] left-[12.49px] top-[34.74px] absolute origin-top-left rotate-[-135deg] bg-white" />
              <div className="w-[26.71px] h-[26.71px] left-[41.13px] top-[22.24px] absolute origin-top-left rotate-[135deg] bg-black rounded-[0.78px]" />
            </div>
            <div className="w-[44.49px] h-[44.49px] left-[250.51px] top-0 absolute">
              <div className="w-[31.46px] h-[31.46px] left-[22.24px] top-[44.49px] absolute origin-top-left rotate-[-135deg] bg-white bg-opacity-25" />
              <div className="w-[17.67px] h-[16.26px] left-[12.49px] top-[34.74px] absolute origin-top-left rotate-[-135deg] bg-white" />
              <div className="w-[26.71px] h-[26.71px] left-[41.13px] top-[22.24px] absolute origin-top-left rotate-[135deg] bg-black rounded-[0.78px]" />
            </div>
          </div>
          <div className="w-[183.01px] h-[35.81px] left-[105px] top-[171px] absolute">
            <div className="w-[142.23px] h-[35.81px] pt-1.5 pb-[5.84px] left-0 top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-center items-center inline-flex">
              <div className="text-neutral-400 text-[12.95px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[35.81px] h-[35.81px] left-[147.20px] top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
        </div>
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[311px] h-[46.23px] left-[39px] top-[40px] absolute">
            <div className="w-[46.23px] h-[46.23px] left-0 top-0 absolute">
              <div className="w-[46.23px] h-[46.23px] left-0 top-[46.23px] absolute origin-top-left -rotate-90 bg-rose-500 bg-opacity-25" />
              <div className="w-[38.45px] h-[21.43px] left-[42.45px] top-[42.45px] absolute origin-top-left rotate-180 bg-rose-500 rounded-[1.13px]" />
            </div>
            <div className="w-[46.23px] h-[46.23px] left-[52.95px] top-0 absolute">
              <div className="w-[46.23px] h-[46.23px] left-0 top-[46.23px] absolute origin-top-left -rotate-90 bg-orange-400 bg-opacity-25" />
              <div className="w-[38.66px] h-[30.93px] left-[42.41px] top-[42.59px] absolute origin-top-left rotate-180 bg-orange-400 rounded-[1.13px]" />
            </div>
            <div className="w-[46.23px] h-[46.23px] left-[105.91px] top-0 absolute">
              <div className="w-[46.23px] h-[46.23px] left-0 top-[46.23px] absolute origin-top-left -rotate-90 bg-green-500 bg-opacity-25" />
              <div className="w-[38.66px] h-[15.46px] left-[42.72px] top-[42.59px] absolute origin-top-left rotate-180 bg-green-500 rounded-[1.13px]" />
            </div>
            <div className="w-[46.23px] h-[46.23px] left-[158.86px] top-0 absolute">
              <div className="w-[46.23px] h-[46.23px] left-0 top-[46.23px] absolute origin-top-left -rotate-90 bg-purple-700 bg-opacity-25" />
              <div className="w-[37.80px] h-[30.93px] left-[42.17px] top-[42.59px] absolute origin-top-left rotate-180 bg-purple-700 rounded-[1.13px]" />
            </div>
            <div className="w-[46.23px] h-[46.23px] left-[211.82px] top-0 absolute">
              <div className="w-[46.23px] h-[46.23px] left-0 top-[46.23px] absolute origin-top-left -rotate-90 bg-blue-500 bg-opacity-25" />
              <div className="w-[38.66px] h-[6.87px] left-[42.48px] top-[42.59px] absolute origin-top-left rotate-180 bg-blue-500 rounded-[1.13px]" />
            </div>
            <div className="w-[46.23px] h-[46.23px] left-[264.77px] top-0 absolute">
              <div className="w-[46.23px] h-[46.23px] left-[-0px] top-[46.23px] absolute origin-top-left -rotate-90 bg-rose-500 bg-opacity-25" />
              <div className="w-[38.66px] h-[38.66px] left-[42.79px] top-[42.59px] absolute origin-top-left rotate-180 bg-rose-500 rounded-[1.13px]" />
            </div>
          </div>
          <div className="w-[183.01px] h-[35.81px] left-[105px] top-[171px] absolute">
            <div className="w-[142.23px] h-[35.81px] pt-1.5 pb-[5.84px] left-0 top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-center items-center inline-flex">
              <div className="text-neutral-400 text-[12.95px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[35.81px] h-[35.81px] left-[147.20px] top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
        </div>
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[334px] h-[49.31px] left-[22px] top-[52.41px] absolute">
            <div className="w-[49.31px] h-[49.31px] left-[57.02px] top-[-0px] absolute">
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-violet-500 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-indigo-950 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-violet-500 rounded-full" />
            </div>
            <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute">
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-pink-400 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-pink-950 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-pink-400 rounded-full" />
            </div>
            <div className="w-[49.31px] h-[49.31px] left-[114.05px] top-0 absolute">
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-orange-400 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-yellow-950 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-orange-400 rounded-full" />
            </div>
            <div className="w-[49.31px] h-[49.31px] left-[171.07px] top-[-0px] absolute">
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-emerald-300 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-green-900 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-emerald-300 rounded-full" />
            </div>
            <div className="w-[49.31px] h-[49.31px] left-[227.88px] top-[-0px] absolute">
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-fuchsia-400 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-fuchsia-950 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-fuchsia-400 rounded-full" />
            </div>
            <div className="w-[49.31px] h-[49.31px] left-[284.69px] top-[-0px] absolute">
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-neutral-950 rounded-full" />
              <div className="w-[41.92px] h-[41.92px] left-[3.70px] top-[3.70px] absolute bg-cyan-300 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-teal-900 rounded-full" />
              <div className="w-[49.31px] h-[49.31px] left-0 top-0 absolute bg-cyan-300 rounded-full" />
            </div>
          </div>
          <div className="w-[183.01px] h-[35.81px] left-[105px] top-[171px] absolute">
            <div className="w-[142.23px] h-[35.81px] pt-1.5 pb-[5.84px] left-0 top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-center items-center inline-flex">
              <div className="text-neutral-400 text-[12.95px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[35.81px] h-[35.81px] left-[147.20px] top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
        </div>
        <div className="w-[393px] h-[230px] relative">
          <div className="w-[393px] h-[230px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded border border-white border-opacity-20" />
          <div className="w-[321px] h-[50.53px] left-[35px] top-[47px] absolute">
            <div className="w-[50.53px] h-[50.53px] left-0 top-0 absolute">
              <div className="w-[35.73px] h-[35.73px] left-[25.27px] top-[50.53px] absolute origin-top-left rotate-[-135deg] bg-rose-500 bg-opacity-25" />
              <div className="w-[29.68px] h-[29.68px] left-[46.25px] top-[25.27px] absolute origin-top-left rotate-[135deg] bg-rose-500 rounded-[0.87px]" />
            </div>
            <div className="w-[50.53px] h-[50.53px] left-[54.09px] top-0 absolute">
              <div className="w-[35.73px] h-[35.73px] left-[25.27px] top-[50.53px] absolute origin-top-left rotate-[-135deg] bg-fuchsia-500 bg-opacity-25" />
              <div className="w-[29.68px] h-[29.68px] left-[46.25px] top-[25.27px] absolute origin-top-left rotate-[135deg] bg-fuchsia-500 rounded-[0.87px]" />
            </div>
            <div className="w-[50.53px] h-[50.53px] left-[108.19px] top-0 absolute">
              <div className="w-[35.73px] h-[35.73px] left-[25.27px] top-[50.53px] absolute origin-top-left rotate-[-135deg] bg-blue-400 bg-opacity-25" />
              <div className="w-[29.68px] h-[29.68px] left-[46.25px] top-[25.27px] absolute origin-top-left rotate-[135deg] bg-blue-400 rounded-[0.87px]" />
            </div>
            <div className="w-[50.53px] h-[50.53px] left-[162.28px] top-0 absolute">
              <div className="w-[35.73px] h-[35.73px] left-[25.27px] top-[50.53px] absolute origin-top-left rotate-[-135deg] bg-orange-400 bg-opacity-25" />
              <div className="w-[29.68px] h-[29.68px] left-[46.25px] top-[25.27px] absolute origin-top-left rotate-[135deg] bg-orange-400 rounded-[0.87px]" />
            </div>
            <div className="w-[50.53px] h-[50.53px] left-[216.37px] top-0 absolute">
              <div className="w-[35.73px] h-[35.73px] left-[25.27px] top-[50.53px] absolute origin-top-left rotate-[-135deg] bg-orange-400 bg-opacity-25" />
              <div className="w-[29.68px] h-[29.68px] left-[46.25px] top-[25.27px] absolute origin-top-left rotate-[135deg] bg-orange-400 rounded-[0.87px]" />
            </div>
            <div className="w-[50.53px] h-[50.53px] left-[270.47px] top-0 absolute">
              <div className="w-[35.73px] h-[35.73px] left-[25.27px] top-[50.53px] absolute origin-top-left rotate-[-135deg] bg-orange-400 bg-opacity-25" />
              <div className="w-[29.68px] h-[29.68px] left-[46.25px] top-[25.27px] absolute origin-top-left rotate-[135deg] bg-orange-400 rounded-[0.87px]" />
            </div>
          </div>
          <div className="w-[183.01px] h-[35.81px] left-[105px] top-[171px] absolute">
            <div className="w-[142.23px] h-[35.81px] pt-1.5 pb-[5.84px] left-0 top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 justify-center items-center inline-flex">
              <div className="text-neutral-400 text-[12.95px] font-bold font-['Satoshi'] leading-normal tracking-tight">
                Select
              </div>
            </div>
            <div className="w-[35.81px] h-[35.81px] left-[147.20px] top-0 absolute bg-neutral-200 bg-opacity-10 rounded border-2 border-neutral-600 flex-col justify-start items-start inline-flex" />
          </div>
          <div className="w-[127px] h-[38.60px] left-[133px] top-[115.37px] absolute">
            <div className="left-0 top-0 absolute text-center text-neutral-400 text-lg font-semibold font-['Inter']">
              Status Style #1
            </div>
            <div className="left-[28.84px] top-[25.60px] absolute text-center text-gray-200 text-[10.48px] font-semibold font-['Inter']">
              Selected Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusSettings;
