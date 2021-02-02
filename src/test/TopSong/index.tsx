import { useEffect, useMemo, useState } from "react";
import { Row, Col, Card, Avatar } from "antd";
import { getTopSong } from "@netWork/request";
import "./index.less";
import NavBar from "@/component/NavBar";
import { NavBarData } from "@component/interface";
import SectionMod from "../SectionMod";
import _ from "lodash";
import { TopSongCard } from "../Card";

const { Meta } = Card;

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};
const TopSong = () => {
  const [topSongList, setTopSongList] = useState<any>([]);
  const [type, setType] = useState(0);
   
  useEffect(() => {
    getTopSong("/api/top/song", {}).then((res) =>
      setTopSongList(_.chunk(res.data, 9))
    );
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
  const renderNavBar = () => {
    return (
      <NavBar dataSource={NavBarData} className="top-song-nav-bar"></NavBar>
    );
  }
  const renderCarousel = () => {
    return topSongList &&
      topSongList.map((items: any, index: number) => {
        return (
          <div key={index}>
            {items.map((item: any, index: any) => {
              return (<TopSongCard data={item} />);
            })}
          </div>
        );
      })


  }
  return (
    <>
      <div className="top-song">
        <SectionMod
          title={`新 歌 速 递`}
          renderNavBar={renderNavBar}
          renderCarousel={renderCarousel}
        />
      </div>
    </>
  );
};

export default TopSong;

{/* <Card.Grid key={item.id} hoverable={false} style={gridStyle}>
  <Meta
    avatar={<Avatar src={item.album.blurPicUrl} />}
    title={item.album.name}
    description={item.album.artists[0].name}
  />
</Card.Grid>; */}
