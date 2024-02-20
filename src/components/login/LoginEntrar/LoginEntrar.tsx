import { Link } from "react-router-dom";
import * as S from "./styles";
import { FormEvent, useState } from "react";
import { Input } from "../../forms/Input";
import { Button } from "../../forms/Button";
import { useLoginEntrar } from "../../../hooks/useLoginEntrar/useLoginEntrar";

export function LoginEntrar() {
  const username = useLoginEntrar("");
  const password = useLoginEntrar("password");
  console.log(username);
  console.log(password);

  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  }

  return (
    <S.Container>
      <h1>Login</h1>
      <form action="">
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button type="button" onClick={handleSubmit}>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastrar</Link>
    </S.Container>
  );
}
