import { ReactNode, createContext, useEffect, useState } from "react";
import { GET_USER, TOKEN_POST, TOKEN_VALIDADE_POST } from "../api/api";
import { useNavigate } from "react-router-dom";

interface UserStorageProps {
  children: ReactNode;
}

export const userContext = createContext<any>({});
export const UserStorage = ({ children }: UserStorageProps) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDADE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token invalido");
          await getUser(token);
          navigate('/conta')
        } catch (error) {
           userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const responseToken = await fetch(url, options);
      if (!responseToken.ok) throw new Error('Usuario ou senha invalido');
      const {token} = await responseToken.json()
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate('/conta')
    } catch (error: any) {
      setError(error.message);
      // userLogout();
    } finally {
      setLoading(false);
    }
  }
  async function getUser(token: any) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    console.log("resposta", json);
  }
  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate('/login')
  }

  return (
    <>
      <userContext.Provider value={{ userLogin, userLogout, data, error , loading, login }}>
        {children}
      </userContext.Provider>
    </>
  );
};
