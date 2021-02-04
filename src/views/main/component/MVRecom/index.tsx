import { useEffect, useState } from "react";
import { getPersonalizedMV } from "@netWork/request";
import "./index.less";
import SectionMod from "../SectionMod";

/**
 * 首页推荐MV
 */
const MVRecom = () => {
  const [MVList, setMVList] = useState<any>(null);
  // const [type, setType] = useState<number>(0);
  useEffect(() => {
    getPersonalizedMV("/api/personalized/mv").then((res) =>
      setMVList(res.result)
    );
  }, []);

  return (
    <>
      <SectionMod></SectionMod>
    </>
  );
};

export default MVRecom;
