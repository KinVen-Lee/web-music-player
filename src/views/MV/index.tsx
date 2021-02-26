import { useLocation } from "react-router-dom";
import "./index.less";

const MV = () => {
  const p = useLocation();
  console.log(p);
  return <div style={{ padding: 20 }}>mv</div>;
};
export default MV;
