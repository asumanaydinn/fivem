// MusicList.tsx
import React, { useState } from "react";
import { useMusicPlayer } from "../../../contexts/MediaContext";
import { Song } from "../../../types/media";

const MusicList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    musicList,
    removeSongFromMusicList,
    playSong,
    searchSongInMusicList,
  } = useMusicPlayer();

  const filteredSongs =
    searchTerm.length > 0 ? searchSongInMusicList(searchTerm) : musicList;

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a song"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredSongs.map((song: Song) => (
          <li key={song.title}>
            {song.title}
            <button onClick={() => playSong(song)}>Play</button>
            <button onClick={() => removeSongFromMusicList(song.title)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
