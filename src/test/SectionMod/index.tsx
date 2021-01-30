import React from "react";
import Carousel from "../Carousel";
import "./index.less";
interface SectionModProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  renderNavBar?: any;
  renderCarousel?: any;
}

const SectionMod = (props: SectionModProps) => {
  const { className, style, title, renderNavBar, renderCarousel } = props;
  return (
    <div className={`mod-section ${className ?? ""}`}>
      <div className="section-content">
        <div className="section-title">{title}</div>
        <div className="section-nav-bar">{renderNavBar}</div>
        <div className="section-carousel">
          {/* {renderCarousel} */}
          {/* <Carousel>{renderCarousel}</Carousel> */}
        </div>
      </div>
      <div className="section-slide">
        <div className="slide_action slide_action--left">
          <a
            href="javascript:;"
            className="slide_action__btn slide_action__btn--left js_jump"
            data-p="prev"
            // tabindex="-1"
            data-stat="y_new.index.new_song.pager"
          >
            <i className="icon_txt">上一页</i>
            <i className="slide_action__arrow slide_action__arrow--left sprite"></i>
          </a>
        </div>
        <div className="slide_action slide_action--right">
          <a
            href="javascript:;"
            className="slide_action__btn slide_action__btn--right js_jump"
            data-p="next"
            // tabindex="-1"
            data-stat="y_new.index.new_song.pager"
          >
            <i className="icon_txt">下一页</i>
            <i className="slide_action__arrow slide_action__arrow--right sprite"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
SectionMod.defalutProps = {};
export default SectionMod;
{
  /* <Card.Grid
key={item.id}
hoverable={false}
style={gridStyle}
>
<Meta
  avatar={<Avatar src={item.album.blurPicUrl} />}
  title={item.album.name}
  description={item.album.artists[0].name}
/>
</Card.Grid> */
}
