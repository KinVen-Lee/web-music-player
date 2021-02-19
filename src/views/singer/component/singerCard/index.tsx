import "./index.less";
import { Card, Avatar } from "antd";
import { SingerInfo } from "../../utils/interface";

interface SingerCardProps {
  data: SingerInfo;
}

const SingerCard = (props: SingerCardProps) => {
  const { data } = props;
  return (
    <>
      <Card>
        <Card.Meta avatar={<Avatar src={data.picUrl} />} title={data.name} />
      </Card>
    </>
  );
};

export default SingerCard;
