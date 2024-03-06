import React, { useState } from "react";
import Tab from "../menu/menu-tab";

interface MediaItemProps {
  name: string;
  artist: string;
}

const mediaItems: MediaItemProps[] = [
  { name: "Music Name 1", artist: "Song Artist 1" },
  { name: "Music Name 2", artist: "Song Artist 2" },
  { name: "Music Name 3", artist: "Song Artist 3" },
];

const MediaMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Track List");

  return (
    <div className="flex flex-col bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded">
      <div className="flex px-2">
        <Tab
          label="Add Song"
          isActive={activeTab === "Add Song"}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Music Player"
          isActive={activeTab === "Music Player"}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Music List"
          isActive={activeTab === "Music List"}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="Track List"
          isActive={activeTab === "Track List"}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="w-[369px] h-[206px] relative bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded overflow-auto">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className="w-[338px] h-[47.58px] m-[14px] bg-zinc-300 bg-opacity-5 rounded-[0.99px] flex"
          >
            <div className="w-[31.72px] h-[31.72px] bg-stone-500 rounded-[0.99px] m-[8.92px]"></div>
            <div className="flex flex-col justify-center">
              <div className="text-neutral-200 text-[9.15px] font-semibold font-['Inter']">
                {item.name}
              </div>
              <div className="text-neutral-400 text-[6.51px] font-semibold font-['Inter']">
                {item.artist}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaMenu;
