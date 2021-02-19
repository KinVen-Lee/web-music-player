import "./index.less";
import React, { useContext, useState } from "react";
import { PlayListContext } from "../../index";
import { PlayListCatList, Sub } from "../../utils/interface";

interface PlayListTagItemProps {
  category?: any;
}
const PlayListTagItem = (props: PlayListTagItemProps) => {
  const { category } = props;
  const { sub, categories } = useContext(PlayListContext);

  return (
    <>
      <div className="playlist_tag__list playlist_tag__list--lang">
        <h3 className="playlist_tag__tit c_tx_thin">
          {categories && categories[category]}
        </h3>
        <i className="playlist_tag__line"></i>
        <ul className="playlist_tag__tags">
          {sub
            ?.filter((item: Sub) => item.category == category)
            .map((item: Sub, index: number) => (
              <li key={index} className="playlist_tag__itembox">
                <a className="playlist_tag__item js_tag" data-id="165">
                  {item.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default PlayListTagItem;
//   const { all, sub, categories } = res;
//   const obj: { [key: string]: object } = {};
//   for (let i in categories) {
//     obj[categories[i]] = sub.filter((item: any) => {
//       return item.category == i;
//     });
//   }
//   setCatList(obj);
