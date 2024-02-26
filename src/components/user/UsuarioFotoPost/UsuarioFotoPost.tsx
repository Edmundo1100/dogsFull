import { FormEvent, useEffect, useState } from "react";
import { Input } from "../../forms/Input";
import * as S from "./styles";
import { Button } from "../../forms/Button";
import { useForm } from "../../../hooks/useForm";
import { useFeatch } from "../../../hooks/useFetch";
import { PHOTO_POST } from "../../../api/api";
import { useNavigate } from "react-router-dom";

export function UsuarioFotoPost() {
  const nome = useForm("text");
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFeatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }: any) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <S.Container className="animeLeft">
      <div className="fomulario">
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="nome" {...nome}></Input>
          <Input label="Peso" type="text" name="peso" {...peso}></Input>
          <Input label="Idade" type="text" name="idade" {...idade}></Input>
          <input
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          ></input>
          {loading ? (
            <Button color="primary" disabled>
              Enviando...
            </Button>
          ) : (
            <Button color="primary" onClick={handleSubmit}>
              Enviar
            </Button>
          )}
        </form>
      </div>

      <div className="preview">
        {img.preview && (
          <div
            style={{
              width: "100%", // Exemplo de largura
              height: "100%", // Exemplo de altura
              backgroundImage: `url('${img.preview}')`,
              backgroundSize: "contain", // Garante que a imagem esteja contida dentro do div, sem ser cortada
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        )}
      </div>
    </S.Container>
  );
}
