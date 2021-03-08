import TopMenu from "./component/TopMenu";
import MusicHall from "./views/MusicHall";
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./App.less";
import MusicPlay from "./component/MusicPlay";
import React from "react";
import MV from "./views/MV";
import AppRouter from "./router";
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    <Router>
      <div className="imusic-main">
        <Layout className="imusic-layout">
          {/* <Sider className="imusic-sider">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.ItemGroup key="g1" title="在线音乐">
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link to="/">音乐馆</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  <Link to="/mv">视频</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  电台
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="我的音乐">
                <Menu.Item key="4" icon={<BarChartOutlined />}>
                  我喜欢
                </Menu.Item>
                <Menu.Item key="5" icon={<CloudOutlined />}>
                  播放历史
                </Menu.Item>
                <Menu.Item key="6" icon={<AppstoreOutlined />}>
                  试听列表
                </Menu.Item>
                <Menu.Item key="7" icon={<TeamOutlined />}>
                  创建歌单
                </Menu.Item>
                <Menu.Item key="8" icon={<ShopOutlined />}>
                  收藏歌单
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Sider> */}

          <Layout className="imusic-main-container">
            {/* <Header className="imusic-header">
              <Input placeholder="搜索音乐" />
            </Header> */}
            <Content className="imusic-content" style={{ overflow: "auto" }}>
              <AppRouter />
            </Content>
            {/* <div className="imusic-footer">
              <MusicPlay />
            </div> */}
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
