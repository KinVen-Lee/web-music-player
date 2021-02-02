import { Carousel as AntdCarousel, Radio } from "antd";
import { Children, useRef, useState } from "react";
import "./index.less";
import React from "react";
interface CarouselProps {
  autoplay?: boolean;
  dotPosition?: "left" | "right" | "bottom" | "top";
  dots?: boolean | { className?: string };
  easing?: string;
  effect?: "scrollx" | "fade"; //scrollx | fade
  afterChange?: (currentSlide: number) => void;
  beforeChange?: (from: any, to: any) => void;
  contentStyle?: React.CSSProperties;
}

const Carousel = (props: any) => {
  const { ...setting } = props;
  const carouselRef = useRef(null);
  const handleToLeft = () => {
    (carouselRef.current as any).prev();
  };
  const handleToRight = () => {
    (carouselRef.current as any).next();
  };

  // const renderChild = () => {
  //   return React.Children.map(children, (child, item) => {
  //     return React.cloneElement(child);
  //   });
  // };

  return (
    <div className="carousel-container">
      <AntdCarousel ref={carouselRef} {...setting}>
        {props.children}
        {/* {Children} */}
        {/* {renderChild()} */}
        {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div> */}

      </AntdCarousel>
      {/* <div className="toLeft" onClick={handleToLeft}>
        左滑
      </div>
      <div className="toRight" onClick={handleToRight}>
        右滑
      </div> */}
    </div>
  );
};
Carousel.defalutProps = {
  autoplay: true,
  effect: "fade",
};
export default Carousel;

// const contentStyle:React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

// const PositionCarouselDemo = () => {
//   const [dotPosition, setDotPosition] = useState("top");

//   const handlePositionChange = ({ target: { value } }) => {
//     setDotPosition(value);
//   };

//   return (
//     <>
//       <Radio.Group
//         onChange={handlePositionChange}
//         value={dotPosition}
//         style={{ marginBottom: 8 }}
//       >
//         <Radio.Button value="top">Top</Radio.Button>
//         <Radio.Button value="bottom">Bottom</Radio.Button>
//         <Radio.Button value="left">Left</Radio.Button>
//         <Radio.Button value="right">Right</Radio.Button>
//       </Radio.Group>
//       <Carousel dotPosition={dotPosition}>
//         <div>
//           <h3 style={contentStyle}>1</h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>2</h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>3</h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>4</h3>
//         </div>
//       </Carousel>
//     </>
//   );
// };
