import "./index.less";
import React, { createContext, useEffect, useState } from "react";
import PlayListTarget from "./components/PlayListTarget";
import { getPlayListCatList } from "@/netWork/request";
import { PlayListCatList } from "./utils/interface";
export const PlayListContext = createContext<PlayListCatList>({});

const PlayList = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getPlayListCatList().then((res) => setData(res));
  }, []);
  return (
    <PlayListContext.Provider value={data}>
      <PlayListTarget />
    </PlayListContext.Provider>
  );
};

export default PlayList;
