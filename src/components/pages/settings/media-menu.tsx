import React, { useState } from "react";

const MediaMenu = () => {
  // Assume "Track List" is the active tab
  const [activeTab, setActiveTab] = useState("Track List");

  // Function to generate tab with conditional styling for active state
  const Tab = ({ label, isActive }: { label: string; isActive: boolean }) => (
    <div
      onClick={() => setActiveTab(label)}
      className={`grow flex cursor-pointer p-1 items-center justify-center shrink basis-0 self-stretch relative ${
        isActive ? "bg-gradient-to-l from-stone-300 to-stone-300" : ""
      } rounded`}
    >
      <div
        className={`w-[80.88px] text-center ${
          isActive ? "text-gray-950 font-bold" : "text-neutral-400 font-medium"
        } text-[10.34px] font-['Inter']`}
      >
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded">
      <div className="flex px-2">
        <Tab label="Add Song" isActive={activeTab === "Add Song"} />
        <Tab label="Music Player" isActive={activeTab === "Music Player"} />
        <Tab label="Music List" isActive={activeTab === "Music List"} />
        {/* Assuming "Track List" is the active tab */}
        <Tab label="Track List" isActive={activeTab === "Track List"} />
      </div>
      <div className="w-[369px] h-[206px] relative bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded">
        <div className="w-[296px] h-[38px] left-[14px] top-[15px] absolute bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white" />
        <div className="w-px h-[27px] left-[49px] top-[21px] absolute bg-zinc-300 bg-opacity-25" />
        <div className="left-[62px] top-[28px] absolute text-center text-neutral-400 text-[8.89px] font-semibold font-['Inter']">
          www.youtube.com/w/devdusaifsa.mp4
        </div>
        <div className="w-[338px] h-[47.58px] left-[14px] top-[59.69px] absolute">
          <div className="w-[338px] h-[47.58px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-[0.99px]" />
          <div className="left-[285.47px] top-[19.64px] absolute text-neutral-400 text-[7.46px] font-semibold font-['Inter']">
            <br />
          </div>
          <div className="w-[95.63px] h-[31.72px] left-[8.92px] top-[7.93px] absolute">
            <div className="w-[54px] h-[22.87px] left-[41.63px] top-[2.97px] absolute">
              <div className="left-0 top-0 absolute text-neutral-200 text-[9.15px] font-semibold font-['Inter']">
                Music Name
              </div>
              <div className="left-0 top-[14.87px] absolute text-neutral-400 text-[6.51px] font-semibold font-['Inter']">
                Song Artist
              </div>
            </div>
            <div className="w-[31.72px] h-[31.72px] left-0 top-0 absolute">
              <div className="w-[31.72px] h-[31.72px] left-0 top-0 absolute bg-stone-500 rounded-[0.99px]" />
            </div>
          </div>
        </div>
        <div className="w-[338px] h-[47.58px] left-[14px] top-[113.26px] absolute">
          <div className="w-[338px] h-[47.58px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-[0.99px]" />
          <div className="left-[285.47px] top-[19.64px] absolute text-neutral-400 text-[7.46px] font-semibold font-['Inter']">
            Song Added
          </div>
          <div className="w-[95.63px] h-[31.72px] left-[8.92px] top-[7.93px] absolute">
            <div className="w-[31.72px] h-[31.72px] left-0 top-0 absolute bg-stone-500 rounded-[0.99px]" />
            <div className="w-[54px] h-[22.87px] left-[41.63px] top-[2.97px] absolute">
              <div className="left-0 top-0 absolute text-neutral-200 text-[9.15px] font-semibold font-['Inter']">
                Music Name
              </div>
              <div className="left-0 top-[14.87px] absolute text-neutral-400 text-[6.51px] font-semibold font-['Inter']">
                Song Artist
              </div>
            </div>
          </div>
        </div>
        <div className="w-[338px] h-[47.58px] left-[14px] top-[166.84px] absolute">
          <div className="w-[338px] h-[47.58px] left-0 top-0 absolute bg-zinc-300 bg-opacity-5 rounded-[0.99px]" />
          <div className="left-[285.47px] top-[19.64px] absolute text-neutral-400 text-[7.46px] font-semibold font-['Inter']">
            Song Added
          </div>
          <div className="w-[95.63px] h-[31.72px] left-[8.92px] top-[7.93px] absolute">
            <div className="w-[31.72px] h-[31.72px] left-0 top-0 absolute bg-stone-500 rounded-[0.99px]" />
            <div className="w-[54px] h-[22.87px] left-[41.63px] top-[2.97px] absolute">
              <div className="left-0 top-0 absolute text-neutral-200 text-[9.15px] font-semibold font-['Inter']">
                Music Name
              </div>
              <div className="left-0 top-[14.87px] absolute text-neutral-400 text-[6.51px] font-semibold font-['Inter']">
                Song Artist
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaMenu;
