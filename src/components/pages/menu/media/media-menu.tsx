import React, { useState, ReactNode } from "react";
import Tab from "./menu-tab";
import MusicList from "./music-list";
import MusicPlayer from "./music-player";
import AddSong from "./add-song";
import { useMusicPlayer } from "../../../../contexts/MediaContext";

const MediaMenu = ({ ref }: { ref: React.MutableRefObject<null> }) => {
  const { musicList } = useMusicPlayer();
  const [activeTab, setActiveTab] = useState("Add Song");

  const tabComponents: Record<string, ReactNode> = {
    "Add Song": <AddSong  />,
    "Music Player": <MusicPlayer tracks={musicList} ref={ref}/>,
    "Music List": <MusicList ref={ref}/>,
  };

  const renderTabButtons = () => {
    return Object.keys(tabComponents).map((label) => (
      <Tab
        key={label}
        label={label}
        isActive={activeTab === label}
        setActiveTab={() => setActiveTab(label)}
      />
    ));
  };

  const renderActiveTabContent = () => {
    return (
      <div className="w-[369px] h-[206px] flex items-start py-2 justify-center relative bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded overflow-auto">
        {tabComponents[activeTab]}
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-gradient-to-r gap-y-2 from-neutral-950 via-neutral-900 to-neutral-950 rounded">
      <div className="flex px-2">{renderTabButtons()}</div>

      {renderActiveTabContent()}
    </div>
  );
};

export default MediaMenu;
