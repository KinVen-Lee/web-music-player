import { List } from "antd";
const data = [
  { title: "推荐" },
  { title: "排行榜" },
  { title: "歌手" },
  { title: "歌单" },
  { title: "电台" },
  { title: "MV" },
  { title: "新碟" },
];

const NavBar = () => {
  const count: number = data.length;
  return (
    <List
    grid={{
        column:count
    }}
      dataSource={data}
      renderItem={(item: { title: String }) => (
        <List.Item>
          <a>{item.title}</a>
        </List.Item>
      )}
      itemLayout='vertical'
    />
  );
};
export default NavBar;
