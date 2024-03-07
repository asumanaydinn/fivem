// MusicList.tsx
import React, { useState } from "react";
import { useMusicPlayer } from "../../../../contexts/MediaContext";

const MusicList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { musicList, searchSongInMusicList, currentTrack } = useMusicPlayer();

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
              "linear-gradient(90deg, rgba(217, 217, 217, 0.00) 5.05%, rgba(217, 217, 217, 0.03) 50.58%, rgba(217, 217, 217, 0.06) 98.91%)",
          }}
          value={searchTerm}
          className="w-[296px] p-2 h-[38px] text-[8.891px] text-[#959595] bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white"
        />
        <div
          style={{
            borderRadius: "3px",
            border: "0.5px solid rgba(255, 255, 255, 0.25)",
            background:
              "linear-gradient(90deg, rgba(217, 217, 217, 0.00) 5.05%, rgba(217, 217, 217, 0.03) 50.58%, rgba(217, 217, 217, 0.06) 98.91%)",
          }}
          className="flex group items-center w-[38px] h-[38px] justify-center bg-gradient-to-r from-zinc-300 via-zinc-300 to-zinc-300 rounded-[3px] border border-white"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7689 7.19699C11.7689 8.10219 11.5005 8.98706 10.9976 9.73971C10.4947 10.4924 9.77986 11.079 8.94356 11.4254C8.10727 11.7718 7.18703 11.8624 6.29922 11.6858C5.41141 11.5092 4.59591 11.0733 3.95583 10.4333C3.31576 9.79319 2.87986 8.97768 2.70327 8.08987C2.52667 7.20207 2.61731 6.28183 2.96371 5.44553C3.31012 4.60924 3.89674 3.89444 4.64938 3.39154C5.40203 2.88863 6.2869 2.62021 7.19211 2.62021C8.40594 2.62021 9.57006 3.10241 10.4284 3.96072C11.2867 4.81903 11.7689 5.98315 11.7689 7.19699ZM16.8082 16.8131C16.7475 16.8739 16.6754 16.9221 16.596 16.955C16.5167 16.9879 16.4316 17.0049 16.3457 17.0049C16.2597 17.0049 16.1747 16.9879 16.0953 16.955C16.0159 16.9221 15.9438 16.8739 15.8831 16.8131L11.7918 12.721C10.369 13.9047 8.54462 14.4943 6.69819 14.3672C4.85176 14.2401 3.12541 13.4061 1.87821 12.0386C0.631017 10.6711 -0.0410025 8.87551 0.00193806 7.02522C0.0448786 5.17492 0.799473 3.4124 2.10876 2.10427C3.41805 0.796135 5.18124 0.0430985 7.03157 0.00179325C8.88191 -0.039512 10.6769 0.634094 12.0433 1.8825C13.4097 3.1309 14.2422 4.85799 14.3676 6.70453C14.4931 8.55107 13.9019 10.3749 12.7169 11.7967L16.8082 15.888C16.869 15.9487 16.9173 16.0208 16.9502 16.1002C16.9831 16.1795 17 16.2646 17 16.3505C17 16.4365 16.9831 16.5215 16.9502 16.6009C16.9173 16.6803 16.869 16.7524 16.8082 16.8131ZM7.19211 13.0814C8.35594 13.0814 9.49363 12.7363 10.4613 12.0897C11.429 11.4431 12.1832 10.5241 12.6286 9.44886C13.074 8.37362 13.1905 7.19046 12.9635 6.04899C12.7364 4.90753 12.176 3.85902 11.353 3.03607C10.5301 2.21312 9.48157 1.65268 8.3401 1.42563C7.19863 1.19858 6.01547 1.31511 4.94023 1.76049C3.86499 2.20586 2.94597 2.96009 2.29938 3.92778C1.65279 4.89546 1.30768 6.03316 1.30768 7.19699C1.30941 8.75711 1.92993 10.2528 3.0331 11.356C4.13627 12.4592 5.63199 13.0797 7.19211 13.0814Z"
              fill="#969696"
            />
          </svg>
        </div>
      </div>

      {filteredSongs.map((track, index) => (
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
              <svg
                width="49"
                height="50"
                viewBox="0 0 49 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="37.8125"
                  y="22.1502"
                  width="1.78128"
                  height="9.79702"
                  rx="0.498758"
                  transform="rotate(-45 37.8125 22.1502)"
                  fill="#717171"
                />
                <rect
                  x="39.0723"
                  y="29.0777"
                  width="1.78128"
                  height="9.79702"
                  rx="0.498758"
                  transform="rotate(-135 39.0723 29.0777)"
                  fill="#717171"
                />
                <g filter="url(#filter0_d_0_1)">
                  <path
                    d="M28.48 25.0112C28.4803 25.142 28.4468 25.2708 28.3826 25.3848C28.3184 25.4989 28.2258 25.5944 28.1138 25.6621L21.1718 29.9089C21.0547 29.9805 20.9207 30.0196 20.7835 30.0222C20.6463 30.0247 20.5109 29.9906 20.3912 29.9233C20.2728 29.8571 20.1741 29.7605 20.1053 29.6434C20.0365 29.5264 20.0002 29.3932 20 29.2574V20.7649C20.0002 20.6292 20.0365 20.4959 20.1053 20.3789C20.1741 20.2619 20.2728 20.1653 20.3912 20.099C20.5109 20.0317 20.6463 19.9976 20.7835 20.0001C20.9207 20.0027 21.0547 20.0418 21.1718 20.1135L28.1138 24.3602C28.2258 24.4279 28.3184 24.5234 28.3826 24.6375C28.4468 24.7516 28.4803 24.8803 28.48 25.0112Z"
                    fill="#717171"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_0_1"
                    x="0.083952"
                    y="0.083952"
                    width="48.3121"
                    height="49.8544"
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
                    <feGaussianBlur stdDeviation="9.95802" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.5625 0 0 0 0 0.555469 0 0 0 0 0.555469 0 0 0 0.62 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_0_1"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_0_1"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MusicList;