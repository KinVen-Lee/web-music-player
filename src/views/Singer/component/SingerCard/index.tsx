import "./index.less";
import { Card, Avatar } from "antd";
import { Artist } from "../../utils/interface";
import { useNavigate } from "react-router-dom";

interface SingerCardProps {
  data: Artist;
}

const SingerCard = (props: SingerCardProps) => {
  const { data } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/artist/${data.id}`);
  };
  return (
    <div className="div1" onClick={handleClick}>
      <Card>
        <Card.Meta avatar={<Avatar src={data.picUrl} />} title={data.name} />
      </Card>
    </div>
  );
};

export default SingerCard;
