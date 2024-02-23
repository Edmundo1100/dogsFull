import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label{
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem   ;
  }

  input {
    border: solid 1px var(--bordas);
    font-size: 1rem;
    padding: 0.8rem;
    background-color: var(--shape);
    border-radius: 0.4rem;

    transition: filter 0.2s;
    &:hover {
      outline: none;
      border: solid 1px var(--action);
    }
  }

  input:focus {
    outline: none;
    border: solid 1px var(--action);
  }

  p{
    font-size: 0.8rem;
    color: var(--red);
  }
`;
