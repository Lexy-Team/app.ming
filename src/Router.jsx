import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import useAuthenticationStore from "./utils/Authentication";
import UnauthenticatedLayout from "./layout/UnauthenticatedLayout";

export default function Router() {
  const authenticated = useAuthenticationStore((state) => state.authenticated);
  console.log(authenticated);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UnauthenticatedLayout>
          <Home />
        </UnauthenticatedLayout>
      ),
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
