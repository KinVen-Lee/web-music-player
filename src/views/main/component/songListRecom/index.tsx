import { useEffect, useState } from "react";
import { getSongListRecom } from "@netWork/request";
import './index.less'
const SongListRecom = () => {
  const [songList, setSongList] = useState<any>();
  useEffect(() => {
    getSongListRecom("/api/personalized", {}).then((res) => setSongList(res));
  }, []);
  return (
    <div className="songListRecommendation">
      <h2>歌单推荐</h2>
    </div>
  );
};

export default SongListRecom;
