import { ReactNode, createContext, useEffect, useState } from "react";
import {
  GET_USER,
  POST_USER,
  TOKEN_POST,
  TOKEN_VALIDADE_POST,
} from "../api/api";
import { useNavigate } from "react-router-dom";
import { useFeatch } from "../hooks/useFetch";

interface UserStorageProps {
  children: ReactNode;
}

export const userContext = createContext<any>({});
export const UserStorage = ({ children }: UserStorageProps) => {
  const [dadosUsuario, setdadosUsuario] = useState(null);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const { loading, error, request } = useFeatch();

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        const { url, options } = TOKEN_VALIDADE_POST(token);
        const response = await request(url, options);
        if (response.json) {
          await getUser(token);
          navigate("/conta");
        } else {
          userLogout();
        }
      }else{
        userLogout();
      }
    }
    autoLogin();
  }, []);

  async function userLogin(username: string, password: string) {
    const { url, options } = TOKEN_POST({ username, password });
    const res = await request(url, options);
    if (res.json) {
      window.localStorage.setItem("token", res.json.token);
      await getUser(res.json.token);
    } else {
      userLogout();
    }
  }
  async function getUser(token: any) {
    const { url, options } = GET_USER(token);
    const res = await request(url, options);
    if (res.json) {
      setLogin(true);
      setdadosUsuario(res.json);
      navigate("/conta");
    } else {
      userLogout();
    }
  }
  async function criarUsuario(body: any) {
    const { url, options } = POST_USER(body);
    const res = await request(url, options);
    console.log('resp',res);
    if (res.json) {
      await userLogin(body.username, body.password);
    }
  }
  async function userLogout() {
    setdadosUsuario(null);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate('/login');
  }

  return (
    <>
      <userContext.Provider
        value={{
          userLogin,
          userLogout,
          criarUsuario,
          dadosUsuario,
          error,
          loading,
          login,
        }}
      >
        {children}
      </userContext.Provider>
    </>
  );
};
