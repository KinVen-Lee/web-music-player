import { Menu } from "antd";
import { useState } from "react";

const NavBar = () => {
  const [current, setCurrent] = useState("shouye");
  const handleClick = (e: any) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="shouye">
        <span>首页</span>
      </Menu.Item>
      <Menu.Item key="geshou">
        <span>歌手</span>
      </Menu.Item>
      <Menu.Item key="xindie">
        <span>新碟</span>
      </Menu.Item>
      <Menu.Item key="排行榜">
        <span>排行榜</span>
      </Menu.Item>
      <Menu.Item key="fenleigedan">
        <span>分类歌单</span>
      </Menu.Item>
      <Menu.Item key="diantai">
        <span>电台</span>
      </Menu.Item>
      <Menu.Item key="MV">
        <span>MV</span>
      </Menu.Item>
    </Menu>
  );
};
export default NavBar;
