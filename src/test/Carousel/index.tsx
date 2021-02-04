// import "./index.less";
import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Virtual,
  Parallax,
  Mousewheel,
  Zoom,
  Lazy,
  Controller,
  HashNavigation,
  History,
  Autoplay,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  Thumbs,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "swiper/components/scrollbar/scrollbar.less";
// import "swiper/components/a11y/a11y.less";
// import "swiper/components/controller/controller.less";
// import "swiper/components/effect-coverflow/effect-coverflow.less";
// import "swiper/components / effect - cube / effect - cube.less";
// import "swiper/components / effect - fade / effect - fade.less";
// import "swiper/components / effect - flip / effect - flip.less";
// import "swiper/components / lazy / lazy.less";
// import "swiper/components / thumbs / thumbs.less";
// import "swiper/components / zoom / zoom.less";

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Virtual,
  Parallax,
  Mousewheel,
  Zoom,
  Lazy,
  Controller,
  HashNavigation,
  History,
  Autoplay,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  Thumbs,
]);
const Carousel = (props: any) => {
  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        style={{ height: "400px" }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        ...
      </Swiper>
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
