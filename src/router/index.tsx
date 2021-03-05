import MusicHall from "@/views/MusicHall";
import MV from "@/views/MV";
import Recommend from "@/views/Recommend";
import Singer from "@/views/Singer";
import SingerDetail from "@/views/SingerDetail";
import React from "react";
import { useRoutes } from "react-router-dom";

const AppRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <MusicHall />,
      children: [
        { path: "/", element: <Recommend /> },
        {
          path: "singer",
          element: <Singer />,
        },
      ],
    },
    { path: "/mv", element: <MV /> },
    {
      path: "artist",
      children: [{ path: ":id", element: <SingerDetail /> }],
    },
  ]);
  return routes;
};

export default AppRouter;
