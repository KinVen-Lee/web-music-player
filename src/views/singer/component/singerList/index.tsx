import "./index.less";

import React, { useContext, useEffect, useRef, useState } from "react";
import { SingerContext } from "../..";
import { getArtistList } from "@/netWork/request";

const SingerList = (props: any) => {
  const [offset, setOffset] = useState<number>(0);
  const [dataList, setDataList] = useState<any>([]);
  const { params } = useContext(SingerContext);

  useEffect(() => {
    console.log("gaibainle");

    // getArtistList({ type, area, offset: 0, initial }).then((res) => {
    //   setDataList(res);
    //   //   setOffset(0);
    // });
  }, []);
  return <div className="div1"></div>;
};
export default SingerList;
