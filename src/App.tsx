import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SelectionPage from "./pages/Selection";
import SearchPage from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "select",
    element: <SelectionPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
