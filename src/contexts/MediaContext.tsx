import React, { createContext, useContext, useState, ReactNode } from "react";
import { Song } from "../types/media";

export interface MusicPlayerContextType {
  musicList: Song[];
  playing: boolean;
  currentTrackIndex: number;
  progress: number;

  addSongToMusicList: (song: Song) => void;
  removeSongFromMusicList: (songId: string) => void;
  searchSongInMusicList: (searchTerm: string) => Song[];
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  onPlay: (index: number) => void;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: MusicPlayerContextType = {
  musicList: [],
  playing: false,
  progress: 0,
  currentTrackIndex: 0,

  addSongToMusicList: () => {},
  removeSongFromMusicList: () => {},
  searchSongInMusicList: () => [],
  setPlaying: function (value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
  playNextTrack: function (): void {
    throw new Error("Function not implemented.");
  },
  playPreviousTrack: function (): void {
    throw new Error("Function not implemented.");
  },
  onPlay: function (index: number): void {
    throw new Error("Function not implemented.");
  },
  setProgress: function (value: React.SetStateAction<number>): void {
    throw new Error("Function not implemented.");
  },
};

const MusicPlayerContext = createContext<MusicPlayerContextType>(defaultValue);

export const useMusicPlayer = () => useContext(MusicPlayerContext);

export const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [musicList, setMusicList] = useState<Song[]>([]);
  const [playing, setPlaying] = useState(false);

  const [progress, setProgress] = useState<number>(0);

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

  const onPlay = (index: number) => {
    setCurrentTrackIndex(index);
    setPlaying(true);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrackIndex,
        musicList,
        playing,
        progress,

        playNextTrack,
        playPreviousTrack,
        addSongToMusicList,
        removeSongFromMusicList,
        searchSongInMusicList,
        setPlaying,
        onPlay,
        setProgress,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
