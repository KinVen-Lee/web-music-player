
import MusicHall from "@/views/MusicHall";
import MV from "@/views/MV";
import React from "react";
import { useRoutes } from "react-router-dom";

const AppRouter = () => {
  let routes = useRoutes([
    { path: "/", element: <MusicHall /> },
    { path: "/mv", element: <MV /> },
  ]);
  return routes;
};

export default AppRouter;
