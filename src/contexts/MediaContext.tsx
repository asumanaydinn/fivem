// MusicPlayerContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Song } from "../types/media";

export interface MusicPlayerContextType {
  currentTrack: Song | null;
  trackList: Song[];
  musicList: Song[];
  addSongToMusicList: (song: Song) => void;
  removeSongFromMusicList: (songId: string) => void;
  playSong: (song: Song) => void;
  addSongToTrackList: (song: Song, addToMusicList?: boolean) => void;
  searchSongInMusicList: (searchTerm: string) => Song[];
}

const defaultValue: MusicPlayerContextType = {
  currentTrack: null,
  trackList: [],
  musicList: [],
  addSongToMusicList: () => {},
  removeSongFromMusicList: () => {},
  playSong: () => {},
  addSongToTrackList: () => {},
  searchSongInMusicList: () => [],
};

const MusicPlayerContext = createContext<MusicPlayerContextType>(defaultValue);

export const useMusicPlayer = () => useContext(MusicPlayerContext);

interface MusicPlayerProviderProps {
  children: ReactNode;
}

export const MusicPlayerProvider: React.FC<MusicPlayerProviderProps> = ({
  children,
}) => {
  const [currentTrack, setCurrentTrack] = useState<Song | null>(null);
  const [trackList, setTrackList] = useState<Song[]>([]);
  const [musicList, setMusicList] = useState<Song[]>([]);

  const addSongToMusicList = (song: Song) => {
    setMusicList((prevMusicList) => [...prevMusicList, song]);
  };

  const removeSongFromMusicList = (songId: string) => {
    setMusicList((prevMusicList) =>
      prevMusicList.filter((song) => song.id !== songId)
    );
  };

  const playSong = (song: Song) => {
    setCurrentTrack(song);
  };

  const addSongToTrackList = (song: Song, addToMusicList = false) => {
    setTrackList((prevTrackList) => [...prevTrackList, song]);
    if (addToMusicList) {
      addSongToMusicList(song);
    }
  };

  const searchSongInMusicList = (searchTerm: string) => {
    return musicList.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        trackList,
        musicList,
        addSongToMusicList,
        removeSongFromMusicList,
        playSong,
        addSongToTrackList,
        searchSongInMusicList,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
