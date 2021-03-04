import { useEffect, useState } from "react";
import { getPersonalizedSongList } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { SongList } from "./interface";
/**
 * 推荐歌单
 */
const SongListArea = () => {
  const [songlist, setSongList] = useState<Array<SongList>>([]);
  useEffect(() => {
    getPersonalizedSongList().then((res) => {
      setSongList(res.result);
    });
  }, []);
  return (
    <SectionMod
      className="songlist"
      title="推荐歌单"
      style={{
        transform: "translate3d(0, 0, 0)",
        // height: "150px",
        width: "100%",
      }}
    >
      {songlist &&
        _.chunk(songlist, 5).map((items: any, index: number) => {
          return (
            <div key={index}>
              <div className="div1">
                {items.map((songlistItem: SongList) => (
                  <div
                    className="songlist-card"
                    style={{ width: "145px", height: "200px" }}
                    key={songlistItem.id}
                  >
                    <div className="songlist-card-cover">
                      <img
                        src={songlistItem.picUrl}
                        alt={songlistItem.copywriter}
                        className="songlist-pic"
                      />
                    </div>
                    <h4 className="songlist-title">
                      <span className="songlist-title-txt">
                        {songlistItem.name}
                      </span>
                    </h4>
                    <div className="songlist-palycount">
                      播放量：{songlistItem.playCount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </SectionMod>
  );
};
export default SongListArea;
