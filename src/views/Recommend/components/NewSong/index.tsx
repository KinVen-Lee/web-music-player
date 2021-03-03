import { useEffect, useState } from "react";
import { getPersonalizedNewSong } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { NewSong, NewSongResult } from "./interface";
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
  return (
    <SectionMod
      className="newsong"
      title="推荐新音乐"
      style={{
        transform: "translate3d(0, 0, 0)",
        height: "150px",
        width: "100%",
      }}
    ></SectionMod>
  );
};
export default NewSongArea;
