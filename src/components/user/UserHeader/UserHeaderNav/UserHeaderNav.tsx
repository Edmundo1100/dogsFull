import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { useContext } from "react";
import { userContext } from "../../../../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useMedia } from "../../../../hooks/useMedia";

export function UserHeaderNav() {
  const {userLogout } = useContext(userContext);
  // const mobile = useMedia('(max-with: 40rem)')
  // console.log(mobile);
  

  return (
    <S.Container>
      <NavLink to="/conta">
        <FontAwesomeIcon icon={["far", "images"]} />
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <FontAwesomeIcon icon={["fas", "chart-line"]} />
      </NavLink>
      <NavLink to="/conta/postarFoto">
        <FontAwesomeIcon icon={["fas", "plus"]} />
      </NavLink>

      <div className="btnSair" onClick={userLogout}>
        <FontAwesomeIcon icon={["fas", "right-from-bracket"]} />
      </div>
      
    </S.Container>
  );
}
