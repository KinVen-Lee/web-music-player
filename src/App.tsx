import TopMenu from "./component/TopMenu";
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
    </Layout>
  );
};

export default App;
