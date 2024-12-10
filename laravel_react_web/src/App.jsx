import React from 'react';
//import { StateProvider } from "./Components/Contexts/StateContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    // <StateProvider>
      <RouterProvider router={router}/>
    // </StateProvider>
  );
}

export default App;
