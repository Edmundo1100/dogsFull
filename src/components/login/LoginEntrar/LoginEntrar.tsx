import { Link } from "react-router-dom";
import * as S from "./styles";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "../../forms/Input";
import { Button } from "../../forms/Button";
import { useLoginEntrar } from "../../../hooks/useLoginEntrar/useLoginEntrar";
import { GET_USER, TOKEN_POST } from "../../../api/api";

export function LoginEntrar() {
  const username = useLoginEntrar("");
  const password = useLoginEntrar("password");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token)
    }
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
    }
  }

  async function getUser(token: any) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  return (
    <S.Container>
      <h1>Login</h1>
      <form action="">
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button type="button" onClick={handleSubmit}>
          Entrar
        </Button>
      </form>
      <Link to="/login/criar">Cadastrar</Link>
    </S.Container>
  );
}
