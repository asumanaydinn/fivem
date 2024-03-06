import AddIcon from "@mui/icons-material/Add";
import { useMusicPlayer } from "../../../../contexts/MediaContext";
import { useState } from "react";
import ReactPlayer from "react-player";
const AddSong = () => {
  const [music, setMusic] = useState("");

  const {
    addSongToTrackList,
    addSongToMusicList,
    trackList,
    currentTrack,
    playSong,
  } = useMusicPlayer();

  return (
    <div className="w-full h-full flex gap-y-2 px-2 flex-col bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 rounded">
      <div className="flex items-center gap-x-2">
        <input
          onChange={(e) => setMusic(e.target.value)}
          style={{
            borderRadius: "3px",
            border: "0.5px solid rgba(255, 255, 255, 0.25)",
            background:
              "linear-gradient(90deg, rgba(217, 217, 217, 0.00) 5.05%, rgba(217, 217, 217, 0.03) 50.58%, rgba(217, 217, 217, 0.06) 98.91%)",
          }}
          value={music}
          className="w-[296px] p-2 h-[38px] text-[8.891px] text-[#959595] bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white"
        />
        <button
          onClick={() => {
            addSongToMusicList({ title: "", url: music });
            addSongToTrackList({ title: "", url: music });
          }}
          style={{
            borderRadius: "3px",
            border: "0.5px solid rgba(255, 255, 255, 0.25)",
            background:
              "linear-gradient(90deg, rgba(217, 217, 217, 0.00) 5.05%, rgba(217, 217, 217, 0.03) 50.58%, rgba(217, 217, 217, 0.06) 98.91%)",
          }}
          className="flex group cursor-pointer items-center w-[38px] h-[38px] justify-center bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white"
        >
          <AddIcon className="group-hover:text-white" />
        </button>
      </div>

      {trackList.map((track, index) => (
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

            <div className="px-2 text-neutral-200 text-[9.26px] font-semibold font-['Inter']">
              {track.url}
            </div>
          </div>
          {currentTrack?.url === track.url && (
            <div className="text-zinc-500 text-[8.89px] font-semibold font-['Inter']">
              Playing Now
            </div>
          )}

          {currentTrack?.url !== track.url && (
            <div>
              <button
                onClick={() => playSong(track)}
                className="cursor-pointer"
              >
                <svg
                  width="55"
                  height="57"
                  viewBox="0 0 55 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_72_5378)">
                    <path
                      d="M32.5213 28.8277C32.5216 28.9746 32.484 29.1191 32.4119 29.2472C32.3399 29.3753 32.2359 29.4825 32.1101 29.5585L24.3157 34.3267C24.1843 34.4072 24.0337 34.4511 23.8797 34.454C23.7256 34.4568 23.5736 34.4185 23.4393 34.343C23.3063 34.2686 23.1954 34.1601 23.1182 34.0287C23.041 33.8973 23.0002 33.7477 23 33.5953V24.06C23.0002 23.9076 23.041 23.758 23.1182 23.6266C23.1954 23.4952 23.3063 23.3867 23.4393 23.3123C23.5736 23.2368 23.7256 23.1985 23.8797 23.2013C24.0337 23.2042 24.1843 23.2481 24.3157 23.3286L32.1101 28.0968C32.2359 28.1728 32.3399 28.28 32.4119 28.4081C32.484 28.5362 32.5216 28.6807 32.5213 28.8277Z"
                      fill="#717171"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_72_5378"
                      x="0.63846"
                      y="0.839632"
                      width="54.2446"
                      height="55.976"
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
                      <feGaussianBlur stdDeviation="11.1808" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.5625 0 0 0 0 0.555469 0 0 0 0 0.555469 0 0 0 0.62 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_72_5378"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_72_5378"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="hidden">
        <ReactPlayer
          url={trackList.length > 0 ? currentTrack?.url : ""}
          playing={!!currentTrack}
          controls={true}
          width="96%"
          height="180px"
        />
      </div>
    </div>
  );
};

export default AddSong;
