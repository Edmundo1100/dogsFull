import { Link } from "react-router-dom";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { userContext } from "../../context/userContext";

export function Header() {
  const { dadosUsuario } = useContext(userContext);

  return (
    <S.Container>
      <nav>
        <Link to={"/"}>
          <FontAwesomeIcon icon={["fas", "shield-dog"]} className="iconeDog" />
        </Link>

        {dadosUsuario ? (
          <Link to={"/conta"}>
            <span style={{ fontWeight: 900 , fontSize: "1.5rem"}}>{dadosUsuario.nome}</span>
            <FontAwesomeIcon icon={["far", "user"]} className="iconeUsuario" />
          </Link>
        ) : (
          <Link to={"/login"}>
            <span>Login / Criar</span>
            <FontAwesomeIcon icon={["far", "user"]} className="iconeUsuario" />
          </Link>
        )}
      </nav>
    </S.Container>
  );
}
