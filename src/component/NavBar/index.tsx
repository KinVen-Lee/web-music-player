import { Menu } from "antd";
import { useEffect, useState } from "react";
import { NavBarData } from "../interface";
import "./index.less";
interface NavBarProps {
  dataSource?: NavBarData[];
  className?: string;
  style?: React.CSSProperties;
  customFunction?: any;
}

const NavBar = (props: NavBarProps) => {
  const { dataSource, className, style, customFunction } = props;
  const [current, setCurrent] = useState("");

  const handleClick = (e: any) => {
    setCurrent(e.key);
    customFunction(e.key)
    console.log(e.key);
  };

  useEffect(() => {
    dataSource && setCurrent(dataSource[0].key ?? "");
  }, []);

  return (
    <div className={`nav-bar ${className}`} style={style}>
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
