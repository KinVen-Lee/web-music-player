import { Carousel } from "antd";
import { useEffect, useState } from "react";
import { getBanner } from "@netWork/request";
import "./index.less";
import SectionMod from "../SectionMod";
/**
 * 首页banner
 */
const Banner = () => {
  const [bannerList, setBannerList] = useState<Array<any>>([]);
  useEffect(() => {
    getBanner("/api/banner").then((res) => setBannerList(res.banners));
  }, []);
  return (
    <SectionMod title='精彩推荐' className='banner'>
      {bannerList.map((banner: any) => (
        <div key={banner.targetId} className="banner-image">
          <a href="0" className="event_list__link js_focus_jump" data-type="10002" data-stat="y_new.index.focus.click" data-id="000Vm9kh2nsHMf" data-focusid="34219">
            <img src={banner.imageUrl} className="event_list__pic" alt="PCYQQ张艺兴《Joker》" />
          </a>
        </div>
      ))}
    </SectionMod>
  );
};
export default Banner;
