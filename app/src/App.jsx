import Dashboard from "./pages/Dashboard/Dashboard"
import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transaction from "./pages/Transaction/Transaction"
import Support from "./pages/Support/Support"
import SignUp from "./pages/Auth/SignUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path:"/signup",
    element:<SignUp />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App
