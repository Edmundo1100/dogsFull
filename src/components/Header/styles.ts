import styled from "styled-components";

export const Container = styled.div`
  border-bottom: solid 1px #d5d0d0;
  padding-top: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 1rem;
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    a {
      text-decoration: none;
      color: var(--action);
    }
    
    .iconeDog {
      font-size: 3rem;
      color: var(--action);
    }
    .iconeUsuario {
      color: var(--action);
      margin-left: 1rem;
      font-size: 1.5rem;
    }
  }
`;
