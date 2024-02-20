import styled from "styled-components";

export const Container = styled.div`

  button {
    min-width: 8rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 0.4rem;
    padding: 1rem 1.5rem;
    background-color: var(--action);
    color: var(--shape);

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
