import styled from "styled-components";

import dogCapa from "../../../assets/dog4.jpg";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  .boxImg {
    margin-left: 2rem;
    margin-top: 2rem;
    width: 70%;
    background: url(${dogCapa}) no-repeat;
    background-position: center;
    background-size: cover;
  }

  .boxFormulario {
    width: 30%;
    padding: 2rem 2rem;
  }
`;
