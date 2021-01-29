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
    <div className={`section ${className ?? ""}`}>
      <div className="section-title">{title}</div>
      <div className="section-nav-bar">{renderNavBar}</div>
      <div className="section-carousel">{renderCarousel}</div>
    </div>
  );
};
SectionMod.defalutProps = {};
export default SectionMod;
