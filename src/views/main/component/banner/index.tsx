import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { getBanner } from "@netWork/request";
import "./index.less";
const Banner = () => {
  const [bannerList, setBannerList] = useState<Array<any>>([]);
  useEffect(() => {
    getBanner("/api/banner").then((res) => setBannerList(res.banners));
  }, []);
  return (
    <div className="banner-wrap">
      <div className="banner-container">
        <Carousel autoplay>
          {bannerList.map((banner: any) => (
            <div key={banner.targetId} className="banner-image">
              <a href="">
                <img src={banner.imageUrl} alt="" />
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default Banner;
