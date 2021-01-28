import { Menu } from "antd";
import { useEffect, useState } from "react";
import { NavBarData } from "../interface";
interface NavBarProps {
  dataSource?: NavBarData[];
  className?: string;
  style?: React.CSSProperties;
}

const NavBar = (props: NavBarProps) => {
  const { dataSource, className, style } = props;

  const [current, setCurrent] = useState("");
  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    dataSource && setCurrent(dataSource[0].key ?? "");
  }, []);

  return (
    <div className={className} style={style}>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {dataSource &&
          dataSource.map((item) => (
            <Menu.Item key={item.key}>
              <span>{item.data}</span>
            </Menu.Item>
          ))}
      </Menu>
    </div>
  );
};
export default NavBar;
