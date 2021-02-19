import TopMenu from "./component/TopMenu";
import Main from "./views/main";

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
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  return (
    // <Layout className="layout">
    //   <Header>
    //     <TopMenu />
    //   </Header>
    //   <Content>
    //     <Main />
    //   </Content>
    //   {/* <Footer> */}
    //   {/* </Footer> */}
    // </Layout>
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          width: "300px",
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            音乐馆
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            视频
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            电台
          </Menu.Item>
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
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Input placeholder="搜索音乐" />
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            content
          </div>
        </Content>
        <MusicPlay />
      </Layout>
    </Layout>
  );
};

export default App;
