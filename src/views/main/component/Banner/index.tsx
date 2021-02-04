import { useEffect, useState } from "react";
import { getBanner } from "@netWork/request";
import SectionMod from "../SectionMod";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "./index.less";
SwiperCore.use([Navigation, Pagination, Autoplay]);
/**
 * 首页banner
 */
const Banner = () => {
  const [bannerList, setBannerList] = useState<Array<any>>([]);
  useEffect(() => {
    getBanner("/api/banner").then((res) => setBannerList(res.banners));
  }, []);
  return (
    <SectionMod title="精彩推荐" className="banner">
      <Swiper
        navigation
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
      >
        {bannerList &&
          bannerList.map((bannerItem, index) => (
            <SwiperSlide key={bannerItem.targetId} virtualIndex={index}>
              <div className="banner-box">
                <a href="0" className="banner-link">
                  <img src={bannerItem.imageUrl} className="banner-pic" />
                </a>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </SectionMod>
  );
};
export default Banner;
