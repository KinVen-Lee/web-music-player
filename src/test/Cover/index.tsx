import React, { ReactNode } from "react";
import { Image as AntdImage } from "antd";

import "./index.less";
import playSvg from "@assets/svg/play.svg";
interface previewType {
  visible?: boolean;
  onVisibleChange?: (visible: any, prevVisible: any) => void;
  getContainer?: string | HTMLElement | (() => HTMLElement); // V4.8.0
  src?: string; // V4.10.0
  mask?: ReactNode; // V4.9.0
  maskClassName?: string; // V4.11.0
}

interface CoverProps {
  className?: string;
  style?: React.CSSProperties;
  albumName?: string;

  alt?: string;
  fallback?: string;
  height?: string | number;
  placeholder?: ReactNode;
  preview?: boolean | previewType;
  src?: string;
  width?: string | number;
}

const Cover = (props: CoverProps) => {
  const { className, style, albumName, ...setting } = props;
  const handleMouseOver = () => {
    console.log(123);
  };

  return (
    <>
      <div
        className={`${className}-cover mod-cover`}
        onMouseOver={handleMouseOver}
        style={style}
      >
        <a
          href="https://y.qq.com/n/yqq/album/002lezHb2umULH.html"
          title={albumName}
          // data-albummid="002lezHb2umULH"
          // data-albumid="17238311"
          className="album-name song-link cover"
        >
          <img
            className="song-picture"
            src="//y.gtimg.cn/music/photo_new/T002R90x90M000002lezHb2umULH_1.jpg?max_age=2592000"
            // data-original="//y.gtimg.cn/music/photo_new/T002R90x90M000002lezHb2umULH_1.jpg?max_age=2592000"
            //   onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
            style={{ display: "block", visibility: "visible" }}
          />
          <i className="mod-cover-mask"></i>
          <img src={playSvg} alt="" className="mod-cover-icon-play js-play" />
          {/* <i
            className="mod_cover__icon_play js_play"
            data-stat="y_new.index.new_song.play_btn"
          ></i> */}
        </a>
      </div>

      <AntdImage {...setting}></AntdImage>
    </>
  );
};

export default Cover;
