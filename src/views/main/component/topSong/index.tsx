import { useEffect, useState } from "react";
import { getTopSong } from "@netWork/request";
import "./index.less";
const TopSong = () => {
  const [songList, setSongList] = useState<any>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [type, setType] = useState<number>(0);
  useEffect(() => {
    getTopSong("/api/top/song", { type }).then((res) => setSongList(res));
  }, [type]);
  return (
    <>
      <div className="top-song">
        <div className="title">
          <h2>新歌速递</h2>
          
        </div>
      </div>
    </>
  );
};

export default TopSong;
