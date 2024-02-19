import { Link } from "react-router-dom";
import * as S from "./styles";
import { FormEvent, useState } from "react";

export function LoginEntrar() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleEntrar(event: FormEvent){
	event.preventDefault();
	fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
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

  return (
    <S.Container onSubmit={handleEntrar}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="usuario"
        value={username}
        onChange={(event) => setUserName(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      ></input>

	  <button>Entrar</button>

      <Link to="/login/criar">Cadastrar</Link>
    </S.Container>
  );
}
