import { useEffect, useState } from "react";
import { getBanner } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
/**
 * 首页banner
 */
const Banner = () => {
  const [bannerList, setBannerList] = useState<Array<any>>([]);
  useEffect(() => {
    getBanner("/api/banner").then((res) =>
      setBannerList(_.chunk(res.banners, 2))
    );
  }, []);
  return (
    <SectionMod
      className="banner"
      style={{
        transform: "translate3d(0, 0, 0)",
        height: "200px",
        width: "100%",
      }}
    >
      {bannerList &&
        bannerList.map((items: any, index: number) => {
          return (
            <div key={index}>
              <div
                className={`carousel-item carousel-item${index} banner-carousel`}
              >
                {items.map((bannerListItem: any) => (
                  <div className="banner-card" key={bannerListItem.targetId}>
                    <a href="#" className="banner-link">
                      <img
                        src={bannerListItem.imageUrl}
                        className="banner-pic"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </SectionMod>
  );
};
export default Banner;
