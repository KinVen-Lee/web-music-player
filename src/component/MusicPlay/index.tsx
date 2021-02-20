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
      <div className="music-play-control-box">
        <div className="song-info">
          <div className="song-pic"></div>
          <div className="song-title">
            <div className="song-name">清新小女孩</div>
            <div className="song-control">
              <div className="song-love">
                <img src={love} alt="" />
              </div>
              <div className="song-comments">
                <img src={comment} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="song-play-control">
          <div className="song-mode"></div>
          <div className="last-song"></div>
          <div className="play-song"></div>
          <div className="next-song"></div>
          <div className="song-volume"></div>
        </div>
        <div className="song-other-control">
          <div className="song-time"></div>
          <div className="song-playlist"></div>
        </div>
      </div>
    </>
  );
};

export default MusicPlay;
