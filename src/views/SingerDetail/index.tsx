import React from "react";
import style from "./index.module.less";

const SingerDetail = () => {
  return (
    <>
      <div className={style.geshouxiangqingye}>
        <div className={style.geshoufengmian}></div>
        <div className={style.gequliebiao}>
          <div className={style.title}>
            <div className={style.title1}>热门歌曲</div>
            <div className={style.title2}>播放全部</div>
          </div>
          <div className={style.content}>
            <div className={style.title}>歌曲</div>
          </div>
        </div>
        <div className={style.zhuanji}>
          <div className={style.title}>热门专辑</div>
        </div>
        <div className={style.tuijianshipin}>
          <div className={style.title}>推荐视频</div>
        </div>
        <div className={style.xiangsigeshou}>
          <div className={style.title}>相似歌手</div>
        </div>
      </div>
    </>
  );
};
export default SingerDetail;
