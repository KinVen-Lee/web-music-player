import React from "react";
import RankCard from "./components/RankCard";
import style from "./index.module.less";

const Rank = () => {
  return (
    <>
      <div className={style.panghangbang}>
        <RankCard></RankCard>
      </div>
    </>
  );
};
export default Rank;
