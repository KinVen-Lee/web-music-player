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
        height: "150px",
        width: "100%",
      }}
    >
      {songlist &&
        _.chunk(songlist, 5).map((items: any, index: number) => {
          return (
            <div key={index}>
              <div className="div1">
                {items.map((songlistItem: SongList) => (
                  <div className="banner-card" key={songlistItem.id}>
                    <a href="#" className="banner-link">
                      <img src={songlistItem.picUrl} className="banner-pic" />
                    </a>
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
