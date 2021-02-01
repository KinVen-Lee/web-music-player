import React from "react";
import "./index.less";
import carouselLeft from '@assets/svg/carousel_left.svg'
import carouselRight from '@assets/svg/carousel_right.svg'

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
        <div className="slide-action slide-action-left">
          <a className="slide-action-btn slide-action-btn-left ">
            <i className="icon-txt">上一页</i>
            <img src={carouselLeft} className="slide-action-arrow slide-action-arrow-left"/>
          </a>
        </div>
        <div className="slide-action slide-action-right">
          <a className="slide-action-btn slide-action-btn-right ">
            <i className="icon-txt">下一页</i>
            <img src={carouselRight} className="slide-action-arrow slide-action-arrow-right"/>
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
