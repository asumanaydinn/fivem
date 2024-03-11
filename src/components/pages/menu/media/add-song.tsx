import AddIcon from "@mui/icons-material/Add";
import { useMusicPlayer } from "../../../../contexts/MediaContext";
import { useState } from "react";

const AddSong = () => {
  const [music, setMusic] = useState("");

  const { addSongToMusicList, musicList } = useMusicPlayer();

  return (
    <div className="w-full h-full flex gap-y-2 px-2 flex-col bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded">
      <div className="flex items-center gap-x-2">
        <input
          onChange={(e) => setMusic(e.target.value)}
          style={{
            borderRadius: "3px",
            border: "0.5px solid rgba(255, 255, 255, 0.25)",
            background:
              "linear-gradient(79deg, #090909 5.22%, #161616 50.4%, #0B0B0B 96.49%)",
          }}
          value={music}
          className="w-[296px] p-2 h-[38px] text-[8.891px] text-[#959595] bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white"
        />
        <button
          onClick={() => {
            addSongToMusicList({ title: "", url: music });
          }}
          style={{
            borderRadius: "3px",
            border: "0.5px solid rgba(255, 255, 255, 0.25)",
            background:
              "linear-gradient(79deg, #090909 5.22%, #161616 50.4%, #0B0B0B 96.49%)",
          }}
          className="flex group cursor-pointer items-center w-[38px] h-[38px] justify-center bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white"
        >
          <AddIcon className="group-hover:text-white" />
        </button>
      </div>

      {musicList.map((track, index) => (
        <div
          key={index}
          className="w-[342px] h-[48.14px] px-2 flex items-center justify-between bg-zinc-300 bg-opacity-5 rounded-[1px]"
        >
          <div className="flex items-center gap-x-2">
            <div className="w-[32.09px] flex items-center justify-center h-[32.09px]  bg-stone-500 rounded-[1px]">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7011 1.71409L6.23054 0.0729316C6.14886 0.0484147 6.06259 0.0433315 5.9786 0.0580878C5.89461 0.0728441 5.81523 0.107031 5.7468 0.15792C5.67838 0.208809 5.62279 0.27499 5.58449 0.35118C5.54619 0.42737 5.52623 0.51146 5.52621 0.596736V7.99974C4.96596 7.49864 4.2507 7.20501 3.49996 7.16792C2.74922 7.13083 2.0085 7.35253 1.40159 7.79596C0.794674 8.2394 0.358341 8.8777 0.165513 9.6042C-0.027315 10.3307 0.0350445 11.1014 0.34217 11.7874C0.649296 12.4734 1.18258 13.0333 1.85289 13.3734C2.52321 13.7135 3.28994 13.8132 4.02494 13.6559C4.75995 13.4986 5.41869 13.0938 5.89109 12.5091C6.36348 11.9244 6.62089 11.1954 6.62031 10.4437V4.61416L11.3865 6.04403C11.4682 6.06854 11.5545 6.07363 11.6385 6.05887C11.7225 6.04411 11.8018 6.00993 11.8703 5.95904C11.9387 5.90815 11.9943 5.84197 12.0326 5.76578C12.0709 5.68959 12.0908 5.6055 12.0909 5.52022V2.2379C12.0908 2.12029 12.0529 2.00582 11.9827 1.91147C11.9125 1.81712 11.8137 1.74791 11.7011 1.71409Z"
                  fill="#101010"
                />
              </svg>
            </div>

            <div className="px-2 w-44 line-clamp-2 text-neutral-200 text-[9.26px] font-semibold font-['Qanelas Soft']">
              {track.url}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddSong;
