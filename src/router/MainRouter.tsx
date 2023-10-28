import { createBrowserRouter } from "react-router-dom";
import LayOut from "../common/LayOut";
import RegisterPage from "../pages/RegisterPage";
import SignInPage from "../pages/SignInPage";
import OtpPage from "../pages/OtpPage";
import HomePage from "../pages/HomePage";
import MessagePage from "../pages/MessagePage";
import PrivateRouter from "./PrivateRouter";
import ErrorScreen from "../errors/js/Error";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
      {
        index: true,
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        index: true,
        path: "/:token/verified",
        element: <SignInPage />,
      },
      {
        index: true,
        path: "/otp",
        element: <OtpPage />,
      },
      {
        index: true,
        path: "/:token/first-process",
        element: <OtpPage />,
      },
    ],
  },
  {
    element: (
      <PrivateRouter>
        <HomePage />
      </PrivateRouter>
    ),
    path: "/home",
  },
  {
    element: <MessagePage />,
    path: "/message",
  },
  {
    element: <ErrorScreen />,
    path: "*",
  },
]);
