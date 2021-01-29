import React from "react";

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
    <div className={`section-index ${className}`}>
      <div className="section-title">
        <h2>{title}</h2>
      </div>
      <div className="section-nav-bar">{renderNavBar}</div>
      <div className="section-carousel">{renderCarousel}</div>
    </div>
  );
};
SectionMod.defalutProps = {};
export default SectionMod;
