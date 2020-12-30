import axios from "axios";
import { InterFaceBanner } from "@utils/interface";
/**
 * 获取首页的轮播图
 */

export  function getBanner(): any {
  let banners: InterFaceBanner[] = [];
  axios
    .get("http://localhost:4000/banner")
    .then((res) => {
      console.log(1234);
      console.log(res.status);
      if (res.status === 200) {
        banners = res.data.banners;
        console.log(banners);
        return banners;
      }
      return null;
    })
    .catch((err) => {
      console.log(err);
    });
}
