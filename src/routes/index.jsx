import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { ClientRoutes } from "./client.routes";

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch (user.role) {
      case "admin":
        return <AdminRoutes />;
      default:
        return <ClientRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AcessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
