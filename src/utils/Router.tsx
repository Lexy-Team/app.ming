import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import { useAccount } from "wagmi";

export default function Router() {
  const account = useAccount();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            {account.isConnected ? <Navigate to="/dashboard" /> : <Home />}
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            {account.isConnected ? <Dashboard /> : <Navigate to="/" />}
          </Layout>
        }
      />
    </Routes>
  );
}
