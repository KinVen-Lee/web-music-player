import { useEffect, useState } from "react";
import { getPersonalizedMV } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { Mv } from "./interface";
/**
 * 推荐mv
 */
const MVArea = () => {
  const [MvList, setMvList] = useState<Array<Mv>>([]);
  useEffect(() => {
    getPersonalizedMV().then((res) => {
      setMvList(res.result);
    });
  }, []);
  return (
    <SectionMod
      className="mv"
      title="推荐MV"
      style={{
        transform: "translate3d(0, 0, 0)",
        // height: "150px",
        width: "100%",
      }}
    >
      {MvList &&
        _.chunk(MvList, 5).map((items: any, index: number) => {
          return (
            <div key={index}>
              <div className="div1">
                {items.map((MvListItem: Mv) => (
                  <div
                    className="mv-card"
                    style={{ width: "145px", height: "200px" }}
                    key={MvListItem.id}
                  >
                    <div className="mv-card-cover">
                      <img
                        src={MvListItem.picUrl}
                        alt={MvListItem.copywriter ?? ""}
                        className="mv-pic"
                      />
                    </div>
                    <h4 className="mv-title">
                      <span className="mv-title-txt">
                        {MvListItem.name}
                      </span>
                    </h4>
                    <div className="mv-playcount">
                      播放量：
                      {MvListItem.playCount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </SectionMod>
  );
};
export default MVArea;
