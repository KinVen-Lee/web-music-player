import { useEffect, useState } from "react";
import { getPersonalizedNewSong } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { Artist, NewSong, NewSongResult } from "./interface";
/**
 * 推荐新音乐
 */
const NewSongArea = () => {
  const [newSongList, setNewSongList] = useState<Array<NewSong>>([]);
  useEffect(() => {
    getPersonalizedNewSong().then((res: NewSongResult) => {
      setNewSongList(res.result);
    });
  }, []);
  const getSingers = (artistArr: Artist[]) => {
    let singerNames = "";
    artistArr.forEach((artist) => {
      singerNames += artist.name + "  ";
    });
    return singerNames;
  };
  return (
    <SectionMod
      className="newsong"
      title="推荐新音乐"
      style={{
        transform: "translate3d(0, 0, 0)",
        // height: "150px",
        width: "100%",
      }}
    >
      {newSongList &&
        _.chunk(newSongList, 5).map((items: any, index: number) => {
          return (
            <div key={index}>
              <div className="div1">
                {items.map((songlistItem: NewSong) => (
                  <div
                    className="newsong-card"
                    style={{ width: "145px", height: "200px" }}
                    key={songlistItem.id}
                  >
                    <div className="newsong-card-cover">
                      <img
                        src={songlistItem.picUrl}
                        alt={songlistItem.copywriter ?? ""}
                        className="newsong-pic"
                      />
                    </div>
                    <h4 className="newsong-title">
                      <span className="newsong-title-txt">
                        {songlistItem.name}
                      </span>
                    </h4>
                    <div className="newsong-singer">
                      歌手：
                      {getSingers(songlistItem.song.artists)}
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
export default NewSongArea;
