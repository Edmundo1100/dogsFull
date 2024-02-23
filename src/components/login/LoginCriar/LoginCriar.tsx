import { FormEvent, useContext } from "react";
import { useForm } from "../../../hooks/useForm";
import { Button } from "../../forms/Button";
import { Input } from "../../forms/Input";
import * as S from "./styles";
import { userContext } from "../../../context/userContext";
import { Error } from "../../helper/Error";

export function LoginCriar() {
  const username = useForm("");
  const email = useForm("email");
  const password = useForm("password");

  const { criarUsuario, error, loading } = useContext(userContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    await criarUsuario({
      username: username.value,
      email: email.value,
      password: password.value,
    });
  }

  return (
    <S.Container className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form action="">
        <Input
          type="text"
          label="Usuário"
          name="username"
          {...username}
        ></Input>
        <Input type="email" label="Email" name="email" {...email}></Input>
        <Input
          type="password"
          label="Senha"
          name="password"
          {...password}
        ></Input>

        <div className="boxButton">
          {loading ? (
            <Button type="button" color="primary" disabled>
              Cadastrando....
            </Button>
          ) : (
            <Button type="button" color="primary" onClick={handleSubmit}>
              Cadastrar
            </Button>
          )}

          {error && <Error error={error} />}
        </div>
      </form>
    </S.Container>
  );
}
