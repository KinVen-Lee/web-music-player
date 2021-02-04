import React, { useRef } from "react";
import "./index.less";
import carouselLeft from "@assets/svg/carousel_left.svg";
import carouselRight from "@assets/svg/carousel_right.svg";
import { Carousel } from "antd";

interface SectionModProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  renderNavBar?: any;
  renderCarousel?: any;
  children?: React.ReactNode;
}

const SectionMod = (props: SectionModProps) => {
  const { className, title, renderNavBar, renderCarousel } = props;

  return (
    <div className={`mod-section ${className ?? ""}`}>
      <div className="section-content">
        <div className="section-title">{title}</div>
        <div className="section-nav-bar">{renderNavBar()}</div>
        <div className="section-carousel">{props.children}</div>
      </div>
    </div>
  );
};
SectionMod.defalutProps = {};
export default SectionMod;
