import React from "react";
import style from "./index.module.less";
// import "./index.less";
interface CardProps {
  children?: React.ReactNode;
  imgUrl?: string;
}

const SingerCard = (props: CardProps) => {
  const { imgUrl } = props;
  return (
    <>
      <div className={style.cover}>
        <div className={style["cover-pic"]}>
          <img src={imgUrl} alt="" />
        </div>
      </div>
      <div className={style.miaoshu}>
        <div className={style["singer-name"]}>123</div>
      </div>
    </>
  );
};
export default SingerCard;
