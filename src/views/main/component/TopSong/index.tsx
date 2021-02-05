import NavBar from "@/component/NavBar";
import { NavBarData } from "@component/interface";
import { getTopSong } from "@netWork/request";
import React, { useEffect, useState } from "react";
import SectionMod from "../SectionMod";
import "./index.less";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "./index.less";
import { TopSongCard } from "../Card";
SwiperCore.use([Navigation, Pagination, Autoplay]);
const TopSong = () => {
  const [topSongList, setTopSongList] = useState<any>(null);
  useEffect(() => {
    getTopSong("/api/top/song", {}).then((res) => setTopSongList(res.data));
  }, []);

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

  const renderNavBar = () => (
    <NavBar dataSource={NavBarData} className="top-song-nav-bar"></NavBar>
  );

  return (
    <SectionMod
      renderNavBar={renderNavBar}
      title="新歌速递"
      className="topsong-box"
      style={{ transform: "translate3d(0, 0, 0)", marginTop: "20px" }}
    >
      <Swiper
        // loop={true}
        // spaceBetween={5}
        slidesPerView={3}
        slidesPerGroup={3}
        slidesPerColumn={3}
        navigation
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        className="topSongList-swiper"
        style={{ width: "100%", height: "100%" }}
      >
        {topSongList &&
          topSongList.map((topSongListItem: any, index: number) => (
            <SwiperSlide
              key={topSongListItem.id}
              virtualIndex={index}
            >
              <TopSongCard data={topSongListItem} />
            </SwiperSlide>
          ))}
      </Swiper>
    </SectionMod>
  );
};
export default TopSong;
