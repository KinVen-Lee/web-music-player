import React from "react";
import style from "./index.module.less";
// import "./index.less";

interface AlbumCardProps {
  data?: any;
}

const RankCard = (props: AlbumCardProps) => {
  return (
    <>
      <div className={style.cover}>
        <div className={style["cover-pic"]}>
          <img src="" alt="" />
        </div>
      </div>
      <div className={style.miaoshu}>
        <div className={style["album-name"]}>123</div>
        <div className={style["album-time"]}>12222222222</div>
      </div>
    </>
  );
};
export default RankCard;
