import { Carousel } from "antd";
import { useEffect, useState } from "react";
// import { InterFaceBanner } from "@utils/interface";
// import { get } from "@netWork/axios";
import { getBanner } from "@netWork/request";
const Banner = () => {
  const [bannerList, setBannerList] = useState<any>();
  useEffect(() => {
    getBanner("/api/banner").then((res) => setBannerList(res.banners));
  }, []);
  const handle = (e: any) => {
    console.log(bannerList);
  };
  return <button onClick={handle}></button>;
};
export default Banner;
