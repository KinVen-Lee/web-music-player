import React from "react";

import NavBar from "@/component/NavBar";
import Banner from "./component/Banner";
import Recommend from "./component/Recommend";
import AlbumRecom from "./component/AlbumRecom";
import TopSong from "./component/TopSong";

import { NavBarData } from "@component/interface";
import FirstMV from "./component/FirstMV";
import TopListDetail from "./component/TopListDetail";
const MusicHall = () => {
  const NavBarData: NavBarData[] = [
    {
      data: "精选",
      key: "Recommend",
    },
    {
      data: "歌手",
      key: "singer",
    },

    {
      data: "排行榜",
      key: "paihangbang",
    },
    {
      data: "分类歌单",
      key: "feileigedan",
    },
  ];

  return (
    <>
      <NavBar dataSource={NavBarData} className="top-nav-bar" />

      {/* <Recommend />
      <TopSong />
      <Banner /> */}

      {/* <AlbumRecom /> */}
      {/* <TopListDetail />
      <FirstMV /> */}
      {/* <NavBar /> */}
    </>
  );
};
export default MusicHall;
