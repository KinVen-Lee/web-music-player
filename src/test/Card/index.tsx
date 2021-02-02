import React from "react";
import "./index.less";
import camera from "@assets/svg/camera.svg";
interface TopSongCardProps {
  topSongName?: string;
  artistName?: string;
  duration?: number;
  data?: any
}

export const TopSongCard = (props: TopSongCardProps) => {
  const { data } = props;
  return (
    <>
      <div className="top-song-card">
        <div className="top-song-card-cover">
          <a
            href="https://y.qq.com/n/yqq/album/002lezHb2umULH.html"
            title={data.name}
            className="album_name songlist__link mod_cover"
          >
            <img
              className="songlist__pic"
              src={data.album.picUrl}
              data-original="//y.gtimg.cn/music/photo_new/T002R90x90M000002lezHb2umULH_1.jpg?max_age=2592000"
              //   onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
              style={{ display: "block", visibility: "visible" }}
            />
          
            <i className="mod_cover__mask"></i>
            <i
              className="mod_cover__icon_play js_play"
              data-stat="y_new.index.new_song.play_btn"
            ></i>
          </a>
        </div>
        <div className="top-song-card-content">
          <h3 className="song-title">
            <a
              href="https://y.qq.com/n/yqq/song/001iOWlr21sMQ5.html#stat=y_new.index.new_song.songname"
              //   onclick="setStatCookie&amp;&amp;setStatCookie();"
              //   data-stat="y_new.index.new_song.songname"
              className="song-title-container"
              title="你的终点可以没有我 《风起霓裳》电视剧插曲"
            >
              {data.name}
              <span className="song-txt">《风起霓裳》电视剧插曲</span>
            </a>
          </h3>
          <p className="song-author" title="陆虎">
            <a
              href="https://y.qq.com/n/yqq/singer/004gbMvP356XaI.html#stat=y_new.index.new_song.singername"
              //   onclick="setStatCookie&amp;&amp;setStatCookie();"
              data-stat="y_new.index.new_song.singername"
              data-singermid="004gbMvP356XaI"
              data-singerid="11449"
              title="陆虎"
              className="singer-name"
            >
              {data.artists[0].name}
            </a>
          </p>
        </div>
        <div className="top-song-card-time">04:37</div>
      </div>
    </>
  );
};

export const MVCard = (props: any) => {
  return (
    <>
      <div className="mv-card">
        <div className="mv-card-cover">
          <a
            href="https://y.qq.com/n/yqq/mv/v/r0035awn0v9.html#stat=y_new.index.mv.play_btn"
            // onclick="setStatCookie&amp;&amp;setStatCookie();"
            className="mv-card-cover"
            data-stat="y_new.index.mv.play_btn"
            data-vid="r0035awn0v9"
            data-id="1696487"
          // hidefocus="true"
          >
            <img
              className="mv_list__pic"
              src="//y.gtimg.cn/music/photo_new/T015R640x360M101002ztExz0fmGLl.jpg?max_age=2592000"
              data-original="//y.gtimg.cn/music/photo_new/T015R640x360M101002ztExz0fmGLl.jpg?max_age=2592000"
              // onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
              alt="Runaway"
              style={{ display: "block", visibility: "visible" }}
            />
            <i className="mod_cover__icon_play"></i>
          </a>
        </div>
        <h3 className="mv-card-title">
          <a
            href="https://y.qq.com/n/yqq/mv/v/r0035awn0v9.html#stat=y_new.index.mv.mvname"
            // onclick="setStatCookie&amp;&amp;setStatCookie();"
            className="js-mv"
            data-stat="y_new.index.mv.mvname"
            data-vid="r0035awn0v9"
            data-id="1696487"
            title="Runaway"
          >
            Runaway
          </a>
        </h3>
        <p className="mv-card-singer">
          <a
            href="https://y.qq.com/n/yqq/singer/000kZUyu0aPr9t.html#stat=y_new.index.mv.singername"
            // onclick="setStatCookie&amp;&amp;setStatCookie();"
            className="mv-singer"
            data-singermid="000kZUyu0aPr9t"
            data-stat="y_new.index.mv.singername"
            data-singerid="1043869"
            title="派伟俊"
          >
            派伟俊
          </a>
        </p>
        <div className="mv-card-info">
          <span className="mv-listen">
            <img className="mv-listen-icon sprite" src={camera}></img>
            1.3万
          </span>
        </div>
      </div>
    </>
  );
};

