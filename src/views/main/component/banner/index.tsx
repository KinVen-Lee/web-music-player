import { Carousel } from "antd";
import { useEffect, useState } from "react";
// import { InterFaceBanner } from "@utils/interface";
// import { get } from "@netWork/axios";
import axios from "axios";
const Banner = () => {
  const [bannerList, setBannerList] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("api/banner").then((res) => {
        console.log(res
          );
        
        if (res.status === 200) {
          console.log(1);
          console.log(res.data.banners);
          setBannerList(res.data.banners);
        }
      });
    };
    fetchData();
  }, []);
  const handle = (e: any) => {
    console.log(bannerList);
  };
  return <button onClick={handle}></button>;
};
export default Banner;
