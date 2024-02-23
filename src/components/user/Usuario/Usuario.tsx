import { Route, Routes } from "react-router-dom";
import { UserHeader } from "../UserHeader";
import * as S from "./styles";
import { Feed } from "../../feed/Feed";
import { UsuarioFotoPost } from "../UsuarioFotoPost";
import { Estatisticas } from "../estatisticas";

export function Usuario() {
  return (
    <S.Container>
      <UserHeader></UserHeader>

      <Routes>
        <Route path="/" element={<Feed></Feed>}></Route>
        <Route path="estatisticas" element={<Estatisticas></Estatisticas>}></Route>
        <Route path="postarFoto" element={<UsuarioFotoPost></UsuarioFotoPost>}></Route>
      </Routes>
    </S.Container>
  );
}
 