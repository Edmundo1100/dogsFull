import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles";
import { FormEvent, useContext } from "react";
import { Input } from "../../forms/Input";
import { Button } from "../../forms/Button";
import { userContext } from "../../../context/userContext";
import { Error } from "../../helper/Error";
import { useForm } from "../../../hooks/useForm";

export function LoginEntrar() {
  const username = useForm("");
  const password = useForm("password");

  const { userLogin, loading, error } = useContext(userContext);
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  async function handleCadastrar(event: FormEvent) {
    event.preventDefault();
    navigate("/login/criar");
  }

  return (
    <S.Container className="animeLeft">
      <h1 className="title">Login</h1>
      <form action="">
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <div className="boxButton">
          {loading ? (
            <Button type="button" color="primary" disabled>
              Carregando...
            </Button>
          ) : (
            <Button type="button" color="primary" onClick={handleSubmit}>
              Entrar
            </Button>
          )}
          {error && <Error error={error} />}
        </div>
      </form>

      <div className="boxPerdeuSenha">
        <Link to="/login/perdeu">Perdeu a Senha</Link>
      </div>

      <div className="boxCadastro">
        <h1>Cadastre-se</h1>
        <p>Ainda não possui conta? Cadastro-se no site.</p>
        <Button type="button" color="secudary" onClick={handleCadastrar}>
          Cadastrar
        </Button>
        {/* <Link to="/login/criar">Cadastrar</Link> */}
      </div>
    </S.Container>
  );
}
