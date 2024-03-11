import { useEffect, useState } from "react";
import { Car } from "../../../icons/car";
import { DoorsIcon } from "../../../icons/doors-icon";
import { NeonIcon } from "../../../icons/neon-icon";
import CarBackground from "./car-background";
import VehicleMenuTab from "./vehicle-menu-tab";
import { Trunk } from "../../../icons/trunk";
import { RightFrontDoor } from "../../../icons/right-front-door";
import { LeftFrontDoor } from "../../../icons/left-front-door";
import { Hood } from "../../../icons/hood";
import { RearLeftDoor } from "../../../icons/rear-left-door";
import { RearRightDoor } from "../../../icons/rear-right-door";

const VehicleMenu = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Doors");
  const [selectedPiece, setSelectedPiece] = useState("Bonnet");

  const [selectedNeon, setSelectedNeon] = useState("All");

  useEffect(() => {
    const cycleDuration = 5000; 
    let svgCount = 5; 
    let interval = cycleDuration / svgCount;

    let currentSVG = 1;
    const loopAnimation = () => {
      for (let i = 1; i <= svgCount; i++) {
        const element = document.querySelector(`.svg${i}`);
        if (element instanceof HTMLElement) {
          element.style.opacity = "0";
        }
      }
      const currentElement = document.querySelector(`.svg${currentSVG}`);
      if (currentElement instanceof HTMLElement) {
        currentElement.style.opacity = "1";
      }
      currentSVG = (currentSVG % svgCount) + 1;
    };

    const intervalId = setInterval(loopAnimation, interval);

    return () => clearInterval(intervalId);
  }, []);

  const tabs = [
    {
      title: "Doors",
      icon: () => (
        <DoorsIcon
          activeColor={selectedTab === "Doors" ? "#020710" : "#9F9F9F"}
        />
      ),
    },
    {
      title: "Neons",
      icon: () => (
        <NeonIcon
          activeColor={selectedTab === "Neons" ? "#020710" : "#9F9F9F"}
        />
      ),
    },
  ];

  const handleSelectTab = (title: string) => {
    setSelectedTab(title);
  };

  return (
    <div className="flex flex-col gap-y-2 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded p-2">
      <VehicleMenuTab
        tabs={tabs}
        selected={selectedTab}
        onSelect={handleSelectTab}
      />

      <div className="flex items-center justify-center  gap-x-2">
        {selectedTab === "Doors" && (
          <div className=" flex flex-col gap-y-2">
            <div
              onClick={() => setSelectedPiece("Bonnet")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[24.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                Bonnet
              </div>
            </div>
            <div
              onClick={() => setSelectedPiece("LeftFront")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[8.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                Left Front Door
              </div>
            </div>
            <div
              onClick={() => setSelectedPiece("RightFront")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[5.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                Right Front Door
              </div>
            </div>
            <div
              onClick={() => setSelectedPiece("LeftBack")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[8.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                Left Back Door
              </div>
            </div>
            <div
              onClick={() => setSelectedPiece("RightBack")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[6.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                Right Back Door
              </div>
            </div>
            <div
              onClick={() => setSelectedPiece("Trunk")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[27.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                Trunk
              </div>
            </div>
          </div>
        )}

        {selectedTab === "Neons" && (
          <div className="flex flex-col gap-y-2">
            <div
              onClick={() => setSelectedNeon("All")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[31.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                ALL
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Front")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[24.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                FRONT
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Left")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[28.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                LEFT
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Right")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[26.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                RIGHT
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Rear")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[28.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                REAR
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Party")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[25.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                PARTY
              </div>
            </div>
          </div>
        )}

        {selectedTab === "Doors" && (
          <div className="relative flex items-center justify-center">
            <div className="absolute">
              <CarBackground />
            </div>
            <div className="">
              <Car />
              {selectedPiece === "RightFront" && (
                <div className="absolute -top-[28px] left-[49px]">
                  <RightFrontDoor />
                </div>
              )}
              {selectedPiece === "LeftFront" && (
                <div className="absolute -bottom-[40px] left-[53px]">
                  <LeftFrontDoor />
                </div>
              )}
              {selectedPiece === "LeftBack" && (
                <div className="absolute -bottom-[19px] right-[48px]">
                  <RearLeftDoor />
                </div>
              )}
              {selectedPiece === "RightBack" && (
                <div className="absolute -top-[19px] right-[48px]">
                  <RearRightDoor />
                </div>
              )}
              {selectedPiece === "Trunk" && (
                <div className="absolute -right-[16px] top-[13px] -rotate-90">
                  <Trunk />
                </div>
              )}
              {selectedPiece === "Bonnet" && (
                <div className="absolute rotate-90 top-[12px] -left-[7px]">
                  <Hood />
                </div>
              )}
            </div>
          </div>
        )}

        {selectedTab === "Neons" && (
          <div className="relative flex items-center justify-center">
            <div className="absolute">
              <CarBackground />
            </div>
            <div className="relative">
              <div className="z-10 relative">
                <Car />
              </div>
              {selectedNeon === "All" && (
                <>
                  <svg
                    className="absolute top-0 -left-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="122"
                    height="122"
                    viewBox="0 0 122 122"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_72_4716)">
                      <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_72_4716"
                        x="0.617287"
                        y="0.400002"
                        width="121.2"
                        height="121.2"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.8"
                          result="effect1_foregroundBlur_72_4716"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    className="absolute top-0 -left-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="122"
                    height="122"
                    viewBox="0 0 122 122"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_72_4716)">
                      <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_72_4716"
                        x="0.617287"
                        y="0.400002"
                        width="121.2"
                        height="121.2"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.8"
                          result="effect1_foregroundBlur_72_4716"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    className="absolute -bottom-[50px] left-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="122"
                    height="122"
                    viewBox="0 0 122 122"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_72_4716)">
                      <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_72_4716"
                        x="0.617287"
                        y="0.400002"
                        width="121.2"
                        height="121.2"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.8"
                          result="effect1_foregroundBlur_72_4716"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    className="absolute -top-[50px] left-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="122"
                    height="122"
                    viewBox="0 0 122 122"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_72_4716)">
                      <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_72_4716"
                        x="0.617287"
                        y="0.400002"
                        width="121.2"
                        height="121.2"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.8"
                          result="effect1_foregroundBlur_72_4716"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <svg
                    className="absolute -bottom-[12px] -right-[45px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="122"
                    height="122"
                    viewBox="0 0 122 122"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_72_4716)">
                      <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_72_4716"
                        x="0.617287"
                        y="0.400002"
                        width="121.2"
                        height="121.2"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.8"
                          result="effect1_foregroundBlur_72_4716"
                        />
                      </filter>
                    </defs>
                  </svg>
                </>
              )}
              <div className="neon-animation-container">
                {selectedNeon === "Party" && (
                  <>
                    <div className="svg-animation svg1">
                      <svg
                        className="absolute top-0 -left-[40px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="122"
                        height="122"
                        viewBox="0 0 122 122"
                        fill="none"
                      >
                        <g filter="url(#filter0_f_72_4716)">
                          <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_72_4716"
                            x="0.617287"
                            y="0.400002"
                            width="121.2"
                            height="121.2"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="18.8"
                              result="effect1_foregroundBlur_72_4716"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="svg-animation svg2">
                      <svg
                        className="absolute top-0 -left-[40px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="122"
                        height="122"
                        viewBox="0 0 122 122"
                        fill="none"
                      >
                        <g filter="url(#filter0_f_72_4716)">
                          <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_72_4716"
                            x="0.617287"
                            y="0.400002"
                            width="121.2"
                            height="121.2"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="18.8"
                              result="effect1_foregroundBlur_72_4716"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="svg-animation svg3">
                      <svg
                        className="absolute -bottom-[50px] left-[50px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="122"
                        height="122"
                        viewBox="0 0 122 122"
                        fill="none"
                      >
                        <g filter="url(#filter0_f_72_4716)">
                          <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_72_4716"
                            x="0.617287"
                            y="0.400002"
                            width="121.2"
                            height="121.2"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="18.8"
                              result="effect1_foregroundBlur_72_4716"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="svg-animation svg4">
                      <svg
                        className="absolute -top-[50px] left-[50px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="122"
                        height="122"
                        viewBox="0 0 122 122"
                        fill="none"
                      >
                        <g filter="url(#filter0_f_72_4716)">
                          <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_72_4716"
                            x="0.617287"
                            y="0.400002"
                            width="121.2"
                            height="121.2"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="18.8"
                              result="effect1_foregroundBlur_72_4716"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <div className="svg-animation svg5">
                      <svg
                        className="absolute -bottom-[12px] -right-[45px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="122"
                        height="122"
                        viewBox="0 0 122 122"
                        fill="none"
                      >
                        <g filter="url(#filter0_f_72_4716)">
                          <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                        </g>
                        <defs>
                          <filter
                            id="filter0_f_72_4716"
                            x="0.617287"
                            y="0.400002"
                            width="121.2"
                            height="121.2"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="BackgroundImageFix"
                              result="shape"
                            />
                            <feGaussianBlur
                              stdDeviation="18.8"
                              result="effect1_foregroundBlur_72_4716"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </>
                )}
              </div>
              {selectedNeon === "Front" && (
                <svg
                  className="absolute top-0 -left-[40px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="122"
                  height="122"
                  viewBox="0 0 122 122"
                  fill="none"
                >
                  <g filter="url(#filter0_f_72_4716)">
                    <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_72_4716"
                      x="0.617287"
                      y="0.400002"
                      width="121.2"
                      height="121.2"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="18.8"
                        result="effect1_foregroundBlur_72_4716"
                      />
                    </filter>
                  </defs>
                </svg>
              )}

              {selectedNeon === "Left" && (
                <svg
                  className="absolute -bottom-[50px] left-[50px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="122"
                  height="122"
                  viewBox="0 0 122 122"
                  fill="none"
                >
                  <g filter="url(#filter0_f_72_4716)">
                    <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_72_4716"
                      x="0.617287"
                      y="0.400002"
                      width="121.2"
                      height="121.2"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="18.8"
                        result="effect1_foregroundBlur_72_4716"
                      />
                    </filter>
                  </defs>
                </svg>
              )}

              {selectedNeon === "Right" && (
                <svg
                  className="absolute -top-[50px] left-[50px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="122"
                  height="122"
                  viewBox="0 0 122 122"
                  fill="none"
                >
                  <g filter="url(#filter0_f_72_4716)">
                    <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_72_4716"
                      x="0.617287"
                      y="0.400002"
                      width="121.2"
                      height="121.2"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="18.8"
                        result="effect1_foregroundBlur_72_4716"
                      />
                    </filter>
                  </defs>
                </svg>
              )}

              {selectedNeon === "Rear" && (
                <svg
                  className="absolute -bottom-[12px] -right-[45px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="122"
                  height="122"
                  viewBox="0 0 122 122"
                  fill="none"
                >
                  <g filter="url(#filter0_f_72_4716)">
                    <circle cx="61.2173" cy="61" r="23" fill="#9868FF" />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_72_4716"
                      x="0.617287"
                      y="0.400002"
                      width="121.2"
                      height="121.2"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="18.8"
                        result="effect1_foregroundBlur_72_4716"
                      />
                    </filter>
                  </defs>
                </svg>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleMenu;