export const TopListCard = (props: any) => {
  return (
    <>
      <div
        className="toplist-card"
        style={{ background: "aqua", width: "200px" }}
      >
        <div className="toplist-card-bg"></div>
        <i
          className="mod-cover-icon-play js-play-toplist"
          data-stat="y_new.index.toplist.play.26"
          data-id="26"
          data-type="0"
          data-date="2021_4"
        ></i>
        <i className="toplist-card-line"></i>
        <h3 className="toplist-title">
          <a
            href="https://y.qq.com/n/yqq/toplist/26.html#stat=y_new.index.toplist.detail.26"
            // onclick="setStatCookie&amp;&amp;setStatCookie();"
            data-stat="y_new.index.toplist.detail.26"
            className="toplist-title-content"
          >
            热歌
          </a>
        </h3>
        <ul className="toplist-card-songlist">
          <li className="toplist-song">
            <div className="toplist-number">1</div>
            <div className="toplist-songname">
              <a
                href="https://y.qq.com/n/yqq/song/293695482_num.html#stat=y_new.index.toplist.songname"
                // onclick="setStatCookie&amp;&amp;setStatCookie();"
                className="js_song"
                data-id="293695482"
                data-stat="y_new.index.toplist.songname"
              >
                星辰大海
              </a>
            </div>
            <div className="toplist-artist">
              <a
                href="https://y.qq.com/n/yqq/singer/000oCQfT3kdonw.html#stat=y_new.index.toplist.singername"
                // onclick="setStatCookie&amp;&amp;setStatCookie();"
                data-stat="y_new.index.toplist.singername"
              >
                黄霄雲
              </a>
            </div>
          </li>

          <li className="toplist__song">
            <div className="toplist__number">2</div>
            <div className="toplist__songname">
              <a
                href="https://y.qq.com/n/yqq/song/292476167_num.html#stat=y_new.index.toplist.songname"
                // onclick="setStatCookie&amp;&amp;setStatCookie();"
                className="js_song"
                data-id="292476167"
                data-stat="y_new.index.toplist.songname"
              >
                千千万万
              </a>
            </div>
            <div className="toplist__artist">
              <a
                href="https://y.qq.com/n/yqq/singer/000HvL7S10jB3X.html#stat=y_new.index.toplist.singername"
                // onclick="setStatCookie&amp;&amp;setStatCookie();"
                data-stat="y_new.index.toplist.singername"
              >
                深海鱼子酱
              </a>
            </div>
          </li>

          <li className="toplist__song">
            <div className="toplist__number">3</div>
            <div className="toplist__songname">
              <a
                href="https://y.qq.com/n/yqq/song/291911135_num.html#stat=y_new.index.toplist.songname"
                // onclick="setStatCookie&amp;&amp;setStatCookie();"
                className="js_song"
                data-id="291911135"
                data-stat="y_new.index.toplist.songname"
              >
                白月光与朱砂痣
              </a>
            </div>
            <div className="toplist__artist">
              <a
                href="https://y.qq.com/n/yqq/singer/002sT7040IAT6z.html#stat=y_new.index.toplist.singername"
                // onclick="setStatCookie&amp;&amp;setStatCookie();"
                data-stat="y_new.index.toplist.singername"
              >
                大籽
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <>
      <TopSongCard />
      <MVCard />
      <TopListCard />
    </>
  );
};
export default Card;
