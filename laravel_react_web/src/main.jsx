import React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";

import App from "./App.jsx"; 
import "./index.css";
import router from "./router.jsx";
import { ContextProvider } from "./Components/Contexts/ContextProvider.jsx";

// import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
