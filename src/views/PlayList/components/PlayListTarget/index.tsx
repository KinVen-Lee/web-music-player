import "./index.less";
import React, { useContext, useMemo } from "react";
import PlayListTagItem from "../PlayListTagItem";
import { PlayListContext } from "../../index";
import { Category } from "../../utils/interface";
const PlayListTarget = () => {
  const playListContext = useContext(PlayListContext);
  const categories = playListContext && playListContext.categories;
  return (
    <>
      <div className="playlist-tag">
        {playListContext &&
          Object.keys(categories as Object).map((item) => {
            return (
              playListContext.categories && (
                <PlayListTagItem key={item} category={item} />
              )
            );
          })}
      </div>
    </>
  );
};

export default PlayListTarget;

//   const { all, sub, categories } = res;
//   const obj: { [key: string]: object } = {};
//   for (let i in categories) {
//     obj[categories[i]] = sub.filter((item: any) => {
//       return item.category == i;
//     });
//   }
//   setCatList(obj);
