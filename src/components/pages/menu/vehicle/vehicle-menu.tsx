import { useState } from "react";
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
              {" "}
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[24.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                FRONT
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Left")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              {" "}
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[28.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                LEFT
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Right")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              {" "}
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[26.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                RIGHT
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Rear")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              {" "}
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[28.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                REAR
              </div>
            </div>
            <div
              onClick={() => setSelectedNeon("Party")}
              className="w-20 h-[23.23px] relative cursor-pointer"
            >
              {" "}
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[25.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Qanelas Soft']">
                PARTY
              </div>
            </div>
          </div>
        )}
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
      </div>
    </div>
  );
};

export default VehicleMenu;
