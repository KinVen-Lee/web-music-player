import { Menu, Input, Layout } from "antd";
import { useState } from "react";
const { Search } = Input;
const TopMenu = () => {
  const [current, setCurrent] = useState("musicLib");

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className="logo" />
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="musicLib">音乐馆</Menu.Item>
        <Menu.Item key="mineMusic">我的音乐</Menu.Item>
      </Menu>
    </>
  );
};
export default TopMenu;
