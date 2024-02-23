import { Navigate, Route, Routes } from "react-router-dom";
import * as S from "./styles";
import { LoginEntrar } from "../LoginEntrar";
import { LoginCriar } from "../LoginCriar";
import { LoginPerdeuSenha } from "../LoginPerdeuSenha";
import { LoginReset } from "../LoginReset";
import { useContext } from "react";
import { userContext } from "../../../context/userContext";

export function Login() {
  const { login } = useContext(userContext);

  if (login) return <Navigate to="/conta" />;

  return (
    <S.Container>
      <div className="boxImg"></div>
      <div className="boxFormulario">
        <Routes>
          <Route path="/" element={<LoginEntrar />} />
          <Route path="criar" element={<LoginCriar />} />
          <Route path="perdeuSenha" element={<LoginPerdeuSenha />} />
          <Route path="resetSenha" element={<LoginReset />} />
        </Routes>
      </div>
    </S.Container>
  );
}
