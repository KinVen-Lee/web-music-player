import React from "react";
import AlbumCard from "./components/AlbumCard";
import SingerCard from "./components/SingerCard";
import VideoCard from "./components/VideoCard";
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
          <div className={style.content}>
            <div className={style.div1}>
              <AlbumCard />
            </div>
            <div className={style.div2}>
              <AlbumCard />
            </div>
            <div className={style.div3}>
              <AlbumCard />
            </div>
            <div className={style.div4}>
              <AlbumCard />
            </div>
            <div className={style.div5}>
              <AlbumCard />
            </div>
          </div>
        </div>
        <div className={style.tuijianshipin}>
          <div className={style.title}>推荐视频</div>
          <div className={style.content}>
            <div className={style.div1}>
              <VideoCard />
            </div>
            <div className={style.div2}>
              <VideoCard />
            </div>
            <div className={style.div3}>
              <VideoCard />
            </div>
            <div className={style.div4}>
              <VideoCard />
            </div>
          </div>
        </div>
        <div className={style.xiangsigeshou}>
          <div className={style.title}>相似歌手</div>
          <div className={style.content}>
            <div className={style.div1}>
              <SingerCard />
            </div>
            <div className={style.div2}>
              <SingerCard />
            </div>
            <div className={style.div3}>
              <SingerCard />
            </div>
            <div className={style.div4}>
              <SingerCard />
            </div>
            <div className={style.div5}>
              <SingerCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingerDetail;
