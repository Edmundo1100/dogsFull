import styled from "styled-components";

export const Container = styled.div`
  .menuPC {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .btnToggleMobile {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e9e1e1;
      color: #635c5c;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
      padding: 1.5rem;
      border: none;
    }
    .btnToggleMobile:focus,
    .btnToggleMobile:hover {
      color: var(--action);
      background: whitesmoke;
      border: solid 1px var(--action);
    }

    a,
    .btnSair {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e9e1e1;
      color: #635c5c;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
      padding: 1.5rem;
    }

    a:hover,
    a:focus,
    .btnSair:hover {
      color: var(--action);
      background: whitesmoke;
      border: solid 1px var(--action);
    }
  }

  .menuMobile {
    display: block;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .btnToggleMobile {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      background: #e9e1e1;
      color: #635c5c;
      width: 100%;
      height: 2.5rem;
      font-size: 1.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
      padding: 1.5rem;
      border: none;
    }
    .btnToggleMobile:focus,
    .btnToggleMobile:hover {
      color: var(--action);
      background: whitesmoke;
      border: solid 1px var(--action);
    }

    a,
    .btnSair {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      background: #e9e1e1;
      color: #635c5c;
      width: 100%;
      height: 2.5rem;
      font-size: 1.5rem;
      border-radius: 0.25rem;
      cursor: pointer;
      padding: 1.5rem;
      margin-top: 5px;
    }

    a:hover,
    a:focus,
    .btnSair:hover {
      color: var(--action);
      background: whitesmoke;
      border: solid 1px var(--action);
    }
  }
`;
