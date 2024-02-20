import { Link } from "react-router-dom";
import * as S from "./styles";
import { FormEvent, useContext } from "react";
import { Input } from "../../forms/Input";
import { Button } from "../../forms/Button";
import { useLoginEntrar } from "../../../hooks/useLoginEntrar/useLoginEntrar";
import { userContext } from "../../../context/userContext";

export function LoginEntrar() {
  const username = useLoginEntrar("");
  const password = useLoginEntrar("password");

  const { userLogin } = useContext(userContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
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
