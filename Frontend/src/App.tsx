import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import BouquetBuilder from "./components/BouquetBuilder";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/create",
      element: <BouquetBuilder />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
