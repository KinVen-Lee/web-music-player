import React from "react";

import NavBar from "@/component/NavBar";
import Banner from "./component/Banner";
import SongListRecom from "./component/SongListRecom";
import AlbumRecom from "./component/AlbumRecom";
import TopSong from "./component/TopSong";

import { NavBarData } from "@component/interface";
import MVRecom from "./component/MVRecom";
import TopListDetail from "./component/TopListDetail";
const Main = () => {
  const NavBarData: NavBarData[] = [
    {
      data: "首页",
      key: "shouye",
    },
    {
      data: "歌手",
      key: "geshou",
    },
    {
      data: "新碟",
      key: "xindie",
    },
    {
      data: "排行榜",
      key: "paihangbang",
    },
    {
      data: "分类歌单",
      key: "feileigedan",
    },
    {
      data: "电台",
      key: "diantai",
    },
    {
      data: "MV",
      key: "MV",
    },
  ];

  return (
    <>
      {/* <NavBar dataSource={NavBarData} className="top-nav-bar" /> */}

      <SongListRecom />
      <TopSong />
      {/* <Banner /> */}
      {/* <MVRecom /> */}
      {/* <AlbumRecom /> */}
      {/* <TopListDetail /> */}
      {/* <NavBar /> */}
    </>
  );
};
export default Main;
