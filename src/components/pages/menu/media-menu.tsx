import React, { useState } from "react";
import Tab from "./menu-tab";
import MusicList from "./music-list";

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
        <MusicList />
      </div>
    </div>
  );
};

export default MediaMenu;
