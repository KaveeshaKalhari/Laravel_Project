// import { createBrowserRouter } from "react-router-dom";
// import Login from "./views/Login";
// import Signup from "./views/Signup";
// import Dashboard from "./views/Dashboard";
// import Users from "./views/Users";
// import NotFound from "./views/NotFound";
// import DefaultLayout from "./Components/DefaultLayout";
// import GuestLayout from "./Components/GuestLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <DefaultLayout />,
//     children: [
//       // {
//       //   path: "/",
//       //   element: <Dashboard />,
//       // },
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "/users",
//         element: <Users />,
//       },
//     ],
//   },
//   {
//     path: "/auth",
//     element: <GuestLayout />,
//     children: [
//       {
//         path: "/auth/login",
//         element: <Login />,
//       },
//       {
//         path: "/auth/signup",
//         element: <Signup />,
//       },
//     ],
//   },

//   {
//     path: "*",
//     element: <NotFound />, // Only one route for /users
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";
import { StateProvider } from "./Components/Contexts/StateContext";
import DefaultLayout from "./Components/DefaultLayout.jsx";
import GuestLayout from "./Components/GuestLayout.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";

const router = createBrowserRouter([
  {
    // path: "/",
    // element: <DefaultLayout />,
    element: <StateProvider />,
    children: [
    {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <Users /> },
    ],
  },
  {
    path: "/auth",
    element: <GuestLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
],
},
]);

export default router;
