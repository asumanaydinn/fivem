import { useState } from "react";
import { Car } from "../../icons/car";
import { DoorsIcon } from "../../icons/doors-icon";
import { NeonIcon } from "../../icons/neon-icon";
import CarBackground from "./car-background";
import VehicleMenuTab from "./vehicle-menu-tab";

const VehicleMenu = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Doors");

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
        )}
        {selectedTab === "Neons" && (
          <div className="flex flex-col gap-y-2">
            <div className="w-20 h-[23.23px] relative">
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[31.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
                ALL
              </div>
            </div>
            <div className="w-20 h-[23.23px] relative">
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[24.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
                FRONT
              </div>
            </div>
            <div className="w-20 h-[23.23px] relative">
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[28.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
                LEFT
              </div>
            </div>
            <div className="w-20 h-[23.23px] relative">
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[26.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
                RIGHT
              </div>
            </div>
            <div className="w-20 h-[23.23px] relative">
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[28.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
                REAR
              </div>
            </div>
            <div className="w-20 h-[23.23px] relative">
              <div className="w-20 h-[23.23px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-sm border border-white border-opacity-25" />
              <div className="left-[25.47px] top-[6.29px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
                PARTY
              </div>
            </div>
          </div>
        )}
        <div className="relative flex items-center justify-center">
          <div className="absolute">
            <CarBackground />
          </div>
          <Car />
        </div>
      </div>
    </div>
  );
};

export default VehicleMenu;
