import { Menu } from "antd";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavBarData } from "../../interface";

import "./index.less";

interface NavBarProps {
  dataSource?: NavBarData[];
  className?: string;
  style?: React.CSSProperties;
}

const NavBar = (props: NavBarProps) => {
  const { dataSource, className, style } = props;

//   const location = useLocation();
//   console.log(location);
//   debugger

  return (
    <div className={`nav-bar ${className}`} style={style}>
      <Menu mode="horizontal">
        {dataSource &&
          dataSource.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={`${item.key}`}>{item.data}</Link>
            </Menu.Item>
          ))}
      </Menu>
    </div>
  );
};
export default NavBar;
