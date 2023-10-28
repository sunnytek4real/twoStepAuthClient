import { jwtDecode } from "jwt-decode";
import { useMainSignState, useMainSignStateData } from "../global/jotai";
import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<PropsWithChildren> = ({ children }) => {
  const [token] = useMainSignState();
  const [state, setState] = useMainSignStateData();

  if (token) {
    const decode: any = jwtDecode(token);
    setState(decode.id);
  }

  console.log(state);
  return <>{state ? <div>{children}</div> : <Navigate to={`/sign-in`} />}</>;
};

export default PrivateRouter;
