import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Adduser from "./Components/Adduser";
import Home from "./Components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "users/add",
      element: <Adduser></Adduser>,
    },
    {
      path: "*",
      element: <h2>Sorry no page found</h2>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
