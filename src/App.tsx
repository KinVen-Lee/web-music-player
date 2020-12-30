import TopMenu from "./component/topMenu";
import Main from "./views/main";
import { Layout } from "antd";
const App = () => {
  return (
    <Layout className="layout">
      <TopMenu />
      <Main/>
    </Layout>
  );
};

export default App;
