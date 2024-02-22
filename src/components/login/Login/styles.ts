import styled from "styled-components";

import dogCapa from "../../../assets/dogCapa.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  .boxImg {
    width: 70%;
    background: url(${dogCapa}) no-repeat center center;
  }

  .boxFormulario {
    width: 30%;
    padding: 2rem 2rem;
  }
`;
