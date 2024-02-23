import { useEffect, useState } from "react";
import { UserHeaderNav } from "./UserHeaderNav";
import * as S from "./styles";
import { useLocation } from "react-router-dom";

export function UserHeader() {
  const [titulo, setTitulo] = useState("");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/conta/estatisticas':
		setTitulo('Estatisticas')
        break;
      case '/conta/postarFoto':
		setTitulo('Foste sua foto')
        break;

      default:
		setTitulo('Minha conta')
        break;
    }
  }, [location]);

  return (
    <S.Container>
      <div className="boxTitulo">
        <h1 className="title">{titulo}</h1>
      </div>
      <div className="boxNav">
        <UserHeaderNav></UserHeaderNav>
      </div>
    </S.Container>
  );
}
