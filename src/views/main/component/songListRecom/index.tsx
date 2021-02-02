import { useEffect, useState } from "react";
import { getSongListRecom } from "@netWork/request";
import "./index.less";
import _ from "lodash";
import SectionMod from "../SectionMod";
import { SongListCard } from "../Card";

const SongListRecom = () => {
  const [songList, setSongList] = useState<any>(null);
  useEffect(() => {
    getSongListRecom("/api/personalized", {}).then((res) =>
      setSongList(_.chunk(res, 5))
    );
  }, []);
  return (
    <SectionMod title="歌单推荐" className="songListRecommendation">
      {songList &&
        songList.map((items: any, index: number) => {
          return (
            <div className="songlist-carousel-item">
              {items.map((item: any) => {
                return <SongListCard />;
              })}
            </div>
          );
        })}
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
