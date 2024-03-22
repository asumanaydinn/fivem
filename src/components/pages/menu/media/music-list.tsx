import React, { useState } from "react";
import { useMusicPlayer } from "../../../../contexts/MediaContext";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import { SongIcon } from "../../../icons/song-icon";
import { AddSongIcon } from "../../../icons/add-song-icon";

const MusicList = ({ ref }: { ref: React.MutableRefObject<null> }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { musicList, searchSongInMusicList, currentTrackIndex, onPlay } =
    useMusicPlayer();

  const filteredSongs =
    searchTerm.length > 0 ? searchSongInMusicList(searchTerm) : musicList;

  if (filteredSongs.length === 0 && searchTerm === "")
    return (
      <div className="flex items-center justify-center bg-zinc-900 w-full h-full text-white">
        No song in the list
      </div>
    );

  return (
    <div className="w-full h-full flex gap-y-2 px-2 flex-col bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded">
      <div className="flex items-center gap-x-2">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            borderRadius: "3px",
            border: "0.5px solid rgba(255, 255, 255, 0.25)",
            background:
              "linear-gradient(79deg, #090909 5.22%, #161616 50.4%, #0B0B0B 96.49%)",
          }}
          value={searchTerm}
          className="w-[296px] p-2 h-[38px] text-[8.891px] text-[#959595] bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white"
        />
        <div
          style={{
            borderRadius: "3px",
            border: "0.5px solid rgba(255, 255, 255, 0.25)",
            background:
              "linear-gradient(79deg, #090909 5.22%, #161616 50.4%, #0B0B0B 96.49%)",
          }}
          className="flex group items-center w-[38px] h-[38px] justify-center bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white"
        >
          <AddSongIcon />
        </div>
      </div>

      {filteredSongs.map((track, index) => (
        <div
          key={index}
          className="w-[342px] h-[48.14px] px-2 flex items-center justify-between bg-zinc-300 bg-opacity-5 rounded-[1px]"
        >
          <div className="flex items-center gap-x-2 w-full">
            <div className="w-[32.09px] flex items-center justify-center h-[32.09px]  bg-stone-500 rounded-[1px]">
              <SongIcon />
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <div className="px-2 w-44 line-clamp-2 text-neutral-200 text-[9.26px] font-semibold font-['Qanelas Soft']">
                  {track.title}
                </div>
                <div className="px-2 w-44 line-clamp-2 text-neutral-100 text-[8px] font-semibold font-['Qanelas Soft']">
                  {track.artist}
                </div>
              </div>
              {index === currentTrackIndex ? (
                <div className="text-zinc-500 text-[8.89px] font-semibold font-['Inter']">
                  Playing Now
                </div>
              ) : (
                <button onClick={() => onPlay(index)}>
                  <PlayArrowRounded />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicList;
