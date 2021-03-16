import React from "react";
import { NavBarData } from "./interface";
import { Outlet, useParams } from "react-router-dom";
import NavBar from "./components/NavBar";
const MusicHall = () => {
  const NavBarData: NavBarData[] = [
    {
      data: "精选",
      key: "/",
      path: "/",
    },
    {
      data: "歌手",
      key: "singer",
      path: "singer",
    },

    {
      data: "排行榜",
      key: "rank",
      path: "rank",
    },
    {
      data: "分类歌单",
      key: "songList",
      path: "songList",
    },
  ];

  return (
    <>
      <NavBar dataSource={NavBarData} className="top-nav-bar" />
      <Outlet />
    </>
  );
};
export default MusicHall;
