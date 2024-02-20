import { ReactNode, createContext, useState } from "react";
import { GET_USER, TOKEN_POST } from "../api/api";

interface UserStorageProps {
  children: ReactNode;
}

export const userContext = createContext<any>({});
export const UserStorage = ({ children }: UserStorageProps) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function userLogin(username: string, password: string) {
    const { url, options } = TOKEN_POST({ username, password });
    const response = await fetch(url, options);
    const { token } = await response.json();
    window.localStorage.setItem("token", token);
    getUser(token);
    setLogin(true);
  }
  async function getUser(token: any) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    console.log('resposta', json);
  }

  return (
    <>
      <userContext.Provider value={{userLogin, data}}>{children}</userContext.Provider>;
    </>
  );
};
