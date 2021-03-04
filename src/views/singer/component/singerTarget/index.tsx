import "./index.less";

import { Tag } from "antd";
import { useContext, useState } from "react";
import { SingerContext } from "../..";
const { CheckableTag } = Tag;
interface SingerTargetProps {
  className?: string;
  style?: React.CSSProperties;
  tagsData: Tag[];
  type: string;
}
interface Tag {
  data: string;
  key: string;
}
const SingerTarget = (props: SingerTargetProps) => {
  const { tagsData, type, className } = props;
  const [selectedTag, setSelectedTag] = useState(tagsData[0]);
  const singerContext = useContext(SingerContext);
  const handleChange = (tag: Tag) => {
    setSelectedTag(tag);
    switch (type) {
      case "area":
        singerContext.params = {
          ...singerContext.params,
          area: tag.key,
        };
        break;
      case "type":
        singerContext.params.type = tag.key;
        break;
      case "initial":
        singerContext.params.initial = tag.key;
        break;
      default:
        break;
    }
  };
  return (
    <div className="div1">
      {tagsData.map((tag: Tag) => (
        <CheckableTag
          key={tag.key}
          checked={selectedTag.data === tag.data}
          onChange={() => handleChange(tag)}
        >
          {tag.data}
        </CheckableTag>
      ))}
    </div>
  );
};
export default SingerTarget;
