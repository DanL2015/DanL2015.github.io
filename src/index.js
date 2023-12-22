import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Typing from "./components/Typing";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "typing",
    element: <Typing />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
