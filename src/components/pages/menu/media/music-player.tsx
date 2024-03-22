import React, { useEffect, useState } from "react";
import { useMusicPlayer } from "../../../../contexts/MediaContext";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import {
  extractVideoID,
  getDurationText,
  isoDurationToSeconds,
} from "../../../../helper/music-player";
import { PlayerIcon } from "../../../icons/player-icon";

interface Track {
  url: string;
  title: string;
}

interface MusicPlayerProps {
  tracks: Track[];
  ref: React.MutableRefObject<any>;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks, ref }) => {
  const {
    currentTrackIndex,
    playing,
    setPlaying,
    musicList,
    playNextTrack,
    playPreviousTrack,
    progress,
  } = useMusicPlayer();

  const [durationText, setDurationText] = useState("");

  const [currentSongDetails, setCurrentSongDetails] = useState({
    title: "",
    duration: 0,
    artist: "",
  });

  useEffect(() => {
    if (!musicList || musicList.length === 0 || currentTrackIndex == null)
      return;

    const currentTrack = musicList[currentTrackIndex];
    const videoID = extractVideoID(currentTrack.url);

    if (videoID) {
      fetchSongDetails(videoID).then((details) => {
        setCurrentSongDetails(details);
      });
    }
  }, [musicList, currentTrackIndex]);

  async function fetchSongDetails(videoID: string) {
    const API_KEY = "AIzaSyBVwkciEOdTzJyAQuwRSbm0k_IO_RjfpYA"; // Replace with your YouTube Data API Key
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${API_KEY}&part=snippet,contentDetails`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const videoData = data.items[0];

      setDurationText(getDurationText(videoData.contentDetails.duration));

      const formattedDuration = isoDurationToSeconds(
        videoData.contentDetails.duration
      );

      return {
        title: videoData.snippet.title,
        duration: formattedDuration, // Consider formatting this value
        artist: videoData.snippet.channelTitle, // YouTube doesn't directly provide artist names for music videos
      };
    } catch (error) {
      console.error("Error fetching YouTube video data:", error);
      return { title: "", duration: 0, artist: "" };
    }
  }

  if (!currentSongDetails)
    return (
      <div className="flex items-center justify-center bg-zinc-900 w-full h-full text-white">
        No music on play.
      </div>
    );

  return (
    <div className="w-full h-full px-3  bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded justify-between flex flex-col">
      <div className="flex flex-col h-20 w-full items-center justify-start">
        <PlayerIcon />
      </div>
      <div className="w-full h-2/3 flex items-center justify-end flex-col gap-y-1">
        <div className="flex flex-col gap-y-2">
          <div className="text-center text-neutral-400 text-xs font-semibold font-['Inter']">
            {currentSongDetails.title}
          </div>
          <div className="text-center text-zinc-400 text-[8.05px] font-semibold font-['Inter']">
            {currentSongDetails.artist}
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="text-center text-neutral-400 text-[7.12px] font-semibold font-['Inter']">
            00.00
          </div>
          <div className="text-center text-neutral-400 text-[7.12px] font-semibold font-['Inter']">
            {durationText}
          </div>
        </div>

        <div className="w-[335px] h-0.5 bg-zinc-300 bg-opacity-10 rounded-sm relative">
          {playing && (
            <div
              style={{
                width: (progress * 335) / currentSongDetails.duration + "px",
              }}
              className=" absolute h-0.5 bg-white bg-opacity-10 rounded-sm "
            />
          )}
        </div>
        <div className="flex items-center justify-center w-full">
          {currentTrackIndex - 1 >= 0 && (
            <button
              onClick={() => playPreviousTrack()}
              className="cursor-pointer"
            >
              <SkipPreviousRoundedIcon className="text-neutral-500" />
            </button>
          )}
          <button
            onClick={() => setPlaying(!playing)}
            className="cursor-pointer"
          >
            {!playing ? (
              <PlayArrowRoundedIcon className="text-neutral-500" />
            ) : (
              <PauseRoundedIcon className="text-neutral-500" />
            )}
          </button>
          {currentTrackIndex + 1 <= musicList.length && (
            <button onClick={() => playNextTrack()} className="cursor-pointer">
              <SkipNextRoundedIcon className="text-neutral-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
