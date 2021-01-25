import NavBar from "@component/navbar";
import Banner from "./component/banner";
import SongRecom from "./component/songRecom";
import SongListRecom from "./component/songListRecom";
import TopList from "./component/topList";
import AlbumRecom from "./component/albumRecom";
const Main = () => {
  return (
    <>
      <NavBar />
      <Banner />
      {/* <SongRecom /> */}
      <SongListRecom />
      {/* <AlbumRecom /> */}
      {/* <TopList /> */}
    </>
  );
};
export default Main;
