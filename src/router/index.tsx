import MusicHall from "@/views/MusicHall";
import MV from "@/views/MV";
import Recommend from "@/views/Recommend";
import Singer from "@/views/Singer";
import React from "react";
import { useRoutes } from "react-router-dom";

const AppRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <MusicHall />,
      children: [
        { path: "musichall/", element: <Recommend /> },
        { path: "musichall/singer", element: <Singer /> },
      ],
    },
    { path: "/mv", element: <MV /> },
  ]);
  return routes;
};

export default AppRouter;
