import React from "react";
import BannerArea from "./components/Banner";
import DjprogramArea from "./components/Djprogram";
import MVArea from "./components/MV";
import NewSongArea from "./components/NewSong";
import SongListArea from "./components/SongList";
import "./index.less";

const Recommend = () => {
  return (
    <>
      <div className="div">
        <BannerArea />
        <SongListArea />
        <NewSongArea />
        <MVArea />
        <DjprogramArea />
      </div>
    </>
  );
};
export default Recommend;
