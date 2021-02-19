import "./index.less";
import React from "react";

import comment from "./image/comment.svg";
import last_song from "./image/last_song.svg";
import love from "./image/love.svg";
import love_pre from "./image/love_pre.svg";
import mute from "./image/mute.svg";
import next_song from "./image/next_song.svg";
import play from "./image/play.svg";
import suspend from "./image/suspend.svg";
import volume from "./image/volume.svg";

const MusicPlay = () => {
  return (
    <>
      <div className="music-play">
        <div className="song-info"></div>
        <div className="song-play-control"></div>
        <div className="song-other-control"></div>
      </div>
    </>
  );
};

export default MusicPlay;
