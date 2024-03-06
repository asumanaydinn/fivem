import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useMusicPlayer } from "../../../../contexts/MediaContext";
interface Track {
  url: string;
  title: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const { currentTrack } = useMusicPlayer();
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  return (
    <ReactPlayer
      url={tracks.length > 0 ? tracks[currentTrackIndex].url : ""}
      playing={!!currentTrack}
      controls={true}
      onEnded={playNextTrack}
      width="96%"
      height="180px"
    />
  );
};

export default MusicPlayer;
