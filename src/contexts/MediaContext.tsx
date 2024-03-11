// MusicPlayerContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Song } from "../types/media";

export interface MusicPlayerContextType {
  musicList: Song[];
  addSongToMusicList: (song: Song) => void;
  removeSongFromMusicList: (songId: string) => void;
  searchSongInMusicList: (searchTerm: string) => Song[];
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  currentTrackIndex: number;
}

const defaultValue: MusicPlayerContextType = {
  musicList: [],
  addSongToMusicList: () => {},
  removeSongFromMusicList: () => {},
  searchSongInMusicList: () => [],
  playing: false,
  setPlaying: function (value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
  playNextTrack: function (): void {
    throw new Error("Function not implemented.");
  },
  playPreviousTrack: function (): void {
    throw new Error("Function not implemented.");
  },
  currentTrackIndex: 0,
};

const MusicPlayerContext = createContext<MusicPlayerContextType>(defaultValue);

export const useMusicPlayer = () => useContext(MusicPlayerContext);

interface MusicPlayerProviderProps {
  children: ReactNode;
}

export const MusicPlayerProvider: React.FC<MusicPlayerProviderProps> = ({
  children,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const [musicList, setMusicList] = useState<Song[]>([]);

  const [playing, setPlaying] = useState(false);

  const addSongToMusicList = (song: Song) => {
    setMusicList((prevMusicList) => [...prevMusicList, song]);
  };

  const removeSongFromMusicList = (songId: string) => {
    setMusicList((prevMusicList) =>
      prevMusicList.filter((song) => song.title !== songId)
    );
  };

  const searchSongInMusicList = (searchTerm: string) => {
    return musicList.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const playNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicList.length);
  };

  const playPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1) % musicList.length);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        playNextTrack,
        playPreviousTrack,
        currentTrackIndex,
        musicList,
        addSongToMusicList,
        removeSongFromMusicList,
        searchSongInMusicList,
        playing,
        setPlaying,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
