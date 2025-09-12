import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Page/Home";
import Register from "./Page/Register";
import { RouterProvider } from "react-router";

const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
      
      </Route>
    )
  );

  return <>
  <RouterProvider router={myRoute}/>
  
  </>;
};

export default App;
