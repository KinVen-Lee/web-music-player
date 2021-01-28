import { useEffect, useState } from "react";
import { getTopListDetail } from "@netWork/request";
import "./index.less";

/**
 * 首页排行榜摘要
 */
const TopListDetail = () => {
  const [topListDetail, setTopListDetail] = useState<any>(null);
  useEffect(() => {
    getTopListDetail("/api/toplist/detail").then((res) =>
      setTopListDetail(res)
    );
  }, []);

  return (
    <>
      <div className="toplist-detail">
        <div className="title">
          <h2>排行榜</h2>
        </div>
      </div>
    </>
  );
};

export default TopListDetail;
