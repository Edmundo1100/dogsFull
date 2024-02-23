import type { InputProps } from "./interfaces";

import * as S from "./styles";

export function Input({ label, type, name, value, onChange, onBlur, error }: any) {
  return (
    <S.Container>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
      <p>{error}</p>
    </S.Container>
  );
}
