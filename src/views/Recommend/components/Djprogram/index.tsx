import { useEffect, useState } from "react";
import { getPersonalizedDjprogram } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import React from "react";
import SectionMod from "../SectionMod";
import { Djprogram, DjprogramResult } from "./interface";
/**
 * 推荐新音乐
 */
const DjprogramArea = () => {
  const [jprogramList, setDjprogramList] = useState<Array<Djprogram>>([]);
  useEffect(() => {
    getPersonalizedDjprogram().then((res: DjprogramResult) => {
      setDjprogramList(res.result);
    });
  }, []);
  return (
    <SectionMod
      className="djprogram"
      title="推荐电台"
      style={{
        transform: "translate3d(0, 0, 0)",
        // height: "150px",
        width: "100%",
      }}
    ></SectionMod>
  );
};
export default DjprogramArea;
