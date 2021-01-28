import { useEffect, useState } from "react";
import { getTopSong } from "@netWork/request";

import "./index.less";
import NavBar from "@/component/navbar";
import { NavBarData } from "@component/interface";
const TopSong = () => {
  const [songList, setSongList] = useState<any>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  useEffect(() => {
    getTopSong("/api/top/song", { type }).then((res) => setSongList(res));
  }, [type]);

  const NavBarData: NavBarData[] = [
    {
      data: "全部",
      key: "All",
    },
    {
      data: "华语",
      key: "Chinese",
    },
    {
      data: "欧美",
      key: "EuropeAndAmerica",
    },
    {
      data: "日本",
      key: "Japan",
    },
    {
      data: "韩国",
      key: "Korea",
    },
  ];

  return (
    <>
      <div className="top-song">
        <div className="title">
          <h2>新歌速递</h2>
          <NavBar dataSource={NavBarData} className="top-song-nav-bar"></NavBar>
        </div>
      </div>
    </>
  );
};

export default TopSong;
