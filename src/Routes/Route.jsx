import React, { Component } from "react";
import App from "../App";
import { createBrowserRouter } from "react-router";
import { Home } from "../Pages/Home/Home";
import { Timeline } from "../Pages/TimeLine/Timeline";
import { Stat } from "../Pages/Stats/Stat";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
        {
            index:true,
            path:"/",
            Component: Home,
            loader: () => fetch('/data.json').then(res => res.json())
        },
        {
        
            path:"/timeline",
            Component: Timeline
        },
        {
        
            path:"/stats",
            Component: Stat
        }
    ]
  },
]);

export { router };