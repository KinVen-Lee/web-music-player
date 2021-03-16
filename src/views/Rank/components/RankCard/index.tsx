import React from "react";
import style from "./index.module.less";
// import "./index.less";

interface AlbumCardProps {
  data?: any;
}

const RankCard = (props: AlbumCardProps) => {
  return (
    <>
      <div className={style.div1}>
        <div className={style.cover}>
          <div className={style.playcount}></div>
        </div>
        <div className={style.describe}>
          <div className={style.title}>性格榜</div>
          <div className={style.songlist}>
            <div className={style.song}></div>
            <div className={style.song1}></div>
            <div className={style.song2}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RankCard;
