import { useEffect, useState } from "react";
import { getSongListRecom } from "@netWork/request";
import "./index.less";
import { Card, Col, Row } from "antd";
import SectionMod from "../SectionMod";
const { Meta } = Card;

const SongListRecom = () => {
  const [songList, setSongList] = useState<any>(null);
  const [startIndex, setStartIndex] = useState<number>(0);

  useEffect(() => {
    getSongListRecom("/api/personalized?limit=5", {}).then((res) =>
      setSongList(res)
    );
  }, []);
  return (
    <div className="songListRecommendation">
      <SectionMod title={`推 荐 歌 单`} />

      {/* <h2>推荐歌单</h2>
      <div className="site-card-wrapper">
        <Row gutter={20}>
          {songList &&
            songList.map((item: any) => {
              return (
                <Col key={item.id} span={8}>
                  <Card
                    bordered={false}
                    cover={<img alt="example" src={item.picUrl} />}
                  >
                    <Meta
                      title={item.name}
                      description={`播放量： ${item.playCount}`}
                    />
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div> */}
    </div>
  );
};

export default SongListRecom;

