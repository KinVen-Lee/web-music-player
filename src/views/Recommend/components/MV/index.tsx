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
        height: "150px",
        width: "100%",
      }}
    ></SectionMod>
  );
};
export default MVArea;
