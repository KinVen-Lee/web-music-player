import "./index.less";

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { SingerContext } from "../../context.config";
import { getArtistList } from "@/netWork/request";
import { Artist, SingerResult } from "../../utils/interface";
import SingerCard from "../SingerCard";
import { Button } from "antd";

const SingerList = () => {
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true);
  const [artistList, setArtistList] = useState<Array<Artist>>([]);
  const { state, dispatch } = useContext(SingerContext);
  const { type, area, initial } = state;
  useEffect(() => {
    getArtistList({ type, area, offset: "0", initial }).then(
      (res: SingerResult) => {
        setHasMore(res.more);
        setOffset(1);
        setArtistList(res.artists);
      }
    );
  }, [state]);

  const onLoadMore = () => {
    getArtistList({ type, area, offset, initial }).then((res: SingerResult) => {
      setHasMore(res.more);
      setOffset(offset + 1);
      setArtistList(
        res.artists.concat(artistList).filter((item: Artist) => {
          return item;
        })
      );
    });
  };

  return (
    <div className="div1">
      <div className="div2">
        {artistList.map((artist: Artist, index: number) => (
          <SingerCard key={artist.id} data={artist} />
        ))}
      </div>
      {hasMore && (
        <div
          className="div3"
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
          }}
        >
          <Button onClick={onLoadMore}>loading more</Button>
        </div>
      )}
    </div>
  );
};
export default SingerList;
