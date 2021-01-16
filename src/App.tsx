import TopMenu from "./component/topMenu";
import Main from "./views/main";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <TopMenu />
      </Header>
      {/* <Content>
        <Main />
      </Content>
      <Footer>

      </Footer> */}
    </Layout>
  );
};

export default App;
