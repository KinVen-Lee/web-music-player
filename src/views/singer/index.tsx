import "./index.less";
import React, { useEffect, useRef, useState } from "react";
import { getArtistList } from "@/netWork/request";
import SingerTarget from "./component/SingerTarget";
import { Card, List, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import WindowScroller from "react-virtualized/dist/commonjs/WindowScroller";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import VList from "react-virtualized/dist/commonjs/List";
import InfiniteLoader from "react-virtualized/dist/commonjs/InfiniteLoader";
import _ from "lodash";
import SingerCard from "./component/SingerCard";
import { SingerInfo } from "./utils/interface";
const Main = () => {
  const [type, setType] = useState<number>(-1);
  const [area, setArea] = useState<number>(-1);
  const [offset, setOffset] = useState<number>(0);
  const [initial, setInitial] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [hasMore, setHasMore] = useState(true);
  const [dataList, setDataList] = useState<any>([]);
  const listRef = useRef(null);
  const ref = useRef(null);
  useEffect(() => {
    getArtistList({ type, area, offset: 0, initial }).then((res) => {
      setDataList(_.chunk(res.artists, 5));
      setOffset(0);
    });
  }, [type, area, initial]);

  const areaNavBarData = [
    {
      data: "全部",

      key: -1,
    },

    {
      data: "华语",

      key: 7,
    },

    {
      data: "欧美",

      key: 96,
    },

    {
      data: "日本",

      key: 8,
    },

    {
      data: "韩国",

      key: 16,
    },

    {
      data: "其他",

      key: 0,
    },
  ];

  const typeNavBarData = [
    {
      data: "全部",

      key: -1,
    },

    {
      data: "男歌手",

      key: 1,
    },

    {
      data: "女歌手",

      key: 2,
    },

    {
      data: "乐队",

      key: 3,
    },
  ];

  const initialNavBarData = [
    {
      data: "全部",

      key: "",
    },

    {
      data: "A",

      key: "a",
    },

    {
      data: "B",

      key: "b",
    },

    {
      data: "C",

      key: "c",
    },

    {
      data: "D",

      key: "d",
    },

    {
      data: "E",

      key: "e",
    },

    {
      data: "F",

      key: "f",
    },

    {
      data: "G",

      key: "g",
    },

    {
      data: "H",

      key: "h",
    },

    {
      data: "I",

      key: "i",
    },

    {
      data: "J",

      key: "j",
    },

    {
      data: "K",

      key: "k",
    },

    {
      data: "L",

      key: "l",
    },

    {
      data: "M",

      key: "m",
    },

    {
      data: "N",

      key: "n",
    },

    {
      data: "O",

      key: "o",
    },

    {
      data: "P",

      key: "p",
    },

    {
      data: "Q",

      key: "q",
    },

    {
      data: "R",

      key: "r",
    },

    {
      data: "S",

      key: "s",
    },

    {
      data: "T",

      key: "t",
    },

    {
      data: "U",

      key: "u",
    },

    {
      data: "V",

      key: "v",
    },

    {
      data: "W",

      key: "w",
    },

    {
      data: "X",

      key: "x",
    },

    {
      data: "Y",

      key: "y",
    },

    {
      data: "Z",

      key: "z",
    },
  ];

  // const handleInfiniteOnLoad = () => {
  //   // debugger

  //   setLoading(true);

  //   setOffset(`${+offset + 1}`);

  //   setLoading(false);
  // };

  const changeActive = (
    chageStateType: any,
    changeStateData: number | string
  ) => {
    switch (chageStateType) {
      case "type":
        setType(changeStateData as number);

        break;

      case "area":
        setArea(changeStateData as number);

        break;

      case "initial":
        setInitial(changeStateData as string);
        break;
    }
  };
  const loadedRowsMap: { [key: string]: number } = {};

  const handleInfiniteOnLoad = ({
    startIndex,
    stopIndex,
  }: {
    startIndex: number;
    stopIndex: number;
  }): any => {
    for (let i = startIndex; i <= stopIndex; i++) {
      loadedRowsMap[i] = 1;
    }
    if (stopIndex + 1 < (offset + 1) * 6) {
      return;
    }
    getArtistList({ type, area, offset: `${offset + 1}`, initial }).then(
      (res) => {
        setDataList(dataList.concat(_.chunk(res.artists, 5)));
        setOffset(offset + 1);
      }
    );
  };

  const isRowLoaded = ({ index }: { index: number }) => !!loadedRowsMap[index];
  const renderItem = ({ index, key, style }: any) => {
    const data = dataList[index];

    return (
      <List
        key={key}
        grid={{ gutter: 0, column: 5 }}
        style={style}
        dataSource={data}
        renderItem={(item: SingerInfo) => (
          <List.Item key={data.id}>
            {/* <Card title={data.id}>Card content</Card> */}
            <SingerCard data={item} />
          </List.Item>
        )}
      />
    );
  };
  const vlist = ({
    height,
    isScrolling,
    onChildScroll,
    scrollTop,
    onRowsRendered,
    width,
  }: any) => (
    <VList
      autoHeight
      height={height}
      isScrolling={isScrolling}
      onScroll={onChildScroll}
      overscanRowCount={5}
      rowCount={dataList.length}
      rowHeight={100}
      rowRenderer={renderItem}
      onRowsRendered={onRowsRendered}
      scrollTop={scrollTop}
      width={width}
    />
  );
  const autoSize = ({
    height,
    isScrolling,
    onChildScroll,
    scrollTop,
    onRowsRendered,
  }: any) => (
    <AutoSizer disableHeight>
      {({ width }) =>
        vlist({
          height,
          isScrolling,
          onChildScroll,
          scrollTop,
          onRowsRendered,
          width,
        })
      }
    </AutoSizer>
  );
  const infiniteLoader = ({
    height,
    isScrolling,
    onChildScroll,
    scrollTop,
  }: any) => (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={handleInfiniteOnLoad}
      rowCount={dataList.length}
    >
      {({ onRowsRendered }) =>
        autoSize({
          height,
          isScrolling,
          onChildScroll,
          scrollTop,
          onRowsRendered,
        })
      }
    </InfiniteLoader>
  );

  return (
    <>
      <div className="singer" ref={ref}>
        <div className="singer-tag">
          <SingerTarget
            className="area"
            data={areaNavBarData}
            currentActive={area}
            customFunction={changeActive}
            stateType="area"
          />
          <SingerTarget
            className="type"
            data={typeNavBarData}
            currentActive={type}
            customFunction={changeActive}
            stateType="type"
          />
          <SingerTarget
            className="initial"
            data={initialNavBarData}
            currentActive={initial}
            customFunction={changeActive}
            stateType="initial"
          />
        </div>
        <div className="singer-list" ref={listRef}>
          <List>
            {dataList.length > 0 && (
              <WindowScroller>{infiniteLoader}</WindowScroller>
            )}
          </List>
        </div>
      </div>
    </>
  );
};

export default Main;
