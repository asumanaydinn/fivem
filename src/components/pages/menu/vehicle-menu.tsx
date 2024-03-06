import { Car } from "../../icons/car";
import CarBackground from "./car-background";

const VehicleMenu = () => {
  return (
    <div className="flex flex-col gap-y-2 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded p-2">
      <div className="h-[27px] px-[2.07px] pt-[2.07px] pb-[1.60px] bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded justify-center items-start gap-[0px] inline-flex">
        <div className="grow shrink basis-0 self-stretch pt-[4.93px] pb-[5.40px] bg-gradient-to-l from-zinc-300 to-stone-300 rounded justify-center items-center inline-flex">
          <div className="grow flex items-center justify-center  shrink basis-0 self-stretch relative">
            <div className=" flex gap-x-2 items-center absolute text-center text-gray-950 text-[10.34px] font-bold font-['Inter']">
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6336 9.68401C10.6083 9.84233 10.4718 9.95883 10.3115 9.95883H1.97629C1.53592 9.95883 1.10534 9.78921 0.806842 9.46463C0.734399 9.38605 0.6677 9.29913 0.603802 9.20871H10.7094L10.6336 9.68401ZM10.8152 8.12765H0.382921C0.292874 8.12765 0.209207 8.15187 0.134458 8.19099C-0.0963774 7.34039 -0.0452585 6.33006 0.407233 5.44252C0.516532 5.22886 0.681232 5.04781 0.873706 4.90591L4.87626 1.95699C5.92827 1.18388 7.19886 0.764709 8.50531 0.764709H11.6737C11.8744 0.764709 12.0275 0.944144 11.9959 1.14229L10.8807 8.13427C10.859 8.13161 10.8376 8.12765 10.8152 8.12765ZM8.4416 6.25256C8.4416 6.31244 8.49013 6.36097 8.55 6.36097H10.1357C10.1956 6.36097 10.2441 6.31244 10.2441 6.25256V5.99861C10.2441 5.93874 10.1956 5.89021 10.1357 5.89021H8.54998C8.49013 5.89021 8.44158 5.93874 8.44158 5.99861L8.4416 6.25256ZM8.50531 1.58024C7.36685 1.58024 6.27895 1.93743 5.35904 2.61431L2.78201 4.51285H10.6322L11.1003 1.58024H8.50531ZM0.382921 8.38304H10.8151C10.9726 8.38304 11.1003 8.51069 11.1003 8.66817C11.1003 8.82564 10.9726 8.9533 10.8151 8.9533H0.382898C0.225423 8.9533 0.0977659 8.82564 0.0977659 8.66817C0.0977659 8.51069 0.225446 8.38304 0.382921 8.38304Z"
                  fill="#020710"
                />
              </svg>
              Doors
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch py-[5.17px] justify-center items-center inline-flex">
          <div className="grow shrink basis-0 flex items-center justify-center self-stretch relative">
            <div className="flex items-center gap-x-2  absolute text-center text-neutral-400 text-[10.34px] font-medium font-['Inter']">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.85576 5.73935L2.79503 11.1616C2.7414 11.2188 2.67061 11.257 2.59334 11.2705C2.51607 11.284 2.43652 11.272 2.36668 11.2362C2.29685 11.2005 2.24052 11.1431 2.20621 11.0726C2.17189 11.002 2.16144 10.9223 2.17644 10.8453L2.83885 7.53184L0.234836 6.55404C0.178911 6.53312 0.129039 6.49867 0.0896759 6.45377C0.0503123 6.40888 0.0226833 6.35493 0.00925708 6.29675C-0.00416912 6.23857 -0.00297422 6.17797 0.0127349 6.12036C0.0284441 6.06276 0.0581781 6.00994 0.0992809 5.96663L5.16001 0.544415C5.21364 0.487181 5.28443 0.448943 5.3617 0.435472C5.43897 0.422 5.51852 0.434026 5.58836 0.469733C5.65819 0.505441 5.71452 0.562893 5.74883 0.633421C5.78315 0.703949 5.7936 0.783724 5.7786 0.86071L5.11438 4.17775L7.7184 5.1542C7.77391 5.17526 7.82338 5.20967 7.86244 5.25439C7.90149 5.29911 7.92894 5.35276 7.94233 5.4106C7.95573 5.46844 7.95468 5.52869 7.93927 5.58603C7.92385 5.64337 7.89455 5.69602 7.85395 5.73935H7.85576Z"
                  fill="#9F9F9F"
                />
              </svg>
              Neons
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative gap-x-2">
        <div className=" flex flex-col gap-y-2">
          <div className="w-20 h-[23.23px] relative">
            <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
            <div className="left-[24.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
              Bonnet
            </div>
          </div>
          <div className="w-20 h-[23.23px] relative">
            <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
            <div className="left-[8.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
              Left Front Door
            </div>
          </div>
          <div className="w-20 h-[23.23px] relative">
            <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
            <div className="left-[5.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
              Right Front Door
            </div>
          </div>
          <div className="w-20 h-[23.23px] relative">
            <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
            <div className="left-[8.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
              Left Back Door
            </div>
          </div>
          <div className="w-20 h-[23.23px] relative">
            <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
            <div className="left-[6.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
              Right Back Door
            </div>
          </div>
          <div className="w-20 h-[23.23px] relative">
            <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
            <div className="left-[27.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
              Trunk
            </div>
          </div>
        </div>
        <div className="absolute">
          <CarBackground />
        </div>
        <Car />
      </div>
    </div>
  );
};

export default VehicleMenu;
