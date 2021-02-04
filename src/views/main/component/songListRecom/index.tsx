import { useEffect, useState } from "react";
import { getSongListRecom } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import SectionMod from "../SectionMod";
import { SongListCard } from "../Card";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "./index.less";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const SongListRecom = () => {
  const [songList, setSongList] = useState<any>(null);
  useEffect(() => {
    getSongListRecom("/api/personalized", {}).then((res) => setSongList(res));
  }, []);
  return (
    <SectionMod title="歌单推荐" className="songListRecommendation">
      <Swiper
        loop={true}
        spaceBetween={50}
        slidesPerView={5}
        slidesPerGroup={5}
        navigation
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
      >
        {songList &&
          songList.map((songListItem: any, index: number) => (
            <SwiperSlide key={songListItem.targetId} virtualIndex={index}>
              <div className="banner-box">
                <a href="0" className="banner-link">
                  <img src={songListItem.imageUrl} className="banner-pic" />
                </a>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </SectionMod>
  );
};

export default SongListRecom;
{
  /* <Col key={item.id} span={8}>
                  <Card
                    bordered={false}
                    cover={<img alt="example" src={item.picUrl} />}
                  >
                    <Meta
                      title={item.name}
                      description={`播放量： ${item.playCount}`}
                    />
                  </Card>
                </Col> */
}

//              <div className="songListRecommendation">
//   <h2>推荐歌单</h2>
//   <div className="site-card-wrapper">
//     <Row gutter={20}>
//       {songList &&
//         songList.map((item: any) => {
//           return (

//           );
//         })}
//     </Row>
//   </div>
// </div>
