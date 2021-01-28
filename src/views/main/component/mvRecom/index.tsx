import { useEffect, useState } from "react";
import { getPersonalizedMV } from "@netWork/request";
import "./index.less";

/**
 * 首页推荐MV
 */
const MVRecom = () => {
  const [MVList, setMVList] = useState<any>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  useEffect(() => {
    getPersonalizedMV("/api/personalized/mv").then((res) =>
      setMVList(res.result)
    );
  }, [type]);

  return (
    <>
      <div className="MV">
        <div className="title">
          <h2>推荐MV</h2>
        </div>
      </div>
    </>
  );
};

export default MVRecom;
