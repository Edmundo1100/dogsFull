import { useContext } from "react";
import * as S from "./styles";
import { userContext } from "../../../context/userContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }: any) {
  const { login } = useContext(userContext);

  if (login === true) {
    return children;
  } else if (login === false) {
    <Navigate to="/login" />;
  } else {
    <></>;
  }''
}
