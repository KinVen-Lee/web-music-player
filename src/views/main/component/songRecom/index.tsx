import { useEffect, useState } from "react";
import { getSongRecom} from '@netWork/request'
const SongRecom = () => {
  const [songList, setSongList] = useState<any>();
  useEffect(() => {
    getSongRecom("/api/personalized/newsong").then((res) => setSongList(res));
  }, []);
  return (
    <div className="songRecommendation">
      <h2>每日推荐</h2>
    </div>
  );
};
export default SongRecom
