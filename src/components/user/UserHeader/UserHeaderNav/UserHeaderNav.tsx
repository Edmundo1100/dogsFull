import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { useContext, useState } from "react";
import { userContext } from "../../../../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMedia } from "../../../../hooks/useMedia";

export function UserHeaderNav() {
  const { userLogout } = useContext(userContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <S.Container>
      <nav className={mobile ? "menuMobile" : "menuPC"}>
        {mobile && (
          <button
            aria-label="Menu"
            className="btnToggleMobile"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu && <FontAwesomeIcon icon={["fas", "bars"]} />}
            {!mobileMenu && (
              <FontAwesomeIcon icon={["fas", "ellipsis-vertical"]} />
            )}
          </button>
        )}

        {(!mobile || (mobile && !mobileMenu)) && (
          <>
            <NavLink to="/conta">
              <FontAwesomeIcon icon={["far", "images"]} />
              {mobile && "Conta"}
            </NavLink>
            <NavLink to="/conta/estatisticas">
              <FontAwesomeIcon icon={["fas", "chart-line"]} />
              {mobile && "Estastisticas"}
            </NavLink>
            <NavLink to="/conta/postarFoto">
              <FontAwesomeIcon icon={["fas", "plus"]} />
              {mobile && "Postar"}
            </NavLink>

            <div className="btnSair" onClick={userLogout}>
              <FontAwesomeIcon icon={["fas", "right-from-bracket"]} />
              {mobile && "Sair"}
            </div>
          </>
        )}
      </nav>
    </S.Container>
  );
}
