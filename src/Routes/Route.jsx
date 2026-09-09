import React, { Component } from "react";
import App from "../App";
import { createBrowserRouter } from "react-router";
import { Home } from "../Pages/Home/Home";
import { Timeline } from "../Pages/TimeLine/Timeline";
import { Stat } from "../Pages/Stats/Stat";
import { FriendDetails } from "../Pages/Home/FriendDetails";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <div className="h-screen flex justify-center items-center"><div className="text-7xl text-center font-extrabold  bg-gray-300 p-15 rounded-3xl">Error:404 <br />Page Not Found</div></div>,

    children:[
        {
            index:true,
            path:"Home",
            Component: Home,
            loader: () => fetch('/data.json').then(res => res.json())
        },
        {
            path:"Home/:id",
            Component: FriendDetails,
            loader: () => fetch('/data.json').then(res => res.json())

        },
        {
        
            path:"timeline",
            Component: Timeline
        },
        {
        
            path:"stats",
            Component: Stat
        }
    ]
  },
]);

export { router };