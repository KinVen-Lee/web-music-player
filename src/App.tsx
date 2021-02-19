import TopMenu from "./component/TopMenu";
<<<<<<< HEAD
// import Main from "./views/main";
import Singer from "./views/singer";
import PlayList from './views/playList'
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
const App = () => {
  return (
    <Layout className="layout">
      {/* <Header>
        <TopMenu />
      </Header> */}
      <Content>
        <PlayList />
      </Content>
      {/* <Footer> */}

      {/* </Footer> */}
=======
import Main from "./views/main";

import { Layout, Menu } from "antd";
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
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<BarChartOutlined />}>
            nav 4
          </Menu.Item>
          <Menu.Item key="5" icon={<CloudOutlined />}>
            nav 5
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreOutlined />}>
            nav 6
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            nav 7
          </Menu.Item>
          <Menu.Item key="8" icon={<ShopOutlined />}>
            nav 8
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
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
>>>>>>> 6943005599ac390214ea878a8ee5ae8c5069c2b5
    </Layout>
  );
};

export default App;
