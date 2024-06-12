import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import useBearStore from "./utils/Authentication";

export default function Router() {
  const bears = useBearStore((state) => state.bears);
  console.log(bears);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      //   element: (
      //     <Layout>{account ? <Navigate to="/dashboard" /> : <Landing />}</Layout>
      //   ),
    },
    {
      path: "/dashboard",
      element: <>Dashboard</>,
      //   element: (
      //     <Layout>{!account ? <Navigate to="/" /> : <Dashboard />}</Layout>
      //   ),
    },
    {
      path: "*",
      element: <>404 Not Found</>,
    },
  ]);

  return <RouterProvider router={router} />;
}
