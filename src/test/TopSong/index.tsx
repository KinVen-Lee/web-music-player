import { useEffect, useMemo, useState } from "react";
import { Row, Col, Card, Avatar } from "antd";
import { getTopSong } from "@netWork/request";
import "./index.less";
import NavBar from "@/component/NavBar";
import { NavBarData } from "@component/interface";
import SectionMod from "../SectionMod";

const { Meta } = Card;
const TopSong = () => {
  const [topSongList, setTopSongList] = useState<any>([]);
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
  const gridStyle: React.CSSProperties = {
    width: "25%",
    textAlign: "center",
  };
  const renderNavBar = useMemo(() => {
    return (
      <NavBar dataSource={NavBarData} className="top-song-nav-bar"></NavBar>
    );
  }, []);
  const renderCarousel = useMemo(() => {
    return (
      <div className="top-song-carousel">
        {topSongList &&
          topSongList.map((item: any) => {
            return (
              <Card.Grid key={item.id} hoverable={false} style={gridStyle}>
                <Meta
                  avatar={<Avatar src={item.album.blurPicUrl} />}
                  title={item.album.name}
                  description={item.album.artists[0].name}
                />
              </Card.Grid>
            );
          })}
        {/* <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={<Avatar src={topSongList[2].album.blurPicUrl} />}
            title="Card title"
            description="This is the description"
          />
        </Card.Grid> */}
        {/* <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card.Grid> */}

        {/* <Row gutter={[8, 8]} className="top-song-row">
          <Col span={8}>
            <Card
              bordered={false}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta title="Card title" description="This is the description" />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="top-song-row">
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
        <Row gutter={[8, 8]} className="top-song-row"> */}
        {/* <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row> */}
      </div>
    );
  }, []);
  return (
    <>
      <div className="top-song">
        <SectionMod
          title={`新 歌 速 递`}
          renderNavBar={renderNavBar}
          renderCarousel={renderCarousel}
        />
        {/* <div className="title">
          <h2>新歌速递</h2>
          <NavBar dataSource={NavBarData} className="top-song-nav-bar"></NavBar>
        </div> */}
      </div>
    </>
  );
};

export default TopSong;
