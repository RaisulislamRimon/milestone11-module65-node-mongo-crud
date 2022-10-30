import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import Update from "./components/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => fetch(`http://localhost:5000/users`),
    },
    {
      path: "/users/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
