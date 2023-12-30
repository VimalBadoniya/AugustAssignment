import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from "./Components/Payment";
import FormValidation from "./Components/FormValidation";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/form",
      element: <FormValidation />,
    },
    { path: "/", element: <Home />, index: true },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
