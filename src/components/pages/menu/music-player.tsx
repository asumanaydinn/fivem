import React, { useState } from "react";
import ReactPlayer from "react-player";

interface Track {
  url: string;
  title: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  return (
    <div>
      <ReactPlayer
        url={tracks.length > 0 ? tracks[currentTrackIndex].url : ""}
        playing={isPlaying}
        controls={true}
        onEnded={playNextTrack}
        width="100%"
        height="50px" // You might want to adjust this for audio
      />
      <div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={() => playNextTrack()}>Next</button>
      </div>
      {tracks[currentTrackIndex] && (
        <p>Now playing: {tracks[currentTrackIndex].title}</p>
      )}
    </div>
  );
};

export default MusicPlayer;
