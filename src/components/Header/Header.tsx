import { Link } from "react-router-dom";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { Button } from "../forms/Button";

export function Header() {
  const { dadosUsuario, userLogout } = useContext(userContext);

  return (
    <S.Container>
      <nav>
        <Link to={"/"}>
          <FontAwesomeIcon icon={["fas", "shield-dog"]} className="iconeDog" />
        </Link>

        {dadosUsuario ? (
          <Link to={"/conta"}>
            <span>{dadosUsuario.nome}</span>
            <FontAwesomeIcon icon={["far", "user"]} className="iconeUsuario" />
            <Button type="button" color="primary" onClick={userLogout}>
              Sair
            </Button>
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
