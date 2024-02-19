import { Link } from "react-router-dom";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Dogs from "../../assets/dogs.svg";

export function Header() {
  return (
    <S.Container>
      <nav>
        <Link to={"/"}>
          {/* <img src={Dogs} alt="Dogs" /> */}
		  <FontAwesomeIcon icon={['fas', 'shield-dog']} className="iconeDog"/>
        </Link>
        <Link to={"/login"}>
			<span>Login / Criar</span>
			<FontAwesomeIcon icon={['far', 'user']} className="iconeUsuario"/>
			</Link>
      </nav>
    </S.Container>
  );
}
