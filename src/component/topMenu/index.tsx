import { Menu, Input, Layout } from "antd";
const { Search } = Input;
const TopMenu = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">音乐馆</Menu.Item>
        <Menu.Item key="2">我的音乐</Menu.Item>
        <Search
          placeholder="搜索音乐、歌曲、MV、用户"
          allowClear
          onSearch={onSearch}
          style={{ width: 200, margin: "0 10px" }}
        />
      </Menu>
    </>
  );
};
export default TopMenu;
