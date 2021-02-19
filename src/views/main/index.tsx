import React from "react";

import NavBar from "@/component/NavBar";
import Banner from "./component/Banner";
import Recommend from "./component/Recommend";
import AlbumRecom from "./component/AlbumRecom";
import TopSong from "./component/TopSong";

import { NavBarData } from "@component/interface";
import FirstMV from "./component/FirstMV";
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

<<<<<<< HEAD
      {/* <SongListRecom /> */}
=======
      <Recommend />
>>>>>>> e07e3001c5673a57133465c682018d6cbc1850d5
      <TopSong />
      <Banner />

      {/* <AlbumRecom /> */}
      <TopListDetail />
<<<<<<< HEAD
=======
      <FirstMV />
>>>>>>> e07e3001c5673a57133465c682018d6cbc1850d5
      {/* <NavBar /> */}
    </>
  );
};
export default Main;
