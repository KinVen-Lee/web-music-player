import { useEffect, useState } from "react";
import { getBanner } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { Banner } from "./interface";
/**
 * 首页banner
 */
const BannerArea = () => {
  const [bannerList, setBannerList] = useState<Array<any>>([]);
  useEffect(() => {
    getBanner("/banner").then((res) => setBannerList(_.chunk(res.banners, 2)));
  }, []);
  return (
    <SectionMod
      className="banner"
      style={{
        transform: "translate3d(0, 0, 0)",
        height: "150px",
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
                {items.map((bannerListItem: Banner) => (
                  <div className="banner-card" key={bannerListItem.imageUrl}>
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
export default BannerArea;
