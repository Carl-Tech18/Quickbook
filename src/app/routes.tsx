import { createBrowserRouter } from "react-router";
import { AuthLayout } from "./components/AuthLayout";
import { Root } from "./components/Root";
import { SignIn } from "./components/SignIn";
import { CreateAccount } from "./components/CreateAccount";
import { ForgotPassword } from "./components/ForgotPassword";
import { Dashboard } from "./components/Dashboard";
import { Invoices } from "./components/Invoices";
import { Expenses } from "./components/Expenses";
import { Payroll } from "./components/Payroll";
import { Reports } from "./components/Reports";
import { Integrations } from "./components/Integrations";
import { Settings } from "./components/Settings";
import { UserProvider } from "./context/UserContext";
import { ReactNode } from "react";

// Wrapper component to provide UserContext within the router
function AppWrapper({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper><AuthLayout /></AppWrapper>,
    children: [
      {
        index: true,
        Component: SignIn,
      },
      {
        path: "create-account",
        Component: CreateAccount,
      },
      {
        path: "forgot-password",
        Component: ForgotPassword,
      },
    ],
  },
  {
    path: "/app",
    element: <AppWrapper><Root /></AppWrapper>,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "invoices",
        Component: Invoices,
      },
      {
        path: "expenses",
        Component: Expenses,
      },
      {
        path: "payroll",
        Component: Payroll,
      },
      {
        path: "reports",
        Component: Reports,
      },
      {
        path: "integrations",
        Component: Integrations,
      },
      {
        path: "settings",
        Component: Settings,
      },
    ],
  },
]);