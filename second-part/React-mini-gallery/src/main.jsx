import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Photos from "./components/Photos.jsx";
import SinglePhoto from "./components/SinglePhoto.jsx";
import { Outlet, RouterProvider } from "react-router";

const Layout = () => {
  return (
    <div className="app-container">
      <h1>React Gallery</h1>
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Photos />,
      },
      {
        path: "single-photo/:photoId",
        element: <SinglePhoto />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
