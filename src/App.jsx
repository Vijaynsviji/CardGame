import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import TopBar from './components/TopBar/TopBar'
import { RouterProvider, createBrowserRouter ,Outlet} from "react-router-dom";
import Home from './components/Home/Home'
import Newgame from './components/NewGame/Newgame'



const Layout = () => (
  <div className="flex md:flex-row flex-col">
    <TopBar />
    <SideBar />
      <Outlet />
  </div>
);



function App() {
  let router = createBrowserRouter([
    {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/Newgame", Component:  Newgame },
      {path: "*",Component: Home}
    ],
  }
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
   
  )
}

export default App
