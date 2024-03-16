import React, { useEffect, useState } from "react";
import { useMusicPlayer } from "../../../../contexts/MediaContext";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import { formatDuration } from "date-fns";

interface Track {
  url: string;
  title: string;
}

interface MusicPlayerProps {
  tracks: Track[];
}

function parseIsoDuration(isoDuration: string) {
  const regex =
    /P(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)D)?T?(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?/;
  const matches = isoDuration.match(regex);
  if (matches)
    return {
      years: parseInt(matches[1]) || 0,
      months: parseInt(matches[2]) || 0,
      days: parseInt(matches[3]) || 0,
      hours: parseInt(matches[4]) || 0,
      minutes: parseInt(matches[5]) || 0,
      seconds: parseInt(matches[6]) || 0,
    };
}

function formatIsoDuration(isoDuration: string) {
  const durationObj = parseIsoDuration(isoDuration);

  // Since date-fns formatDuration does not handle years and months (due to their variable length),
  // you might display them separately or omit based on your requirements. Here, we'll focus on days and shorter periods.
  if (durationObj) {
    const formattedDuration = formatDuration({
      years: durationObj.years,
      months: durationObj.months,
      days: durationObj.days,
      hours: durationObj.hours,
      minutes: durationObj.minutes,
      seconds: durationObj.seconds,
    });

    return formattedDuration;
  }

  return "";
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const {
    currentTrackIndex,
    playing,
    setPlaying,
    musicList,
    playNextTrack,
    playPreviousTrack,
  } = useMusicPlayer();

  const [currentSongDetails, setCurrentSongDetails] = useState({
    title: "",
    duration: "",
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

  function extractVideoID(url: string): string | null {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  }

  async function fetchSongDetails(videoID: string) {
    const API_KEY = "AIzaSyBVwkciEOdTzJyAQuwRSbm0k_IO_RjfpYA"; // Replace with your YouTube Data API Key
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${API_KEY}&part=snippet,contentDetails`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const videoData = data.items[0];

      const formattedDuration = formatIsoDuration(
        videoData.contentDetails.duration
      );

      return {
        title: videoData.snippet.title,
        duration: formattedDuration, // Consider formatting this value
        artist: videoData.snippet.channelTitle, // YouTube doesn't directly provide artist names for music videos
      };
    } catch (error) {
      console.error("Error fetching YouTube video data:", error);
      return { title: "", duration: "", artist: "" };
    }
  }

  if (!currentSongDetails)
    return (
      <div className="flex items-center justify-center bg-zinc-900 w-full h-full text-white">
        No music on play.
      </div>
    );

  return (
    <>
      <div className="w-full h-full px-3  bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded justify-between flex flex-col">
        <div className="flex flex-col h-20 w-full items-center justify-start">
          <svg
            width="116"
            height="122"
            viewBox="0 0 116 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_72_5118)">
              <path
                d="M41.7391 53.2174V68.5217C41.7391 69.0291 41.5376 69.5157 41.1788 69.8745C40.82 70.2332 40.3335 70.4348 39.8261 70.4348H37.913C37.4057 70.4348 36.9191 70.2332 36.5603 69.8745C36.2016 69.5157 36 69.0291 36 68.5217V53.2174C36 52.71 36.2016 52.2234 36.5603 51.8647C36.9191 51.5059 37.4057 51.3043 37.913 51.3043H39.8261C40.3335 51.3043 40.82 51.5059 41.1788 51.8647C41.5376 52.2234 41.7391 52.71 41.7391 53.2174ZM49.3913 36H47.4783C46.9709 36 46.4843 36.2016 46.1255 36.5603C45.7668 36.9191 45.5652 37.4057 45.5652 37.913V83.8261C45.5652 84.3335 45.7668 84.82 46.1255 85.1788C46.4843 85.5376 46.9709 85.7391 47.4783 85.7391H49.3913C49.8987 85.7391 50.3853 85.5376 50.744 85.1788C51.1028 84.82 51.3043 84.3335 51.3043 83.8261V37.913C51.3043 37.4057 51.1028 36.9191 50.744 36.5603C50.3853 36.2016 49.8987 36 49.3913 36ZM58.9565 43.6522H57.0435C56.5361 43.6522 56.0495 43.8537 55.6908 44.2125C55.332 44.5713 55.1304 45.0578 55.1304 45.5652V76.1739C55.1304 76.6813 55.332 77.1679 55.6908 77.5266C56.0495 77.8854 56.5361 78.087 57.0435 78.087H58.9565C59.4639 78.087 59.9505 77.8854 60.3092 77.5266C60.668 77.1679 60.8696 76.6813 60.8696 76.1739V45.5652C60.8696 45.0578 60.668 44.5713 60.3092 44.2125C59.9505 43.8537 59.4639 43.6522 58.9565 43.6522ZM68.5217 51.3043H66.6087C66.1013 51.3043 65.6147 51.5059 65.256 51.8647C64.8972 52.2234 64.6957 52.71 64.6957 53.2174V68.5217C64.6957 69.0291 64.8972 69.5157 65.256 69.8745C65.6147 70.2332 66.1013 70.4348 66.6087 70.4348H68.5217C69.0291 70.4348 69.5157 70.2332 69.8745 69.8745C70.2332 69.5157 70.4348 69.0291 70.4348 68.5217V53.2174C70.4348 52.71 70.2332 52.2234 69.8745 51.8647C69.5157 51.5059 69.0291 51.3043 68.5217 51.3043ZM78.087 47.4783H76.1739C75.6665 47.4783 75.18 47.6798 74.8212 48.0386C74.4624 48.3973 74.2609 48.8839 74.2609 49.3913V72.3478C74.2609 72.8552 74.4624 73.3418 74.8212 73.7006C75.18 74.0593 75.6665 74.2609 76.1739 74.2609H78.087C78.5943 74.2609 79.0809 74.0593 79.4397 73.7006C79.7985 73.3418 80 72.8552 80 72.3478V49.3913C80 48.8839 79.7985 48.3973 79.4397 48.0386C79.0809 47.6798 78.5943 47.4783 78.087 47.4783Z"
                fill="url(#paint0_linear_72_5118)"
                fill-opacity="0.22"
                shape-rendering="crispEdges"
              />
              <path
                d="M42.0447 68.5217V53.2174C42.0447 52.629 41.8109 52.0647 41.3949 51.6486C40.9788 51.2325 40.4145 50.9988 39.8261 50.9988H37.913C37.3246 50.9988 36.7603 51.2325 36.3443 51.6486C35.9282 52.0647 35.6944 52.629 35.6944 53.2174V68.5217C35.6944 69.1101 35.9282 69.6745 36.3443 70.0905C36.7603 70.5066 37.3246 70.7403 37.913 70.7403H39.8261C40.4145 70.7403 40.9788 70.5066 41.3949 70.0905C41.8109 69.6745 42.0447 69.1101 42.0447 68.5217ZM49.3913 35.6944H47.4783C46.8899 35.6944 46.3255 35.9282 45.9095 36.3443C45.4934 36.7603 45.2597 37.3246 45.2597 37.913V83.8261C45.2597 84.4145 45.4934 84.9788 45.9095 85.3949C46.3255 85.8109 46.8899 86.0447 47.4783 86.0447H49.3913C49.9797 86.0447 50.544 85.8109 50.9601 85.3949C51.3762 84.9788 51.6099 84.4145 51.6099 83.8261V37.913C51.6099 37.3246 51.3762 36.7603 50.9601 36.3443C50.544 35.9282 49.9797 35.6944 49.3913 35.6944ZM58.9565 43.3466H57.0435C56.4551 43.3466 55.8908 43.5804 55.4747 43.9964C55.0586 44.4125 54.8249 44.9768 54.8249 45.5652V76.1739C54.8249 76.7623 55.0586 77.3266 55.4747 77.7427C55.8908 78.1588 56.4551 78.3925 57.0435 78.3925H58.9565C59.5449 78.3925 60.1092 78.1588 60.5253 77.7427C60.9414 77.3266 61.1751 76.7623 61.1751 76.1739V45.5652C61.1751 44.9768 60.9414 44.4125 60.5253 43.9964C60.1092 43.5804 59.5449 43.3466 58.9565 43.3466ZM68.5217 50.9988H66.6087C66.0203 50.9988 65.456 51.2325 65.0399 51.6486C64.6238 52.0647 64.3901 52.629 64.3901 53.2174V68.5217C64.3901 69.1101 64.6238 69.6745 65.0399 70.0905C65.456 70.5066 66.0203 70.7403 66.6087 70.7403H68.5217C69.1101 70.7403 69.6745 70.5066 70.0905 70.0905C70.5066 69.6745 70.7403 69.1101 70.7403 68.5217V53.2174C70.7403 52.629 70.5066 52.0647 70.0905 51.6486C69.6745 51.2325 69.1101 50.9988 68.5217 50.9988ZM78.087 47.1727H76.1739C75.5855 47.1727 75.0212 47.4065 74.6051 47.8225C74.1891 48.2386 73.9553 48.8029 73.9553 49.3913V72.3478C73.9553 72.9362 74.1891 73.5005 74.6051 73.9166C75.0212 74.3327 75.5855 74.5664 76.1739 74.5664H78.087C78.6754 74.5664 79.2397 74.3327 79.6557 73.9166C80.0718 73.5005 80.3056 72.9362 80.3056 72.3478V49.3913C80.3056 48.8029 80.0718 48.2386 79.6557 47.8225C79.2397 47.4065 78.6754 47.1727 78.087 47.1727Z"
                stroke="url(#paint1_linear_72_5118)"
                stroke-opacity="0.41"
                stroke-width="0.611111"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_72_5118"
                x="0.0467377"
                y="0.0469513"
                width="115.907"
                height="121.645"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="17.671" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.8375 0 0 0 0 0.809583 0 0 0 0 0.809583 0 0 0 0.19 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_72_5118"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_72_5118"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_72_5118"
                x1="58"
                y1="36"
                x2="58"
                y2="85.7391"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#404040" stop-opacity="0.39" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_72_5118"
                x1="58"
                y1="36"
                x2="58"
                y2="85.7391"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1E1E1" />
                <stop offset="1" stop-color="#E1E1E1" stop-opacity="0.32" />
              </linearGradient>
            </defs>
          </svg>
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
              {currentSongDetails.duration}
            </div>
          </div>

          <div className="w-[335px] h-0.5 bg-zinc-300 bg-opacity-10 rounded-sm relative">
            {playing && (
              <div className="w-[100px] absolute h-0.5 bg-white bg-opacity-10 rounded-sm " />
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
              <button
                onClick={() => playNextTrack()}
                className="cursor-pointer"
              >
                <SkipNextRoundedIcon className="text-neutral-500" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
